# TAI Underwriting Dashboard

The underwriting team's single, searchable home for the Property and Travel
quotation process — flood mapping for every NZ region, reference tools,
troubleshooting guidance, and onboarding, all reachable in one or two clicks
or a `⌘K` search.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run lint    # eslint
```

## Editing content

Non-developers can update almost everything in the dashboard by editing the
plain TypeScript/JSON files in `/content` — no layout code needs to change.

| File | Powers |
|---|---|
| `content/floodMapping.json` | Property → Flood Mapping table (region, links, notes) |
| `content/propertyProcess.ts` | Property → Process (the 10 numbered sections) |
| `content/namingConventions.ts` | Naming convention segments & copy-paste examples |
| `content/dataChecklist.ts` | Process step 6, the data checklist |
| `content/worksheetFields.ts` | Process step 7, the worksheet field guide |
| `content/guidance.ts` | Property → Guidance ("if this happens…" scenarios) |
| `content/referenceTools.ts` | Property → Reference Tools |
| `content/travelProcess.ts` | Travel tab links and process |
| `content/brokers.ts` | Resources → Broker List |
| `content/emailGuidelines.ts` | Resources → Email Inbox Organisation |
| `content/onboarding.ts` | Resources → New Starter Checklist |
| `content/quickLinks.ts` | Homepage "Jump back in" cards |

Add or edit an entry in one of these files, save, and it's live everywhere:
on its page, in the sidebar (for nav items), and in the `⌘K` global search
(`lib/search.ts` builds its index directly from `/content`).

### Content still pending

A few sections were built with clearly-labelled **draft/starter content**
because the source document hadn't been supplied at build time. Each shows
an orange "Draft content — pending final document" badge on its page:

- **Property Process** (`content/propertyProcess.ts`) — replace with the
  final Property Product Quotation Process document text.
- **Travel Process** (`content/travelProcess.ts`) — replace once the Travel
  process document is supplied.
- **Underwriting Guidance** (`content/guidance.ts`) — expand once the full
  underwriting guide is supplied.
- **Broker List** (`content/brokers.ts`) — replace with the real list.
- **Naming Conventions / Email Guidelines** — confirm against the real
  policy; currently derived from the brief.

Once a section is finalized, just flip its `…Status` export from `"draft"`
to `"final"` in the content file to remove the badge.

## Architecture

- **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4** — brand tokens
  (colour, font) live as CSS variables in `app/globals.css`, pulled from
  tai.co.nz's actual palette (`#2ea3f2` blue, `#ed8559` coral, Source Sans Pro).
- **Content-as-data**: everything under `/content` is plain TS/JSON, kept
  separate from `/components` and `/app` so content edits never touch layout.
- **Search**: `lib/search.ts` builds a flat, breadcrumbed index from every
  content file at build time; `fuse.js` powers fuzzy matching in the
  `⌘K` command palette (`components/command-palette.tsx`).
- **Theming**: `next-themes` drives light/dark mode via a `.dark` class,
  toggled from the sidebar.
- **No auth on the main dashboard** — per the brief, this sits behind Vercel
  deployment protection or a shared password if restriction is needed,
  rather than a built-in login. The Broker Registration module is the one
  exception — see below.

## Broker Registration module

A separate module (`/broker-registration`) for turning a broker's plain-text
access request into registered broker records, a confirmation email draft,
and an updated spreadsheet export. It reuses the main dashboard's layout,
sidebar and styling, but has its own login and its own database tables —
see Step 0 investigation notes below for why.

### Setup

Three environment variables, none of which exist for the rest of the app:

| Variable | What it's for |
|---|---|
| `DATABASE_URL` | Postgres connection string (Vercel Postgres / Neon). Get this from Vercel → your project → Storage → Create Database → Postgres, then copy the connection string it gives you. |
| `BROKER_REGISTRATION_PASSWORD` | The shared password gating `/broker-registration/*`. Anything you like — share it with the team out of band. |
| `BROKER_REGISTRATION_SESSION_SECRET` | Random string used to sign the login session cookie. Generate one with `openssl rand -base64 32` — it doesn't need to be memorable, just unique and secret. |

