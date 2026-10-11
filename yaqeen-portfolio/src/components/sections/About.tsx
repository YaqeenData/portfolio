import { site } from "@/content/site";
import { Placeholder } from "@/components/ui/Placeholder";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { StreamDivider } from "@/components/ui/StreamDivider";
import { Languages } from "./Languages";

export function About() {
  const { about } = site;
  return (
    <>
      <div className="mx-auto hidden max-w-[1440px] px-16 pt-10 xl:block">
        <Reveal draw>
          <StreamDivider />
        </Reveal>
      </div>
      <Section id="about" index="02" label="About" title={about.title}>
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            {about.story ? (
              <div className="flex flex-col gap-5 text-[18px] leading-[1.75] text-ink-2">
                {about.story.map((p) => (
                  <p key={p.slice(0, 32)}>{p}</p>
                ))}
              </div>
            ) : (
              <Placeholder label="Personal story, motivation, approach, background" lines={6} className="h-full" />
            )}
          </Reveal>
          <Reveal delay={0.15}>
            <Languages />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
