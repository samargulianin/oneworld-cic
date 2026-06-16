import { defineRouting } from 'next-intl/routing'

// Georgian is the default for first-time visitors (PRD R1.3). English is the alternate.
// `localePrefix: 'always'` gives SEO-friendly /ka and /en URLs (PRD R1.4).
export const routing = defineRouting({
  locales: ['ka', 'en'],
  defaultLocale: 'ka',
  localePrefix: 'always',
})

export type Locale = (typeof routing.locales)[number]
