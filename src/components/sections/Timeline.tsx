"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { useContent } from "@/components/i18n/LocaleProvider";
import { SketchSvg } from "./Sketches";


const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

type Geometry = { d: string; tail: string; w: number; h: number; nodeY: number[] };

/**
 * The About Me journey as one flowing line, like a data pipeline through each milestone.
 * - The line draws itself as the visitor scrolls (scroll position only — never hijacked).
 * - Milestones light up and reveal their sketch when the line reaches them.
 * - Small data particles travel along the part of the line already drawn.
 * Without JavaScript, or with reduced motion, everything is shown complete and still.
 */
export function Timeline() {
  const { curiosity, ui } = useContent();
  const { journey } = curiosity;
  const wrap = useRef<HTMLDivElement>(null);
  const drawn = useRef<SVGPathElement>(null);
  const particles = useRef<(SVGCircleElement | null)[]>([]);
  const [geo, setGeo] = useState<Geometry | null>(null);
  const [lit, setLit] = useState(journey.length);
  const progress = useRef({ total: 0, len: 0 });

  // Measure where every node sits and lay one gentle S-curve through them.
  const measure = useCallback(() => {
    const el = wrap.current;
    if (!el) return;
    const box = el.getBoundingClientRect();
    const nodes = [...el.querySelectorAll<HTMLElement>("[data-node]")].map((n) => {
      const r = n.getBoundingClientRect();
      return [r.left + r.width / 2 - box.left, r.top + r.height / 2 - box.top] as const;
    });
    if (!nodes.length) return;
    const amp = box.width >= 1024 ? 64 : 9;
    let d = `M${nodes[0][0]} 0 L${nodes[0][0]} ${nodes[0][1]}`;
    for (let i = 1; i < nodes.length; i++) {
      const [x1, y1] = nodes[i - 1];
      const [x2, y2] = nodes[i];
      const s = i % 2 ? 1 : -1;
      const dy = y2 - y1;
      d += ` C${x1 + s * amp} ${y1 + dy * 0.36} ${x2 + s * amp} ${y2 - dy * 0.36} ${x2} ${y2}`;
    }
    const [lx, ly] = nodes[nodes.length - 1];
    const end = el.querySelector<HTMLElement>("[data-tail-end]");
    const endY = end ? end.getBoundingClientRect().top - box.top - 14 : box.height;
    const tail = `M${lx} ${ly} L${lx} ${endY}`;
    setGeo({ d, tail, w: box.width, h: box.height, nodeY: nodes.map((n) => n[1]) });
  }, []);

  useIsoLayoutEffect(() => {
    measure();
    const el = wrap.current;
    if (!el || !("ResizeObserver" in window)) return;
    const ro = new ResizeObserver(() => measure());
    ro.observe(el);
    document.fonts?.ready.then(measure);
    return () => ro.disconnect();
  }, [measure]);

  // Follow scroll: draw the line up to a reading point a little below the middle of the screen.
  useEffect(() => {
    const path = drawn.current;
    if (!geo || !path) return;
    const total = path.getTotalLength();
    progress.current.total = total;
    path.style.strokeDasharray = `${total}`;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      path.style.strokeDashoffset = "0";
      progress.current.len = total;
      setLit(journey.length);
      return;
    }

    const lengthAtY = (y: number) => {
      let lo = 0;
      let hi = total;
      for (let k = 0; k < 18; k++) {
        const mid = (lo + hi) / 2;
        if (path.getPointAtLength(mid).y < y) lo = mid;
        else hi = mid;
      }
      return lo;
    };

    let frame = 0;
    const update = () => {
      frame = 0;
      const el = wrap.current;
      if (!el) return;
      const y = Math.max(0, Math.min(geo.h, window.innerHeight * 0.66 - el.getBoundingClientRect().top));
      const len = y >= geo.nodeY[geo.nodeY.length - 1] ? total : lengthAtY(y);
      progress.current.len = len;
      path.style.strokeDashoffset = `${total - len}`;
      setLit(geo.nodeY.filter((ny) => ny <= y + 2).length);
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
  }, [geo]);

  // Data particles travel along the completed path — only while the timeline is on screen.
  useEffect(() => {
    const path = drawn.current;
    const el = wrap.current;
    if (!geo || !path || !el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    let visible = false;
    const start = performance.now();
    const tick = (now: number) => {
      const { len } = progress.current;
      particles.current.forEach((c, i) => {
        if (!c) return;
        if (len < 60) {
          c.style.opacity = "0";
          return;
        }
        const speed = 90; // px per second, so long paths don't make particles race
        const t = (((now - start) / 1000) * speed + (i * len) / 3) % len;
        const p = path.getPointAtLength(t);
        c.setAttribute("cx", p.x.toFixed(1));
        c.setAttribute("cy", p.y.toFixed(1));
        const edge = Math.min(t, len - t);
        c.style.opacity = `${Math.min(1, edge / 40)}`;
      });
      if (visible) raf = requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      cancelAnimationFrame(raf);
      if (visible) raf = requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [geo]);

  const done = lit >= journey.length;

  return (
    <div ref={wrap} className={`timeline relative ${geo ? "tl-ready" : ""}`}>
      {/* Without measurements yet (no JS), a plain line stands in for the drawn path. */}
      <span aria-hidden="true" className="tl-fallback absolute bottom-0 start-[13px] top-0 w-px lg:start-1/2" />

      {geo ? (
        <svg
          aria-hidden="true"
          focusable="false"
          className="pointer-events-none absolute left-0 top-0 overflow-visible"
          width={geo.w}
          height={geo.h}
        >
          <defs>
            <linearGradient id="tl-ink" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2={geo.h}>
              <stop offset="0" style={{ stopColor: "var(--blue)" }} />
              <stop offset="0.55" style={{ stopColor: "var(--orange)" }} />
              <stop offset="1" style={{ stopColor: "var(--pink)" }} />
            </linearGradient>
          </defs>
          <path d={geo.d} fill="none" className="tl-track" strokeWidth="1.5" strokeDasharray="3 7" />
          <path ref={drawn} d={geo.d} fill="none" stroke="url(#tl-ink)" strokeWidth="2.5" strokeLinecap="round" className="tl-drawn" />
          <path d={geo.tail} fill="none" className="tl-tail" data-on={done} strokeWidth="1.5" strokeDasharray="3 7" />
          {[0, 1, 2].map((i) => (
            <circle
              key={i}
              ref={(c) => {
                particles.current[i] = c;
              }}
              r={i === 0 ? 3 : 2.2}
              className="tl-particle"
              style={{ opacity: 0 }}
            />
          ))}
        </svg>
      ) : null}

      <ol className="relative">
        {journey.map((m, i) => {
          const textLeft = i % 2 === 0;
          const on = i < lit;
          return (
            <li
              key={m.title}
              data-lit={on}
              data-prime={"prime" in m && m.prime ? true : undefined}
              className="tl-item relative grid grid-cols-[28px_minmax(0,1fr)] gap-x-5 pb-20 last:pb-16 lg:grid-cols-[minmax(0,1fr)_120px_minmax(0,1fr)] lg:gap-x-0 lg:pb-20"
            >
              <div className="col-start-1 row-start-1 flex justify-center pt-1.5 lg:col-start-2">
                <span data-node aria-hidden="true" className="tl-node relative flex items-center justify-center">
                  <span className="tl-node-ring absolute rounded-full" />
                  <span className="tl-node-core relative block rounded-full" />
                </span>
              </div>

              <div
                className={`tl-text col-start-2 row-start-1 flex flex-col gap-1.5 ${
                  textLeft ? "lg:col-start-1 lg:items-end lg:pe-4 lg:text-end" : "lg:col-start-3 lg:ps-4"
                }`}
              >
                <p className="tl-kicker label text-[11px] tracking-[0.3em] sm:text-[12px]">
                  {String(i + 1).padStart(2, "0")} · {m.chapter}
                </p>
                <h3 className="tl-title font-display font-normal leading-tight text-ink">{m.title}</h3>
                <p className="label text-[11px] tracking-[0.22em] text-ink-3 sm:text-[12px]">
                  {m.place ? (
                    <>
                      {m.place} <span className="text-ink-4">·</span>{" "}
                    </>
                  ) : null}
                  {m.when}
                </p>
                <p className="max-w-[40ch] pt-1 text-[16px] leading-[1.65] text-ink-2">{m.line}</p>
                {"recognition" in m && m.recognition ? (
                  <p className="label mt-1.5 inline-flex w-fit items-center gap-2 text-[11px] tracking-[0.22em] text-label-orange">
                    <svg aria-hidden="true" focusable="false" width="11" height="11" viewBox="0 0 12 12">
                      <path d="M6 0.5 l1.6 3.6 3.9 0.4 -2.9 2.6 0.8 3.9 -3.4 -2 -3.4 2 0.8 -3.9 -2.9 -2.6 3.9 -0.4z" fill="currentColor" />
                    </svg>
                    {m.recognition}
                  </p>
                ) : null}
              </div>

              <div
                className={`tl-sketch col-start-2 row-start-2 mt-6 w-full max-w-[200px] lg:row-start-1 lg:mt-0 lg:max-w-[230px] ${
                  textLeft ? "lg:col-start-3 lg:ps-6" : "lg:col-start-1 lg:justify-self-end lg:pe-6"
                }`}
              >
                <SketchSvg name={m.sketch} />
              </div>
            </li>
          );
        })}

      </ol>

      <a
        data-tail-end
        href="#expertise"
        className="label relative flex w-fit items-center gap-2 ps-[48px] text-[12px] tracking-[0.3em] text-ink-3 no-underline transition-colors hover:text-accent lg:mx-auto lg:ps-0"
      >
        {ui.nextSection} <span aria-hidden="true">↓</span>
      </a>
    </div>
  );
}
