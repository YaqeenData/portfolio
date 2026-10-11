import { site, type ExpertiseGroup } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const GROUP_STYLE: Record<ExpertiseGroup["key"], { dot: string; label: string }> = {
  collect: { dot: "bg-blue shadow-[0_0_16px_var(--blue)]", label: "text-label-blue" },
  engineer: { dot: "bg-pink shadow-[0_0_16px_var(--orange)]", label: "text-label-pink" },
  build: { dot: "bg-orange shadow-[0_0_16px_var(--orange)]", label: "text-label-orange" },
};

export function Expertise() {
  const { expertise, philosophy } = { expertise: site.expertise, philosophy: site.philosophy };
  return (
    <Section
      id="expertise"
      index="05"
      label="Technical expertise"
      title={
        <>
          {philosophy[0]}. {philosophy[1]}.{" "}
          <em className="font-italic font-normal italic text-italic">{philosophy[2]}.</em>
        </>
      }
    >
      <div className="relative">
        {/* The pipeline that runs through all three groups: blue → pink → orange. */}
        <span
          aria-hidden="true"
          className="absolute left-2 right-2 top-[7px] hidden h-0.5 lg:block"
          style={{
            // Hard-edged segments with small gaps: blue and pink never blend into purple.
            background:
              "linear-gradient(90deg, var(--blue) 0 31%, transparent 31% 34.5%, var(--pink) 34.5% 64%, transparent 64% 67.5%, var(--orange) 67.5% 100%)",
          }}
        />
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-10">
          {expertise.groups.map((group, i) => (
            <Reveal key={group.key} delay={i * 0.15} className="relative flex flex-col gap-5">
              <span aria-hidden="true" className={`h-4 w-4 rounded-full ${GROUP_STYLE[group.key].dot}`} />
              <div className="flex flex-col gap-1.5">
                <span className={`label text-[14px] font-medium tracking-[0.32em] ${GROUP_STYLE[group.key].label}`}>
                  {group.label}
                </span>
                <h3 className="font-display text-[24px] font-normal text-ink sm:text-[26px]">{group.title}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="tool">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-line pt-7">
          <span className="label text-[13px] tracking-[0.32em] text-ink-3">Also experienced in</span>
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[16px] text-ink-2">
            {expertise.alsoExperienced.map((item, i) => (
              <li key={item} className="flex items-center gap-4">
                {i > 0 ? (
                  <span aria-hidden="true" className="text-ink-4">
                    ·
                  </span>
                ) : null}
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
