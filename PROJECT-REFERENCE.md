# Patient First Worldwide — Project Reference

> **Purpose:** A living backup of how this project is built, organized, and styled, so future
> sections and features (form integration, member portal, new pages, content edits) can be added
> quickly and consistently.
>
> **Last updated:** August 2026 · Active project directory: `patient-first-worldwide-v2`
> (the folder `patient-first-worldwide` without `-v2` is a stale duplicate — ignore it).

---

## 1. What this project is

A marketing + coordination website for **Patient First Worldwide**, an independent patient
support and healthcare coordination company based in Dubai, UAE. It connects patients with
healthcare providers across 5 countries (UAE, India, Saudi Arabia, Turkey, USA) and coordinates
the non-clinical side of their healthcare journey.

**Important brand rule:** the company coordinates but never provides medical advice, diagnosis,
or treatment. Every page keeps this disclaimer prominent and patient-focused.

---

## 2. Tech stack & how to run

| Item | Value |
|---|---|
| Framework | Next.js **16.2.12** (App Router, Turbopack) |
| React | 19.2.4 |
| Language | TypeScript |
| Styling | Tailwind CSS **v4** (CSS-first `@theme`) |
| Icons | lucide-react |
| Validation | zod v4 |
| Fonts | Inter (Google, via `next/font`) |
| Data storage | Static TypeScript data files only (no database yet) |

```bash
npm install        # install dependencies
npm run dev        # development server (http://localhost:3000)
npm run build      # production build
npm run lint       # ESLint
npm run start      # serve production build
```

> **⚠️ IMPORTANT — Next.js 16 has breaking changes vs older Next.js versions.**
> Before writing App Router / server code, read the relevant guide in `node_modules/next/dist/docs/`
> and heed deprecation notices. Do not assume old Next.js 13/14 patterns still work.

---

## 3. Project structure

```
src/
├── app/                        # Next.js App Router routes
│   ├── layout.tsx              # Root layout: fonts, nav, footer, Organization JSON-LD
│   ├── globals.css             # Tailwind v4 theme tokens + base typography
│   ├── page.tsx                # Home page
│   ├── about/page.tsx          # About Us (story, mission, founder, network)
│   ├── medical-specialties/    # Department / specialties grid page
│   ├── medical-journey/        # 7-step journey + timeline component
│   ├── membership/             # Membership (benefits, packages, portal teaser, FAQ)
│   ├── destinations/           # Medical tourism destinations + interactive map
│   │   └── [country]/page.tsx  # Redirect → /destinations
│   ├── guides/                 # Guides (blog-style) index + [slug] detail pages
│   ├── hospitals/[id]/         # Hospital profile pages (from data/hospitals)
│   ├── faq/page.tsx            # FAQ (accordion) + FAQPage JSON-LD
│   ├── contact/                # Contact page + lead submission server action
│   ├── care-areas/             # Redirect → /medical-specialties
│   ├── process/                # Redirect → /medical-journey
│   ├── how-we-help/            # Redirect → /medical-journey
│   ├── not-found.tsx           # 404 page
│   ├── robots.ts               # robots.txt
│   ├── sitemap.ts              # sitemap.xml
│   └── icon.png                # favicon
├── components/                 # Reusable UI
│   ├── ui.tsx                  # PageHero, SectionHeading, CtaBand, Disclaimer
│   ├── Navbar.tsx              # Fixed header + mobile menu
│   ├── Footer.tsx              # Footer + "Crafted by Growize" credit
│   ├── ContactForm.tsx         # Lead form (client)
│   ├── NetworkMap.tsx          # Interactive world map + country popup
│   ├── JourneyTimeline.tsx     # 7-step stepper (client)
│   └── MemberPortalComingSoon.tsx  # Portal teaser section
├── data/                       # ALL editable content lives here (no CMS)
│   ├── site.ts → (lib/site.ts) # Brand constants (name, contacts, links)
│   ├── medical-specialties.ts  # 16 specialty cards
│   ├── care-areas.ts           # Care-area options (used in contact form)
│   ├── destinations.ts         # 5 destination countries + network map data
│   ├── hospitals.ts            # Hospital profiles
│   ├── guides.ts               # Guide/blog articles
│   ├── process.ts              # 7 journey steps
│   ├── faq.ts                  # FAQ entries
│   └── countries.ts            # Full country dialing list for the form
├── lib/
│   ├── site.ts                 # Brand constants
│   └── leads.ts                # Lead schema + STORE-LEAD INTEGRATION POINT
└── public/                     # Static assets (images, flags, icons)
```

