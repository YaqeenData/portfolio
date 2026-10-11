import { content, type Locale } from "@/content";
import type { EngineeringProject, EngineeringText } from "@/content/projects";
import { Reveal } from "@/components/ui/Reveal";
import { ACCENT, projectNumber } from "./accent";
import { ProjectIllustration } from "./ProjectIllustration";
import { ProjectStages } from "./ProjectStages";

/** Medallion tones for a Bronze → Silver → Gold architecture flow. */
const FLOW_TONE: Record<string, string> = {
  Bronze: "#D9894A",
  Silver: "var(--ink-3)",
  Gold: "#FFB15C",
};

type UI = (typeof content)["en"]["ui"];

/** A small architecture diagram: source → layers → reporting. Always left to right. */
function Flow({ steps, color, ui }: { steps: readonly string[]; color: string; ui: UI }) {
  return (
    <figure className="flex flex-col items-center gap-3">
      <figcaption className="label text-[11px] tracking-[0.3em] text-ink-4">{ui.architecture}</figcaption>
      <ol dir="ltr" lang="en" className="flex flex-wrap items-center justify-center gap-y-2">
        {steps.map((step, i) => (
          <li key={step} className="flex items-center">
            {i > 0 ? (
              <span aria-hidden="true" className="mx-1.5 h-px w-4 sm:mx-2 sm:w-7" style={{ background: color, opacity: 0.6 }} />
            ) : null}
            <span
              className="label rounded-full border px-3 py-1.5 text-[11px] tracking-[0.2em] sm:text-[12px]"
              style={{
                borderColor: FLOW_TONE[step] ?? "var(--chip-border)",
                color: FLOW_TONE[step] ?? "var(--ink-2)",
                background: "var(--chip)",
              }}
            >
              {i > 0 ? <span className="sr-only">{ui.then} </span> : null}
              {step}
            </span>
          </li>
        ))}
      </ol>
    </figure>
  );
}

function Metrics({ metrics, color }: { metrics: NonNullable<EngineeringText["metrics"]>; color: string }) {
  return (
    <figure className="flex flex-col items-center gap-3 text-center">
      <figcaption className="label text-[11px] tracking-[0.3em] text-ink-4">{metrics.label}</figcaption>
      <dl className="flex flex-wrap justify-center gap-x-10 gap-y-3">
        {metrics.values.map((m) => (
          <div key={m.label} className="flex flex-col items-center gap-0.5">
            <dt className="label order-2 text-[11px] tracking-[0.24em] text-ink-3">{m.label}</dt>
            <dd className="order-1 font-display text-[30px] leading-none" style={{ color }}>
              {m.value}
            </dd>
          </div>
        ))}
      </dl>
      <p className="max-w-[40ch] text-[13px] leading-snug text-ink-3">{metrics.note}</p>
    </figure>
  );
}

/**
 * The project's story — the same immersive layout the homepage chapters used:
 * introduction on one side; illustration, architecture, metrics and the interactive
 * engineering journey on the other. Every optional part appears only if it exists.
 */
export function ProjectStory({ project, index, locale }: { project: EngineeringProject; index: number; locale: Locale }) {
  const t = project.text[locale];
  const { ui } = content[locale];
  const accent = ACCENT[project.accent];
  const headingId = `${project.slug}-title`;

  return (
    <article aria-labelledby={headingId} className="relative py-16 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 end-0 w-[70%] blur-[40px]"
        style={{ background: `radial-gradient(50% 50% at 65% 50%, ${accent.glow}, transparent)` }}
      />
      <div className="relative mx-auto grid max-w-[1440px] items-center gap-14 px-6 sm:px-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-20 xl:px-16">
        <Reveal className="flex flex-col gap-6">
          <p className={`label flex flex-wrap gap-x-3 text-[13px] tracking-[0.34em] ${accent.label}`}>
            <span>
              {ui.chapter} {projectNumber(index)}
            </span>
            <span aria-hidden="true" className="text-ink-4">
              ·
            </span>
            <span>{t.category}</span>
          </p>
          <h1
            id={headingId}
            className="font-display text-[clamp(4.25rem,9vw,8.75rem)] font-normal leading-[0.9] tracking-[-0.03em] text-ink [font-variation-settings:'opsz'_144]"
          >
            {t.title}
            {t.altName ? (
              <span className="ms-4 inline-block align-middle text-[0.32em] tracking-normal text-ink-3">
                <span lang={t.altLang} dir={t.altLang === "ar" ? "rtl" : "ltr"}>
                  {t.altName}
                </span>
              </span>
            ) : null}
          </h1>
          <p className="font-italic text-[clamp(1.25rem,2vw,1.625rem)] italic text-italic">{t.subtitle}</p>
          <blockquote
            className="max-w-[30ch] border-s-2 ps-5 font-display text-[clamp(1.3rem,1.9vw,1.6rem)] leading-[1.35] text-ink"
            style={{ borderColor: accent.line }}
          >
            {t.problem}
          </blockquote>
          <p className="max-w-[46ch] text-[17px] leading-[1.7] text-ink-2">{t.overview}</p>
          {t.facts.length ? (
            <dl className="flex flex-col gap-3">
              {t.facts.map((fact) => (
                <div key={fact.label} className="flex flex-col gap-0.5">
                  <dt className={`label text-[11px] tracking-[0.3em] ${accent.label}`}>{fact.label}</dt>
                  <dd className="max-w-[46ch] text-[15px] leading-snug text-ink-2">{fact.value}</dd>
                </div>
              ))}
            </dl>
          ) : null}
          <p className="label text-[12px] leading-[1.9] tracking-[0.22em] text-ink-3">
            <span className="sr-only">{t.stackLabel}: </span>
            {t.stack.join(" · ")}
          </p>
        </Reveal>

        <Reveal delay={0.15} className="flex flex-col gap-8">
          <ProjectIllustration project={project} locale={locale} />
          {project.architecture?.flow.length ? (
            <Flow steps={project.architecture.flow} color={accent.line} ui={ui} />
          ) : null}
          {t.metrics ? <Metrics metrics={t.metrics} color={accent.line} /> : null}
          {t.stages?.length ? <ProjectStages stages={t.stages} accent={project.accent} project={t.title} /> : null}
        </Reveal>
      </div>
    </article>
  );
}
