const nodes = [
  { id: 0, cx: 130,  cy: 145, label: 'API Gateway',  r: 18 },
  { id: 1, cx: 390,  cy: 68,  label: 'Node.js',      r: 18 },
  { id: 2, cx: 720,  cy: 82,  label: 'PostgreSQL',   r: 18 },
  { id: 3, cx: 895,  cy: 242, label: 'AWS',          r: 18 },
  { id: 4, cx: 655,  cy: 402, label: 'RabbitMQ',     r: 18 },
  { id: 5, cx: 190,  cy: 398, label: 'Docker',       r: 18 },
  { id: 6, cx: 500,  cy: 242, label: 'Integración',  r: 26 }, // hub
];

const connections = [
  { from: 0, to: 6, dur: 2.8 },
  { from: 1, to: 6, dur: 2.2 },
  { from: 2, to: 6, dur: 3.1 },
  { from: 3, to: 6, dur: 2.5 },
  { from: 4, to: 6, dur: 2.9 },
  { from: 5, to: 6, dur: 3.4 },
  { from: 1, to: 2, dur: 4.0 },
  { from: 3, to: 4, dur: 3.7 },
];

const HeroBackground = () => {
  return (
    <svg
      viewBox="0 0 1000 490"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full opacity-60"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="bgGrad" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#4a332f" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#2e1f1c" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#d4af37" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background soft radial */}
      <ellipse cx="500" cy="245" rx="480" ry="280" fill="url(#bgGrad)" />

      {/* Connection lines */}
      {connections.map(({ from, to }, i) => {
        const a = nodes[from];
        const b = nodes[to];
        return (
          <line
            key={i}
            x1={a.cx} y1={a.cy}
            x2={b.cx} y2={b.cy}
            stroke="#d4af37"
            strokeWidth="1"
            strokeOpacity="0.2"
          />
        );
      })}

      {/* Animated dots along connections */}
      {connections.map(({ from, to, dur }, i) => {
        const a = nodes[from];
        const b = nodes[to];
        const path = `M ${a.cx} ${a.cy} L ${b.cx} ${b.cy}`;
        return (
          <circle key={`dot-${i}`} r="3.5" fill="#d4af37" filter="url(#glow)">
            <animateMotion
              dur={`${dur}s`}
              repeatCount="indefinite"
              path={path}
            />
            <animate
              attributeName="opacity"
              values="0;1;1;0"
              keyTimes="0;0.1;0.85;1"
              dur={`${dur}s`}
              repeatCount="indefinite"
            />
          </circle>
        );
      })}

      {/* Hub glow pulse */}
      <circle cx={nodes[6].cx} cy={nodes[6].cy} r="60" fill="url(#hubGlow)">
        <animate attributeName="r" values="55;75;55" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="1;0.4;1" dur="3s" repeatCount="indefinite" />
      </circle>

      {/* Nodes */}
      {nodes.map((node) => (
        <g key={node.id}>
          <circle
            cx={node.cx}
            cy={node.cy}
            r={node.r}
            fill="#2e1f1c"
            stroke="#d4af37"
            strokeWidth={node.id === 6 ? 2.5 : 1.5}
            strokeOpacity={node.id === 6 ? 0.9 : 0.6}
            filter={node.id === 6 ? 'url(#glow)' : undefined}
          >
            {node.id === 6 && (
              <animate
                attributeName="stroke-opacity"
                values="0.9;0.5;0.9"
                dur="3s"
                repeatCount="indefinite"
              />
            )}
          </circle>
          <text
            x={node.cx}
            y={node.cy + node.r + 14}
            textAnchor="middle"
            fill="white"
            fontSize={node.id === 6 ? '12' : '10.5'}
            fontFamily="monospace"
            opacity={node.id === 6 ? 0.9 : 0.65}
            fontWeight={node.id === 6 ? 'bold' : 'normal'}
          >
            {node.label}
          </text>
        </g>
      ))}
    </svg>
  );
};

export default HeroBackground;
