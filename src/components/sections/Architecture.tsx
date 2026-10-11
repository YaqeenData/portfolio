"use client";

import { useEffect, useRef, useState } from "react";
import { fmt, localeMeta } from "@/content";
import { site } from "@/content/site";
import { useContent, useLocale } from "@/components/i18n/LocaleProvider";
import { ChapterLabel, Headline } from "@/components/ui/Type";

/** The number of layers is the same in every language. */
const N = site.architecture.layers.length;

// Art geometry (px) inside a 760 × 630 stage.
const SIZE = 300;
const CENTER_X = 540;
const BASE_Y = 520;
const GAP = 60;
const TIP_X = CENTER_X - SIZE * 0.707;

const num = (i: number) => String(i + 1).padStart(2, "0");

function labelTone(i: number) {
  return i < 2 ? "text-label-blue" : i < 4 ? "text-label-pink" : "text-label-orange";
}

function layerTone(i: number) {
  if (i === 0) return "arch-foundation";
  if (i >= N - 2) return "arch-warm";
  return "";
}

/**
 * Desktop: the section stays on screen while the visitor scrolls, and the architecture
 * assembles one layer at a time. Scrolling is never hijacked — progress simply follows it.
 * Reduced motion (and no JavaScript) shows the system fully assembled.
 */
