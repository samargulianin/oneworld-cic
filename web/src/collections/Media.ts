import type { CollectionConfig } from 'payload'

// Media library with per-language alt text (PRD R5.4). Images are resized by sharp.
export const Media: CollectionConfig = {
  slug: 'media',
  admin: { group: 'Content' },
  access: { read: () => true },
  upload: {
    staticDir: 'media',
    imageSizes: [
      { name: 'thumbnail', width: 400 },
      { name: 'card', width: 768 },
      { name: 'hero', width: 1600 },
    ],
    focalPoint: true,
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      localized: true,
      required: true,
      admin: { description: 'Describe the image for screen readers (per language).' },
    },
  ],
}
