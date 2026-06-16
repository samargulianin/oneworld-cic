import { NextResponse } from 'next/server'
import { seed } from '@/seed'

// Dev-only seeding endpoint. Runs in the Next runtime (avoids the tsx/node:crypto
// issue with `payload run`). Remove or protect before any production deploy.
export const dynamic = 'force-dynamic'

export async function GET() {
  if (process.env.NODE_ENV === 'production') {
    return NextResponse.json({ error: 'Seeding is disabled in production.' }, { status: 403 })
  }
  try {
    const result = await seed()
    return NextResponse.json({ ok: true, ...result })
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 })
  }
}
