"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Seconds to wait before this element surfaces — used to stagger siblings. */
  delay?: number;
  /**
   * "rise"    — surfaces from a soft blur (default)
   * "draw"    — SVG strokes draw themselves in
   * "observe" — only adds `is-visible`; the element's own CSS decides what happens
   */
  variant?: "rise" | "draw" | "observe";
  id?: string;
};

/**
 * Elements reveal themselves the first time they scroll into view. Content stays
 * visible without JavaScript and with reduced motion (see globals.css).
 */
export function Reveal({ children, as: Tag = "div", className, delay = 0, variant = "rise", id }: RevealProps) {
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
      { rootMargin: "0px 0px -12% 0px", threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const attrs =
    variant === "draw" ? { "data-reveal-draw": "" } : variant === "observe" ? { "data-observe": "" } : { "data-reveal": "" };

  return (
    <Tag
      ref={ref}
      id={id}
      className={className}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
      {...attrs}
    >
      {children}
    </Tag>
  );
}
