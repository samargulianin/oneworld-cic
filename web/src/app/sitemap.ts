import type { MetadataRoute } from 'next'
import { routing } from '@/i18n/routing'

const base = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

// Per-locale URLs with hreflang alternates (PRD §7 SEO). Expand as pages are added.
export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(routing.locales.map((l) => [l, `${base}/${l}`]))
  return routing.locales.map((locale) => ({
    url: `${base}/${locale}`,
    lastModified: new Date(),
    alternates: { languages },
  }))
}
