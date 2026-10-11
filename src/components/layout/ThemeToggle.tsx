"use client";

import { useEffect, useState } from "react";
import { useContent } from "@/components/i18n/LocaleProvider";

type Mode = "night" | "twilight";

/**
 * The Moon Horizon toggle: a small window onto the sky.
 * Night — a crescent moon above the horizon. Twilight — the sun rises and two clouds drift in.
 * The visual state is driven by CSS on `html[data-theme]`, so it is correct before hydration.
 */
export function ThemeToggle({ size = 46 }: { size?: number }) {
  const { ui } = useContent();
  const [mode, setMode] = useState<Mode | null>(null);

  useEffect(() => {
    setMode(document.documentElement.dataset.theme === "twilight" ? "twilight" : "night");
  }, []);

  function toggle() {
    const next: Mode = document.documentElement.dataset.theme === "twilight" ? "night" : "twilight";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage unavailable — the choice still applies for this visit */
    }
    setMode(next);
  }

  const label =
    mode === null ? ui.themeToggle : mode === "night" ? ui.themeToTwilight : ui.themeToNight;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      aria-pressed={mode === null ? undefined : mode === "twilight"}
      className="theme-toggle relative shrink-0 cursor-pointer overflow-hidden rounded-full p-0"
      style={{ width: size, height: size }}
    >
      <svg aria-hidden="true" focusable="false" viewBox="0 0 68 68" width={size} height={size} className="block">
        <defs>
          <linearGradient id="tt-day" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#FFF5EE" />
            <stop offset="0.7" stopColor="#FFC9A8" />
            <stop offset="1" stopColor="#FFA3BA" />
          </linearGradient>
          <radialGradient id="tt-night" cx="50%" cy="30%" r="70%">
            <stop offset="0" stopColor="#1C3478" />
            <stop offset="1" stopColor="#0C1740" />
          </radialGradient>
        </defs>
        <rect width="68" height="68" fill="url(#tt-night)" className="only-night" />
        <rect width="68" height="68" fill="url(#tt-day)" className="only-twilight" />

        <g className="only-night">
          <circle cx="16" cy="22" r="1.3" fill="#C9D4FF" />
          <circle cx="50" cy="14" r="1.1" fill="#C9D4FF" />
          <circle cx="54" cy="30" r="1.1" fill="#C9D4FF" />
          <ellipse cx="34" cy="45" rx="16" ry="5" fill="#FF8A2B" opacity="0.35" />
        </g>

        <g className="tt-moon">
          <circle cx="34" cy="25" r="13" fill="#6E95FF" opacity="0.18" />
          <path d="M37 15a10 10 0 1 0 6 17a8 8 0 0 1-6-17z" fill="#EEF2FF" />
        </g>

        <g className="tt-sun">
          <circle cx="34" cy="25" r="13" fill="#FF8A2B" opacity="0.3" />
          <circle cx="34" cy="25" r="8.5" fill="#FF8A2B" />
        </g>

        <g className="tt-clouds" fill="#FFFFFF">
          <ellipse cx="17" cy="19" rx="7" ry="3.2" />
          <circle cx="14.5" cy="17.2" r="3" />
          <circle cx="19" cy="16" r="3.7" />
          <ellipse cx="49" cy="34" rx="8" ry="3.4" />
          <circle cx="46" cy="32" r="3.2" />
          <circle cx="51" cy="31" r="4" />
        </g>

        <rect x="0" y="44" width="68" height="24" fill="#0C1740" className="only-night" />
        <rect x="0" y="44" width="68" height="24" fill="#FFE2D2" className="only-twilight" />
        <path d="M12 44h44" stroke="#6E95FF" strokeWidth="1.8" strokeLinecap="round" className="only-night" />
        <path d="M12 44h44" stroke="#1F4FD8" strokeWidth="1.8" strokeLinecap="round" className="only-twilight" />
      </svg>
    </button>
  );
}
