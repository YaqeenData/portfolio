/**
 * Notebook sketches for the About Me timeline — thin, slightly imperfect strokes, as if
 * drawn in an engineer's margin. Every stroke is a <path> so it can draw itself in, and
 * the wobble is seeded so server and client draw exactly the same lines.
 * Purely decorative: always hidden from assistive technology.
 */

type P = [number, number];
type Tone = "blue" | "pink" | "orange" | "ink";
type Stroke = { d: string; tone: Tone; w?: number };
type Label = { x: number; y: number; text: string; tone: Tone; size?: number };
type Sketch = { viewBox: string; strokes: Stroke[]; labels?: Label[] };

function seeded(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

const f = (n: number) => n.toFixed(1);

/** A hand-drawn line: one gentle bow and a tiny overshoot at the end. */
function line(a: P, b: P, rand: () => number, amp = 1.6): string {
  const mx = (a[0] + b[0]) / 2 + (rand() - 0.5) * amp * 2;
  const my = (a[1] + b[1]) / 2 + (rand() - 0.5) * amp * 2;
  const ex = b[0] + (rand() - 0.5) * amp;
  const ey = b[1] + (rand() - 0.5) * amp;
  return `M${f(a[0])} ${f(a[1])} Q${f(mx)} ${f(my)} ${f(ex)} ${f(ey)}`;
}

/** A hand-drawn box made of four slightly bowed lines. */
function box(x1: number, y1: number, x2: number, y2: number, r: () => number, tone: Tone, w?: number): Stroke[] {
  return [
    { d: line([x1, y1], [x2, y1], r), tone, w },
    { d: line([x2, y1], [x2, y2], r), tone, w },
    { d: line([x2, y2], [x1, y2], r), tone, w },
    { d: line([x1, y2], [x1, y1], r), tone, w },
  ];
}

/** A hand-drawn ellipse that doesn't quite close — the pen overshoots the start. */
function ellipse(cx: number, cy: number, rx: number, ry: number, rand: () => number, from = 0, sweep = 2.12): string {
  const n = 22;
  const pts: P[] = [];
  for (let i = 0; i <= n; i++) {
    const t = (from + (i / n) * sweep) * Math.PI;
    const j = 1 + (rand() - 0.5) * 0.06;
    pts.push([cx + Math.cos(t) * rx * j, cy + Math.sin(t) * ry * j]);
  }
  let d = `M${f(pts[0][0])} ${f(pts[0][1])}`;
  for (let i = 1; i < pts.length - 1; i++) {
    const mx = (pts[i][0] + pts[i + 1][0]) / 2;
    const my = (pts[i][1] + pts[i + 1][1]) / 2;
    d += ` Q${f(pts[i][0])} ${f(pts[i][1])} ${f(mx)} ${f(my)}`;
  }
  return d;
}

function dot(cx: number, cy: number, r = 2): string {
  // Rounded so the server and the browser always write identical path data.
  return `M${f(cx - r)} ${f(cy)} a${r} ${r} 0 1 0 ${f(2 * r)} 0 a${r} ${r} 0 1 0 ${f(-2 * r)} 0`;
}

function arrow(a: P, b: P, r: () => number, tone: Tone = "ink"): Stroke[] {
  const ang = Math.atan2(b[1] - a[1], b[0] - a[0]);
  const s = 6;
  const l: P = [b[0] - s * Math.cos(ang - 0.5), b[1] - s * Math.sin(ang - 0.5)];
  const rr: P = [b[0] - s * Math.cos(ang + 0.5), b[1] - s * Math.sin(ang + 0.5)];
  return [
    { d: line(a, b, r, 1.2), tone },
    { d: `M${f(l[0])} ${f(l[1])} L${f(b[0])} ${f(b[1])} L${f(rr[0])} ${f(rr[1])}`, tone },
  ];
}

function star(cx: number, cy: number, r: number): string {
  const k = r * 0.18;
  return `M${cx} ${cy - r} Q${cx + k} ${cy - k} ${cx + r} ${cy} Q${cx + k} ${cy + k} ${cx} ${cy + r} Q${cx - k} ${cy + k} ${cx - r} ${cy} Q${cx - k} ${cy - k} ${cx} ${cy - r}`;
}

function question(x: number, y: number, s = 1): string[] {
  return [
    `M${x} ${y} C${x} ${y - 9 * s} ${x + 11 * s} ${y - 10 * s} ${x + 11 * s} ${y - 2 * s} C${x + 11 * s} ${y + 4 * s} ${x + 5 * s} ${y + 4 * s} ${x + 5 * s} ${y + 10 * s}`,
    dot(x + 5 * s, y + 15 * s, 0.9),
  ];
}

function cylinder(cx: number, top: number, rx: number, h: number, r: () => number, tone: Tone): Stroke[] {
  return [
    { d: ellipse(cx, top, rx, rx * 0.32, r), tone },
    { d: line([cx - rx, top], [cx - rx + 0.5, top + h], r, 0.8), tone },
    { d: ellipse(cx, top + h, rx, rx * 0.32, r, 0, 1.05), tone },
    { d: line([cx + rx, top + h], [cx + rx - 0.5, top], r, 0.8), tone },
    { d: ellipse(cx, top + h * 0.5, rx, rx * 0.32, r, 0, 1.0), tone, w: 0.9 },
  ];
}

/* ── One sketch per milestone ─────────────────────────────── */

/** 01 · A little computer with code on its screen, and a tiny circuit trace. */
function computer(): Sketch {
  const r = seeded(3);
  return {
    viewBox: "0 0 210 120",
    strokes: [
      ...box(30, 12, 162, 86, r, "blue", 1.4),
      { d: "M78 38 L66 49 L78 60", tone: "orange", w: 1.6 },
      { d: "M92 63 L102 35", tone: "pink", w: 1.6 },
      { d: "M116 38 L128 49 L116 60", tone: "orange", w: 1.6 },
      { d: line([96, 86], [96, 100], r, 0.6), tone: "ink" },
      { d: line([74, 101], [120, 101], r, 0.8), tone: "ink" },
      { d: line([46, 112], [148, 112], r, 1), tone: "ink", w: 1 },
      { d: "M162 46 h14 v-18 h12", tone: "ink", w: 1 },
      { d: dot(190, 28, 2.4), tone: "pink" },
      { d: "M162 62 h22 v14", tone: "ink", w: 1 },
      { d: dot(184, 79, 2.4), tone: "blue" },
    ],
  };
}

/** 02 · A miniature application window connected to a database. */
function app(): Sketch {
  const r = seeded(11);
  return {
    viewBox: "0 0 210 112",
    strokes: [
      ...box(8, 14, 120, 96, r, "pink", 1.4),
      { d: line([8, 30], [120, 30], r, 0.8), tone: "pink", w: 1 },
      { d: dot(18, 22, 1.8), tone: "orange" },
      { d: dot(26, 22, 1.8), tone: "ink" },
      { d: dot(34, 22, 1.8), tone: "ink" },
      { d: line([20, 46], [82, 46], r, 0.6), tone: "ink", w: 1 },
      { d: line([20, 60], [104, 60], r, 0.6), tone: "ink", w: 1 },
      { d: line([20, 74], [66, 74], r, 0.6), tone: "ink", w: 1 },
      { d: line([76, 72], [104, 84], r, 0.4), tone: "blue", w: 1 },
      ...arrow([124, 56], [150, 56], r),
      ...cylinder(176, 32, 20, 46, r, "blue"),
    ],
  };
}

/** 03 · Scattered points that settle into a recognisable trend. */
function scatter(): Sketch {
  const r = seeded(23);
  const strokes: Stroke[] = [{ d: "M16 8 C15 40 17 80 16 104 C60 103 140 105 196 104", tone: "ink" }];
  for (let i = 0; i < 16; i++) {
    const x = 26 + i * 10.2;
    const y = 96 - Math.pow((x - 20) / 170, 1.5) * 76 + (r() - 0.5) * 22;
    strokes.push({ d: dot(x, y, 2.2), tone: i % 5 === 0 ? "pink" : "blue", w: 1.2 });
  }
  strokes.push({ d: "M22 98 C70 92 120 68 192 22", tone: "orange", w: 1.7 });
  return { viewBox: "0 0 210 114", strokes };
}

/** 04 · A data pipeline: database → API → processing → database. */
function pipeline(): Sketch {
  const r = seeded(19);
  return {
    viewBox: "0 0 232 100",
    strokes: [
      ...cylinder(22, 26, 18, 46, r, "blue"),
      ...arrow([44, 50], [62, 50], r),
      ...box(68, 32, 110, 68, r, "pink"),
      ...arrow([114, 50], [132, 50], r),
      { d: ellipse(150, 50, 15, 15, r), tone: "orange", w: 1.4 },
      { d: "M150 41 V59 M141 50 H159", tone: "orange", w: 1.1 },
      ...arrow([168, 50], [186, 50], r),
      ...cylinder(208, 26, 17, 46, r, "orange"),
    ],
    labels: [{ x: 89, y: 54, text: "API", tone: "pink", size: 11 }],
  };
}

/** 05 · A miniature cloud architecture with storage and processing below. */
function cloud(): Sketch {
  const r = seeded(31);
  return {
    viewBox: "0 0 180 118",
    strokes: [
      {
        d: "M44 52 C30 52 26 40 36 33 C36 19 56 15 64 24 C70 10 98 9 104 24 C114 17 132 24 129 38 C142 40 142 55 127 55 L46 55",
        tone: "blue",
        w: 1.5,
      },
      { d: line([66, 56], [52, 80], r, 1), tone: "ink", w: 1 },
      { d: line([110, 56], [122, 80], r, 1), tone: "ink", w: 1 },
      ...cylinder(48, 84, 15, 24, r, "orange"),
      ...box(104, 82, 142, 110, r, "pink"),
      { d: "M112 100 l7 -9 l6 6 l9 -10", tone: "pink", w: 1.1 },
      ...arrow([66, 96], [98, 96], r),
    ],
  };
}

/** 06 · A magnifying glass, question marks and a small spark. */
function curious(): Sketch {
  const r = seeded(43);
  return {
    viewBox: "0 0 190 118",
    strokes: [
      { d: ellipse(62, 52, 30, 30, r, 0.1, 2.08), tone: "orange", w: 1.6 },
      { d: ellipse(62, 52, 21, 21, r, 1.1, 0.4), tone: "orange", w: 1 },
      { d: line([84, 74], [114, 106], r, 1), tone: "orange", w: 2.6 },
      ...question(120, 30, 1.2).map((d) => ({ d, tone: "pink" as const, w: 1.5 })),
      ...question(156, 56, 0.8).map((d) => ({ d, tone: "blue" as const, w: 1.2 })),
      { d: star(168, 20, 10), tone: "orange", w: 1.3 },
      { d: star(146, 92, 5), tone: "blue", w: 1.1 },
    ],
  };
}

export const SKETCHES = { computer, app, scatter, pipeline, cloud, curious } as const;
export type SketchName = keyof typeof SKETCHES;

const TONE: Record<Tone, string> = {
  blue: "var(--label-blue)",
  pink: "var(--label-pink)",
  orange: "var(--label-orange)",
  ink: "var(--sketch-ink)",
};

/** Renders a sketch. Its strokes draw in when an ancestor marks it lit (see globals.css). */
export function SketchSvg({ name, className = "" }: { name: SketchName; className?: string }) {
  const sketch = SKETCHES[name]();
  return (
    <svg viewBox={sketch.viewBox} className={`sketch h-auto w-full overflow-visible ${className}`} aria-hidden="true" focusable="false">
      {sketch.strokes.map((s, i) => (
        <path
          key={i}
          d={s.d}
          pathLength={1000}
          fill="none"
          stroke={TONE[s.tone]}
          strokeWidth={s.w ?? 1.3}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ transitionDelay: `${0.15 + i * 0.06}s` }}
        />
      ))}
      {sketch.labels?.map((l) => (
        <text
          key={l.text}
          x={l.x}
          y={l.y}
          textAnchor="middle"
          fontSize={l.size ?? 11}
          className="sketch-label"
          style={{ fill: TONE[l.tone], fontFamily: "var(--font-label)", letterSpacing: "1.5px" }}
        >
          {l.text}
        </text>
      ))}
    </svg>
  );
}
