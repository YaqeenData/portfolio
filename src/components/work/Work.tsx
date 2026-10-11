import { site, type Project } from "@/content/site";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { Reveal } from "@/components/ui/Reveal";
import { ChapterLabel, Missing } from "@/components/ui/Type";
import { BayanArt, NajmArt, SentinelArt } from "./ProjectArt";
import { StageStrip } from "./StageStrip";

const ACCENT = {
  amber: { label: "text-label-orange", line: "var(--label-orange)", glow: "rgba(255,138,43,0.14)" },
  pink: { label: "text-label-pink", line: "var(--label-pink)", glow: "rgba(255,127,174,0.12)" },
  blue: { label: "text-label-blue", line: "var(--label-blue)", glow: "rgba(110,149,255,0.14)" },
} as const;

/** Medallion tones for Bayan's architecture flow. */
const FLOW_TONE: Record<string, string> = {
  Bronze: "#D9894A",
  Silver: "var(--ink-3)",
  Gold: "#FFB15C",
};

function Art({ project }: { project: Project }) {
  if (project.visual === "archive") return <BayanArt id={project.slug} />;
  if (project.visual === "watch") return <SentinelArt id={project.slug} />;
  return <NajmArt id={project.slug} />;
}

/** A small architecture diagram: source → medallion layers → reporting. */
function Flow({ steps, color }: { steps: readonly string[]; color: string }) {
  return (
    <figure className="flex flex-col items-center gap-3">
      <figcaption className="label text-[11px] tracking-[0.3em] text-ink-4">Architecture</figcaption>
      <ol className="flex flex-wrap items-center justify-center gap-y-2">
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
              {i > 0 ? <span className="sr-only">then </span> : null}
              {step}
            </span>
          </li>
        ))}
      </ol>
    </figure>
  );
}

