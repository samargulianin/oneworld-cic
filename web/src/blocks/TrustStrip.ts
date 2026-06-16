import type { Block } from 'payload'

// Trust strip — accreditation marks / credibility signals under the hero.
// Repurposes the reference's "Trusted by" logo row for accreditation (PRD R4.3).
export const TrustStrip: Block = {
  slug: 'trustStrip',
  interfaceName: 'TrustStripBlock',
  labels: { singular: 'Trust strip', plural: 'Trust strips' },
  fields: [
    { name: 'heading', type: 'text' },
    {
      name: 'items',
      type: 'array',
      labels: { singular: 'Mark', plural: 'Accreditation marks' },
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'logo', type: 'upload', relationTo: 'media' },
      ],
    },
  ],
}
