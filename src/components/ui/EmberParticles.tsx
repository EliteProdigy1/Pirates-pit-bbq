/**
 * Decorative ember particles for the hero. Purely atmospheric and
 * aria-hidden — no content depends on it. Particles are a fixed,
 * deterministic set (no hydration mismatch) and animate via cheap CSS
 * transforms/opacity. The global reduced-motion rule freezes the animation,
 * which leaves them invisible (keyframe starts at opacity 0).
 */
const PARTICLES = [
  { left: 8, size: 3, delay: 0, duration: 7, opacity: 0.5 },
  { left: 16, size: 2, delay: 2.5, duration: 9, opacity: 0.35 },
  { left: 24, size: 4, delay: 1, duration: 8, opacity: 0.45 },
  { left: 33, size: 2, delay: 4, duration: 10, opacity: 0.3 },
  { left: 41, size: 3, delay: 0.8, duration: 7.5, opacity: 0.5 },
  { left: 49, size: 2, delay: 3.2, duration: 9.5, opacity: 0.35 },
  { left: 57, size: 3, delay: 1.8, duration: 8.5, opacity: 0.45 },
  { left: 64, size: 4, delay: 5, duration: 11, opacity: 0.3 },
  { left: 72, size: 2, delay: 2, duration: 8, opacity: 0.5 },
  { left: 80, size: 3, delay: 3.8, duration: 9, opacity: 0.4 },
  { left: 88, size: 2, delay: 1.4, duration: 7, opacity: 0.35 },
  { left: 94, size: 3, delay: 4.6, duration: 10, opacity: 0.45 },
];

export function EmberParticles() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 overflow-hidden"
    >
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="absolute bottom-0 rounded-full bg-ember"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            // @ts-expect-error CSS custom property
            "--ember-opacity": p.opacity,
            animation: `emberRise ${p.duration}s ease-in ${p.delay}s infinite`,
            boxShadow: "0 0 6px rgba(185,74,34,0.6)",
          }}
        />
      ))}
    </div>
  );
}

export default EmberParticles;
