"use client";

import { useEffect, useState } from "react";
import { sortedProjects, type Project, type ProjectType } from "@/content/projects";
import { useContent, useLocale } from "@/components/i18n/LocaleProvider";
import { Reveal } from "@/components/ui/Reveal";
import { SketchSvg } from "@/components/sections/Sketches";
import { ProjectCard } from "./ProjectCard";

type View = "all" | ProjectType;
const VIEWS: View[] = ["all", "engineering", "playground"];

/**
 * The Project Lab's collection: every project from src/content/projects.ts, grouped by type.
 * The selector switches without reloading and keeps the choice in the address
 * (?category=playground), so sharing the link or switching language keeps it too.
 */
export function LabGallery() {
  const locale = useLocale();
  const { ui } = useContent();
  const all = sortedProjects();
  const [view, setView] = useState<View>("all");

  // Pick up ?category= from the address once on load.
  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("category");
    if (requested === "engineering" || requested === "playground") setView(requested);
  }, []);

  function choose(next: View) {
    setView(next);
    const url = new URL(window.location.href);
    if (next === "all") url.searchParams.delete("category");
    else url.searchParams.set("category", next);
    window.history.replaceState(null, "", url);
  }

  const groups: { type: ProjectType; title: string; intro: string; sketch: "pipeline" | "curious"; items: Project[] }[] = [
    {
      type: "engineering",
      title: ui.lab.engineeringTitle,
      intro: ui.lab.engineeringIntro,
      sketch: "pipeline",
      items: all.filter((p) => p.type === "engineering"),
    },
    {
      type: "playground",
      title: ui.lab.playgroundTitle,
      intro: ui.lab.playgroundIntro,
      sketch: "curious",
      items: all.filter((p) => p.type === "playground"),
    },
  ];
  const label = { all: ui.lab.all, engineering: ui.lab.engineering, playground: ui.lab.playground };
  const count = (v: View) => (v === "all" ? all.length : all.filter((p) => p.type === v).length);

  return (
    <div className="mx-auto max-w-[1440px] px-6 pb-24 sm:px-10 xl:px-16">
      <div role="group" aria-label={ui.lab.selectorLabel} className="lab-selector grid w-full grid-cols-3 gap-1 rounded-[22px] p-1.5 sm:flex sm:w-fit sm:gap-1.5 sm:rounded-full">
        {VIEWS.map((v) => (
          <button
            key={v}
            type="button"
            aria-pressed={view === v}
            onClick={() => choose(v)}
            className="lab-tab label inline-flex cursor-pointer items-center justify-center gap-2 rounded-[18px] px-2 py-2.5 text-center text-[12px] leading-tight tracking-[0.14em] sm:rounded-full sm:px-5 sm:tracking-[0.24em]"
          >
            {label[v]}
            <span className="lab-count hidden sm:inline" aria-hidden="true">
              {count(v)}
            </span>
          </button>
        ))}
      </div>

      {groups
        .filter((g) => view === "all" || view === g.type)
        .map((group) => (
          <section key={group.type} aria-labelledby={`lab-${group.type}`} className="mt-16 first-of-type:mt-14">
            <Reveal className="flex items-end gap-5">
              <div aria-hidden="true" className="hidden w-24 shrink-0 sm:block">
                <SketchSvg name={group.sketch} />
              </div>
              <div className="flex flex-col gap-2">
                <h2 id={`lab-${group.type}`} className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-normal leading-tight text-ink">
                  {group.title}
                </h2>
                <p className="max-w-[60ch] text-[16px] leading-relaxed text-ink-3">{group.intro}</p>
              </div>
            </Reveal>

            {group.items.length ? (
              <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:gap-8 xl:grid-cols-3">
                {group.items.map((project, i) => (
                  <Reveal as="li" key={project.slug} delay={Math.min(i, 5) * 0.08}>
                    <ProjectCard project={project} index={i} locale={locale} wide={false} showStatus />
                  </Reveal>
                ))}
              </ul>
            ) : (
              <Reveal className="lab-empty mt-8 flex flex-col items-center gap-4 rounded-[28px] px-6 py-14 text-center">
                <div aria-hidden="true" className="w-36">
                  <SketchSvg name="curious" />
                </div>
                <p className="font-display text-[clamp(1.4rem,2.4vw,1.9rem)] text-ink">{ui.lab.emptyTitle}</p>
                <p className="max-w-[46ch] text-[16px] leading-relaxed text-ink-2">{ui.lab.emptyBody}</p>
              </Reveal>
            )}
          </section>
        ))}
    </div>
  );
}
