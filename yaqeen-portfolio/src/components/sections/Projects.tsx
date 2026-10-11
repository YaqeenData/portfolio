import { site, type Project } from "@/content/site";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const FLOW_DOTS = [
  "bg-blue shadow-[0_0_12px_var(--blue)]",
  "bg-blue",
  "bg-[#FFB15C]",
  "bg-orange shadow-[0_0_12px_var(--orange)]",
];

/** A tiny pipeline drawn from the project's own description. */
function ProjectFlow({ steps }: { steps: Project["flow"] }) {
  return (
    <div aria-hidden="true" className="relative grid grid-cols-4 pt-1.5">
      <span className="absolute left-[12.5%] right-[12.5%] top-[17px] h-0.5 bg-gradient-to-r from-blue to-orange" />
      {steps.map((step, i) => (
        <span key={step} className="relative flex flex-col items-center gap-2.5">
          <span className={`h-3 w-3 rounded-full ${FLOW_DOTS[i]}`} />
          <span className="label text-[10px] tracking-[0.22em] text-ink-3 sm:text-[11px]">{step}</span>
        </span>
      ))}
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <GlassCard as="article" paneClassName="flex flex-col gap-6 p-7 sm:p-10">
      <div className="flex items-center justify-between">
        <span aria-hidden="true" className="label text-[30px] font-extralight tracking-normal text-blue">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-orange shadow-[0_0_12px_var(--orange)]" />
      </div>

      <div>
        <h3 className="font-display text-[42px] font-normal leading-none text-ink sm:text-[52px]">{project.name}</h3>
        <p className="pt-3 font-italic text-[20px] italic text-italic sm:text-[22px]">{project.subtitle}</p>
      </div>

      <p className="text-[17px] leading-[1.65] text-ink-2">{project.description}</p>

      <ProjectFlow steps={project.flow} />

      <ul aria-label={project.tagsLabel} className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li key={tag} className="chip">
            {tag}
          </li>
        ))}
        {!project.stackComplete ? (
          <li className="chip border-dashed !text-placeholder">[ Stack ]</li>
        ) : null}
      </ul>

      <div className="mt-auto">
        {project.caseStudyUrl ? (
          <a
            href={project.caseStudyUrl}
            className="label inline-flex items-center gap-3 text-[13px] font-medium tracking-[0.24em] text-italic no-underline"
          >
            Read the case study <ArrowIcon />
          </a>
        ) : (
          <p className="label text-[13px] tracking-[0.24em] text-ink-3">Case study · coming soon</p>
        )}
      </div>
    </GlassCard>
  );
}

export function Projects() {
  const { projects } = site;
  return (
    <Section id="projects" index="04" label="Selected projects" title={projects.title} placeholderTitle="Projects headline">
      <div className="grid gap-8 lg:grid-cols-2">
        {projects.items.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.15} className="h-full">
            <ProjectCard project={project} index={i} />
          </Reveal>
        ))}
      </div>

      <div className="pt-12">
        <Reveal>
          <h3 className="label pb-5 text-[13px] font-medium tracking-[0.32em] text-ink-3">Additional work</h3>
        </Reveal>
        <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {projects.additionalWork.map((area, i) => (
            <Reveal as="li" key={area} delay={i * 0.08} className="dash-box flex flex-col gap-3.5 p-6">
              <span className="label text-[15px] tracking-[0.2em] text-ink">{area}</span>
              <span aria-hidden="true" className="skeleton w-4/5" />
              <span className="label text-[11px] tracking-[0.28em] text-placeholder">Placeholder</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
