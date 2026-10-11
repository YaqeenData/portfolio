"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import type { ProjectStage } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";
import { Missing } from "@/components/ui/Type";

/**
 * A project's workflow as connected, selectable stages.
 * - The stages surface one after another and the path draws itself in.
 * - The path lights up from the first stage to the one you've selected.
 * - Stages are real buttons (pointer cursor, hover glow, focus ring, arrow keys);
 *   the next stage gently invites a click. Selecting one reveals its detail below.
 */
export function StageStrip({
  stages,
  accent,
  project,
}: {
  stages: readonly ProjectStage[];
  accent: "amber" | "pink" | "blue";
  project: string;
}) {
  const [selected, setSelected] = useState(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const current = stages[selected];
  const accentVar = { amber: "var(--label-orange)", pink: "var(--label-pink)", blue: "var(--label-blue)" }[accent];
  const detailId = `${project.toLowerCase()}-stage-detail`;
  const last = stages.length - 1;
  const fill = last > 0 ? (selected / last) * 100 : 0;

  function select(i: number, focus = false) {
    const next = Math.max(0, Math.min(last, i));
    setSelected(next);
    if (focus) buttons.current[next]?.focus();
  }

  function onKeyDown(e: KeyboardEvent<HTMLUListElement>) {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      select(selected + 1, true);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      select(selected - 1, true);
    } else if (e.key === "Home") {
      e.preventDefault();
      select(0, true);
    } else if (e.key === "End") {
      e.preventDefault();
      select(last, true);
    }
  }

  const state = (i: number) => (i === selected ? "active" : i < selected ? "done" : i === selected + 1 ? "next" : "upcoming");

  return (
    <Reveal
      variant="observe"
      className="stage-strip flex flex-col gap-5"
    >
      <p className="stage-hint label flex items-center justify-center gap-2 text-[11px] tracking-[0.28em] text-ink-3">
        <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" focusable="false">
          <path
            d="M3 1.5v8.2l2.2-2 1.6 3.6 1.5-.7-1.6-3.5h3z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.1"
            strokeLinejoin="round"
          />
        </svg>
        Select a stage to explore
      </p>

      <div className="relative" style={{ "--stage-accent": accentVar } as React.CSSProperties}>
        {/* The workflow path: a quiet dashed track, lit up to the selected stage. */}
        <div aria-hidden="true" className="stage-track absolute left-[12.5%] right-[12.5%] top-[13px] h-0.5">
          <span className="absolute inset-0 border-t-2 border-dashed border-[var(--line-strong)]" />
          <span
            className="stage-fill absolute left-0 top-0 h-0.5 rounded-full"
            style={{ width: `${fill}%`, background: accentVar }}
          />
        </div>

        <ul
          className="relative grid"
          style={{ gridTemplateColumns: `repeat(${stages.length}, minmax(0, 1fr))` }}
          aria-label={`${project} workflow stages`}
          onKeyDown={onKeyDown}
        >
          {stages.map((stage, i) => (
            <li key={stage.name} className="flex justify-center">
              <button
                ref={(el) => {
                  buttons.current[i] = el;
                }}
                type="button"
                aria-pressed={i === selected}
                aria-controls={detailId}
                onClick={() => select(i)}
                data-state={state(i)}
                className="stage-btn flex min-h-11 flex-col items-center gap-3 rounded-xl px-2 pt-1"
                style={{ "--stage-delay": `${0.1 + i * 0.12}s` } as React.CSSProperties}
              >
                <span aria-hidden="true" className="stage-node relative flex h-6 w-6 items-center justify-center">
                  <span className="stage-ring absolute inset-0 rounded-full" />
                  <span className="stage-core relative block" />
                </span>
                <span className="flex flex-col items-center gap-0.5">
                  <span aria-hidden="true" className="label text-[10px] tracking-[0.2em] text-ink-4">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="stage-name label text-[11px] tracking-[0.24em] sm:text-[12px]">{stage.name}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div
        id={detailId}
        aria-live="polite"
        key={selected}
        className="stage-detail glass-pane mx-auto w-full max-w-[420px] rounded-2xl px-6 py-4"
        style={{ borderColor: accentVar }}
      >
        <p className="flex items-baseline justify-between gap-4">
          <span className="label text-[12px] tracking-[0.26em]" style={{ color: accentVar }}>
            {current.name}
          </span>
          <span className="label text-[10px] tracking-[0.22em] text-ink-4">
            Stage {selected + 1} of {stages.length}
          </span>
        </p>
        <p className="pt-1.5 text-[15px] leading-relaxed text-ink-2">
          {current.detail ?? <Missing>Stage detail — to write together</Missing>}
        </p>
      </div>
    </Reveal>
  );
}
