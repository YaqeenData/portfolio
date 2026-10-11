export function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width="26"
      height="12"
      viewBox="0 0 26 12"
      className={className}
    >
      <path
        d="M0 6h23M18 1l5 5-5 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
