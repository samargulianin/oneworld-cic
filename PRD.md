# Product Requirements Document — One World × Cambridge International College Website

**Document owner:** One World (official Georgian representative of CIC)
**Status:** Draft v1.1
**Last updated:** 2026-06-16

---

## 1. Overview

A bilingual (Georgian / English) **informative website** for **One World**, the official Georgian representative of **Cambridge International College (CIC)** — a British accredited distance-learning college founded in **1935**.

The site's main job is to **establish credibility and trust**, explain who CIC and One World are, present the breadth of CIC's offering (170+ diploma programmes across 19 professional fields), and convert interested visitors into **enrolment enquiries** that One World follows up with manually.

This is intentionally a **brochure / informative site**, not a full programme catalogue with online enrolment or payment. Not every one of the 170+ programmes needs an individual page; the focus is on communicating the 19 fields, representative programmes, and a clear path to enquire.

---

## 2. Goals & Non-Goals

### 2.1 Primary goal
- **Credibility & brand presence** — make a working professional in Georgia trust CIC's heritage (est. 1935), British accreditation, and One World's official representative status, and feel confident enough to enquire.

### 2.2 Secondary goals
- Generate qualified **enrolment enquiries**.
- Help visitors understand the **fields and study levels** available and find the area relevant to them.
- Present a polished, **minimalist and professional** brand experience in both languages.

### 2.3 Non-goals (explicitly out of scope for v1)
- Online enrolment, applications, or payment processing.
- Student accounts, dashboards, or learning delivery (LMS).
- An exhaustive page for every single one of the 170+ programmes.
- E-commerce / shopping cart.
- Blog/news engine (may be considered post-launch).

---

## 3. Target Audience

**Primary persona — "The Working Professional"**
- Adults in Georgia, typically 25–45, employed full- or part-time.
- Seeking career advancement, a recognised qualification, or a career change without leaving their job.
- Value flexibility (distance learning), credibility of the qualification, and clarity on cost/commitment.
- Likely browsing on **mobile**, in **Georgian** primarily, with English as a secondary option.
- Comfortable with **WhatsApp / phone / Facebook Messenger** as contact channels.

**Secondary audiences**
- Employers / HR evaluating staff development options.
- Recent graduates wanting a professional specialisation.

---

## 4. Key Decisions (from stakeholder input)

| Topic | Decision |
|---|---|
| Primary goal | Credibility / brand presence |
| Scope | Informative website — not all 170+ programmes individually featured |
| Content maintenance | Non-technical One World staff must be able to edit content |
| Enrolment | Enquiry-based (manual follow-up), no online enrolment in v1 |

---

## 5. Assumptions

- The enquiry form will at minimum **email One World** and **store** each submission; it will **pre-fill** the field/programme context and offer prominent **WhatsApp/phone** contact. *(To confirm: CRM/Sheets integration.)*
- One World can provide CIC-approved copy, logos, accreditation details, and imagery in both languages.
- Georgian is the **default** language; English is the alternate.
- Content volume is modest (fields, representative programmes, institutional pages) — manageable in a CMS by non-technical staff.

---

## 6. Functional Requirements

### 6.1 Bilingual support (Georgian / English)
- **R1.1** Every public page available in both Georgian (`ka`) and English (`en`).
- **R1.2** Persistent, obvious language switcher in the header; selection persists across navigation (and ideally across visits).
- **R1.3** Georgian is the default for first-time visitors; consider auto-suggesting based on browser locale but never force.
- **R1.4** Language-specific, SEO-friendly URLs (e.g. `/ka/...`, `/en/...`) with correct `hreflang` tags.
- **R1.5** Georgian typography must render cleanly — choose web fonts with full **Mkhedruli** glyph coverage; verify number, date, and form-label rendering.
- **R1.6** Content model must allow a page/field/programme to exist in one language while translation is pending, without breaking layout.

### 6.2 Programme presentation, filtering & browsing
- **R2.1** Present the **19 professional fields** as the primary organising structure (landing grid or directory).
- **R2.2** Communicate the breadth ("170+ diploma programmes across 19 fields") prominently as a credibility signal.
- **R2.3** Provide a **programmes/fields browse view** with **filtering by**:
  - **Professional field** (the 19 categories)
  - **Study level** (e.g. Diploma / Higher Diploma / Graduate / Postgraduate — exact taxonomy from CIC to confirm)
