/**
 * The hero universe: a breathing sun (Engineer's core), three data planets
 * (Collect · Engineer · Build), the streams between them, a starfield with the
 * Cancer constellation at night, and drifting clouds at twilight.
 *
 * Pure SVG + CSS — no animation library. Both modes are drawn once; the
 * `.only-night` / `.only-twilight` classes crossfade them when the theme changes.
 * Colours come from CSS variables in globals.css.
 *
 * Coordinates are authored on a 1440 × 820 canvas; callers crop it with `viewBox`.
 */

type CosmosProps = {
  /** Unique prefix so several instances on a page don't share gradient ids. */
  id: string;
  viewBox: string;
  preserveAspectRatio?: string;
  className?: string;
  /** Enlarges the small text labels when the universe is drawn at a small size. */
  labelScale?: number;
};

// [cx, cy, r, opacity]
const STARS: [number, number, number, number][] = [
  [760, 60, 1, 0.5], [812, 132, 1.4, 0.7], [884, 38, 0.9, 0.4], [958, 96, 1.2, 0.6],
  [1036, 24, 1, 0.5], [1110, 70, 1.6, 0.8], [1188, 34, 1, 0.5], [1402, 60, 1.2, 0.6],
  [1424, 236, 1, 0.5], [1360, 420, 1.3, 0.6], [1410, 520, 0.9, 0.4], [1326, 610, 1.4, 0.6],
  [1236, 700, 1, 0.5], [1120, 760, 1.2, 0.5], [980, 728, 0.9, 0.4], [860, 780, 1.1, 0.5],
  [790, 700, 0.8, 0.35], [720, 420, 0.9, 0.35], [680, 150, 0.8, 0.3], [610, 40, 0.8, 0.3],
  [600, 760, 0.8, 0.3],
];

// [cx, cy, r, colour, duration s, delay s]
const TWINKLES: [number, number, number, string, number, number][] = [
  [1160, 150, 1.6, "#FFE2C4", 4, 0],
  [1416, 392, 1.5, "#FFE2C4", 5, -2],
  [900, 660, 1.4, "#FFE2C4", 6, -1],
  [840, 220, 1.4, "#FFC2D9", 5.5, -3],
  [1290, 560, 1.3, "#FFC2D9", 4.5, -1.5],
];

// Cancer (ι, γ, δ, α, β) — the real shape: a short spine branching into two claws.
const CANCER: [number, number, number][] = [
  [1300, 59, 1.8],
  [1292, 111, 2],
  [1300, 150, 2.2],
  [1336, 212, 2.4],
  [1240, 207, 2.7],
];
const CANCER_PATH = "M1300 59 L1292 111 L1300 150 L1336 212 M1300 150 L1240 207";
// The Beehive cluster (Praesepe) sits at Cancer's heart.
const BEEHIVE: [number, number, number][] = [
  [1280, 128, 0.8], [1286, 134, 0.7], [1278, 137, 0.6], [1284, 126, 0.6], [1275, 131, 0.7], [1289, 130, 0.6],
];

const STREAM_COLLECT = "M 540 470 C 640 452, 700 440, 741 440 S 900 420, 958 412";
const STREAM_ENGINEER = "M 1004 514 C 1004 486, 1016 462, 1036 444";
/** Pulses start at the Collect planet so they never run under the hero text. */
const PULSE_COLLECT = "M 741 440 C 820 440, 900 420, 958 412";
const STREAM_BUILD = "M 1180 378 C 1260 340, 1330 300, 1388 288 S 1440 270, 1470 262";

function Cloud({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <ellipse cx="0" cy="10" rx="70" ry="16" />
      <circle cx="-20" cy="0" r="18" />
      <circle cx="12" cy="-6" r="22" />
    </g>
  );
}

