import type { Project } from "@/content/projects";

/** Each project's accent colour, as text class, line colour and soft background glow. */
export const ACCENT: Record<Project["accent"], { label: string; line: string; glow: string }> = {
  amber: { label: "text-label-orange", line: "var(--label-orange)", glow: "rgba(255,138,43,0.14)" },
  pink: { label: "text-label-pink", line: "var(--label-pink)", glow: "rgba(255,127,174,0.12)" },
  blue: { label: "text-label-blue", line: "var(--label-blue)", glow: "rgba(110,149,255,0.14)" },
};

/** "01", "02", … from a project's position in the gallery. */
export const projectNumber = (index: number) => String(index + 1).padStart(2, "0");