---

## 4. Routes / pages reference

| Route | Purpose | Key content source |
|---|---|---|
| `/` | Home — hero, 4 pillars, about teaser, 3 steps, before/during/after, our approach (8 points), values, explore cards, beyond healthcare, testimonials, Google reviews | `app/page.tsx` |
| `/about` | Story, mission, "What We Never Do", founder, global network | `app/about/page.tsx` |
| `/medical-specialties` | **Department page** — 16 specialty cards (image + icon + text), our-role band, "what to expect" | `data/medical-specialties.ts`, `data/care-areas.ts` |
| `/medical-journey` | 7-step process + interactive timeline | `data/process.ts`, `components/JourneyTimeline.tsx` |
| `/membership` | Benefits, includes, packages (Silver/Gold/Platinum), portal teaser, membership FAQ | `app/membership/page.tsx` |
| `/destinations` | SEO medical-tourism page: interactive map + UAE featured card + 4 country cards | `data/destinations.ts`, `components/NetworkMap.tsx` |
| `/guides` | Blog-style guide index | `data/guides.ts` |
| `/guides/[slug]` | Individual guide article | `data/guides.ts` |
| `/hospitals/[id]` | Hospital profile page | `data/hospitals.ts` |
| `/faq` | FAQ accordion + FAQPage JSON-LD | `data/faq.ts` |
| `/contact` | Contact info + consultation form (lead capture) | `components/ContactForm.tsx` |
| `/care-areas`, `/process`, `/how-we-help` | Permanent redirects | — |

---

## 5. Design system (keep these consistent)

### Colors (defined in `src/app/globals.css` `@theme`)
| Token | Value | Used for |
|---|---|---|
| `midnight` | `#052138` | Headings, dark sections, CTA text on gold |
| `royal` | `#052138` | Same blue — dark card backgrounds |
| `navy` | `#052138` | Body text (same blue) |
| `gold` | `#c5a059` | Accents, icons, borders |
| `gold-dark` | `#a8864a` | Eyebrows, links, emphasis |
| `champagne` | `#d4b26b` | Secondary gold |
| `ivory` | `#f8f8f5` | Page background / light cards |

**Gold gradient** (buttons, active states, some icons):
`bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] text-royal`

**Icons:** most brand icons use `.brand-gold-icon` (gradient stroke via SVG `brandGoldGrad`
defined in `layout.tsx`). **Exception:** the home "Our Values" section icons use `text-midnight`
(official blue) — this is deliberate. (The specialty card images previously showed a small icon
badge; that badge was removed — cards are image + text only.)

### Typography
- **One font family:** Inter (via `--font-inter` in `layout.tsx`). `--font-sans` AND `--font-serif`
  both map to Inter. Titles are distinguished from body **by weight only** (600 vs 450).
- Body: `font-size: 1.125rem; font-weight: 450; line-height: 1.7;`
- Headings: weight 600, `letter-spacing: -0.01em`
- Type scale is text-only (overridden tokens in `globals.css`): `text-xs 13px, sm 16px, base 18px,
  lg 21px, xl 24px, 2xl 28px, 3xl 34px, 4xl 42px, 5xl 56px, 6xl 68px`
- Use `font-serif` for heading style (renders as Inter 600).

### Spacing conventions
- Sections: `py-16` / `py-14`
- `PageHero` (`components/ui.tsx`): default `pb-20`; pass **`compact`** prop → `pb-4` and give the
  first section `pt-8` (this is the standard "no big gap under hero" pattern).
