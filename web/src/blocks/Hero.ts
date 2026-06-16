import type { Block } from 'payload'

// Hero — pill eyebrow + headline + CTA + social proof + image with floating badges.
// Mirrors the top of research/referance2.webp (PRD §7.1).
export const Hero: Block = {
  slug: 'hero',
  interfaceName: 'HeroBlock',
  labels: { singular: 'Hero', plural: 'Hero sections' },
  fields: [
    { name: 'eyebrow', type: 'text' },
    { name: 'heading', type: 'text', required: true },
    { name: 'subheading', type: 'textarea' },
    { name: 'ctaLabel', type: 'text' },
    { name: 'socialProof', type: 'text' },
    { name: 'image', type: 'upload', relationTo: 'media' },
    {
      name: 'badges',
      type: 'array',
      labels: { singular: 'Badge', plural: 'Floating badges' },
      fields: [{ name: 'label', type: 'text' }],
    },
  ],
}
