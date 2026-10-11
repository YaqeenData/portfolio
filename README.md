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
  - `work.projects[n].caseStudyUrl`
  - `contact.email`, `linkedin`, `github`, `resume`
- Story and skills: `curiosity.story`, `architecture.layers` (seven areas, each with a short name for
  the diagram and its tools), `path.experience`, `path.credentials`, the About Me timeline in `curiosity.journey`,
  and the languages in `beyond.languages`.
- Sentinel's "Beyond the Pipeline" block reads from `work.leadership`.
- Résumé: put the PDF in `public/` (e.g. `public/resume.pdf`) and set `contact.resume: "/resume.pdf"`.
- Once deployed, set `seo.siteUrl` to the live URL.

To add a project, add an entry to `work.projects`. Each project chooses a `visual`
("archive", "watch" or "sky") and an `accent` ("amber", "pink" or "blue"); new visuals live in `src/components/work/ProjectArt.tsx`.

## Where things live

```
src/
  app/
    layout.tsx        fonts, metadata, no-flash theme script
    page.tsx          the homepage, section by section
    globals.css       design tokens (night + twilight), primitives, motion
  content/site.ts     all portfolio content
  components/
    hero/             Prologue: Hero + Cosmos (sun, planets, streams, stars, Cancer, clouds)
    sections/         Curiosity + Timeline (scroll-drawn journey, notebook sketches), Beyond (languages),
                      Architecture (assembles on scroll), Path (experience + credentials), Contact
    work/             Project chapters, their art and selectable pipeline stages
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
