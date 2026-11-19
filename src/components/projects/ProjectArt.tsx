/**
 * Each project gets its own visual world, drawn in SVG so it scales cleanly.
 *  - Bayan, "the archive": loose documents settle into ordered, versioned strata.
 *  - Sentinel, "the watch": a monitored stream where drift and a schema change light up.
 *  - Najm, "the sky": a drone's view of the road, a detection frame, and a report on a phone.
 * These illustrate the ideas in each project's description — not measured results.
 */

const DOCS: [number, number, number][] = [
  [28, 70, -16], [96, 30, 12], [150, 120, -8], [40, 190, 18], [120, 230, -20], [186, 60, 22], [70, 300, -6], [180, 280, 10],
];

export function BayanArt({ id }: { id: string }) {
  const slabs = [0, 1, 2, 3];
  return (
    <svg viewBox="0 0 640 420" className="h-auto w-full" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id={`${id}-glow`}>
          <stop offset="0" stopColor="#FF8A2B" stopOpacity="0.28" />
          <stop offset="1" stopColor="#FF8A2B" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${id}-top`} x1="0" x2="1">
          <stop offset="0" stopColor="#FFA04D" stopOpacity="0.85" />
          <stop offset="1" stopColor="#FF8A2B" stopOpacity="0.25" />
        </linearGradient>
      </defs>
      <ellipse cx="440" cy="230" rx="260" ry="190" fill={`url(#${id}-glow)`} />

      {DOCS.map(([x, y, r], i) => (
        <g key={i} className="anim-bob" style={{ animationDuration: `${6 + (i % 4)}s`, animationDelay: `${-i * 0.7}s` }}>
          <g transform={`translate(${x} ${y}) rotate(${r} 28 37)`}>
            <rect width="56" height="74" rx="7" style={{ fill: "var(--doc-fill)", stroke: "var(--doc-stroke)" }} />
            <rect x="9" y="11" width="26" height="4" rx="2" fill="#FFB15C" opacity="0.75" />
            <rect x="9" y="22" width="38" height="3" rx="1.5" style={{ fill: "var(--doc-line)" }} />
            <rect x="9" y="30" width="32" height="3" rx="1.5" style={{ fill: "var(--doc-line)" }} />
            <rect x="9" y="38" width="36" height="3" rx="1.5" style={{ fill: "var(--doc-line)" }} />
            <rect x="9" y="46" width="22" height="3" rx="1.5" style={{ fill: "var(--doc-line)" }} />
          </g>
        </g>
      ))}

      <path
        d="M 262 210 C 300 210, 318 196, 352 196"
        fill="none"
        stroke="#FFA04D"
        strokeWidth="2"
        strokeDasharray="4 6"
        className="anim-flow"
        pathLength={1000}
        style={{ animationDuration: "12s" }}
      />

      {slabs.map((i) => {
        const y = 300 - i * 58;
        const top = i === slabs.length - 1;
        return (
          <g key={i}>
            <polygon
              points={`${384},${y} ${612},${y} ${590},${y + 40} ${362},${y + 40}`}
              fill={top ? `url(#${id}-top)` : "rgba(255,177,92,0.12)"}
              stroke={top ? "#FFC596" : "rgba(255,177,92,0.45)"}
              strokeWidth="1"
              style={top ? { filter: "drop-shadow(0 0 16px rgba(255,138,43,0.55))" } : undefined}
            />
            <text
              x="394"
              y={y + 26}
              fontSize="12"
              style={{ fontFamily: "var(--font-label)", letterSpacing: "2px", fill: top ? "#2A1206" : "var(--label-orange)" }}
            >
              {`V${i + 1}`}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

type ArtLabels = { stream: string; expected: string; drift: string; schema: string; detected: string; report: string };

export function SentinelArt({ id, labels }: { id: string; labels: ArtLabels }) {
  const packets = Array.from({ length: 54 }, (_, i) => {
    const x = 40 + i * 11;
    const inDrift = i >= 22 && i <= 30;
    const drift = inDrift ? -40 * Math.sin(((i - 22) / 8) * Math.PI) : 0;
    // Rounded: Math.sin can differ in the last digit between the server and the browser,
    // which would make React's hydration see two different drawings.
    const y = Math.round((232 + 15 * Math.sin(i / 3.1) + drift) * 10) / 10;
    return { x, y, inDrift, schema: i >= 39 };
  });

  return (
    <svg viewBox="0 0 660 360" className="h-auto w-full" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={`${id}-glass`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" style={{ stopColor: "var(--glass-1)" }} />
          <stop offset="1" style={{ stopColor: "var(--glass-2)" }} />
        </linearGradient>
        <clipPath id={`${id}-clip`}>
          <rect x="34" y="40" width="592" height="280" />
        </clipPath>
        <radialGradient id={`${id}-glow`}>
          <stop offset="0" stopColor="#FF7FAE" stopOpacity="0.22" />
          <stop offset="1" stopColor="#FF7FAE" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="330" cy="190" rx="320" ry="180" fill={`url(#${id}-glow)`} />
      <rect
        x="10"
        y="20"
        width="640"
        height="320"
        rx="28"
        fill={`url(#${id}-glass)`}
        style={{ stroke: "var(--glass-border)" }}
      />

      <circle cx="46" cy="60" r="4" fill="#FF7FAE" className="anim-twinkle" style={{ animationDuration: "2s" }} />
      <text x="60" y="64" fontSize="12" style={{ fontFamily: "var(--font-label)", letterSpacing: "3px", fill: "var(--ink-2)" }}>
        {labels.stream}
      </text>

      <rect x="34" y="200" width="592" height="64" style={{ fill: "var(--band)" }} />
      <path d="M34 200 H626 M34 264 H626" style={{ stroke: "var(--line-strong)" }} strokeDasharray="3 6" />
      <text x="44" y="292" fontSize="11" style={{ fontFamily: "var(--font-label)", letterSpacing: "3px", fill: "var(--ink-3)" }}>
        {labels.expected}
      </text>

      <g clipPath={`url(#${id}-clip)`}>
        <g className="anim-stream">
          {packets.map((p, i) =>
            p.schema ? (
              <rect key={i} x={p.x - 3} y={p.y - 3} width="6" height="6" rx="1" fill="#FFA04D" />
            ) : (
              <circle
                key={i}
                cx={p.x}
                cy={p.y}
                r={p.inDrift ? 3.6 : 2.6}
                style={{ fill: p.inDrift ? "var(--stream-pink)" : "var(--label-blue)" }}
              />
            ),
          )}
        </g>
      </g>

      <text x="300" y="168" fontSize="12" style={{ fontFamily: "var(--font-label)", letterSpacing: "3px", fill: "var(--label-pink)" }}>
        {labels.drift}
      </text>
      <path d="M 466 110 V 316" stroke="#FFB15C" strokeOpacity="0.7" strokeDasharray="4 5" />
      <text x="476" y="122" fontSize="12" style={{ fontFamily: "var(--font-label)", letterSpacing: "3px", fill: "var(--label-orange)" }}>
        {labels.schema}
      </text>
    </svg>
  );
}

export function NajmArt({ id, labels }: { id: string; labels: ArtLabels }) {
  const rotors: [number, number][] = [
    [128, 76],
    [212, 76],
  ];
  return (
    <svg viewBox="0 0 660 360" className="h-auto w-full" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id={`${id}-glow`}>
          <stop offset="0" stopColor="#6E95FF" stopOpacity="0.26" />
          <stop offset="1" stopColor="#6E95FF" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${id}-cone`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" style={{ stopColor: "var(--label-blue)" }} stopOpacity="0.5" />
          <stop offset="1" style={{ stopColor: "var(--label-blue)" }} stopOpacity="0.04" />
        </linearGradient>
        <linearGradient id={`${id}-glass`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" style={{ stopColor: "var(--glass-1)" }} />
          <stop offset="1" style={{ stopColor: "var(--glass-2)" }} />
        </linearGradient>
      </defs>
      <ellipse cx="300" cy="200" rx="320" ry="170" fill={`url(#${id}-glow)`} />

      {/* The road, seen from above. */}
      <path d="M10 336 Q 210 250 452 232" fill="none" style={{ stroke: "var(--line-strong)" }} strokeWidth="1.5" />
      <path d="M108 360 Q 292 290 460 272" fill="none" style={{ stroke: "var(--line-strong)" }} strokeWidth="1.5" />
      <path
        d="M60 350 Q 250 270 456 252"
        fill="none"
        style={{ stroke: "var(--ink-4)" }}
        strokeWidth="1.5"
        strokeDasharray="10 12"
        opacity="0.6"
      />

      {/* Two vehicles, one at an angle it shouldn't be. */}
      <g transform="rotate(-14 252 284)">
        <rect x="230" y="274" width="46" height="22" rx="6" style={{ fill: "var(--doc-fill)", stroke: "var(--ink-3)" }} />
        <rect x="258" y="278" width="12" height="14" rx="3" style={{ fill: "var(--doc-line)" }} />
      </g>
      <g transform="rotate(28 306 262)">
        <rect x="284" y="252" width="46" height="22" rx="6" style={{ fill: "var(--doc-fill)", stroke: "var(--ink-3)" }} />
        <rect x="312" y="256" width="12" height="14" rx="3" style={{ fill: "var(--doc-line)" }} />
      </g>

      {/* The camera's view and the detection frame. */}
      <polygon points="164,104 176,104 346,232 204,232" fill={`url(#${id}-cone)`} className="anim-breathe" style={{ animationDuration: "6s" }} />
      <rect
        x="204"
        y="232"
        width="142"
        height="80"
        rx="6"
        fill="none"
        style={{ stroke: "var(--label-blue)" }}
        strokeWidth="1.6"
        strokeDasharray="6 5"
      />
      <rect x="204" y="214" width="84" height="18" rx="4" style={{ fill: "var(--label-blue)" }} />
      <text x="212" y="227" fontSize="11" style={{ fontFamily: "var(--font-label)", letterSpacing: "2.5px", fill: "var(--bg)" }}>
        {labels.detected}
      </text>
      <circle cx="346" cy="232" r="4" fill="#FFB15C" className="anim-twinkle" style={{ animationDuration: "2.4s" }} />

      {/* The drone. */}
      <g className="anim-bob" style={{ animationDuration: "5s" }}>
        <path d="M128 76 L212 76" style={{ stroke: "var(--ink-2)" }} strokeWidth="2" strokeLinecap="round" />
        {rotors.map(([x, y], i) => (
          <g key={i}>
            <ellipse cx={x} cy={y - 6} rx="22" ry="4" fill="none" style={{ stroke: "var(--label-blue)" }} strokeWidth="1.4" />
            <path d={`M${x} ${y} V${y - 6}`} style={{ stroke: "var(--ink-2)" }} strokeWidth="2" />
          </g>
        ))}
        <rect x="150" y="70" width="40" height="22" rx="8" style={{ fill: "var(--bg-2)", stroke: "var(--ink-2)" }} strokeWidth="1.5" />
        <circle cx="170" cy="98" r="5" style={{ fill: "var(--label-blue)" }} />
        <circle cx="170" cy="98" r="2" fill="#FFFFFF" />
      </g>

      {/* The detection travels to the report. */}
      <path
        d="M 350 262 C 420 262, 430 178, 494 178"
        fill="none"
        stroke="#FFA04D"
        strokeWidth="2"
        strokeDasharray="4 6"
        className="anim-flow"
        pathLength={1000}
        style={{ animationDuration: "10s" }}
      />

      {/* The phone. */}
      <rect x="500" y="62" width="128" height="240" rx="22" fill={`url(#${id}-glass)`} style={{ stroke: "var(--glass-border)" }} />
      <rect x="546" y="72" width="36" height="5" rx="2.5" style={{ fill: "var(--line-strong)" }} />
      <text x="516" y="106" fontSize="12" style={{ fontFamily: "var(--font-label)", letterSpacing: "3px", fill: "var(--label-orange)" }}>
        {labels.report}
      </text>
      <rect x="516" y="118" width="96" height="62" rx="10" style={{ fill: "var(--band)", stroke: "var(--line-strong)" }} />
      <path d="M564 134 c-8 0 -12 6 -12 11 c0 8 12 18 12 18 s12 -10 12 -18 c0 -5 -4 -11 -12 -11 z" style={{ fill: "var(--label-blue)" }} opacity="0.85" />
      <circle cx="564" cy="145" r="4" style={{ fill: "var(--bg)" }} />
      <rect x="516" y="194" width="80" height="5" rx="2.5" style={{ fill: "var(--doc-line)" }} />
      <rect x="516" y="208" width="64" height="5" rx="2.5" style={{ fill: "var(--doc-line)" }} />
      <rect x="516" y="222" width="72" height="5" rx="2.5" style={{ fill: "var(--doc-line)" }} />
      <rect x="516" y="252" width="96" height="30" rx="15" fill="#FF8A2B" opacity="0.9" />
      <rect x="544" y="265" width="40" height="4" rx="2" fill="#2A1206" opacity="0.6" />
    </svg>
  );
}

type FalconsLabels = {
  request: string;
  sarcasm: string;
  abuse: string;
  other: string;
  positive: string;
  neutral: string;
  negative: string;
};

/**
 * A peregrine in a stoop, drawn facing right around (0, 0): wings half folded and swept
 * back, hooked beak, yellow cere and eye ring, the dark "moustache" stripe, and a narrow
 * tail. A generic bird, not the team's mark.
 */
function DivingFalcon({ transform }: { transform: string }) {
  return (
    <g transform={transform}>
      {/* Far wing, partly hidden behind the body. */}
      <path
        d="M 24 -8 C 8 -22, -16 -32, -46 -36 L -40 -32 L -46 -31 L -38 -27 L -43 -25 C -28 -18, -14 -12, -2 -7 Z"
        style={{ fill: "var(--ink-3)" }}
      />
      {/* Tail: narrow, slightly fanned, with a darker tip band. */}
      <path d="M -28 -3 L -66 -7 Q -71 0 -66 7 L -28 4 Z" style={{ fill: "var(--ink-2)" }} />
      <path d="M -60 -6.4 L -66 -7 Q -71 0 -66 7 L -60 6.4 Q -64 0 -60 -6.4 Z" style={{ fill: "var(--ink-3)" }} />
      {/* Body: a teardrop, deepest at the chest. */}
      <path
        d="M 56 -6 C 46 -12, 28 -13, 10 -11 C -8 -8, -22 -5, -32 -2 L -32 4 C -22 6, -8 9, 10 11 C 28 12, 46 10, 56 6 Z"
        style={{ fill: "var(--ink-2)" }}
      />
      {/* Barring on the chest. */}
      <path
        d="M 30 6 q 3 2 6 0 M 20 7 q 3 2 6 0 M 10 7.5 q 3 2 6 0 M 25 2 q 3 2 6 0 M 15 2.5 q 3 2 6 0"
        fill="none"
        style={{ stroke: "var(--ink-3)" }}
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.7"
      />
      {/* Near wing: longer, its primaries separated at the tip. */}
      <path
        d="M 26 2 C 12 18, -14 34, -54 44 L -46 39 L -55 39 L -45 34 L -52 33 L -42 29 C -26 22, -12 14, -2 6 Z"
        style={{ fill: "var(--ink-2)" }}
      />
      <path
        d="M -20 20 C -30 27, -40 32, -54 44 L -46 39 L -55 39 L -45 34 L -52 33 L -42 29 C -34 26, -27 23, -20 20 Z"
        style={{ fill: "var(--ink-3)" }}
      />
      <path
        d="M 18 6 C 6 16, -10 26, -30 34 M 10 6 C -2 14, -14 20, -26 25"
        fill="none"
        style={{ stroke: "var(--ink-3)" }}
        strokeWidth="1"
        opacity="0.6"
      />
      {/* Head: dark hood, moustache stripe, eye, hooked beak. */}
      <path d="M 40 -10 C 48 -14, 58 -11, 62 -5 C 60 -1, 54 0, 48 -1 C 44 -3, 41 -6, 40 -10 Z" style={{ fill: "var(--ink-3)" }} />
      <path d="M 52 -2 C 51 2, 49 5, 46 7 L 49 7 C 52 5, 54 2, 54 -1 Z" style={{ fill: "var(--ink-3)" }} />
      <circle cx="55" cy="-5" r="2.6" style={{ fill: "var(--label-orange)" }} />
      <circle cx="55.4" cy="-5" r="1.4" fill="#0B1026" />
      <path d="M 61 -5 L 64 -4.5 L 63 -1.5 Z" style={{ fill: "var(--label-orange)" }} />
      <path d="M 63.5 -4.6 C 67 -4, 68.4 -1.6, 67 1.6 C 66 0, 64.6 -0.8, 63 -1.4 Z" style={{ fill: "var(--ink-3)" }} />
    </g>
  );
}

/**
 * Falcons Analysis, "the dive": a falcon stoops toward a video; under it, the comments'
 * overall sentiment, and beside it, comments sorted by intent (request / sarcasm / abuse / other)
 * feeding a chart. The team's logo sits on the video like a channel watermark.
 * The proportions are illustrative, not measured results.
 */
export function FalconsArt({ id, labels }: { id: string; labels: FalconsLabels }) {
  const circumference = 2 * Math.PI * 36;
  const lanes = [
    { y: 138, label: labels.request, color: "var(--label-blue)", share: 0.28, chips: [470, 520] },
    { y: 168, label: labels.sarcasm, color: "var(--label-orange)", share: 0.18, chips: [496] },
    { y: 198, label: labels.abuse, color: "var(--stream-pink)", share: 0.14, chips: [530] },
    { y: 228, label: labels.other, color: "var(--ink-4)", share: 0.4, chips: [462, 500, 530] },
  ];
  // Sentiment bar under the video: x from 170 to 390, 3px gaps between segments.
  const sentiment = [
    { label: labels.positive, color: "#14B26C", share: 0.46 },
    { label: labels.neutral, color: "var(--ink-4)", share: 0.32 },
    { label: labels.negative, color: "var(--stream-pink)", share: 0.22 },
  ];
  let barX = 170;
  let offset = 0;
  return (
    <svg viewBox="0 0 660 360" className="h-auto w-full" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id={`${id}-glow`}>
          <stop offset="0" stopColor="#6E95FF" stopOpacity="0.24" />
          <stop offset="1" stopColor="#6E95FF" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${id}-glass`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" style={{ stopColor: "var(--glass-1)" }} />
          <stop offset="1" style={{ stopColor: "var(--glass-2)" }} />
        </linearGradient>
      </defs>
      <ellipse cx="330" cy="190" rx="320" ry="170" fill={`url(#${id}-glow)`} />
      <g transform="translate(0 22)">
        {/* Speed lines and the stoop. */}
        <g style={{ stroke: "var(--label-blue)" }} strokeOpacity="0.45" strokeLinecap="round" strokeWidth="1.5">
          <path d="M22 18 L 62 50" className="anim-twinkle" style={{ animationDuration: "3s" }} />
          <path d="M48 6 L 86 36" className="anim-twinkle" style={{ animationDuration: "3s", animationDelay: "-1s" }} />
          <path d="M12 42 L 48 70" className="anim-twinkle" style={{ animationDuration: "3s", animationDelay: "-2s" }} />
        </g>
        <g className="anim-bob" style={{ animationDuration: "5s" }}>
          <DivingFalcon transform="translate(110 70) rotate(36) scale(1.05)" />
        </g>

        {/* The video, with the team's logo as a channel watermark. */}
        <rect x="170" y="110" width="220" height="132" rx="16" fill={`url(#${id}-glass)`} style={{ stroke: "var(--glass-border)" }} />
        <polygon points="266,152 266,200 304,176" style={{ fill: "var(--stream-pink)" }} />
        <path d="M188 226 H 372" style={{ stroke: "var(--line-strong)" }} strokeWidth="3" strokeLinecap="round" />
        <path d="M188 226 H 300" style={{ stroke: "var(--label-blue)" }} strokeWidth="3" strokeLinecap="round" />
        <image href="/assets/projects/falcons-analysis/team-falcons-logo.png" x="348" y="120" width="30" height="36" opacity="0.95" />

        {/* Overall sentiment of the comments. */}
        {sentiment.map((part) => {
          const width = part.share * 220 - 3;
          const x = barX;
          barX += part.share * 220;
          return (
            <g key={part.color}>
              <rect x={x} y="256" width={width} height="7" rx="3.5" style={{ fill: part.color }} />
              <text x={x} y="280" fontSize="10" style={{ fontFamily: "var(--font-label)", letterSpacing: "2px", fill: part.color }}>
                {part.label}
              </text>
            </g>
          );
        })}

        {/* Comments leave the video and are sorted by intent. */}
        {lanes.map((lane, i) => (
          <g key={lane.y}>
            <path
              d={`M390 ${152 + i * 16} C 404 ${152 + i * 16}, 406 ${lane.y}, 420 ${lane.y} H 552`}
              fill="none"
              style={{ stroke: "var(--line-strong)" }}
              strokeDasharray="3 6"
            />
            <text x="420" y={lane.y - 9} fontSize="11" style={{ fontFamily: "var(--font-label)", letterSpacing: "3px", fill: lane.color }}>
              {lane.label}
            </text>
            {lane.chips.map((x, j) => (
              <g key={x} className="anim-bob" style={{ animationDuration: `${4 + i + j}s`, animationDelay: `${-(i + j) * 0.8}s` }}>
                <rect x={x} y={lane.y - 7} width="22" height="14" rx="5" style={{ fill: lane.color }} />
              </g>
            ))}
          </g>
        ))}

        {/* What the comments add up to. */}
        <g transform="rotate(-90 604 186)" fill="none" strokeWidth="14">
          {lanes.map((lane) => {
            const length = lane.share * circumference;
            const arc = (
              <circle
                key={lane.y}
                cx="604"
                cy="186"
                r="36"
                style={{ stroke: lane.color }}
                strokeDasharray={`${(length - 3).toFixed(1)} ${(circumference - length + 3).toFixed(1)}`}
                strokeDashoffset={(-offset).toFixed(1)}
              />
            );
            offset += length;
            return arc;
          })}
        </g>
      </g>
    </svg>
  );
}

type TourLabels = { cafe: string; restaurant: string; museum: string; route: string };

/** A map pin centred on (cx, cy) with its point 26px below. */
function pinPath(cx: number, cy: number) {
  return `M${cx} ${cy + 26} C ${cx - 6} ${cy + 17}, ${cx - 15} ${cy + 10}, ${cx - 15} ${cy} A 15 15 0 1 1 ${cx + 15} ${cy} C ${cx + 15} ${cy + 10}, ${cx + 6} ${cy + 17}, ${cx} ${cy + 26} Z`;
}

/**
 * Riyadh Hotel Guide, "the tour": the skyline (Al Faisaliah's golden globe, Kingdom Centre's arch),
 * a guide raising a flag outside the hotel, and the day's stops (café, restaurant, museum)
 * pinned along a route. Illustrative, not a map.
 */
export function RiyadhArt({ id, labels }: { id: string; labels: TourLabels }) {
  const ground = 318;
  const stops = [
    { x: 430, y: 206, label: labels.cafe, color: "#FFA04D", icon: "cup" as const },
    { x: 500, y: 190, label: labels.restaurant, color: "var(--stream-pink)", icon: "dine" as const },
    { x: 594, y: 180, label: labels.museum, color: "var(--label-blue)", icon: "museum" as const },
  ];
  const skyline: [number, number, number][] = [
    [150, 252, 30], [262, 232, 24], [376, 262, 22], [446, 240, 18], [640, 266, 14],
  ];
  const awning = (x: number, w: number, y: number, color: string) => (
    <path
      d={`M${x - 3} ${y} H ${x + w + 3} V ${y + 8} ${Array.from({ length: Math.round(w / 10) }, (_, k) => {
        const step = (w + 6) / Math.round(w / 10);
        const right = x + w + 3 - k * step;
        return `Q ${right - step / 2} ${y + 16}, ${right - step} ${y + 8}`;
      }).join(" ")} Z`}
      style={{ fill: color }}
      opacity="0.85"
    />
  );

  return (
    <svg viewBox="0 0 660 360" className="h-auto w-full" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id={`${id}-glow`}>
          <stop offset="0" stopColor="#FF8A2B" stopOpacity="0.24" />
          <stop offset="1" stopColor="#FF8A2B" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${id}-glass`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" style={{ stopColor: "var(--glass-1)" }} />
          <stop offset="1" style={{ stopColor: "var(--glass-2)" }} />
        </linearGradient>
        <radialGradient id={`${id}-globe`} cx="0.35" cy="0.35">
          <stop offset="0" stopColor="#FFE2B8" />
          <stop offset="0.55" stopColor="#FFB15C" />
          <stop offset="1" stopColor="#E0701A" />
        </radialGradient>
      </defs>
      <ellipse cx="330" cy="170" rx="320" ry="170" fill={`url(#${id}-glow)`} />

      {/* Sun over the city. */}
      <circle cx="604" cy="62" r="20" fill="#FFB15C" opacity="0.9" className="anim-twinkle" style={{ animationDuration: "6s" }} />
      <circle cx="604" cy="62" r="32" fill="none" stroke="#FFB15C" strokeOpacity="0.3" />

      {/* Low skyline behind everything. */}
      {skyline.map(([x, y, w]) => (
        <rect key={x} x={x} y={y} width={w} height={ground - y} rx="2" style={{ fill: "var(--band)", stroke: "var(--line)" }} />
      ))}

      {/* Kingdom Centre: the tapering tower with the arch cut out of its crown. */}
      <path
        d="M200 318 C 202 220, 207 140, 212 78 Q 225 156 238 78 C 243 140, 248 220, 250 318 Z"
        fill={`url(#${id}-glass)`}
        style={{ stroke: "var(--glass-border)" }}
        strokeWidth="1.5"
      />
      <path d="M218 104 H 232" style={{ stroke: "var(--glass-border)" }} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M225 132 V 312 M214 160 L 212 312 M236 160 L 238 312" style={{ stroke: "var(--line)" }} />

      {/* Al Faisaliah: the pyramid frame, its golden globe and the spire. */}
      <polygon points="296,318 364,318 330,62" fill={`url(#${id}-glass)`} style={{ stroke: "var(--glass-border)" }} strokeWidth="1.5" />
      <polygon points="314,318 346,318 330,150" fill="none" style={{ stroke: "var(--line-strong)" }} />
      {[160, 200, 240, 280].map((y) => {
        const half = (34 * (y - 62)) / 256;
        return <path key={y} d={`M${330 - half} ${y} H ${330 + half}`} style={{ stroke: "var(--line-strong)" }} />;
      })}
      <path d="M330 62 V 26" stroke="#FFC596" strokeWidth="2" strokeLinecap="round" />
      <circle
        cx="330"
        cy="112"
        r="15"
        fill={`url(#${id}-globe)`}
        className="anim-breathe"
        style={{ filter: "drop-shadow(0 0 14px rgba(255,138,43,0.7))" }}
      />
      <rect x="286" y="304" width="88" height="14" rx="3" style={{ fill: "var(--band)", stroke: "var(--line-strong)" }} />

      {/* The hotel. */}
      <rect x="34" y="196" width="80" height={ground - 196} rx="5" fill={`url(#${id}-glass)`} style={{ stroke: "var(--glass-border)" }} />
      {[0, 1, 2, 3, 4].map((row) =>
        [0, 1, 2].map((col) => (
          <rect
            key={`${row}-${col}`}
            x={46 + col * 20}
            y={226 + row * 16}
            width="12"
            height="8"
            rx="1.5"
            fill="#FFB15C"
            opacity={(row + col) % 3 === 0 ? 0.75 : 0.22}
          />
        )),
      )}
      <circle cx="74" cy="210" r="9" fill="#FFA04D" />
      <text x="74" y="214" fontSize="11" textAnchor="middle" style={{ fontFamily: "var(--font-label)", fill: "#2A1206" }}>
        H
      </text>
      <rect x="66" y="302" width="16" height="16" rx="2" style={{ fill: "var(--line-strong)" }} />

      {/* The tour guide, flag raised. */}
      <g>
        <path d="M131 318 L 133 296 M141 318 L 139 296" style={{ stroke: "var(--ink-2)" }} strokeWidth="3" strokeLinecap="round" />
        <path d="M126 298 L 146 298 L 142 268 L 130 268 Z" fill="#FFA04D" />
        <circle cx="136" cy="259" r="7.5" style={{ fill: "var(--ink-2)" }} />
        <path d="M127 256 Q 136 246 145 256 Z" fill="#E0701A" />
        <path d="M130 274 L 124 292" style={{ stroke: "var(--ink-2)" }} strokeWidth="3" strokeLinecap="round" />
        <path d="M142 273 L 154 252" style={{ stroke: "var(--ink-2)" }} strokeWidth="3" strokeLinecap="round" />
        <path d="M154 254 V 212" style={{ stroke: "var(--ink-3)" }} strokeWidth="2" strokeLinecap="round" />
        <g className="anim-bob" style={{ animationDuration: "3s" }}>
          <polygon points="154,212 180,219 154,226" fill="#FF8A2B" />
        </g>
      </g>

      {/* The day's stops: café, restaurant, museum. */}
      <rect x="410" y="276" width="44" height={ground - 276} rx="3" fill={`url(#${id}-glass)`} style={{ stroke: "var(--glass-border)" }} />
      {awning(410, 44, 276, "#FFA04D")}
      <rect x="426" y="300" width="12" height="18" rx="2" style={{ fill: "var(--line-strong)" }} />
      <rect x="472" y="264" width="56" height={ground - 264} rx="3" fill={`url(#${id}-glass)`} style={{ stroke: "var(--glass-border)" }} />
      {awning(472, 56, 264, "var(--stream-pink)")}
      <rect x="478" y="290" width="18" height="12" rx="2" fill="#FFB15C" opacity="0.5" />
      <rect x="506" y="294" width="14" height="24" rx="2" style={{ fill: "var(--line-strong)" }} />
      <polygon points="548,262 594,238 640,262" fill={`url(#${id}-glass)`} style={{ stroke: "var(--glass-border)" }} />
      <rect x="552" y="262" width="84" height={ground - 262} fill={`url(#${id}-glass)`} style={{ stroke: "var(--glass-border)" }} />
      {[562, 582, 602, 622].map((x) => (
        <rect key={x} x={x - 3} y="270" width="6" height="40" rx="1" style={{ fill: "var(--label-blue)" }} opacity="0.55" />
      ))}
      <path d="M548 312 H 640" style={{ stroke: "var(--line-strong)" }} strokeWidth="3" />

      {stops.map((stop, i) => (
        <g key={stop.label} className="anim-bob" style={{ animationDuration: `${4 + i}s`, animationDelay: `${-i * 0.9}s` }}>
          <path d={pinPath(stop.x, stop.y)} style={{ fill: stop.color, filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.25))" }} />
          <g stroke="#FFFFFF" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
            {stop.icon === "cup" ? (
              <>
                <path d={`M${stop.x - 7} ${stop.y - 3} H ${stop.x + 4} V ${stop.y + 3} A 4 4 0 0 1 ${stop.x} ${stop.y + 7} H ${stop.x - 3} A 4 4 0 0 1 ${stop.x - 7} ${stop.y + 3} Z`} />
                <path d={`M${stop.x + 4} ${stop.y - 1} H ${stop.x + 6} A 2.5 2.5 0 0 1 ${stop.x + 6} ${stop.y + 4} H ${stop.x + 4}`} />
                <path d={`M${stop.x - 4} ${stop.y - 7} V ${stop.y - 9} M${stop.x} ${stop.y - 7} V ${stop.y - 10}`} />
              </>
            ) : stop.icon === "dine" ? (
              <>
                <path d={`M${stop.x - 5} ${stop.y - 9} V ${stop.y + 9} M${stop.x - 8} ${stop.y - 9} V ${stop.y - 3} Q ${stop.x - 5} ${stop.y} ${stop.x - 2} ${stop.y - 3} V ${stop.y - 9}`} />
                <path d={`M${stop.x + 5} ${stop.y + 9} V ${stop.y - 9} Q ${stop.x + 10} ${stop.y - 4} ${stop.x + 5} ${stop.y + 1}`} />
              </>
            ) : (
              <>
                <path d={`M${stop.x - 9} ${stop.y - 3} L ${stop.x} ${stop.y - 9} L ${stop.x + 9} ${stop.y - 3} Z`} />
                <path d={`M${stop.x - 6} ${stop.y - 1} V ${stop.y + 6} M${stop.x} ${stop.y - 1} V ${stop.y + 6} M${stop.x + 6} ${stop.y - 1} V ${stop.y + 6} M${stop.x - 9} ${stop.y + 8} H ${stop.x + 9}`} />
              </>
            )}
          </g>
          <text
            x={stop.x}
            y={stop.y - 24}
            fontSize="10"
            textAnchor="middle"
            style={{ fontFamily: "var(--font-label)", letterSpacing: "2px", fill: stop.color }}
          >
            {stop.label}
          </text>
        </g>
      ))}

      {/* Ground and the day's route from the hotel through each stop. */}
      <path d={`M20 ${ground} H 650`} style={{ stroke: "var(--line-strong)" }} />
      <path
        d="M136 336 H 600"
        fill="none"
        stroke="#FFA04D"
        strokeWidth="2"
        strokeDasharray="4 6"
        className="anim-flow"
        pathLength={1000}
        style={{ animationDuration: "14s" }}
      />
      <circle cx="136" cy="336" r="5" fill="#FFA04D" />
      {stops.map((stop) => (
        <circle key={stop.x} cx={stop.x} cy="336" r="5" style={{ fill: stop.color }} />
      ))}
      <text x="34" y="354" fontSize="10" style={{ fontFamily: "var(--font-label)", letterSpacing: "3px", fill: "var(--ink-3)" }}>
        {labels.route}
      </text>
    </svg>
  );
}
