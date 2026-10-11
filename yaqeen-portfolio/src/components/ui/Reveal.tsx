"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Seconds to wait before this element surfaces — used to stagger siblings. */
  delay?: number;
  /** Draw SVG strokes in instead of rising from the blur (for stream dividers). */
  draw?: boolean;
};

/**
 * The Reveal sequence: elements surface from a soft blur the first time they scroll
 * into view. Content stays visible without JavaScript and with reduced motion
 * (see globals.css), so nothing depends on this effect.
 */
export function Reveal({ children, as: Tag = "div", className, delay = 0, draw = false }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      el.classList.add("is-visible");
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const attrs = draw ? { "data-reveal-draw": "" } : { "data-reveal": "" };

  return (
    <Tag
      ref={ref}
      className={className}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
      {...attrs}
    >
      {children}
    </Tag>
  );
}
