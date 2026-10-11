import { content, type Locale } from "@/content";
import type { Project } from "@/content/projects";
import { SketchSvg } from "@/components/sections/Sketches";
import { BayanArt, NajmArt, SentinelArt } from "./ProjectArt";

/**
 * A project's picture: its cover image if it has one, otherwise one of the built-in drawings,
 * otherwise a small notebook sketch (so a project without artwork still looks intentional).
 * `instance` keeps SVG gradient ids unique when a drawing appears more than once on a page.
 */
export function ProjectIllustration({
  project,
  locale,
  instance = "page",
}: {
  project: Project;
  locale: Locale;
  instance?: string;
}) {
  if (project.coverImage) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={project.coverImage.src}
        alt={project.coverImage.alt[locale]}
        loading="lazy"
        decoding="async"
        className="h-auto w-full rounded-2xl object-cover"
      />
    );
  }
  const id = `${project.slug}-${instance}`;
  const labels = content[locale].ui.art;
  if (project.illustration === "archive") return <BayanArt id={id} />;
  if (project.illustration === "watch") return <SentinelArt id={id} labels={labels} />;
  if (project.illustration === "sky") return <NajmArt id={id} labels={labels} />;
  return (
    <div className="flex w-full items-center justify-center py-6">
      <div className="w-[min(60%,220px)]">
        <SketchSvg name="curious" />
      </div>
    </div>
  );
}
