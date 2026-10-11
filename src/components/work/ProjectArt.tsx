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

export function SentinelArt({ id }: { id: string }) {
  const packets = Array.from({ length: 54 }, (_, i) => {
    const x = 40 + i * 11;
    const inDrift = i >= 22 && i <= 30;
    const drift = inDrift ? -40 * Math.sin(((i - 22) / 8) * Math.PI) : 0;
    const y = 232 + 15 * Math.sin(i / 3.1) + drift;
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
        SYNTHETIC FHIR STREAM · WATCHED
      </text>

      <rect x="34" y="200" width="592" height="64" style={{ fill: "var(--band)" }} />
      <path d="M34 200 H626 M34 264 H626" style={{ stroke: "var(--line-strong)" }} strokeDasharray="3 6" />
      <text x="44" y="292" fontSize="11" style={{ fontFamily: "var(--font-label)", letterSpacing: "3px", fill: "var(--ink-3)" }}>
        EXPECTED RANGE
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
        DRIFT
      </text>
      <path d="M 466 110 V 316" stroke="#FFB15C" strokeOpacity="0.7" strokeDasharray="4 5" />
      <text x="476" y="122" fontSize="12" style={{ fontFamily: "var(--font-label)", letterSpacing: "3px", fill: "var(--label-orange)" }}>
        SCHEMA V2
      </text>
    </svg>
  );
}

export function NajmArt({ id }: { id: string }) {
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
        DETECTED
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
        REPORT
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
