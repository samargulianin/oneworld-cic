import type { CollectionConfig } from 'payload'

// Lead capture (PRD R3). Each submission is stored here AND emails One World.
// Created via a public server endpoint after Turnstile + honeypot checks.
export const Enquiries: CollectionConfig = {
  slug: 'enquiries',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'fieldOfInterest', 'status', 'createdAt'],
    group: 'Leads',
  },
  access: {
    // Created server-side via Local API (overrideAccess); never publicly creatable via REST.
    create: () => false,
    read: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'email', type: 'email', required: true },
    { name: 'phone', type: 'text' },
    { name: 'fieldOfInterest', type: 'relationship', relationTo: 'fields' },
    {
      name: 'preferredContact',
      type: 'select',
      defaultValue: 'whatsapp',
      options: [
        { label: 'WhatsApp', value: 'whatsapp' },
        { label: 'Phone', value: 'phone' },
        { label: 'Email', value: 'email' },
      ],
    },
    { name: 'message', type: 'textarea' },
    {
      name: 'consent',
      type: 'checkbox',
      required: true,
      admin: { description: 'Consent to be contacted (privacy notice).' },
    },
    {
      name: 'source',
      type: 'text',
      admin: { description: 'Where the enquiry came from (page/field context for pre-fill).' },
    },
    { name: 'locale', type: 'text', admin: { description: 'UI language at submission.' } },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'new',
      options: [
        { label: 'New', value: 'new' },
        { label: 'Contacted', value: 'contacted' },
        { label: 'Enrolled', value: 'enrolled' },
        { label: 'Closed', value: 'closed' },
      ],
      admin: { position: 'sidebar' },
    },
  ],
  hooks: {
    afterChange: [
      async ({ doc, operation, req }) => {
        if (operation !== 'create') return
        const to = process.env.ENQUIRY_NOTIFY_TO
        if (!to) return
        try {
          await req.payload.sendEmail({
            to,
            from: process.env.EMAIL_FROM || 'no-reply@oneworld.ge',
            subject: `New enquiry — ${doc.name}`,
            text: [
              `Name: ${doc.name}`,
              `Email: ${doc.email}`,
              `Phone: ${doc.phone || '—'}`,
              `Preferred contact: ${doc.preferredContact}`,
              `Field of interest: ${doc.fieldOfInterest || '—'}`,
              `Source: ${doc.source || '—'}`,
              `Language: ${doc.locale || '—'}`,
              '',
              `Message:`,
              doc.message || '—',
            ].join('\n'),
          })
        } catch (err) {
          // Never fail the submission because email delivery hiccupped.
          req.payload.logger.error({ err }, 'Enquiry notification email failed')
        }
      },
    ],
  },
}
