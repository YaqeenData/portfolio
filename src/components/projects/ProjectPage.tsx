import { content, type Locale } from "@/content";
import { labPath, projectPath, sortedProjects, type Project } from "@/content/projects";
import { LocaleProvider } from "@/components/i18n/LocaleProvider";
import { Backdrop } from "@/components/layout/Backdrop";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ProjectContributions } from "./ProjectContributions";
import { PlaygroundStory } from "./PlaygroundStory";
import { ProjectNavigation } from "./ProjectNavigation";
import { ProjectNotes } from "./ProjectNotes";
import { ProjectResources } from "./ProjectResources";
import { ProjectStory } from "./ProjectStory";

/**
 * One project's page (/projects/<slug>, /ar/projects/<slug>), built entirely from its entry
 * in src/content/projects.ts. Engineering projects get the full story (journey, architecture,
 * contributions, optional notes); playground experiments get a lighter page. Both end with
 * resources and navigation to the neighbouring projects.
 */
export function ProjectPage({ locale, project }: { locale: Locale; project: Project }) {
  const c = content[locale];
  const other: Locale = locale === "en" ? "ar" : "en";
  const index = sortedProjects().findIndex((p) => p.slug === project.slug);

  return (
    <LocaleProvider locale={locale} alternatePath={projectPath(other, project.slug)} onHome={false}>
      <a
        href="#main"
        className="label sr-only z-[100] rounded-full bg-[var(--bg-2)] px-5 py-3 text-xs text-ink focus:not-sr-only focus:fixed focus:start-4 focus:top-4"
      >
        {c.ui.skipToContent}
      </a>
      <Backdrop />
      <Header />
      <main id="main">
        <div id="top" className="mx-auto max-w-[1440px] px-6 pt-8 sm:px-10 xl:px-16">
          <a
            href={labPath(locale)}
            className="label inline-flex items-center gap-2 text-[12px] tracking-[0.3em] text-ink-3 no-underline transition-colors hover:text-accent"
          >
            <span aria-hidden="true" className="inline-block rtl:-scale-x-100">
              ←
            </span>
            {c.ui.backToProjects}
          </a>
        </div>
        {project.type === "engineering" ? (
          <>
            <ProjectStory project={project} index={index} locale={locale} />
            {project.text[locale].contributions ? (
              <ProjectContributions contributions={project.text[locale].contributions!} locale={locale} />
            ) : null}
            <ProjectNotes text={project.text[locale]} locale={locale} />
          </>
        ) : (
          <PlaygroundStory project={project} locale={locale} />
        )}
        <ProjectResources resources={project.resources} locale={locale} />
        <ProjectNavigation slug={project.slug} locale={locale} />
      </main>
      <Footer c={c} />
    </LocaleProvider>
  );
}