export function Cosmos({
  id,
  viewBox,
  preserveAspectRatio = "xMidYMid meet",
  className,
  labelScale = 1,
}: CosmosProps) {
  const ref = (name: string) => `${id}-${name}`;
  const url = (name: string) => `url(#${ref(name)})`;
  const labelStyle = { fontFamily: "var(--font-label)", letterSpacing: "4px" } as const;

  return (
    <svg
      viewBox={viewBox}
      preserveAspectRatio={preserveAspectRatio}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <filter id={ref("glow")} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id={ref("haze")} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="22" />
        </filter>
        <filter id={ref("soft")} x="-30%" y="-60%" width="160%" height="220%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
        <radialGradient id={ref("sunNight")}>
          <stop offset="0" stopColor="#FFF6EC" />
          <stop offset="0.16" stopColor="#FF9CC2" />
          <stop offset="0.42" stopColor="#FF8A2B" />
          <stop offset="0.75" stopColor="#FF8A2B" stopOpacity="0.25" />
          <stop offset="1" stopColor="#FF8A2B" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={ref("sunDay")}>
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="0.18" stopColor="#FFE4C4" />
          <stop offset="0.45" stopColor="#FF8A2B" />
          <stop offset="0.75" stopColor="#FF8A2B" stopOpacity="0.3" />
          <stop offset="1" stopColor="#FF8A2B" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={ref("fade")} x1="0" x2="1">
          <stop offset="0" style={{ stopColor: "var(--stream-blue)" }} stopOpacity="0" />
          <stop offset="0.6" style={{ stopColor: "var(--stream-blue)" }} />
        </linearGradient>
        <radialGradient id={ref("pBlue")} cx="35%" cy="30%" r="75%">
          <stop offset="0" style={{ stopColor: "var(--pb-hi)" }} />
          <stop offset="0.42" style={{ stopColor: "var(--pb-mid)" }} />
          <stop offset="1" style={{ stopColor: "var(--pb-lo)" }} />
        </radialGradient>
        <radialGradient id={ref("pPink")} cx="35%" cy="30%" r="75%">
          <stop offset="0" style={{ stopColor: "var(--pp-hi)" }} />
          <stop offset="0.47" style={{ stopColor: "var(--pp-mid)" }} />
          <stop offset="1" style={{ stopColor: "var(--pp-lo)" }} />
        </radialGradient>
        <radialGradient id={ref("pOrange")} cx="35%" cy="30%" r="75%">
          <stop offset="0" style={{ stopColor: "var(--po-hi)" }} />
          <stop offset="0.42" style={{ stopColor: "var(--po-mid)" }} />
          <stop offset="1" style={{ stopColor: "var(--po-lo)" }} />
        </radialGradient>
        <clipPath id={ref("pinkClip")}>
          <circle cx="1004" cy="514" r="14" />
        </clipPath>
      </defs>

      {/* ── Night sky: stars, a small constellation, Cancer ── */}
      <g className="only-night">
        <g fill="#C9D4FF">
          {STARS.map(([cx, cy, r, o]) => (
            <circle key={`s${cx}-${cy}`} cx={cx} cy={cy} r={r} opacity={o} />
          ))}
        </g>
        {TWINKLES.map(([cx, cy, r, fill, dur, delay]) => (
          <circle
            key={`t${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r={r}
            fill={fill}
            className="anim-twinkle"
            style={{ animationDuration: `${dur}s`, animationDelay: `${delay}s` }}
          />
        ))}
        <path d="M860 130 L928 172 L992 116" fill="none" stroke="rgba(150,175,255,0.24)" strokeWidth="0.8" />
        <g fill="#E6EDFF">
          <circle cx="860" cy="130" r="1.6" />
          <circle cx="928" cy="172" r="2" className="anim-twinkle" style={{ animationDelay: "-1s" }} />
          <circle cx="992" cy="116" r="1.6" />
        </g>

        <path d={CANCER_PATH} fill="none" stroke="rgba(150,175,255,0.26)" strokeWidth="0.8" />
        <g fill="#E6EDFF">
          {CANCER.map(([cx, cy, r], i) => (
            <circle
              key={`c${i}`}
              cx={cx}
              cy={cy}
              r={r}
              className={i === 2 || i === 4 ? "anim-twinkle" : undefined}
              style={i === 4 ? { animationDuration: "6s", animationDelay: "-2s" } : undefined}
            />
          ))}
          <g opacity="0.7">
            {BEEHIVE.map(([cx, cy, r], i) => (
              <circle key={`b${i}`} cx={cx} cy={cy} r={r} />
            ))}
          </g>
        </g>
        <text x="1316" y="62" fontSize={10 * labelScale} fill="rgba(201,212,255,0.5)" style={labelStyle}>
          CANCER
        </text>
      </g>

      {/* ── Twilight sky: drifting clouds, Cancer as the first stars of dusk ── */}
      <g className="only-twilight">
        <g fill="#FFFFFF" opacity="0.85" filter={url("soft")}>
          <g className="anim-drift" style={{ animationDuration: "18s" }}>
            <Cloud x={880} y={140} />
          </g>
          <g className="anim-drift" style={{ animationDuration: "22s", animationDelay: "-8s" }}>
            <Cloud x={1300} y={550} scale={1.1} />
          </g>
          <g className="anim-drift" style={{ animationDuration: "26s", animationDelay: "-4s" }} opacity="0.6">
            <Cloud x={1130} y={88} scale={0.7} />
          </g>
        </g>
        <g opacity="0.75">
          <path d={CANCER_PATH} fill="none" stroke="rgba(22,41,106,0.22)" strokeWidth="0.8" />
          <g fill="#FFFFFF" stroke="rgba(22,41,106,0.18)" strokeWidth="0.6">
            {CANCER.map(([cx, cy, r], i) => (
              <circle key={`ct${i}`} cx={cx} cy={cy} r={r + 0.4} />
            ))}
          </g>
          <text x="1316" y="62" fontSize={10 * labelScale} fill="rgba(22,41,106,0.4)" style={labelStyle}>
            CANCER
          </text>
        </g>
      </g>

      {/* ── Orbits ── */}
      <g fill="none" strokeWidth="1" strokeDasharray="2 6" transform="rotate(-14 1070 410)">
        <ellipse cx="1070" cy="410" rx="360" ry="120" style={{ stroke: "var(--orbit-outer)" }} />
        <ellipse cx="1070" cy="410" rx="260" ry="90" style={{ stroke: "var(--orbit-inner)" }} />
      </g>

      {/* ── Streams: Collect → core → Build, with travelling pulses ── */}
      <g fill="none" strokeLinecap="round" filter={url("glow")}>
        <path d={STREAM_COLLECT} stroke={url("fade")} strokeWidth="3" />
        <path d={STREAM_ENGINEER} style={{ stroke: "var(--stream-pink)" }} strokeWidth="2.2" />
        <path d={STREAM_BUILD} style={{ stroke: "var(--stream-orange)" }} strokeWidth="3" />
        <path
          d={PULSE_COLLECT}
          pathLength={1000}
          strokeDasharray="110 890"
          strokeWidth="3.8"
          className="anim-flow"
          style={{ stroke: "var(--pulse-blue)" }}
        />
        <path
          d={STREAM_BUILD}
          pathLength={1000}
          strokeDasharray="120 880"
          strokeWidth="3.8"
          className="anim-flow"
          style={{ stroke: "var(--pulse-orange)", animationDuration: "4s" }}
        />
      </g>

      {/* ── The sun ── */}
      <circle className="only-night" cx="1070" cy="410" r="210" fill="#FF8A2B" opacity="0.22" filter={url("haze")} />
      <circle className="only-twilight" cx="1070" cy="410" r="220" fill="#FF8A2B" opacity="0.35" filter={url("haze")} />
      <g className="only-night">
        <circle className="anim-breathe" cx="1070" cy="410" r="120" fill={url("sunNight")} />
      </g>
      <g className="only-twilight">
        <circle className="anim-breathe" cx="1070" cy="410" r="125" fill={url("sunDay")} />
      </g>

      {/* ── Data planets ── */}
      <g className="anim-bob">
        <circle className="only-night" cx="741" cy="440" r="34" fill="#2456E6" opacity="0.28" filter={url("haze")} />
        <ellipse
          cx="741"
          cy="440"
          rx="30"
          ry="7"
          fill="none"
          strokeWidth="1"
          opacity="0.6"
          transform="rotate(-14 741 440)"
          style={{ stroke: "var(--label-blue)" }}
        />
        <circle cx="741" cy="440" r="17" fill={url("pBlue")} />
        <g style={{ fill: "var(--ring-dot)" }}>
          <circle cx="713" cy="445" r="1.8" />
          <circle cx="768" cy="433" r="1.6" />
          <circle cx="754" cy="449" r="1.3" />
        </g>
      </g>

      <g className="anim-bob" style={{ animationDuration: "6s", animationDelay: "-2s" }}>
        <circle className="only-night" cx="1004" cy="514" r="28" fill="#FF7FAE" opacity="0.25" filter={url("haze")} />
        <circle cx="1004" cy="514" r="14" fill={url("pPink")} />
        <g clipPath={url("pinkClip")} stroke="rgba(255,255,255,0.42)" strokeWidth="1">
          <path d="M 988 509 H 1020" />
          <path d="M 988 514 H 1020" />
          <path d="M 988 519 H 1020" />
        </g>
      </g>

      <g className="anim-bob" style={{ animationDuration: "8s", animationDelay: "-4s" }}>
        <circle className="only-night" cx="1388" cy="288" r="38" fill="#FF8A2B" opacity="0.3" filter={url("haze")} />
        <circle cx="1388" cy="288" r="20" fill={url("pOrange")} />
        <circle cx="1416" cy="271" r="3.5" style={{ fill: "var(--moonlet)" }} stroke="rgba(240,106,18,0.6)" strokeWidth="0.6" />
      </g>

      <g fontSize={12 * labelScale} textAnchor="middle" style={labelStyle}>
        <text x="741" y={470 + 14 * labelScale} style={{ ...labelStyle, fill: "var(--label-blue)" }}>
          COLLECT
        </text>
        <text x="1004" y={536 + 14 * labelScale} style={{ ...labelStyle, fill: "var(--label-pink)" }}>
          ENGINEER
        </text>
        <text x="1388" y={316 + 14 * labelScale} style={{ ...labelStyle, fill: "var(--label-orange)" }}>
          BUILD
        </text>
      </g>
    </svg>
  );
}
