import { content, type Locale } from "@/content";
import { projectPath, type Project } from "@/content/projects";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { ACCENT, projectNumber } from "./accent";
import { ProjectIllustration } from "./ProjectIllustration";

/**
 * A gallery card: the whole card is one link to the project page.
 * Featured projects get a wide, side-by-side layout; the rest share a balanced grid.
 */
export function ProjectCard({
  project,
  index,
  locale,
  wide = Boolean(project.spotlight),
  showStatus = false,
}: {
  project: Project;
  index: number;
  locale: Locale;
  /** The wide, side-by-side layout (homepage spotlight). */
  wide?: boolean;
  /** Show the project's status (used in the Project Lab). */
  showStatus?: boolean;
}) {
  const t = project.text[locale];
  const { ui } = content[locale];
  const accent = ACCENT[project.accent];
  const featured = wide;
  const status = showStatus && project.status ? ui.projectStatus[project.status] : null;
  const titleId = `card-${project.slug}-title`;
  const summaryId = `card-${project.slug}-summary`;

  return (
    <a
      href={projectPath(locale, project.slug)}
      aria-labelledby={titleId}
      aria-describedby={summaryId}
      className={`project-card glass-pane group block rounded-[28px] p-5 no-underline sm:p-7 ${
        featured ? "lg:p-9" : ""
      }`}
      style={{ "--card-accent": accent.line, "--card-glow": accent.glow } as React.CSSProperties}
    >
      <div className={featured ? "grid items-center gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-12" : "flex h-full flex-col gap-6"}>
        <div aria-hidden="true" className={`project-card-art relative ${featured ? "" : "aspect-[11/6]"}`}>
          <ProjectIllustration project={project} locale={locale} instance="card" />
        </div>

        <div className="flex flex-1 flex-col gap-4">
          <p className={`label flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] tracking-[0.28em] ${accent.label}`}>
            <span>{projectNumber(index)}</span>
            <span aria-hidden="true" className="text-ink-4">
              ·
            </span>
            <span>{t.category}</span>
            {featured ? (
              <span className="rounded-full border border-current px-2.5 py-0.5 text-[10px] tracking-[0.22em]">{ui.featured}</span>
            ) : null}
            {status ? (
              <span className="rounded-full border border-[var(--chip-border)] px-2.5 py-0.5 text-[10px] tracking-[0.22em] text-ink-3">
                {status}
              </span>
            ) : null}
          </p>
          <h3
            id={titleId}
            className={`font-display font-normal leading-[0.95] tracking-[-0.02em] text-ink [font-variation-settings:'opsz'_144] ${
              featured ? "text-[clamp(3rem,6vw,5rem)]" : "text-[clamp(2.4rem,4vw,3.25rem)]"
            }`}
          >
            {t.title}
            {t.altName ? (
              <span lang={t.altLang} className="ms-3 align-middle text-[0.4em] tracking-normal text-ink-3">
                {t.altName}
              </span>
            ) : null}
          </h3>
          {t.subtitle ? (
            <p className="font-italic text-[clamp(1.05rem,1.6vw,1.25rem)] italic text-italic">{t.subtitle}</p>
          ) : null}
          <p id={summaryId} className="max-w-[48ch] text-[16px] leading-[1.65] text-ink-2">
            {t.summary}
          </p>
          <ul lang="en" className="flex flex-wrap gap-2 pt-1">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-[var(--chip-border)] bg-chip px-3 py-1 text-[13px] leading-none text-ink-2"
              >
                {tech}
              </li>
            ))}
          </ul>
          <span className="project-card-cta label mt-auto inline-flex items-center gap-3 pt-3 text-[13px] tracking-[0.26em]">
            {ui.exploreProject}
            <ArrowIcon className="project-card-arrow" />
          </span>
        </div>
      </div>
    </a>
  );
}
