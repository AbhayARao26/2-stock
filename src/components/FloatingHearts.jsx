import { memo } from 'react';

const heartGlyphs = ['❤', '♡', '❥'];

const hearts = Array.from({ length: 20 }, (_, index) => {
  const left = (index * 11.7) % 100;
  const size = 10 + ((index * 7) % 31);
  const opacity = 0.2 + ((index * 13) % 41) / 100;
  const blur = ((index * 3) % 3) * 0.7;
  const duration = 6 + ((index * 5) % 10);
  const delay = -(index * 1.35);
  const drift = -16 + ((index * 9) % 32);
  const glyph = heartGlyphs[index % heartGlyphs.length];

  return { left, size, opacity, blur, duration, delay, drift, glyph, id: index };
});

function FloatingHeartsComponent() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="floating-heart absolute bottom-[-15%] select-none text-white"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            filter: `blur(${heart.blur}px)`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
            '--drift': `${heart.drift}px`,
            '--heart-opacity': heart.opacity,
          }}
        >
          {heart.glyph}
        </span>
      ))}
    </div>
  );
}

export const FloatingHearts = memo(FloatingHeartsComponent);
