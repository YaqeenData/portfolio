# Yaqeen Alhalal — Portfolio

The personal portfolio of Yaqeen Alhalal, Data Engineer, built on the **Confluence** design and told
as one journey — **One Night, One Stream**:

Prologue (the sky) → I · Curiosity → II · How I engineer → III · What I've built
→ IV · The path → Beyond the code → Contact (first light). Act I tells the journey as a
scroll-drawn timeline with notebook sketches.

Recruiters can skip the story at any time with the **Overview** button in the header.

The site opens with a short introduction (night sky with stars, or day sky with clouds, following the
visitor's theme). It plays once per browser session and can be skipped with a click or any key.

Built with Next.js (App Router), TypeScript and Tailwind CSS v4. All motion is plain CSS and SVG,
with no animation library, so the site stays light and fast.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run typecheck  # TypeScript only
```

Requires Node.js 20.9 or newer.

## Edit your content

Everything you'll want to change lives in **`src/content/site.ts`**. Components only present it.

- A value of `null` means "not written yet". The site shows a clearly marked placeholder
  (dashed box or `[ … ]`) instead of inventing anything.
- Replace a `null` with real content and the placeholder disappears automatically:
  - `path.credentials.certifications[n].issuer` — the Snowflake and Databricks certificates' issuer
  - `path.credentials.certifications[n].verifyUrl` — a "Verify" link appears once set (nothing shows while `null`)
  - `contact.email`, `linkedin`, `github`, `kaggle`, `resume`
- Story and skills: `curiosity.story`, `architecture.layers` (seven areas, each with a short name for
  the diagram and its tools), `path.experience`, `path.credentials`, the About Me timeline in `curiosity.journey`,
  and the languages in `beyond.languages`.
- Résumé: put the PDF in `public/` (e.g. `public/resume.pdf`) and set `contact.resume: "/resume.pdf"`.
- Once deployed, set `seo.siteUrl` to the live URL.

Projects have their own file, `src/content/projects.ts` — see "Projects" below.

## Projects: homepage gallery, Project Lab and one page per project

All projects live in **`src/content/projects.ts`** — one entry each, with its English and
Arabic text side by side. From that list the site builds, automatically:

- **Homepage** (section III): the projects with `featured: true`; `spotlight: true` gives the
  wide card. A discreet "Explore all projects →" link leads to the Project Lab.
- **Project Lab** (`/projects`, `/ar/projects`): every project, grouped into **Engineering**
  and **The Playground**, with an All · Engineering · Playground selector (kept in the address
  as `?category=…`, so it survives sharing and switching language).
- **A page per project**: `/projects/<slug>` and `/ar/projects/<slug>`. Engineering projects get
  the full case study; playground projects a lighter page (what sparked it, what I built, what
  I learned). Unknown slugs are a 404.
- Previous / next links, the Overview dialog, metadata and language alternates.

**Add an engineering project:** copy the Bayan entry, set `type: "engineering"`, a new `slug`
and `order`, and fill in `text.en` / `text.ar`. Stages (any number), `architecture`, `metrics`,
`contributions`, `approach`, `challenges` and `lessons` are all optional.

**Add a playground project:** use `type: "playground"` (a commented example sits at the end of
the list). It needs only `title`, `category`, `summary`, `inspiration`, `built` and `learned`
in each language, plus `technologies`.

**Images, demos, GitHub:** put files in `public/assets/projects/<slug>/`. Use
`coverImage: { src: "/assets/projects/<slug>/cover.webp", alt: { en, ar } }` for the card and
page picture (otherwise a built-in drawing or a notebook sketch is shown); playground projects
can add more pictures in `images`. Links go in `resources` — `demo`, `github`,
`kaggle` (a dataset or notebook), `presentation`, `caseStudy` — and only filled-in links get a button.

**Homepage or not:** `featured: true` shows a project on the homepage; remove it to show the
project only in the Project Lab. `status` ("completed", "in-progress", "prototype",
"experiment", "archived") adds a small label in the Lab.

## Two languages: English and Arabic

- English lives at `/` and Arabic at `/ar` (right-to-left). Each language is its own root
  layout (`src/app/(en)` and `src/app/(ar)/ar`) rendered by the same shared components, so
  both pages are fully server-rendered with the right `lang`, `dir`, title, description
  and `hreflang` alternates.
- Content: `src/content/site.ts` (English) and `src/content/site.ar.ts` (Arabic). The Arabic
  file must match the English shape exactly; the type checker reports anything missing.
  Interface text (buttons, hints, accessibility labels) lives under `ui` in each file.
- Links, certificate details and other shared values are defined once in `site.ts`; the
  Arabic file reads them from there, so a link only ever needs adding in one place.
- The EN / عربي switch in the header remembers the choice (`localStorage.lang`); a visitor who
  chose Arabic is taken straight to `/ar` on their next visit, and the switch keeps them on
  the section they were reading.
- Arabic type: IBM Plex Sans Arabic (loaded only on `/ar`), paired with the existing Latin
  fonts; letter-spacing is removed for Arabic so letters join correctly.
- Diagrams (the architecture, the project stages, the Bayan flow) keep their left-to-right
  geometry in Arabic; only their words are translated.

## Where things live

```
src/
  app/
    (en)/             English root layout + page  →  /
    (ar)/ar/          Arabic root layout + page   →  /ar
    globals.css       design tokens (night + twilight), primitives, motion
  content/site.ts     English content (+ the Content type)
  content/site.ar.ts  Arabic content, same shape
  components/Home.tsx the homepage, section by section (shared by both languages)
  components/
    hero/             Prologue: Hero + Cosmos (sun, planets, streams, stars, Cancer, clouds)
    sections/         Curiosity + Timeline (scroll-drawn journey, notebook sketches), Beyond (languages),
                      Architecture (assembles on scroll), Path (experience + credentials), Contact
    projects/         Gallery, cards, project page, stages, illustrations, resources, navigation
    layout/           Header, Overview dialog, Moon Horizon toggle, backdrop, footer
    ui/               Reveal, Type (labels, headlines, placeholders), ArrowIcon, StreamDivider
```

## Design system in one glance

| Layer | Decision |
| --- | --- |
| Modes | Night and Twilight/day; first visit follows the system preference, then the visitor's choice is saved |
| Colour rule | Orange always sits between pink and blue — no purple |
| Type | Fraunces (voice) · Bodoni Moda italic (emotion) · Antonio (structure) · Albert Sans (reading) |
| Surfaces | Glass only where it carries meaning: the architecture, project art, stage details, Overview |
| Motion | "Breath": the sun breathes, pulses travel the streams, planets drift |
| Reveal | Raw points gather into a sentence; the architecture assembles; sections surface from a blur |

Accessibility: semantic landmarks, a skip link, visible focus rings, keyboard-operable menu and toggle,
and every animation turns off for visitors who prefer reduced motion. Decorative art is hidden from
screen readers.

## Deploy

The easiest path is [Vercel](https://vercel.com/new): import the repository and deploy with the
default Next.js settings. No environment variables are needed.
