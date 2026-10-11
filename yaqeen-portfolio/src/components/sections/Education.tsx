import { site } from "@/content/site";
import { GlassCard } from "@/components/ui/GlassCard";
import { Missing } from "@/components/ui/Placeholder";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

function ListOrPlaceholder({ title, items }: { title: string; items: readonly string[] | null }) {
  if (items && items.length > 0) {
    return (
      <GlassCard paneClassName="flex flex-col gap-3 p-7">
        <h3 className="label text-[12px] tracking-[0.3em] text-blue">{title}</h3>
        <ul className="flex flex-col gap-2 text-[16px] text-ink-2">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </GlassCard>
    );
  }
  return (
    <div className="dash-box flex h-full flex-col gap-3.5 p-7">
      <h3 className="label text-[12px] tracking-[0.3em] text-blue">{title}</h3>
      <span aria-hidden="true" className="skeleton w-[70%]" />
      <span aria-hidden="true" className="skeleton w-1/2" />
      <span className="label text-[11px] tracking-[0.28em] text-placeholder">Placeholder</span>
    </div>
  );
}

export function Education() {
  const { education } = site;
  return (
    <Section id="education" index="06" label="Education & achievements" title={education.title} placeholderTitle="Education headline">
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <Reveal className="h-full">
          <GlassCard className="h-full" paneClassName="flex flex-col gap-3 p-7">
            <p className="label text-[12px] tracking-[0.3em] text-blue">Degree</p>
            <h3 className="font-display text-[28px] font-normal text-ink">{education.degree.field}</h3>
            <p className="flex flex-wrap gap-2">
              {education.degree.institution ?? <Missing>University</Missing>}
              <span aria-hidden="true" className="text-ink-4">
                ·
              </span>
              {education.degree.year ?? <Missing>Year</Missing>}
            </p>
          </GlassCard>
        </Reveal>
        <Reveal delay={0.08} className="h-full">
          <ListOrPlaceholder title="Certifications" items={education.certifications} />
        </Reveal>
        <Reveal delay={0.16} className="h-full">
          <ListOrPlaceholder title="Bootcamps" items={education.bootcamps} />
        </Reveal>
        <Reveal delay={0.24} className="h-full">
          <ListOrPlaceholder title="Achievements" items={education.achievements} />
        </Reveal>
      </div>
    </Section>
  );
}
