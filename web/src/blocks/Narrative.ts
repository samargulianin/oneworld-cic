import type { Block } from 'payload'

// Narrative — "How distance learning works": image + short story + steps.
// Reassurance for working professionals (PRD R4.4, §7.1 narrative block).
export const Narrative: Block = {
  slug: 'narrative',
  interfaceName: 'NarrativeBlock',
  labels: { singular: 'Narrative', plural: 'Narrative sections' },
  fields: [
    { name: 'eyebrow', type: 'text' },
    { name: 'heading', type: 'text' },
    { name: 'body', type: 'textarea' },
    { name: 'ctaLabel', type: 'text' },
    { name: 'image', type: 'upload', relationTo: 'media' },
    {
      name: 'steps',
      type: 'array',
      labels: { singular: 'Step', plural: 'Steps' },
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'text', type: 'textarea' },
      ],
    },
  ],
}
