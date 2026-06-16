import type { GlobalConfig } from 'payload'

// Site header — centred nav, contact channels, Enquire CTA (PRD §7.1 header).
export const Header: GlobalConfig = {
  slug: 'header',
  admin: { group: 'Settings' },
  access: { read: () => true },
  fields: [
    {
      name: 'nav',
      type: 'array',
      labels: { singular: 'Nav item', plural: 'Nav items' },
      fields: [
        { name: 'label', type: 'text', required: true, localized: true },
        { name: 'href', type: 'text', required: true, admin: { description: 'e.g. /fields, /about' } },
      ],
    },
    { name: 'ctaLabel', type: 'text', localized: true, admin: { description: 'Header button, e.g. "Enquire".' } },
  ],
}