Set these in Vercel (Project → Settings → Environment Variables) and in a
local `.env.local` for development. Once `DATABASE_URL` is set:

```bash
npm run db:migrate   # applies drizzle/0000_*.sql to create the tables
npm run db:seed      # adds 3 placeholder resource_assets rows
```

`npm run db:studio` opens Drizzle Studio to look at the data directly.
`npm run db:generate` regenerates migration SQL after a schema change in
`db/schema.ts` — review the generated file before running `db:migrate`.

Until `DATABASE_URL` is set, every page and API route in this module still
loads (the DB client is created lazily, never at build time) — they just
return a plain-language "the database isn't connected yet" message instead
of crashing.

### How it works

1. **New Registration** (`/broker-registration/new`): paste a broker's
   request, fill in the broking company / requester fields, click "Read the
   list." `lib/broker-registration/parser.ts` extracts name/email/phone from
   each line (plain or `[Name](mailto:...)` markdown), splitting confident
   rows from a "Needs a quick check" section — nothing is ever silently
   dropped, only flagged for a manual fix.
2. Each row is checked against existing `brokers` by email (case-insensitive)
   as soon as it's parsed, and again on blur if you edit an email — badged
   "New" or "Already registered (Status: X)".
3. **Confirm & save** inserts only the "New," complete rows: a `brokers` row
   each (status `Pending`), one `registration_batches` row, and the
   `batch_brokers` links — all in one DB transaction (`app/api/broker-registration/save/route.ts`),
   re-checking for duplicates at insert time in case of a race.
4. It then shows an editable confirmation email (exact template from the
   brief) with an **Open email** button (a `mailto:` link, subject/body
   URL-encoded) and a **Copy to clipboard** fallback for browsers where
   `mailto:` misbehaves — no server-side sending in this phase.
5. **Download updated spreadsheet** hits `/api/broker-registration/export`,
   which streams an `.xlsx` of the full current `brokers` table via
   `exceljs`, named `Current_IWL_Brokers_-_YYYYMMDD.xlsx`. It's a separate
   button, not an email attachment — `mailto:` links can't carry attachments.
6. **History** (`/broker-registration/history`) lists every past batch,
   expandable to see exactly who was added in it.

### Future work (not built yet — left as TODOs)

- **Real server-side email sending** (e.g. Resend) with the videos/PDF from
  `resource_assets` auto-attached, behind a "Send now" button instead of
  today's `mailto:` draft. Needs an email API key env var and attachment
  handling.
- A `delivery_status` column (`sent` / `failed` / `pending`) on
  `registration_batches`, surfaced in History — see the TODO comment in
  `db/schema.ts`.
- `resource_assets.file_url` is currently null for all three seeded rows
  (Quick Start Guide, Quick Quote video, CFYR Fact Sheet) — the files exist
  but aren't hosted anywhere yet. Once they have a home (Vercel Blob is a
  natural fit alongside this stack), update those rows directly.

## Deploying to Vercel

1. Push this repo to GitHub (already done if you're reading this from the repo).
2. In Vercel, **Add New → Project**, import the GitHub repo, framework
   preset auto-detects as Next.js — no config needed.
3. Deploy. Every push to `main` auto-deploys from then on.
4. Optional: turn on **Vercel Deployment Protection** (Project Settings →
   Deployment Protection) if you want a simple gate without building auth.

## What's next (phase 2, not in this build)

- AI assistant answering underwriting questions from the guide/policy docs
  (needs a document Q&A/RAG setup)
- Embedded property photo search
- Full per-user authentication
- Downloadable/installable (PWA) version — the app is already structured
  to support this later without a rebuild
- A CMS/admin panel for non-technical content editing (for now, editing the
  files in `/content` directly is the workflow)
