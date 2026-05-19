export default function CurtainBackdrop() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: "fixed", inset: 0, width: "100%", height: "100%", zIndex: 0 }}
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 800 600"
    >
      <defs>
        <linearGradient id="bgBase" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a1a4a" />
          <stop offset="100%" stopColor="#06113a" />
        </linearGradient>
        <radialGradient id="stageLight" cx="50%" cy="0%" r="75%">
          <stop offset="0%" stopColor="rgba(180,160,255,0.22)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0)" />
        </radialGradient>
        <linearGradient id="valanceGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a0a3a" />
          <stop offset="100%" stopColor="#2a0d52" />
        </linearGradient>
        <linearGradient id="goldTrim" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffd700" />
          <stop offset="50%" stopColor="#ffaa00" />
          <stop offset="100%" stopColor="#cc8800" />
        </linearGradient>
      </defs>

      {/* Base curtain */}
      <rect width="800" height="600" fill="url(#bgBase)" />

      {/* Vertical fold panels */}
      {[0,1,2,3,4,5,6,7,8,9,10,11,12].map(i => (
        <rect key={i} x={(i/12)*800} y={0} width={800/12} height={600}
          fill={i%2===0 ? "rgba(50,90,200,0.18)" : "rgba(0,0,30,0.22)"} />
      ))}

      {/* Fabric sheen highlights */}
      {[1,3,5,7,9,11].map(i => (
        <ellipse key={i} cx={((i+0.5)/12)*800} cy={300} rx={18} ry={320}
          fill="rgba(100,140,255,0.09)" />
      ))}

      {/* Stage spotlight from above */}
      <rect width="800" height="600" fill="url(#stageLight)" />

      {/* Horizontal texture lines */}
      {Array.from({length:30},(_,i)=>(
        <line key={i} x1={0} y1={(i/30)*600} x2={800} y2={(i/30)*600}
          stroke="rgba(255,255,255,0.025)" strokeWidth={1} />
      ))}

      {/* Valance swag */}
      <path d="M0,0 Q100,80 200,50 Q300,20 400,65 Q500,110 600,55 Q700,0 800,45 L800,0 Z"
        fill="url(#valanceGrad)" />
      <path d="M0,0 Q100,75 200,48 Q300,18 400,62 Q500,105 600,52 Q700,-2 800,42"
        fill="none" stroke="url(#goldTrim)" strokeWidth="4" />

      {/* Gold tassels */}
      {[100,200,300,400,500,600,700].map(x => {
        const yMap = {100:72,200:46,300:16,400:60,500:102,600:50,700:38};
        const y = yMap[x];
        return (
          <g key={x}>
            <circle cx={x} cy={y+2} r={7} fill="#cc8800" />
            <circle cx={x} cy={y} r={7} fill="url(#goldTrim)" />
            <line x1={x} y1={y+7} x2={x} y2={y+22} stroke="#cc8800" strokeWidth={2} />
            <ellipse cx={x} cy={y+24} rx={4} ry={6} fill="#aa7700" />
          </g>
        );
      })}

      {/* Bottom hem */}
      <rect x={0} y={583} width={800} height={4} fill="url(#goldTrim)" opacity={0.7} />

      {/* Footlight glow */}
      <ellipse cx={400} cy={600} rx={500} ry={120} fill="rgba(255,200,80,0.08)" />

      {/* Edge vignette */}
      <rect x={0} y={0} width={80} height={600} fill="rgba(0,0,20,0.3)" />
      <rect x={720} y={0} width={80} height={600} fill="rgba(0,0,20,0.3)" />
    </svg>
  );
}
