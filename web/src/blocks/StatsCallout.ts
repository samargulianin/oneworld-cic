import type { Block } from 'payload'

// Stats callouts — credibility proof points (170+ programmes / 19 fields / est. 1935).
export const StatsCallout: Block = {
  slug: 'statsCallout',
  interfaceName: 'StatsCalloutBlock',
  labels: { singular: 'Stats callout', plural: 'Stats callouts' },
  fields: [
    { name: 'eyebrow', type: 'text' },
    { name: 'heading', type: 'text' },
    {
      name: 'stats',
      type: 'array',
      minRows: 1,
      labels: { singular: 'Stat', plural: 'Stats' },
      fields: [
        { name: 'value', type: 'text', required: true },
        { name: 'label', type: 'text', required: true },
      ],
    },
  ],
}
