import type { Content } from "@/content";
import { Reveal } from "@/components/ui/Reveal";
import { ChapterLabel, Headline } from "@/components/ui/Type";

/** Five original constellation shapes — one per language. Points in a 150 × 70 box. */
const SHAPES: [number, number][][] = [
  [[5, 50], [40, 20], [78, 40], [108, 8], [145, 34]],
  [[5, 30], [36, 60], [74, 38], [104, 66], [145, 18]],
  [[5, 52], [36, 12], [76, 22], [106, 52], [145, 14]],
  [[5, 40], [44, 10], [66, 60], [104, 28], [145, 50]],
  [[5, 60], [36, 20], [76, 30], [96, 66], [145, 36]],
];

/**
 * Languages as constellations. Fluent: every star connected. Learning: the first stars are
 * drawn, a glowing star marks where the journey is now, and the rest wait faintly.
 * Every learning constellation stops at the same point — this is not a proficiency scale.
 */
function Constellation({ points, fluent }: { points: [number, number][]; fluent: boolean }) {
  return (
    <svg viewBox="0 0 150 72" className="h-auto w-full max-w-[180px]" aria-hidden="true" focusable="false">
      {points.slice(0, -1).map(([x1, y1], j) => {
        const [x2, y2] = points[j + 1];
        const drawn = fluent || j < 2;
        return (
          <line
            key={j}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            strokeWidth={drawn ? 1.3 : 1}
            strokeDasharray={drawn ? undefined : "2 5"}
            style={{ stroke: drawn ? (fluent ? "var(--blue)" : "var(--pink)") : "var(--line-strong)" }}
          />
        );
      })}
      {points.map(([x, y], j) => {
        if (fluent) return <circle key={j} cx={x} cy={y} r="3" style={{ fill: "var(--ink)" }} />;
        if (j < 2) return <circle key={j} cx={x} cy={y} r="3" style={{ fill: "var(--ink)" }} />;
        if (j === 2)
          return (
            <g key={j}>
              <circle cx={x} cy={y} r="10" fill="#FF8A2B" opacity="0.3" />
              <circle cx={x} cy={y} r="3.8" fill="#FFB15C" className="anim-twinkle" style={{ animationDuration: "3s" }} />
            </g>
          );
        return <circle key={j} cx={x} cy={y} r="2.2" style={{ fill: "var(--ink-3)" }} opacity="0.45" />;
      })}
    </svg>
  );
}

export function Beyond({ c }: { c: Content }) {
  const { beyond, ui } = c;
  return (
    <section id="beyond" aria-labelledby="beyond-title" className="relative overflow-hidden py-28 sm:py-40">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center px-6 text-center sm:px-10 xl:px-16">
        <Reveal className="flex flex-col items-center gap-5">
          <ChapterLabel>{beyond.label}</ChapterLabel>
          <Headline
            id="beyond-title"
            content={beyond.title}
            className="max-w-[22ch] text-[clamp(2rem,4vw,2.875rem)] leading-[1.15]"
          />
          <p className="max-w-[44ch] pt-2 text-[17px] leading-relaxed text-ink-2 sm:text-[18px]">{beyond.intro}</p>
        </Reveal>

        <ul className="mt-20 grid w-full max-w-[1200px] grid-cols-2 gap-x-6 gap-y-14 sm:grid-cols-3 lg:grid-cols-5">
          {beyond.languages.map((lang, i) => {
            const fluent = lang.status === "fluent";
            return (
              <Reveal as="li" key={lang.name} delay={i * 0.1} className="flex flex-col items-center gap-4">
                <Constellation points={SHAPES[i % SHAPES.length]} fluent={fluent} />
                <span className="flex flex-col items-center gap-1">
                  <span className="font-display text-[24px] text-ink">{lang.name}</span>
                  {"note" in lang && lang.note ? <span className="text-[13px] text-ink-3">{lang.note}</span> : null}
                  <span
                    className={`label pt-1 text-[12px] tracking-[0.26em] ${fluent ? "text-label-blue" : "text-label-orange"}`}
                  >
                    {fluent ? ui.fluent : ui.learning}
                  </span>
                  {"qualifications" in lang && lang.qualifications ? (
                    <span className="mt-2 flex flex-col items-center gap-1">
                      {lang.qualifications.map((q) => (
                        <span
                          key={q}
                          className="label rounded-full border border-[var(--chip-border)] bg-chip px-2.5 py-1 text-[10px] tracking-[0.2em] text-ink-2"
                        >
                          {q}
                        </span>
                      ))}
                    </span>
                  ) : null}
                </span>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
