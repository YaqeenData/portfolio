# Yaqeen Alhalal — Portfolio

The personal portfolio of Yaqeen Alhalal, Data Engineer, built on the **Confluence** design:
a night sky where data flows from **Collect** (blue) through **Engineer** (pink) to **Build** (orange),
with a twilight mode for daylight.

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
  - `about.title`, `about.story` — the About headline and paragraphs
  - `experience.items[0].dates`, `.details` — internship dates and bullet points
  - `projects.items[n].caseStudyUrl`; set Sentinel's `stackComplete: true` once its tags list the stack
  - `education.degree.institution`, `.year`, `certifications`, `bootcamps`, `achievements`
  - `contact.email`, `linkedin`, `github`, `resume`
- Résumé: put the PDF in `public/` (e.g. `public/resume.pdf`) and set `contact.resume: "/resume.pdf"`.
- Once deployed, set `seo.siteUrl` to the live URL.

To add a project, add an entry to `projects.items` with the same shape — the card, its mini
pipeline and its tags are generated from that data.

## Where things live

```
src/
  app/
    layout.tsx        fonts, metadata, no-flash theme script
    page.tsx          the homepage, section by section
    globals.css       design tokens (night + twilight), primitives, motion
  content/site.ts     all portfolio content
  components/
    hero/             Hero + Cosmos (sun, planets, streams, stars, Cancer, clouds)
    layout/           Header, Moon Horizon theme toggle, mobile index, backdrop, footer
    sections/         About (+ Languages), Experience, Projects, Expertise, Education, Contact
    ui/               GlassCard, Section, Reveal, StreamDivider, Placeholder, ArrowIcon
```

## Design system in one glance

| Layer | Decision |
| --- | --- |
| Modes | Night (default) and Twilight, saved per visitor |
| Colour rule | Orange always sits between pink and blue — no purple |
| Type | Fraunces (voice) · Bodoni Moda italic (emotion) · Antonio (structure) · Albert Sans (reading) |
| Surfaces | Frosted Soft Pane with a hidden sheet that rises on hover/focus |
| Motion | "Breath": the sun breathes, pulses travel the streams, planets drift |
| Reveal | Sections surface from a soft blur as you scroll |

Accessibility: semantic landmarks, a skip link, visible focus rings, keyboard-operable menu and toggle,
and every animation turns off for visitors who prefer reduced motion. Decorative art is hidden from
screen readers.

## Deploy

The easiest path is [Vercel](https://vercel.com/new): import the repository and deploy with the
default Next.js settings. No environment variables are needed.
