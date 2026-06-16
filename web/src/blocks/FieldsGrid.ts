import type { Block } from 'payload'

// Fields grid — cards (icon + index number + Explore) surfacing the 19 professional
// fields. Mirrors the reference's "Services" cards (PRD §7.1, R2.1).
export const FieldsGrid: Block = {
  slug: 'fieldsGrid',
  interfaceName: 'FieldsGridBlock',
  labels: { singular: 'Fields grid', plural: 'Fields grids' },
  fields: [
    { name: 'eyebrow', type: 'text' },
    { name: 'heading', type: 'text' },
    { name: 'description', type: 'textarea' },
    {
      name: 'fields',
      type: 'relationship',
      relationTo: 'fields',
      hasMany: true,
      admin: { description: 'Select which professional fields to feature (order is preserved).' },
    },
    {
      name: 'viewAllLabel',
      type: 'text',
     
      admin: { description: 'Label for the "see all fields" link.' },
    },
  ],
}
