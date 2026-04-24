"use client";

import { useEffect, useState } from "react";

interface HeroVideoBackgroundProps {
  youtubeId: string;
}

export function HeroVideoBackground({ youtubeId }: HeroVideoBackgroundProps) {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    const win = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
    };
    const schedule = win.requestIdleCallback
      ? (cb: () => void) => win.requestIdleCallback!(cb, { timeout: 2000 })
      : (cb: () => void) => window.setTimeout(cb, 600);
    const id = schedule(() => setMount(true));
    return () => {
      if (!win.requestIdleCallback) {
        window.clearTimeout(id as number);
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-asp-gradient-hero z-10 opacity-70" />
      {mount && (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ transform: "scale(1.5)" }}
          allow="autoplay; encrypted-media"
          title="Hero background video"
          loading="lazy"
        />
      )}
    </div>
  );
}
