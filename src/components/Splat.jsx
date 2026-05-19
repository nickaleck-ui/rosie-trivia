export default function Splat({ style, size, color = "#9B30FF", opacity = 0.9, seed = 1 }) {
  const blobs = 9;
  const pts = Array.from({ length: blobs * 2 }, (_, i) => {
    const angle = (i / (blobs * 2)) * Math.PI * 2;
    const r = i % 2 === 0
      ? (size / 2) * (0.65 + Math.sin(i * 2.3 + seed) * 0.3)
      : (size / 2) * (0.95 + Math.cos(i * 1.7 + seed) * 0.38);
    return `${size / 2 + r * Math.cos(angle)},${size / 2 + r * Math.sin(angle)}`;
  }).join(" ");

  return (
    <svg
      width={size}
      height={size}
      style={{ position: "absolute", opacity, pointerEvents: "none", ...style }}
      viewBox={`0 0 ${size} ${size}`}
    >
      <polygon points={pts} fill={color} />
    </svg>
  );
}