- Section headings: `mb-8` / `mb-10` / `mb-12`
- Two-column splits: `gap-10`

### Reusable components (`src/components/ui.tsx`)
- `PageHero` — props: `eyebrow`, `title`, `description`, `image`, `children`, `compact`
- `SectionHeading` — `eyebrow`, `title`, `description`, `align`
- `CtaBand` — dark CTA band with title/subtitle + contact + WhatsApp buttons
- `Disclaimer` — the standard legal notice box

---

## 6. Brand & contact info — `src/lib/site.ts`

All contact details live in one place. **Edit here, not in components.**

```ts
export const site = {
  name: "Patient First Worldwide",
  legalName: "Patients First Worldwide",   // used in legal disclaimers
  tagline: "Your Dedicated Healthcare Coordination Partner",
  url: "https://www.patientsfirstworldwide.com",
  email: "info@patientsfirstworldwide.com",
  phone: "+971 56 696 0486",
  phoneHref: "tel:+971566960486",
  whatsapp: "https://wa.me/971566960486",
  office: "Dubai, United Arab Emirates",
  hours: "Mon–Fri: 9:00 AM – 6:00 PM (GST)",
};
```

> Note: in `package.json` + README the project is called `patient-first-worldwide-v2`.

---

## 7. Contact form & lead capture (INTEGRATION POINT)

**Flow:** `contact/page.tsx` → `components/ContactForm.tsx` (client, reads `?careArea=` from URL)
→ server action `src/app/contact/actions.ts` (`submitLead`, "use server") → `src/lib/leads.ts`.

- Validation: zod schema `contactSchema` in `src/lib/leads.ts`
  (name, email, phone = country code + number combined in `actions.ts`, contactMethod, careArea, message, consent).
- Care-area dropdown options come from `data/care-areas.ts` (`careAreaOptions`).
- Phone country dropdown comes from `data/countries.ts` (default `+971`).

### 🔌 WHERE TO WIRE THE REAL FORM INTEGRATION
Currently `storeLead()` in `src/lib/leads.ts` only generates a reference number and logs to console.
**To go live**, edit `storeLead()` to send the validated lead to:
- Email service (e.g. **Resend** or **SendGrid**) → notify the coordination team, AND/OR
- CRM (e.g. **HubSpot / Salesforce / Monday**) via their API.
- `ContactLead` type and the `reference` return value are already shaped for this.
- Keep server-side env vars in a `.env.local` file (never commit secrets). Use
  `process.env.*` inside the server action chain only.

---

## 8. SEO & GEO setup

- **Metadata:** global in `app/layout.tsx` (title template `%s | Patient First Worldwide`,
  description, keywords, OpenGraph, `metadataBase`). Per-page `metadata` exports in each page.
- **JSON-LD structured data (GEO):**
  - `Organization` schema — `layout.tsx`
  - `FAQPage` schema — `/faq` and `/membership`
- **`sitemap.ts`** builds sitemap from static routes + hospitals + guides.
- **`robots.ts`** allows all + points to sitemap.
- `/destinations` is heavily optimized for medical-tourism SEO (title/description/keywords:
  "medical tourism UAE/Dubai", "treatment abroad", etc.).

---

## 9. Content editing without touching code

All content is data-driven from `src/data/`:

| To change | Edit |
|---|---|
| Specialty cards (16 departments) | `data/medical-specialties.ts` (slug, title, text) + icon/image mapping in `app/medical-specialties/page.tsx` |
| Care-area dropdown in form | `data/care-areas.ts` (title, short, coordination) |
| Journey steps | `data/process.ts` |
| Destinations / map pins / services | `data/destinations.ts` |
| Hospital profiles | `data/hospitals.ts` |
| Guide articles | `data/guides.ts` |
| FAQ entries | `data/faq.ts` |
| Contact info | `lib/site.ts` |