- **R2.4** Filters work without full page reloads where feasible; usable and accessible on mobile.
- **R2.5** Each field has a page describing it and listing representative programmes within it.
- **R2.6** Programme entries show key info: title, field, study level, short description, and a clear **"Enquire about this programme"** action. (Full per-programme deep pages optional/phased.)
- **R2.7** Empty/zero-result filter states handled gracefully in both languages.

### 6.3 Enquiry / lead capture
- **R3.1** An **enrolment enquiry form** capturing: name, email, phone, field/programme of interest (pre-filled when arriving from a field/programme), preferred contact method, optional message, and consent checkbox.
- **R3.2** Submission **emails a notification** to One World and **stores** the submission (CMS entry or database).
- **R3.3** Form **pre-fills** the relevant field/programme when launched from a programme or field page.
- **R3.4** Prominent alternative contact channels: **WhatsApp click-to-chat, phone (click-to-call), email**, optionally Facebook Messenger.
- **R3.5** Inline validation, success confirmation, and error handling — all bilingual.
- **R3.6** Spam protection (e.g. honeypot + CAPTCHA/Turnstile).
- **R3.7** Consent / privacy notice aligned with applicable data-protection expectations.
- **R3.8** *(Optional / to confirm)* Push leads to a CRM or Google Sheet for follow-up tracking.

### 6.4 Institutional / credibility content
- **R4.1** **About CIC** page — heritage since 1935, British accreditation, distance-learning model, recognition.
- **R4.2** **About One World** page — official Georgian representative status, local role, contact.
- **R4.3** **Accreditation & credibility** elements — accreditation logos/statements, "since 1935", any endorsements, surfaced site-wide (footer, about, homepage).
- **R4.4** **How it works** — the distance-learning study model, what a learner receives, study at your own pace.
- **R4.5** **FAQ** addressing common professional concerns (recognition, cost, duration, language of study, support).
- **R4.6** **Contact** page with all channels and One World's Georgia details.

### 6.5 Content management (non-technical staff)
- **R5.1** Staff can create/edit/translate **fields, programmes, and institutional pages** in both languages via a friendly admin UI — no code.
- **R5.2** Clear bilingual editing workflow (side-by-side or per-language editing, with translation status).
- **R5.3** Staff can manage enquiry-form recipient addresses and view submitted enquiries.
- **R5.4** Media library for images/logos with alt text per language.
- **Recommendation:** A **multilingual CMS** (e.g. WordPress + WPML/Polylang, or a friendly headless CMS) best fits the "non-technical staff" + "bilingual" + "modest content" constraints. Final platform per engineering, but ease-of-editing is a hard requirement.

---

## 7. Non-Functional Requirements

- **Design:** Clean, modern, trustworthy — anchored to the visual reference in §7.1 (`research/referance2.webp`). Generous whitespace, card-based layout, soft gradient accents, rounded corners, strong typographic hierarchy, and pill-style eyebrow labels. Credibility is expressed through polish and restraint rather than clutter.
- **Responsive:** Mobile-first; flawless on phones (primary device for the audience).
- **Performance:** Fast load on Georgian mobile networks; target Lighthouse performance ≥ 90, LCP < 2.5s.
- **Accessibility:** WCAG 2.1 AA — keyboard navigation, contrast, alt text, accessible forms in both languages.
- **SEO:** Per-language metadata, `hreflang`, sitemap, semantic markup, indexable field/programme pages; optimise for Georgian-language search and key field terms.
- **Browser support:** Current Chrome, Safari, Firefox, Edge; iOS and Android mobile browsers.
- **Security/Privacy:** HTTPS, form spam protection, secure handling/storage of enquiry data, privacy policy.
- **Analytics:** Track page views, language usage, filter usage, and enquiry conversions (e.g. GA4 + form-submission events).
- **Maintainability:** Content editable by staff; clear separation of content and presentation.

### 7.1 Visual design direction (reference: `research/referance2.webp`)

The uploaded reference (a modern "SpineEdge" learning-platform landing page) defines the **target look & feel and homepage anatomy**. We adopt its layout system and component vocabulary while substituting CIC/One World brand colours, copy, and imagery. Key elements to carry over:

