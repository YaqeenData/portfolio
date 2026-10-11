import { content, type Locale } from "@/content";
import type { EngineeringText } from "@/content/projects";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Optional engineering notes — approach, challenges, lessons — for projects that include
 * them. Renders nothing when a project has none (Bayan, Sentinel and Najm today).
 */
export function ProjectNotes({ text, locale }: { text: EngineeringText; locale: Locale }) {
  const { ui } = content[locale];
  const blocks = [
    text.approach ? { title: ui.notes.approach, body: [text.approach] } : null,
    text.challenges?.length ? { title: ui.notes.challenges, body: text.challenges } : null,
    text.lessons?.length ? { title: ui.notes.lessons, body: text.lessons } : null,
  ].filter((b): b is { title: string; body: string[] } => b !== null);
  if (!blocks.length) return null;

  return (
    <section aria-label={ui.notes.label} className="mx-auto max-w-[1440px] px-6 pb-20 sm:px-10 xl:px-16">
      <div className="grid gap-6 md:grid-cols-3">
        {blocks.map((block, i) => (
          <Reveal key={block.title} delay={i * 0.1} className="glass-pane flex flex-col gap-3 rounded-2xl px-6 py-5">
            <h2 className="label text-[12px] tracking-[0.3em] text-accent">{block.title}</h2>
            {block.body.length === 1 ? (
              <p className="text-[16px] leading-relaxed text-ink-2">{block.body[0]}</p>
            ) : (
              <ul className="flex flex-col gap-2">
                {block.body.map((item) => (
                  <li key={item} className="relative ps-5 text-[15px] leading-[1.6] text-ink-2">
                    <span aria-hidden="true" className="absolute start-0 top-[0.75em] h-px w-2.5 bg-[var(--label-orange)]" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
