import { useId } from "react";

/** A stream of light with its orange node — the divider between major sections. */
export function StreamDivider({ className = "" }: { className?: string }) {
  const gradientId = `stream-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 1312 40"
      className={`block h-auto w-full ${className}`}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" x2="1">
          <stop offset="0" style={{ stopColor: "var(--stream-blue)" }} stopOpacity="0" />
          <stop offset="0.3" style={{ stopColor: "var(--stream-blue)" }} />
          <stop offset="0.7" style={{ stopColor: "var(--stream-blue)" }} />
          <stop offset="1" style={{ stopColor: "var(--stream-blue)" }} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 20 C 330 20, 480 8, 656 20 S 980 32, 1312 20"
        pathLength={1000}
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="1.4"
        vectorEffect="non-scaling-stroke"
      />
      <circle cx="656" cy="20" r="12" fill="#FF8A2B" opacity="0.3" />
      <circle cx="656" cy="20" r="4" fill="#FFB15C" />
    </svg>
  );
}