- **Aesthetic:** Bright, airy, professional. Soft gradient accents (used sparingly on CTAs, badges, and the closing banner), rounded corners, subtle card shadows, and a large modern sans-serif. Mkhedruli font must share the same weight/scale system (see R1.5).
- **Sticky header:** Logo (left) · centred primary nav with dropdowns for *Fields* and *About* · prominent **"Enquire" / "Contact us"** button (right) · language switcher (R1.2).
- **Hero:** Pill eyebrow label (e.g. *"Cambridge International College · since 1935"*), large bold headline, short supporting line, primary CTA button, a **social-proof cluster** (e.g. avatars / "thousands of learners"), and a supporting image with small floating badges (e.g. *"British accredited"*).
- **Trust strip:** A "Trusted by / accreditation" logo row directly under the hero — repurposed for **accreditation marks and credibility signals** (R4.3) rather than client logos.
- **Services / fields cards:** Section eyebrow + centred heading, then a row of cards each with an icon, title, large index number (01/02/03…), and an **"Explore"** link — used to surface the **19 professional fields** or study-model highlights.
- **Stats callouts:** Overlaid metric badges (e.g. *"170+ programmes"*, *"19 fields"*, *"est. 1935"*) used as credibility proof points.
- **Narrative / case block:** Image + short story ("how distance learning works") with a "Learn more" link.
- **Team & blog rows:** Card grids with hover highlight (optional — team can map to "About One World"; blog row is Phase 3).
- **Closing CTA banner:** Full-width gradient panel with a strong call to action (*"Start your enrolment enquiry"*) and a button.
- **Footer:** Tagline + social links, multi-column link lists (Fields / About / Info), accreditation note, language switch, and privacy/copyright row.

> Note: The reference is the **design language and section rhythm** to emulate; exact colours and gradients are subject to CIC-approved branding (Open Question §10.5). The reference is English/LTR — all components must also hold up in Georgian with longer strings.

---

## 8. Information Architecture (proposed)

```
Home
├── Fields (the 19 professional fields)
│   └── Field detail → representative programmes
├── Programmes (browse + filter by field & study level)
│   └── Programme detail (phased) → Enquire (pre-filled)
├── About CIC (heritage since 1935, accreditation)
├── About One World (Georgian representative)
├── How it works (distance-learning model)
├── FAQ
├── Enquire / Contact (form + WhatsApp/phone/email)
└── Footer: accreditation, languages, contact, privacy
```

### Homepage priorities (credibility-first)

Section order maps to the visual reference (§7.1):
1. **Hero** — value proposition + trust signals ("British college since 1935", accreditation, official Georgian representative), primary **Enquire** CTA, social-proof cluster.
2. **Trust strip** — accreditation marks / credibility signals.
3. **Breadth snapshot** — stats callouts (19 fields / 170+ programmes) with entry into browsing.
4. **Fields cards** — directory of the 19 professional fields (Explore links) / quick filter.
5. **How distance learning works** — narrative block, reassurance for working professionals.
6. **Closing CTA banner** — **Enquire** plus WhatsApp/phone.

---

## 9. Success Metrics

- **Primary:** Number and quality of enquiry submissions per month; enquiry conversion rate (visits → enquiries).
- **Engagement:** Filter usage; field/programme page views; time on credibility pages.
- **Reach:** Organic traffic growth (Georgian + English); mobile share.
- **Brand/trust (qualitative):** Stakeholder/user feedback on perceived professionalism and trust; share of enquiries citing "found you online."
- **Operational:** Staff able to update content without developer help.

---

## 10. Open Questions / To Confirm

1. **Study-level taxonomy** — exact CIC level names to expose as filters (Diploma, Higher Diploma, Graduate, Postgraduate, etc.).
2. **Enquiry integration** — email + storage only, or also CRM / Google Sheet? Which tool?
3. **Per-programme depth** — do we want individual pages for select flagship programmes, or field-level pages with programme lists only?
4. **Contact channels** — confirm WhatsApp number, phone, Messenger presence.
5. **Branding assets** — CIC-approved logo usage, accreditation marks, approved copy, imagery.
6. **Domain & hosting** — preferred domain; any hosting constraints/preferences in Georgia.
7. **Privacy/data** — applicable data-protection requirements and consent wording.
8. **Pricing visibility** — should programme cost/fees be shown, or handled only via enquiry follow-up?

---

## 11. Phasing (suggested)

- **Phase 1 (Launch / MVP):** Bilingual site, homepage, 19 fields + browse/filter (field & level), institutional/credibility pages, FAQ, enquiry form with email + storage + WhatsApp/phone, CMS for staff, analytics.
- **Phase 2:** Flagship per-programme pages, CRM/Sheets integration, enhanced SEO content, testimonials/success stories.
- **Phase 3 (optional):** News/blog, richer programme catalogue, online application workflow if business case emerges.
