import { useCallback, useEffect, useState } from "react";
import clsx from "clsx";

interface GalleryProps {
  images: string[];
  label: string;
  intervalMs?: number;
}

export function Gallery({ images, label, intervalMs = 5000 }: GalleryProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = images.length;

  const go = useCallback((next: number) => setIndex((next + count) % count), [count]);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setIndex((i) => (i + 1) % count), intervalMs);
    return () => window.clearInterval(timer);
  }, [paused, count, intervalMs]);

  return (
    <div
      role="group"
      aria-roledescription="carrossel"
      aria-label={label}
      className="relative overflow-hidden bg-[#f0f2ee]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="relative aspect-video">
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`${label} — foto ${i + 1} de ${count}`}
            width={1280}
            height={720}
            loading={i === 0 ? "eager" : "lazy"}
            decoding="async"
            aria-hidden={i !== index}
            className={clsx(
              "absolute inset-0 size-full object-cover transition-opacity duration-700",
              i === index ? "opacity-100" : "opacity-0"
            )}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={() => go(index - 1)}
        aria-label="Foto anterior"
        className="absolute left-3 top-1/2 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-white transition-colors hover:bg-black/55"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 5l-7 7 7 7" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => go(index + 1)}
        aria-label="Próxima foto"
        className="absolute right-3 top-1/2 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-white transition-colors hover:bg-black/55"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute inset-x-0 bottom-3 flex justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => go(i)}
            aria-label={`Ir para a foto ${i + 1}`}
            aria-current={i === index}
            className={clsx(
              "size-2.5 rounded-full border border-white/80 transition-colors",
              i === index ? "bg-white" : "bg-white/20 hover:bg-white/60"
            )}
          />
        ))}
      </div>
    </div>
  );
}
