"use client";

import { useState } from "react";
import { categoryLabels, featuredProjects, labPath, type CategoryKey } from "@/content/projects";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { useContent, useLocale } from "@/components/i18n/LocaleProvider";
import { Reveal } from "@/components/ui/Reveal";
import { ChapterLabel } from "@/components/ui/Type";
import { ProjectCard } from "./ProjectCard";

/** Category filters appear only once the gallery is big enough to need them. */
const FILTERS_FROM = 4;

/**
 * III · What I've built — the featured projects from `src/content/projects.ts`, in order.
 * Spotlight projects span the full width; the rest form a balanced two-column grid.
 * The full collection lives in the Project Lab (/projects).
 */
export function ProjectGallery() {
  const locale = useLocale();
  const { projects, ui } = useContent();
  const all = featuredProjects();
  const [filter, setFilter] = useState<CategoryKey | "all">("all");

  // Only categories that at least one project actually uses.
  const used = (Object.keys(categoryLabels) as CategoryKey[]).filter((key) =>
    all.some((p) => p.categories?.includes(key)),
  );
  const showFilters = all.length >= FILTERS_FROM && used.length > 1;
  const visible = filter === "all" ? all : all.filter((p) => p.categories?.includes(filter));

  return (
    <section id="projects" aria-labelledby="projects-title" className="relative pb-20 pt-16 sm:pb-28">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 xl:px-16">
        <Reveal>
          <ChapterLabel numeral={ui.numerals[2]}>{projects.label}</ChapterLabel>
          <h2 id="projects-title" className="sr-only">
            {projects.label}
          </h2>
        </Reveal>

        {showFilters ? (
          <div role="group" aria-label={ui.filterLabel} className="mt-10 flex flex-wrap gap-2">
            {(["all", ...used] as const).map((key) => (
              <button
                key={key}
                type="button"
                aria-pressed={filter === key}
                onClick={() => setFilter(key)}
                className="project-filter label cursor-pointer rounded-full border px-4 py-2 text-[12px] tracking-[0.24em]"
              >
                {key === "all" ? ui.filterAll : categoryLabels[key][locale]}
              </button>
            ))}
          </div>
        ) : null}

        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:gap-8">
          {visible.map((project) => {
            const index = all.indexOf(project);
            return (
              <Reveal
                as="li"
                key={project.slug}
                delay={Math.min(index, 4) * 0.1}
                className={project.spotlight ? "md:col-span-2" : ""}
              >
                <ProjectCard project={project} index={index} locale={locale} />
              </Reveal>
            );
          })}
        </ul>

        <Reveal className="mt-14 flex flex-wrap items-baseline gap-x-6 gap-y-3">
          <span className="label text-[12px] tracking-[0.32em] text-ink-3">{ui.alsoBuilt}</span>
          <span className="text-[17px] text-ink-2">{projects.alsoBuilt.join(" · ")}</span>
          <a
            href={labPath(locale)}
            className="label inline-flex items-center gap-3 text-[13px] tracking-[0.26em] text-accent no-underline transition-colors hover:text-italic sm:ms-auto"
          >
            {ui.exploreAllProjects}
            <ArrowIcon />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
