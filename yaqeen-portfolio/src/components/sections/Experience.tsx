import { site } from "@/content/site";
import { GlassCard } from "@/components/ui/GlassCard";
import { Missing, Placeholder } from "@/components/ui/Placeholder";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function Experience() {
  const { experience } = site;
  return (
    <Section id="experience" index="03" label="Experience" title={experience.title}>
      <div className="relative">
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-[6px] top-2 w-0.5 bg-gradient-to-b from-blue to-transparent"
      />
      <ol className="relative flex flex-col gap-10 pl-9 sm:pl-12">
        {experience.items.map((item, i) => (
          <Reveal as="li" key={`${item.organization}-${item.role}`} delay={i * 0.12} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-9 top-10 h-3.5 w-3.5 rounded-full bg-[#FFB15C] shadow-[0_0_18px_#FF8A2B] sm:-left-12"
            />
            <GlassCard as="article" className="max-w-[980px]" paneClassName="flex flex-col gap-3.5 p-7 sm:p-9">
              <p className="label text-[13px] tracking-[0.28em] text-blue">
                {item.dates ?? <Missing>Dates</Missing>}
              </p>
              <h3 className="font-display text-[28px] font-normal text-ink sm:text-[34px]">{item.role}</h3>
              <p className="text-[17px] text-ink-2 sm:text-[18px]">
                {item.organization}
                {item.organizationShort ? <span className="text-ink-3"> ({item.organizationShort})</span> : null}
              </p>
              <div aria-hidden="true" className="my-2 h-px bg-gradient-to-r from-[var(--line-strong)] to-transparent" />
              {item.details ? (
                <ul className="flex list-disc flex-col gap-2 pl-5 text-[17px] leading-[1.7] text-ink-2">
                  {item.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              ) : (
                <Placeholder label="Responsibilities, systems, tools used" lines={2} className="border-0 bg-transparent p-0 sm:p-0" />
              )}
            </GlassCard>
          </Reveal>
        ))}
      </ol>
      </div>
    </Section>
  );
}
