import type { Headline as HeadlineContent } from "@/content/site";

/** The small structural label that opens each moment, e.g. "II · How I engineer". */
export function ChapterLabel({
  numeral,
  children,
  className = "",
}: {
  numeral?: string;
  children: string;
  className?: string;
}) {
  return (
    <p className={`label text-[13px] font-medium tracking-[0.34em] text-accent sm:text-[14px] ${className}`}>
      {numeral ? `${numeral} · ` : ""}
      {children}
    </p>
  );
}

/** A headline in the voice serif, with its emphasis in the pink Bodoni italic. */
export function Headline({
  content,
  as: Tag = "h2",
  id,
  className = "",
}: {
  content: HeadlineContent;
  as?: "h1" | "h2" | "h3";
  id?: string;
  className?: string;
}) {
  return (
    <Tag id={id} className={`font-display font-normal text-ink ${className}`}>
      {content.lead} <em className="font-italic font-normal italic text-italic">{content.emphasis}</em>
    </Tag>
  );
}

/** Inline marker for information not provided yet — visible on purpose. */
export function Missing({ children, className = "" }: { children: string; className?: string }) {
  return (
    <span className={`label text-[12px] tracking-[0.22em] text-placeholder ${className}`}>[ {children} ]</span>
  );
}
