export default function CircuitBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#08090b]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(227,10,23,0.16),transparent),radial-gradient(ellipse_50%_40%_at_100%_100%,rgba(56,189,248,0.10),transparent)]" />
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.16]"
        viewBox="0 0 1200 1200"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="rgba(148,163,184,0.35)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="1200" height="1200" fill="url(#grid)" />
        {circuitPaths.map((d, i) => (
          <path
            key={i}
            d={d}
            fill="none"
            stroke={i % 3 === 0 ? "#e30a17" : "#38bdf8"}
            strokeWidth="1.4"
            strokeLinecap="round"
            className="circuit-line"
            style={{ animationDelay: `${i * 0.6}s` }}
          />
        ))}
        {nodes.map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={3} fill="#38bdf8" className="circuit-node" style={{ animationDelay: `${i * 0.4}s` }} />
        ))}
      </svg>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#08090b]" />
    </div>
  );
}

const circuitPaths = [
  "M0,120 H220 V260 H480 V140 H820 V320",
  "M1200,80 H960 V220 H700 V60 H320 V200",
  "M0,620 H180 V760 H420 V640 H700 V820 H1000",
  "M1200,900 H980 V760 H640 V920 H260 V740",
  "M0,980 H140 V1080 H360",
  "M1200,420 H1040 V560 H860",
];

const nodes: [number, number][] = [
  [220, 120],
  [480, 260],
  [820, 140],
  [960, 220],
  [700, 60],
  [180, 620],
  [420, 760],
  [700, 820],
  [980, 900],
  [640, 920],
  [1040, 420],
];
