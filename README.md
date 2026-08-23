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
- **No auth in phase 1** — per the brief, this sits behind Vercel deployment
  protection or a shared password if restriction is needed, rather than a
  built-in login.

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
