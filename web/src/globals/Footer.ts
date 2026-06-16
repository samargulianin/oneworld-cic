import type { GlobalConfig } from 'payload'

// Site footer — tagline, multi-column links, accreditation note, social, privacy.
export const Footer: GlobalConfig = {
  slug: 'footer',
  admin: { group: 'Settings' },
  access: { read: () => true },
  fields: [
    { name: 'tagline', type: 'textarea', localized: true },
    { name: 'accreditationNote', type: 'textarea', localized: true },
    {
      name: 'columns',
      type: 'array',
      labels: { singular: 'Column', plural: 'Footer columns' },
      fields: [
        { name: 'title', type: 'text', required: true, localized: true },
        {
          name: 'links',
          type: 'array',
          fields: [
            { name: 'label', type: 'text', required: true, localized: true },
            { name: 'href', type: 'text', required: true },
          ],
        },
      ],
    },
    {
      name: 'social',
      type: 'array',
      labels: { singular: 'Social link', plural: 'Social links' },
      fields: [
        {
          name: 'platform',
          type: 'select',
          options: ['facebook', 'instagram', 'linkedin', 'youtube', 'messenger'],
          required: true,
        },
        { name: 'href', type: 'text', required: true },
      ],
    },
  ],
}
