/**
 * A clearly marked placeholder for content we haven't written together yet.
 * It is intentionally visible so nothing unfinished is mistaken for a real claim.
 */
export function Placeholder({
  label,
  lines = 4,
  className = "",
}: {
  label: string;
  lines?: number;
  className?: string;
}) {
  const widths = ["92%", "98%", "84%", "62%", "90%", "76%"];
  return (
    <div className={`dash-box flex flex-col gap-4 p-7 sm:p-8 ${className}`}>
      <p className="label text-[11px] leading-relaxed tracking-[0.28em] text-placeholder">
        Placeholder · {label}
      </p>
      {Array.from({ length: lines }, (_, i) => (
        <div key={i} aria-hidden="true" className="skeleton" style={{ width: widths[i % widths.length] }} />
      ))}
    </div>
  );
}

/** Inline marker for a missing value, e.g. dates or a URL. */
export function Missing({ children }: { children: string }) {
  return (
    <span className="label text-[13px] tracking-[0.22em] text-placeholder">
      [ {children} ]
    </span>
  );
}
