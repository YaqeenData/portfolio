/**
 * A small line-drawn dataset glyph used beside Kaggle links (same stroke style as ArrowIcon).
 * To use Kaggle's official mark instead, swap this path for the one in Kaggle's brand assets.
 */
export function KaggleIcon({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" focusable="false" width="14" height="16" viewBox="0 0 14 16" className={className}>
      <g fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="7" cy="3.2" rx="5.6" ry="2.2" />
        <path d="M1.4 3.2v9.6c0 1.2 2.5 2.2 5.6 2.2s5.6-1 5.6-2.2V3.2" />
        <path d="M1.4 8c0 1.2 2.5 2.2 5.6 2.2s5.6-1 5.6-2.2" />
      </g>
    </svg>
  );
}
