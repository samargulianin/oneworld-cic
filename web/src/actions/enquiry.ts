'use server'

import { getPayloadClient } from '@/lib/payload'

export type EnquiryState = {
  status: 'idle' | 'success' | 'error'
  error?:
    | 'missing_fields'
    | 'bad_email'
    | 'consent_required'
    | 'spam'
    | 'server_error'
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

async function verifyTurnstile(token: string | null): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY
  // No secret configured (dev) → skip remote verification; honeypot still applies.
  if (!secret) return true
  if (!token) return false
  try {
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ secret, response: token }),
    })
    const data = (await res.json()) as { success: boolean }
    return data.success === true
  } catch {
    return false
  }
}

// Server action: validates, blocks spam, stores the enquiry, and emails One World
// (email is sent by the Enquiries afterChange hook). PRD R3.1–R3.7.
export async function submitEnquiry(
  _prev: EnquiryState,
  formData: FormData,
): Promise<EnquiryState> {
  // Honeypot — bots fill hidden fields (PRD R3.6).
  if ((formData.get('company') as string)?.trim()) {
    return { status: 'error', error: 'spam' }
  }

  const name = (formData.get('name') as string)?.trim()
  const email = (formData.get('email') as string)?.trim()
  const phone = (formData.get('phone') as string)?.trim()
  const fieldOfInterest = (formData.get('fieldOfInterest') as string)?.trim()
  const preferredContact = (formData.get('preferredContact') as string) || 'whatsapp'
  const message = (formData.get('message') as string)?.trim()
  const consent = formData.get('consent') === 'on'
  const source = (formData.get('source') as string) || 'homepage'
  const locale = (formData.get('locale') as string) || 'ka'
  const token = (formData.get('cf-turnstile-response') as string) || null

  if (!name || !email) return { status: 'error', error: 'missing_fields' }
  if (!EMAIL_RE.test(email)) return { status: 'error', error: 'bad_email' }
  if (!consent) return { status: 'error', error: 'consent_required' }
  if (!(await verifyTurnstile(token))) return { status: 'error', error: 'spam' }

  try {
    const payload = await getPayloadClient()
    await payload.create({
      collection: 'enquiries',
      overrideAccess: true, // server-trusted; public create is disabled on the collection
      data: {
        name,
        email,
        phone,
        preferredContact: preferredContact as 'whatsapp' | 'phone' | 'email',
        message,
        consent,
        source,
        locale,
        ...(fieldOfInterest && !Number.isNaN(Number(fieldOfInterest))
          ? { fieldOfInterest: Number(fieldOfInterest) }
          : {}),
      },
    })
    return { status: 'success' }
  } catch {
    return { status: 'error', error: 'server_error' }
  }
}
