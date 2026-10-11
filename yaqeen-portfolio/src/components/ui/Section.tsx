import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionProps = {
  id: string;
  index: string;
  label: string;
  /** The section headline. `null` renders a marked placeholder headline. */
  title: ReactNode | null;
  placeholderTitle?: string;
  children: ReactNode;
  className?: string;
};

/** Every section opens the same way: a structural number, a label, then the headline. */
export function Section({ id, index, label, title, placeholderTitle, children, className = "" }: SectionProps) {
  const headingId = `${id}-title`;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`mx-auto max-w-[1440px] px-6 pt-24 sm:px-10 sm:pt-32 xl:px-16 xl:pt-36 ${className}`}
    >
      <Reveal>
        <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
          <span aria-hidden="true" className="label text-[30px] font-extralight tracking-normal text-blue sm:text-[34px]">
            {index}
          </span>
          <span className="label text-[13px] font-medium tracking-[0.32em] text-accent sm:text-[14px]">{label}</span>
        </div>
        <h2
          id={headingId}
          className={`mt-4 font-display text-[32px] font-normal leading-[1.15] sm:text-[44px] ${
            title === null ? "placeholder-title" : "text-ink"
          }`}
        >
          {title === null ? `[ ${placeholderTitle ?? `${label} headline`} — to write together ]` : title}
        </h2>
      </Reveal>
      <div className="pt-10 sm:pt-12">{children}</div>
    </section>
  );
}