**Image convention (Department cards):** images live in `public/` (root = `public/` folder),
**landscape** orientation (card image area is `h-44` with `object-cover`), **webp** format,
lowercase kebab-case names. There is no icon badge on the card images.

---

## 10. Department card images — CURRENT PENDING UPLOADS

All 16 specialty cards point to local images. **These files must be uploaded to `public/`**
(they don't exist yet — cards show broken images until then). Use **landscape** webp:

| Slug | Image file (in `public/`) |
|---|---|
| orthopaedics-spine | `orthopaedics-spine-support.webp` |
| cardiology-cardiac-surgery | `cardiology-cardiac-care.webp` |
| oncology-haematology | `oncology-haematology-care.webp` |
| neurology-neurosurgery | `neurology-neurosurgery-care.webp` |
| womens-health-fertility | `womens-health-fertility-care.webp` |
| paediatrics | `paediatrics-care.webp` |
| ophthalmology | `ophthalmology-care.webp` |
| urology-nephrology | `urology-nephrology-care.webp` |
| gastroenterology | `gastroenterology-care.webp` |
| transplantation | `transplantation-care.webp` |
| rehabilitation | `rehabilitation-care.webp` |
| dentistry | `dentistry-care.webp` |
| pulmonology | `pulmonology-care.webp` |
| endocrinology-diabetes | `endocrinology-diabetes-care.webp` |
| executive-health-screening | `executive-health-screening-care.webp` |
| rare-diseases | `rare-diseases-care.webp` |

**Icon availability note:** check icons exist before use (`node -e "console.log(require('lucide-react').IconName)"`).
`Lungs` is NOT available in the installed version; `AirVent` is used elsewhere instead.

---

## 11. Content & trust rules (do not break)

- **Never add** a "We respond within 4 business hours" style promise — that wording was removed
  deliberately and the field `site.responsePromise` no longer exists.
- Keep at least one clear disclaimer per page: the company is an *independent patient support and
  healthcare coordination company* and does *not* provide medical advice/diagnosis/treatment.
- Patient-facing copy stays patient-oriented and plain-language. Avoid claiming clinical outcomes.
- Duplicate sections across pages are removed on purpose (e.g. "Our Approach"/"Our Values" grids
  live only on the home page, not the About page). When adding content, don't re-add cross-page
  duplication.

---

## 12. Roadmap hooks — planned future features

| Planned feature | Where it plugs in today | Suggested approach |
|---|---|---|
| **Real form/email integration** | `src/lib/leads.ts` → `storeLead()` | Add Resend/SendGrid or CRM API call here; keep `ContactLead`/`LeadResult` shape |
| **Member portal / login** | `components/MemberPortalComingSoon.tsx` (teaser) | Create `src/app/portal/` (login + dashboard) and `src/app/api/auth` or NextAuth; portal copy references secure document vault, activity monitor, coordinator chat |
| **CMS for content** | `src/data/*.ts` | Migrate data files to headless CMS (e.g. Sanity) keeping the same field shapes |
| **Database for leads/members** | none yet | Add Postgres (e.g. Vercel Postgres / Prisma) with `members` + `leads` tables |
| **New pages/sections** | `src/app/*` | Copy an existing page's structure; reuse `PageHero`, `CtaBand`, `Disclaimer` |
| **Per-specialty detail pages** | cards link to `/contact?careArea=…` | Could add `medical-specialties/[slug]` using `data/medical-specialties.ts` + `data/care-areas.ts` |

---

## 13. Known conventions / gotchas

- All content editable from `src/data/` and `src/lib/site.ts` — no hard-coded copy in components
  except structural headings.
- Next.js 16 — read `node_modules/next/dist/docs/` before new App Router code (see §2).
- `images` config in `next.config.ts` currently allows `images.pexels.com` and
  `images.unsplash.com`. Any other external image host must be added there.
- Footer includes a "Crafted by Growize" credit linking to `https://gro-wize.com`.
- Run `npm run lint` and `npm run build` after every change; both should pass cleanly.
