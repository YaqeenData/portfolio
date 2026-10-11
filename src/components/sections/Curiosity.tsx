import type { Content } from "@/content";
import { Reveal } from "@/components/ui/Reveal";
import { ChapterLabel, Headline } from "@/components/ui/Type";
import { Timeline } from "./Timeline";

/** Deterministic pseudo-random numbers so the server and client render the same scatter. */
function seeded(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

const COLOURS = ["var(--label-blue)", "var(--label-blue)", "var(--label-blue)", "var(--label-pink)", "var(--label-orange)"];

/** Raw points: scattered on arrival, they settle into one ordered line — raw data becoming structure. */
const POINTS = (() => {
  const rand = seeded(42);
  return Array.from({ length: 44 }, (_, i) => {
    const row = i % 2;
    const x = (Math.floor(i / 2) / 21) * 100;
    return {
      x,
      y: row * 14,
      dx: Math.round(180 + rand() * 520),
      dy: Math.round((rand() - 0.5) * 520),
      delay: (rand() * 0.6).toFixed(2),
      size: row === 0 ? 4 : 3,
      colour: COLOURS[Math.floor(rand() * COLOURS.length)],
    };
  });
})();

export function Curiosity({ c }: { c: Content }) {
  const { curiosity } = c;
  return (
    <section
      id="curiosity"
      aria-labelledby="curiosity-title"
      className="relative overflow-hidden"
    >
      <div className="relative mx-auto flex min-h-[85vh] max-w-[1440px] items-center px-6 pb-16 pt-28 sm:px-10 xl:px-40">
        <div className="relative flex w-full max-w-[880px] flex-col gap-12">
        <Reveal variant="observe" className="gather flex w-full flex-col gap-8">
          <ChapterLabel numeral={c.ui.numerals[0]} className="gather-text">
            {curiosity.label}
          </ChapterLabel>
          <Headline
            id="curiosity-title"
            content={curiosity.statement}
            className="gather-text max-w-[17ch] text-[clamp(2.5rem,5.6vw,4.75rem)] leading-[1.06] tracking-[-0.02em] [font-variation-settings:'opsz'_144]"
          />
          <div aria-hidden="true" className="relative mt-4 h-6 w-full max-w-[620px]">
            {POINTS.map((p, i) => (
              <span
                key={i}
                className="particle absolute rounded-full"
                style={
                  {
                    left: `${p.x}%`,
                    top: p.y,
                    width: p.size,
                    height: p.size,
                    background: p.colour,
                    "--dx": `${p.dx}px`,
                    "--dy": `${p.dy}px`,
                    "--d": `${p.delay}s`,
                  } as React.CSSProperties
                }
              />
            ))}
          </div>
        </Reveal>

        </div>
      </div>

      {/* The journey: one line, six milestones, drawn as you scroll. */}
      <div className="mx-auto max-w-[1180px] px-6 pb-12 pt-10 sm:px-10">
        <Timeline />
      </div>
    </section>
  );
}