function Assembly() {
  const { architecture, ui } = useContent();
  const dir = localeMeta[useLocale()].dir;
  const LAYERS = architecture.layers;
  const ref = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(N);
  // The panel follows the newest layer as it assembles; choosing a layer pins it.
  const [picked, setPicked] = useState<number | null>(null);
  useEffect(() => setPicked(null), [step]);
  const shown = picked ?? Math.min(step, N) - 1;
  const layer = LAYERS[shown];

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const progress = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 1;
      setStep(Math.min(N, 1 + Math.floor(progress * N)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const state = (i: number) => (i < step ? "on" : i === step ? "next" : "off");

  return (
    <div ref={ref} className="relative hidden xl:block" style={{ height: `${110 + N * 32}vh` }}>
      <div className="sticky top-0 flex h-screen items-center">
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-[340px_minmax(0,1fr)] items-center gap-10 px-16 pt-20">
          <div className="flex flex-col gap-6">
            <ChapterLabel numeral={ui.numerals[1]}>{architecture.label}</ChapterLabel>
            <Headline content={architecture.title} className="arch-title text-[52px] leading-[1.08]" />
            <div className="flex flex-col gap-4 pt-6">
              <div aria-hidden="true" className="flex gap-2.5">
                {LAYERS.map((l, i) => (
                  <span
                    key={l.name}
                    className="h-2.5 w-2.5 rounded-full border border-[var(--label-orange)] transition-colors duration-500"
                    style={{ background: i < step ? "var(--label-orange)" : "transparent" }}
                  />
                ))}
              </div>
              <p className="label text-[11px] tracking-[0.28em] text-ink-4">{ui.layerHint}</p>
              {/* The layer in focus: its tools surface here, one layer at a time. */}
              <div aria-live={picked !== null ? "polite" : "off"} className="min-h-[188px]">
                <div key={shown} className="stage-detail glass-pane flex flex-col gap-3 rounded-2xl px-5 py-4">
                  <p className={`label text-[12px] tracking-[0.26em] ${labelTone(shown)}`}>
                    {num(shown)} / {layer.name}
                  </p>
                  <ul className="flex flex-wrap gap-1.5">
                    {layer.tools.map((tool) => (
                      <li
                        key={tool}
                        className="rounded-full border border-[var(--chip-border)] bg-chip px-2.5 py-1 text-[13px] leading-none text-ink-2"
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="text-[15px] leading-relaxed text-ink-3">
                {ui.also}: {architecture.alsoExperienced.join(" · ")}
              </p>
            </div>
          </div>

          {/* The diagram keeps its geometry in every language; only its words follow the page. */}
          <div dir="ltr" className="relative mx-auto h-[630px] w-[760px]">
            {LAYERS.map((layer, i) => {
              const cy = BASE_Y - i * GAP;
              return (
                <div
                  key={layer.name}
                  aria-hidden="true"
                  data-state={state(i)}
                  data-focus={i === shown}
                  className={`arch-plane ${layerTone(i)}`}
                  style={{ left: CENTER_X - SIZE / 2, top: cy - SIZE / 2, width: SIZE, height: SIZE }}
                />
              );
            })}
            <div
              aria-hidden="true"
              data-state={step >= 2 ? "on" : "off"}
              className="arch-spine"
              style={{ left: CENTER_X - 3, top: BASE_Y - (N - 1) * GAP - 40, height: (N - 1) * GAP + 40 }}
            />
            <p
              aria-hidden="true"
              dir={dir}
              data-state={step >= 2 ? "on" : "off"}
              className="arch-label-fade label absolute text-[12px] tracking-[0.3em] text-label-orange"
              style={{ left: CENTER_X + 26, top: BASE_Y - (N - 1) * GAP - 52 }}
            >
              {ui.orchestratedWith} {architecture.orchestration}
            </p>
            {LAYERS.map((layer, i) => {
              const cy = BASE_Y - i * GAP;
              const off = state(i) === "off";
              return (
                <div key={layer.name} data-state={state(i)} className="arch-label-fade">
                  <button
                    type="button"
                    disabled={off}
                    aria-pressed={i === shown}
                    aria-label={fmt(ui.layerShowTools, { layer: layer.name })}
                    dir={dir}
                    onClick={() => setPicked(i)}
                    data-focus={i === shown}
                    className="arch-label-btn absolute flex items-baseline justify-end gap-3 rounded-lg px-2 py-1.5 text-right"
                    style={{ right: 760 - TIP_X + 14, top: cy - 17 }}
                  >
                    <span className="label text-[11px] tracking-[0.2em] text-ink-4">{num(i)}</span>
                    <span className={`arch-label-name label whitespace-nowrap text-[13px] tracking-[0.26em] ${labelTone(i)}`}>
                      {layer.short}
                    </span>
                  </button>
                  <span
                    aria-hidden="true"
                    className="absolute h-px w-4 bg-[var(--line-strong)]"
                    style={{ left: TIP_X - 18, top: cy }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* The same information as a plain list for assistive technology. */}
      <ol className="sr-only">
        {LAYERS.map((l) => (
          <li key={l.name}>
            {l.name}: {l.tools.join(", ")}
          </li>
        ))}
        <li>
          {ui.orchestratedWith} {architecture.orchestration}
        </li>
      </ol>
    </div>
  );
}

/** Phones and tablets: the same system as a stack of slabs that surface one by one. */
function Stack() {
  const { architecture, ui } = useContent();
  const LAYERS = architecture.layers;
  const reversed = [...LAYERS].map((l, i) => ({ ...l, i })).reverse();
  const list = useRef<HTMLOListElement>(null);

  // Start building once the foundation (layer 01, at the bottom) is in view.
  useEffect(() => {
    const el = list.current;
    const foundation = el?.lastElementChild;
    if (!el || !foundation) return;
    if (!("IntersectionObserver" in window)) {
      el.classList.add("is-visible");
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.6 },
    );
    io.observe(foundation);
    return () => io.disconnect();
  }, []);

  return (
    <div className="mx-auto max-w-[1440px] px-6 py-28 sm:px-10 xl:hidden">
      <div className="flex flex-col gap-6">
        <ChapterLabel numeral={ui.numerals[1]}>{architecture.label}</ChapterLabel>
        <Headline content={architecture.title} className="text-[clamp(2.25rem,6vw,3.25rem)] leading-[1.08]" />
      </div>
      {/* The stack reveals as one, building upward: 01 settles first at the bottom, 07 last at the top. */}
      <ol ref={list} className="arch-build mt-14 flex flex-col gap-3">
        {reversed.map((layer) => (
          <li
            key={layer.name}
            className="flex items-start gap-5"
            style={{ "--build-delay": `${layer.i * 0.16}s` } as React.CSSProperties}
          >
            <span
              aria-hidden="true"
              className={`arch-slab mt-1 h-8 w-14 shrink-0 ${layerTone(layer.i)}`}
            />
            <span className="flex flex-col gap-1 pb-4">
              <span className={`label text-[13px] tracking-[0.26em] ${labelTone(layer.i)}`}>
                <span className="text-ink-4">{num(layer.i)}</span> {layer.name}
              </span>
              <span className="text-[15px] leading-relaxed text-ink-2">{layer.tools.join(" · ")}</span>
            </span>
          </li>
        ))}
      </ol>
      <p className="label mt-6 text-[12px] tracking-[0.3em] text-label-orange">
        {ui.orchestratedWith} {architecture.orchestration}
      </p>
      <p className="mt-6 text-[15px] leading-relaxed text-ink-3">
        {ui.also}: {architecture.alsoExperienced.join(" · ")}
      </p>
    </div>
  );
}

export function Architecture() {
  const { architecture } = useContent();
  return (
    <section id="expertise" aria-label={architecture.label} className="relative">
      <Assembly />
      <Stack />
    </section>
  );
}
