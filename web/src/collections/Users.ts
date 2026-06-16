import type { CollectionConfig } from 'payload'

// Admin staff accounts (One World). Auth-enabled.
export const Users: CollectionConfig = {
  slug: 'users',
  admin: { useAsTitle: 'email', group: 'Admin' },
  auth: true,
  fields: [
    { name: 'name', type: 'text' },
  ],
}
