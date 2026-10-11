import { content, type Locale } from "@/content";
import { labPath, neighbours, projectPath } from "@/content/projects";

function Arrow({ back = false }: { back?: boolean }) {
  // Points along the reading direction; mirrored on right-to-left pages.
  return (
    <span aria-hidden="true" className="inline-block rtl:-scale-x-100">
      {back ? "←" : "→"}
    </span>
  );
}

/** Previous · all projects · next — quiet links at the foot of every project page. */
export function ProjectNavigation({ slug, locale }: { slug: string; locale: Locale }) {
  const { ui } = content[locale];
  const { previous, next } = neighbours(slug);
  const linkClass = "project-nav-link group flex flex-col gap-1.5 rounded-2xl px-1 py-2 no-underline";

  return (
    <nav aria-label={ui.backToProjects} className="mx-auto max-w-[1440px] px-6 pb-20 sm:px-10 xl:px-16">
      <div className="grid gap-6 border-t border-line pt-8 sm:grid-cols-3 sm:items-start">
        <div>
          {previous ? (
            <a href={projectPath(locale, previous.slug)} className={linkClass} rel="prev">
              <span className="label text-[11px] tracking-[0.28em] text-ink-4">
                <Arrow back /> {ui.previousProject}
              </span>
              <span className="font-display text-[24px] text-ink">{previous.text[locale].title}</span>
            </a>
          ) : null}
        </div>
        <div className="sm:text-center">
          <a
            href={labPath(locale)}
            className="label inline-flex items-center gap-2 py-2 text-[12px] tracking-[0.3em] text-ink-2 no-underline transition-colors hover:text-accent"
          >
            <svg aria-hidden="true" focusable="false" width="12" height="12" viewBox="0 0 12 12">
              <rect x="0.5" y="0.5" width="4.5" height="4.5" rx="1" fill="none" stroke="currentColor" />
              <rect x="7" y="0.5" width="4.5" height="4.5" rx="1" fill="none" stroke="currentColor" />
              <rect x="0.5" y="7" width="4.5" height="4.5" rx="1" fill="none" stroke="currentColor" />
              <rect x="7" y="7" width="4.5" height="4.5" rx="1" fill="none" stroke="currentColor" />
            </svg>
            {ui.backToProjects}
          </a>
        </div>
        <div className="sm:text-end">
          {next ? (
            <a href={projectPath(locale, next.slug)} className={`${linkClass} sm:items-end`} rel="next">
              <span className="label text-[11px] tracking-[0.28em] text-ink-4">
                {ui.nextProject} <Arrow />
              </span>
              <span className="font-display text-[24px] text-ink">{next.text[locale].title}</span>
            </a>
          ) : null}
        </div>
      </div>
    </nav>
  );
}
