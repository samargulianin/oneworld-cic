// Contact channels surfaced across the UI (PRD R3.4). Sourced from env so One World
// can change numbers without code edits once wired to real values.
export const contact = {
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '',
  phone: process.env.NEXT_PUBLIC_PHONE_NUMBER || '',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || '',
}

export const whatsappLink = (text?: string) =>
  contact.whatsapp
    ? `https://wa.me/${contact.whatsapp.replace(/\D/g, '')}${text ? `?text=${encodeURIComponent(text)}` : ''}`
    : ''

export const telLink = () => (contact.phone ? `tel:${contact.phone.replace(/\s/g, '')}` : '')
export const mailLink = () => (contact.email ? `mailto:${contact.email}` : '')
