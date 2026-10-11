import { content, type Locale } from "@/content";
import type { EngineeringText } from "@/content/projects";
import { Reveal } from "@/components/ui/Reveal";

/**
 * "Beyond the Pipeline": engineering and leadership as two connected responsibilities,
 * with the abilities that link them on the threads in between, converging into the project.
 * Shown for any project whose content includes `contributions`.
 */
export function ProjectContributions({
  contributions,
  locale,
}: {
  contributions: NonNullable<EngineeringText["contributions"]>;
  locale: Locale;
}) {
  const leadership = contributions;
  const { ui } = content[locale];
  const [lead, emphasis] = leadership.title.split(": ");
  return (
    <section aria-labelledby="leadership-title" className="relative mx-auto max-w-[1180px] px-6 pb-20 sm:px-10">
      <Reveal className="flex flex-col items-center gap-3 text-center">
        <h2 id="leadership-title" className="font-display text-[clamp(1.75rem,3.2vw,2.5rem)] font-normal leading-tight text-ink">
          {lead}: <em className="font-italic font-normal italic text-italic">{emphasis}</em>
        </h2>
        <p className="max-w-[48ch] text-[17px] leading-relaxed text-ink-2">{leadership.intro}</p>
      </Reveal>

      <div className="mt-12 grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-0">
        <Reveal className="glass-pane flex flex-col gap-2 rounded-2xl px-6 py-5 lg:h-auto">
          <h3 className="label text-[13px] tracking-[0.3em] text-label-blue">{ui.engineering}</h3>
          <p className="text-[16px] leading-relaxed text-ink-2">{leadership.engineering}</p>
        </Reveal>

        <ul aria-label={ui.abilitiesLabel} className="flex flex-wrap justify-center gap-2 lg:flex-col lg:items-center lg:gap-2.5">
          {leadership.abilities.map((ability, i) => (
            <Reveal as="li" key={ability} delay={0.1 + i * 0.08} className="thread flex items-center">
              <span className="label rounded-full border border-[var(--label-orange)] bg-chip px-3.5 py-1.5 text-[11px] tracking-[0.22em] text-label-orange">
                {ability}
              </span>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.2} className="glass-pane flex flex-col gap-2 rounded-2xl px-6 py-5 lg:h-auto">
          <h3 className="label text-[13px] tracking-[0.3em] text-label-pink">{ui.leadership}</h3>
          <p className="text-[16px] leading-relaxed text-ink-2">{leadership.leadership}</p>
        </Reveal>
      </div>

      {/* Two paths — engineering and leadership — converge into the project. */}
      <Reveal variant="draw" className="mt-2 flex flex-col items-center lg:-mt-11">
        <svg
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 1000 90"
          preserveAspectRatio="none"
          className="hidden h-[90px] w-full lg:block rtl:-scale-x-100"
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
