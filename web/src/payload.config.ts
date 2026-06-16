import path from 'path'
import { fileURLToPath } from 'url'
import { buildConfig } from 'payload'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Fields } from './collections/Fields'
import { Pages } from './collections/Pages'
import { Enquiries } from './collections/Enquiries'
import { Header } from './globals/Header'
import { Footer } from './globals/Footer'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

// Email: use SMTP when configured, otherwise fall back to Payload's console logger
// (dev-friendly — enquiry notifications are printed to the terminal).
const email = process.env.SMTP_HOST
  ? nodemailerAdapter({
      defaultFromAddress: 'no-reply@oneworld.ge',
      defaultFromName: 'One World',
      transportOptions: {
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      },
    })
  : undefined

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: '— One World × CIC',
    },
  },
  // Bilingual content: Georgian default, English alternate (PRD R1.x).
  localization: {
    locales: [
      { label: 'ქართული', code: 'ka' },
      { label: 'English', code: 'en' },
    ],
    defaultLocale: 'ka',
    fallback: true,
  },
  collections: [Pages, Fields, Media, Enquiries, Users],
  globals: [Header, Footer],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  // Local dev: SQLite (zero external services). Production: swap to @payloadcms/db-postgres.
  db: sqliteAdapter({
    client: { url: process.env.DATABASE_URI || 'file:./oneworld.db' },
  }),
  ...(email ? { email } : {}),
  sharp,
})
