# One World × Cambridge International College — Website

Bilingual (Georgian / English) brochure site for **One World**, the official Georgian
representative of **Cambridge International College**. Credibility-first, enquiry-driven.

This is the **homepage-first prototype** (see `../PRD.md` and the implementation plan):
a runnable bilingual homepage matching the visual reference, a CMS skeleton non-technical
staff can edit, and a working enquiry flow (email + stored record).

## Stack

- **Next.js 16** (App Router) + **React 19**
- **Payload CMS 3** embedded in the same app (admin at `/admin`)
- **next-intl** for `/ka` `/en` routing, `hreflang`, and UI strings (Georgian default)
- **Tailwind CSS v4** design tokens derived from the reference
- **SQLite** for local dev (`@payloadcms/db-sqlite`) — swap to Postgres for production
- **Noto Sans Georgian** (full Mkhedruli + Latin coverage)

## Getting started

```bash
npm install
cp .env.example .env        # then edit values
npm run dev                 # http://localhost:3000
```

On first run, seed bilingual content (dev only):

```bash
curl http://localhost:3000/seed
```

This creates an admin user, 8 sample fields, the Header/Footer, and the homepage.

- **Site:** http://localhost:3000/ka and http://localhost:3000/en
- **Admin:** http://localhost:3000/admin — `admin@oneworld.ge` / `changeme123` (change this)

> Note: SQLite is single-writer. Stop the dev server before running CLI tools that
> write to the same `oneworld.db`.

## Scripts

| Script | Purpose |
|---|---|
| `npm run dev` | Dev server |
| `npm run build` / `npm start` | Production build / serve |
| `npm run generate:types` | Regenerate `payload-types.ts` after schema changes |
| `npm run generate:importmap` | Regenerate the admin import map |

## Structure

```
src/
  app/(frontend)/[locale]/   # localized site (layout + homepage)
  app/(payload)/             # Payload admin + REST/GraphQL
  app/seed/                  # dev-only seeding route (remove for production)
  collections/               # Pages, Fields, Enquiries, Media, Users
  globals/                   # Header, Footer
  blocks/                    # Hero, TrustStrip, StatsCallout, FieldsGrid, Narrative, CTABanner
  components/sections/       # React renderers for each block
  components/EnquiryForm.tsx # lead capture (client) → src/actions/enquiry.ts
  i18n/  messages/           # routing + UI strings (ka.json, en.json)
  payload.config.ts
```

The homepage is composed from CMS **blocks**, so staff reorder/edit sections without code.

## Going to production (next steps)

- **Database:** replace `sqliteAdapter` with `@payloadcms/db-postgres` in `payload.config.ts`
  and set `DATABASE_URI` to a Postgres URL. Generate/run migrations.
- **Email:** set `SMTP_*` + `ENQUIRY_NOTIFY_TO` so enquiry notifications actually send
  (otherwise Payload logs them to the console).
- **Spam:** set `NEXT_PUBLIC_TURNSTILE_SITE_KEY` + `TURNSTILE_SECRET_KEY` to enable
  Cloudflare Turnstile (honeypot works without it).
- **Remove** the `/seed` route (and `app/seed`).
- **Secrets:** set a strong `PAYLOAD_SECRET` and real contact numbers.

## Deferred (post-approval, per PRD §11)

19-field directory + browse/filter by field & study level, About CIC / One World /
How-it-works / FAQ pages, flagship per-programme pages.