function Metrics({ metrics, color }: { metrics: NonNullable<Project["metrics"]>; color: string }) {
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

/** One project = one chapter: its own composition, its own visual world. */
function Chapter({ project, index }: { project: Project; index: number }) {
  const mirror = index % 2 === 1;
  const accent = ACCENT[project.accent];
  const headingId = `${project.slug}-title`;

  return (
    <article id={project.slug} aria-labelledby={headingId} className="relative py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 w-[70%] blur-[40px]"
        style={{
          [mirror ? "left" : "right"]: 0,
          background: `radial-gradient(50% 50% at ${mirror ? "35%" : "65%"} 50%, ${accent.glow}, transparent)`,
        }}
      />
      <div className="relative mx-auto grid max-w-[1440px] items-center gap-14 px-6 sm:px-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-20 xl:px-16">
        <Reveal className={`flex flex-col gap-6 ${mirror ? "lg:order-2" : ""}`}>
          <p className={`label text-[13px] tracking-[0.34em] ${accent.label}`}>
            Chapter {String(index + 1).padStart(2, "0")}
          </p>
          <h3
            id={headingId}
            className="font-display text-[clamp(4.25rem,9vw,8.75rem)] font-normal leading-[0.9] tracking-[-0.03em] text-ink [font-variation-settings:'opsz'_144]"
          >
            {project.name}
            {project.nameAr ? (
              <span lang="ar" dir="rtl" className="ms-4 align-middle text-[0.32em] tracking-normal text-ink-3">
                {project.nameAr}
              </span>
            ) : null}
          </h3>
          <p className="font-italic text-[clamp(1.25rem,2vw,1.625rem)] italic text-italic">{project.subtitle}</p>
          <blockquote
            className="max-w-[30ch] border-l-2 pl-5 font-display text-[clamp(1.3rem,1.9vw,1.6rem)] leading-[1.35] text-ink"
            style={{ borderColor: accent.line }}
          >
            {project.opening}
          </blockquote>
          <p className="max-w-[46ch] text-[17px] leading-[1.7] text-ink-2">{project.overview}</p>
          {project.facts.length ? (
            <dl className="flex flex-col gap-3">
              {project.facts.map((fact) => (
                <div key={fact.label} className="flex flex-col gap-0.5">
                  <dt className={`label text-[11px] tracking-[0.3em] ${accent.label}`}>{fact.label}</dt>
                  <dd className="max-w-[46ch] text-[15px] leading-snug text-ink-2">{fact.value}</dd>
                </div>
              ))}
            </dl>
          ) : null}
          <p className="label text-[12px] leading-[1.9] tracking-[0.22em] text-ink-3">
            <span className="sr-only">{project.stackLabel}: </span>
            {project.stack.join(" · ")}
            {!project.stackComplete ? (
              <>
                {" "}
                <Missing>Stack — to add</Missing>
              </>
            ) : null}
          </p>
          {project.caseStudyUrl ? (
            <a
              href={project.caseStudyUrl}
              className="label inline-flex w-fit items-center gap-3 text-[14px] tracking-[0.24em] text-italic no-underline"
            >
              Read the case study <ArrowIcon />
            </a>
          ) : (
            <p className="label text-[13px] tracking-[0.24em] text-ink-4">Case study · coming soon</p>
          )}
        </Reveal>

        <Reveal delay={0.15} className={`flex flex-col gap-8 ${mirror ? "lg:order-1" : ""}`}>
          <Art project={project} />
          {project.flow ? <Flow steps={project.flow} color={accent.line} /> : null}
          {project.metrics ? <Metrics metrics={project.metrics} color={accent.line} /> : null}
          <StageStrip stages={project.stages} accent={project.accent} project={project.name} />
        </Reveal>
      </div>
    </article>
  );
}

/**
 * Sentinel's second story: engineering and leadership as two connected responsibilities,
 * with the abilities that link them sitting on the threads in between.
 */
function Leadership() {
  const { leadership } = site.work;
  const [lead, emphasis] = leadership.title.split(": ");
  return (
    <section aria-labelledby="leadership-title" className="relative mx-auto max-w-[1180px] px-6 pb-16 sm:px-10">
      <Reveal className="flex flex-col items-center gap-3 text-center">
        <h4 id="leadership-title" className="font-display text-[clamp(1.75rem,3.2vw,2.5rem)] font-normal leading-tight text-ink">
          {lead}: <em className="font-italic font-normal italic text-italic">{emphasis}</em>
        </h4>
        <p className="max-w-[48ch] text-[17px] leading-relaxed text-ink-2">{leadership.intro}</p>
      </Reveal>

      <div className="mt-12 grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-0">
        <Reveal className="glass-pane flex flex-col gap-2 rounded-2xl px-6 py-5 lg:h-auto">
          <h5 className="label text-[13px] tracking-[0.3em] text-label-blue">Engineering</h5>
          <p className="text-[16px] leading-relaxed text-ink-2">{leadership.engineering}</p>
        </Reveal>

        <ul aria-label="Abilities this work draws on" className="flex flex-wrap justify-center gap-2 lg:flex-col lg:items-center lg:gap-2.5">
          {leadership.abilities.map((ability, i) => (
            <Reveal as="li" key={ability} delay={0.1 + i * 0.08} className="thread flex items-center">
              <span className="label rounded-full border border-[var(--label-orange)] bg-chip px-3.5 py-1.5 text-[11px] tracking-[0.22em] text-label-orange">
                {ability}
              </span>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.2} className="glass-pane flex flex-col gap-2 rounded-2xl px-6 py-5 lg:h-auto">
          <h5 className="label text-[13px] tracking-[0.3em] text-label-pink">Leadership</h5>
          <p className="text-[16px] leading-relaxed text-ink-2">{leadership.leading}</p>
        </Reveal>
      </div>

      {/* Two paths — engineering and leadership — converge into the project. */}
      <Reveal variant="draw" className="mt-2 flex flex-col items-center lg:-mt-11">
        <svg
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 1000 90"
          preserveAspectRatio="none"
          className="hidden h-[90px] w-full lg:block"
        >
          <path
            d="M210 0 C210 60 500 30 500 88"
            fill="none"
            stroke="var(--label-blue)"
            strokeWidth="1.5"
            pathLength={1000}
          />
          <path
            d="M790 0 C790 60 500 30 500 88"
            fill="none"
            stroke="var(--label-pink)"
            strokeWidth="1.5"
            pathLength={1000}
          />
        </svg>
        <span aria-hidden="true" className="h-10 w-px bg-gradient-to-b from-transparent to-[var(--label-orange)] lg:hidden" />
        <p className="label flex flex-col items-center gap-2.5 text-[12px] tracking-[0.32em] text-label-orange">
          <span aria-hidden="true" className="h-3 w-3 rounded-full bg-[#FFB15C] shadow-[0_0_14px_#FF8A2B]" />
          {leadership.converge}
        </p>
      </Reveal>
    </section>
  );
}

export function Work() {
  const { work } = site;
  return (
    <section id="work" aria-labelledby="work-title" className="relative pt-16">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 xl:px-16">
        <Reveal>
          <ChapterLabel numeral="III">{work.label}</ChapterLabel>
          <h2 id="work-title" className="sr-only">
            {work.label}
          </h2>
        </Reveal>
      </div>

      {work.projects.map((project, i) => (
        <div key={project.slug}>
          <Chapter project={project} index={i} />
          {project.slug === work.leadership.project ? <Leadership /> : null}
        </div>
      ))}

      <Reveal className="mx-auto flex max-w-[1440px] flex-wrap items-baseline gap-x-6 gap-y-3 px-6 pb-8 sm:px-10 xl:px-16">
        <span className="label text-[12px] tracking-[0.32em] text-ink-3">Also built</span>
        <span className="text-[17px] text-ink-2">{work.alsoBuilt.join(" · ")}</span>
      </Reveal>
    </section>
  );
}
