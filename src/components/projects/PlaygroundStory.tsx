import { content, type Locale } from "@/content";
import type { PlaygroundProject } from "@/content/projects";
import { Reveal } from "@/components/ui/Reveal";
import { SketchSvg } from "@/components/sections/Sketches";
import { ACCENT } from "./accent";
import { ProjectIllustration } from "./ProjectIllustration";

/**
 * A playground experiment's page — deliberately light: what sparked it, what I built,
 * what I learned, and any pictures. Demo and source links come from ProjectResources.
 */
export function PlaygroundStory({ project, locale }: { project: PlaygroundProject; locale: Locale }) {
  const t = project.text[locale];
  const { ui } = content[locale];
  const accent = ACCENT[project.accent];
  const learned = Array.isArray(t.learned) ? t.learned : [t.learned];
  const notes = [
    { title: ui.playgroundNotes.inspiration, body: [t.inspiration], sketch: "curious" as const },
    { title: ui.playgroundNotes.built, body: [t.built], sketch: "computer" as const },
    { title: ui.playgroundNotes.learned, body: learned, sketch: "scatter" as const },
  ];

  return (
    <article aria-labelledby={`${project.slug}-title`} className="relative py-16 sm:py-24">
      <div className="relative mx-auto grid max-w-[1440px] items-center gap-12 px-6 sm:px-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-20 xl:px-16">
        <Reveal className="flex flex-col gap-5">
          <p className={`label flex flex-wrap gap-x-3 text-[13px] tracking-[0.34em] ${accent.label}`}>
            <span>{ui.lab.playground}</span>
            <span aria-hidden="true" className="text-ink-4">
              ·
            </span>
            <span>{t.category}</span>
            {project.status ? <span className="text-ink-3">· {ui.projectStatus[project.status]}</span> : null}
          </p>
          <h1
            id={`${project.slug}-title`}
            className="font-display text-[clamp(3rem,7vw,6rem)] font-normal leading-[0.95] tracking-[-0.03em] text-ink"
          >
            {t.title}
          </h1>
          {t.subtitle ? <p className="font-italic text-[clamp(1.2rem,2vw,1.5rem)] italic text-italic">{t.subtitle}</p> : null}
          <p className="max-w-[46ch] text-[17px] leading-[1.7] text-ink-2">{t.summary}</p>
          <ul lang="en" className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <li key={tech} className="rounded-full border border-[var(--chip-border)] bg-chip px-3 py-1 text-[13px] leading-none text-ink-2">
                {tech}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.15}>
          <ProjectIllustration project={project} locale={locale} />
        </Reveal>
      </div>

      {/* Three notebook pages: inspiration, build, lesson. */}
      <div className="mx-auto mt-16 grid max-w-[1440px] gap-6 px-6 sm:px-10 md:grid-cols-3 xl:px-16">
        {notes.map((note, i) => (
          <Reveal key={note.title} delay={i * 0.1} className="lab-note flex flex-col gap-3 rounded-2xl px-6 py-5">
            <div aria-hidden="true" className="w-16">
              <SketchSvg name={note.sketch} />
            </div>
            <h2 className={`label text-[12px] tracking-[0.3em] ${accent.label}`}>{note.title}</h2>
            {note.body.length === 1 ? (
              <p className="text-[16px] leading-relaxed text-ink-2">{note.body[0]}</p>
            ) : (
              <ul className="flex flex-col gap-2">
                {note.body.map((item) => (
                  <li key={item} className="relative ps-5 text-[15px] leading-[1.6] text-ink-2">
                    <span aria-hidden="true" className="absolute start-0 top-[0.75em] h-px w-2.5" style={{ background: accent.line }} />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </Reveal>
        ))}
      </div>

      {project.images?.length ? (
        <ul className="mx-auto mt-12 grid max-w-[1440px] gap-6 px-6 sm:grid-cols-2 sm:px-10 xl:px-16">
          {project.images.map((image) => (
            <li key={image.src}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={image.src} alt={image.alt[locale]} loading="lazy" decoding="async" className="h-auto w-full rounded-2xl" />
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
