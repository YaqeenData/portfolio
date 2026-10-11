"use client";

import { useEffect, useRef, useState } from "react";
import { useContent } from "@/components/i18n/LocaleProvider";

/** Deterministic pseudo-random numbers so the server and client draw the same sky. */
function seeded(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

const STARS = (() => {
  const rand = seeded(11);
  return Array.from({ length: 90 }, (_, i) => ({
    x: rand() * 100,
    y: rand() * 100,
    r: 0.6 + rand() * 1.3,
    o: 0.25 + rand() * 0.55,
    twinkle: i % 6 === 0,
    dur: 3 + rand() * 4,
    delay: -rand() * 6,
  }));
})();

/**
 * Shooting stars — each with its own start point, angle, length, speed and rhythm,
 * so they feel occasional and natural rather than repetitive.
 * [left %, top %, angle deg, trail px, travel px, cycle s, delay s]
 */
const SHOOTING: [number, number, number, number, number, number, number][] = [
  [8, 12, 22, 170, 520, 7.5, 0.5],
  [62, 6, 155, 140, 460, 9.5, 1.4],
  [30, 4, 32, 120, 380, 11, 2.3],
  [78, 22, 148, 190, 560, 8.5, 4.2],
  [18, 38, 18, 110, 340, 12.5, 6.1],
];

// [top %, scale, duration s, delay s, opacity]
const CLOUDS: [number, number, number, number, number][] = [
  [14, 1.1, 64, -10, 0.95],
  [30, 0.7, 82, -46, 0.8],
  [58, 1.35, 72, -30, 0.9],
  [74, 0.85, 90, -70, 0.75],
  [44, 0.55, 100, -5, 0.6],
];

/** Sun rays: [angle deg, length (outer radius), half-width at the base]. Long and short alternate. */
const RAYS: [number, number, number][] = Array.from({ length: 16 }, (_, i) => [
  i * 22.5,
  i % 2 ? 66 : 92 - (i % 4 === 0 ? 0 : 8),
  i % 2 ? 2.6 : 3.6,
]);

const HOLD_MS = 2600; // name + title entrance, then a moment to read
const FLIGHT_MS = 1150; // the name travels into the header
const SKIP_FLIGHT_MS = 700;
const REDUCED_MS = 1600; // reduced motion: a still moment, then a simple swap
const EASE = "cubic-bezier(0.65, 0, 0.35, 1)";

/**
 * The opening moment. "Yaqeen Alhalal" appears large in the centre, then — in one
 * continuous motion (FLIP) — shrinks and travels into the header, where the real
 * header name takes over at the exact same size and position. The sky fades away
 * behind it to reveal the portfolio. Plays once per browser session.
 */
export function Intro() {
  const site = useContent();
  const [phase, setPhase] = useState<"playing" | "flying" | "gone">("playing");
  const rootRef = useRef<HTMLDivElement>(null);
  const skyRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLParagraphElement>(null);
  const fadeRefs = useRef<HTMLElement[]>([]);
  const started = useRef(false);

  function finish() {
    document.documentElement.classList.add("intro-finished");
    setPhase("gone");
  }

  function fly(duration: number) {
    if (started.current) return;
    started.current = true;
    setPhase("flying");

    const name = nameRef.current;
    const target = document.querySelector<HTMLElement>("[data-brand-name]");
    const sky = skyRef.current;
    if (!name || !target || !sky || typeof name.animate !== "function") {
      finish();
      return;
    }

    // FLIP: measure both ends, then animate a single element between them.
    const from = name.getBoundingClientRect();
    const to = target.getBoundingClientRect();
    if (!from.width || !to.width) {
      finish();
      return;
    }
    const scale = to.width / from.width;
    const dx = to.left - from.left;
    const dy = to.top + to.height / 2 - (from.top + (from.height * scale) / 2);

    name.style.transformOrigin = "0 0";
    const flight = name.animate(
      [{ transform: "translate(0, 0) scale(1)" }, { transform: `translate(${dx}px, ${dy}px) scale(${scale})` }],
      { duration, easing: EASE, fill: "forwards" },
    );
    for (const el of fadeRefs.current) {
      el.animate([{ opacity: 1 }, { opacity: 0 }], { duration: duration * 0.35, easing: "ease-out", fill: "forwards" });
    }
    sky.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: duration * 0.8,
      delay: duration * 0.2,
      easing: "ease-in-out",
      fill: "forwards",
    });
    flight.onfinish = finish;
  }

  useEffect(() => {
    const root = document.documentElement;
    if (root.classList.contains("intro-skip")) {
      setPhase("gone");
      return;
    }
    try {
      sessionStorage.setItem("introSeen", "1");
    } catch {
      /* private mode: the intro will simply play again next visit */
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      const t = window.setTimeout(finish, REDUCED_MS);
      return () => window.clearTimeout(t);
    }

    let cancelled = false;
    const t = window.setTimeout(() => {
      // Measure only once the real fonts are in, so the landing spot is exact.
      const ready = document.fonts?.ready ?? Promise.resolve();
      ready.then(() => {
        if (!cancelled) fly(FLIGHT_MS);
      });
    }, HOLD_MS);
    return () => {
      cancelled = true;
      window.clearTimeout(t);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (phase !== "playing") return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") skip();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  function skip() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      finish();
      return;
    }
    fly(SKIP_FLIGHT_MS);
  }

  if (phase === "gone") return null;

  const addFade = (el: HTMLElement | null) => {
    if (el && !fadeRefs.current.includes(el)) fadeRefs.current.push(el);
  };

  return (
    <div
      ref={rootRef}
      className={`intro fixed inset-0 z-[200] flex items-center justify-center overflow-hidden ${
        phase === "flying" ? "pointer-events-none" : "cursor-pointer"
      }`}
      onClick={skip}
    >
      {/* Everything behind the name fades away together, revealing the portfolio. */}
      <div ref={skyRef} aria-hidden="true" className="intro-sky absolute inset-0">
        {/* Night: twinkling stars and the occasional shooting star. */}
        <div className="only-night intro-night absolute inset-0">
          <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" focusable="false">
            {STARS.map((s, i) => (
              <circle
                key={i}
                cx={`${s.x}%`}
                cy={`${s.y}%`}
                r={s.r}
                fill={i % 11 === 0 ? "#FFE2C4" : "#C9D4FF"}
                opacity={s.o}
                className={s.twinkle ? "anim-twinkle" : undefined}
                style={s.twinkle ? { animationDuration: `${s.dur}s`, animationDelay: `${s.delay}s` } : undefined}
              />
            ))}
          </svg>
          {SHOOTING.map(([left, top, angle, trail, travel, cycle, delay], i) => (
            <span
              key={i}
              className="shooting-star"
              style={
                {
                  left: `${left}%`,
                  top: `${top}%`,
                  width: trail,
                  "--angle": `${angle}deg`,
                  "--travel": `${travel}px`,
                  animationDuration: `${cycle}s`,
                  animationDelay: `${delay}s`,
                } as React.CSSProperties
              }
            />
          ))}
        </div>

        {/* Day: a soft bright sky, a shining sun, and clouds drifting across it. */}
        <div className="only-twilight intro-day absolute inset-0">
          <div className="intro-sun">
            <span className="sun-halo" />
            <svg className="sun-rays" viewBox="-100 -100 200 200" focusable="false">
              <defs>
                <linearGradient id="sun-ray" gradientUnits="userSpaceOnUse" x1="0" y1="-30" x2="0" y2="-95">
                  <stop offset="0" stopColor="#FFC65C" stopOpacity="0.85" />
                  <stop offset="1" stopColor="#FFD98A" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[0, 1].map((group) => (
                <g key={group} className={`sun-ray-group sun-ray-group-${group}`}>
                  {RAYS.filter((_, i) => i % 2 === group).map(([angle, length, half]) => (
                    <polygon
                      key={angle}
                      points={`${-half},-31 ${half},-31 0,${-length}`}
                      fill="url(#sun-ray)"
                      transform={`rotate(${angle})`}
                    />
                  ))}
                </g>
              ))}
            </svg>
            <span className="sun-disc" />
            <span className="sun-glint" />
          </div>

          {CLOUDS.map(([top, scale, dur, delay, opacity], i) => (
            <div
              key={i}
              className="intro-cloud absolute left-0"
              style={
                {
                  top: `${top}%`,
                  opacity,
                  animationDuration: `${dur}s`,
                  animationDelay: `${delay}s`,
                  "--cloud-x": `${(i * 23 + 8) % 85}vw`,
                } as React.CSSProperties
              }
            >
              <svg width={220 * scale} height={80 * scale} viewBox="0 -10 220 80" focusable="false">
                <g fill="#FFFFFF">
                  <ellipse cx="110" cy="50" rx="100" ry="20" />
                  <circle cx="78" cy="38" r="26" />
                  <circle cx="120" cy="28" r="32" />
                  <circle cx="158" cy="42" r="20" />
                </g>
              </svg>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex flex-col items-center gap-4 px-6 text-center">
        {/* The name keeps no wrapping so it can fly to the header as one line. */}
        <p
          ref={nameRef}
          className="intro-name whitespace-nowrap font-display text-[clamp(2.6rem,10vw,7.5rem)] font-normal leading-[1.05] text-ink will-change-transform"
        >
          {site.name}
        </p>
        <p ref={addFade} className="intro-title font-italic text-[clamp(1.4rem,3.6vw,2.75rem)] italic text-italic">
          {site.ui.introRole}
        </p>
        <span ref={addFade} aria-hidden="true" className="intro-rule mt-3 h-px w-28" />
      </div>

      <button
        ref={addFade}
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          skip();
        }}
        className="intro-skip-btn label absolute bottom-8 end-6 cursor-pointer rounded-full px-5 py-3 text-[12px] tracking-[0.3em] text-ink-2 sm:end-10"
      >
        {site.ui.skipIntro}
      </button>
    </div>
  );
}
