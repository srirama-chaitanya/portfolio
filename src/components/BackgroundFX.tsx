import { memo, useMemo } from "react";

export const BackgroundFX = memo(function BackgroundFX() {
  const particles = useMemo(() => Array.from({ length: 18 }, (_, i) => i), []);

  return (
    <div aria-hidden className="fx-wrapper">
      {/* Gradient blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      {/* Subtle wave at the top */}
      <svg className="wave" viewBox="0 0 1440 240" preserveAspectRatio="none">
        <path
          d="M0,160 C160,120 320,80 480,96 C640,112 800,176 960,186.7 C1120,197 1280,165 1440,128 L1440,240 L0,240 Z"
          fill="hsl(var(--accent) / 0.08)"
        />
      </svg>

      {/* Soft particles */}
      {particles.map((i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: `${(i * 53) % 100}%`,
            top: `${(i * 29) % 100}%`,
            animationDelay: `${i * 0.6}s`,
          }}
        />
      ))}
    </div>
  );
});
