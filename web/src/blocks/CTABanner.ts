import type { Block } from 'payload'

// Closing CTA banner — full-width gradient panel driving the enquiry (PRD §7.1, R3).
export const CTABanner: Block = {
  slug: 'ctaBanner',
  interfaceName: 'CTABannerBlock',
  labels: { singular: 'CTA banner', plural: 'CTA banners' },
  fields: [
    { name: 'eyebrow', type: 'text' },
    { name: 'heading', type: 'text', required: true },
    { name: 'subheading', type: 'textarea' },
    { name: 'ctaLabel', type: 'text' },
  ],
}
