"use client";

import { useEffect, useRef, useState } from "react";

// Muted-autoplay YouTube player (Joel, 2026-10-30, modeled on acquisition.com's
// workshop page): the video starts muted once it scrolls into view, with a
// "Click to unmute" box over it; one click restarts it from the beginning with
// sound. The YouTube iframe mounts only when the player nears the viewport, so
// the page stays fast. Viewers who ask for reduced motion get no autoplay; their
// click starts the video with sound.
export function YouTubeFacade({ id, title, poster }: { id: string; title: string; poster: string }) {
  const wrap = useRef<HTMLDivElement>(null);
  const frame = useRef<HTMLIFrameElement>(null);
  const [mounted, setMounted] = useState(false);
  const [withSound, setWithSound] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const noMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReduced(noMotion);
    if (noMotion) return;
    const el = wrap.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMounted(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const command = (func: string, args: unknown[] = []) =>
    frame.current?.contentWindow?.postMessage(JSON.stringify({ event: "command", func, args }), "*");

  const startWithSound = () => {
    if (mounted) {
      command("seekTo", [0, true]);
      command("unMute");
      command("setVolume", [100]);
      command("playVideo");
    } else {
      setMounted(true);
    }
    setWithSound(true);
  };

  // The src is fixed once mounted (muted autoplay); unmuting goes through the
  // player API so the iframe never reloads. A reduced-motion viewer's iframe
  // mounts on their click, so it can start with sound.
  const [src] = useState(
    () =>
      `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&playsinline=1&rel=0&modestbranding=1&enablejsapi=1`,
  );
  const iframeSrc = reduced && withSound ? src : `${src}&mute=1`;

  return (
    <div
      ref={wrap}
      className="relative aspect-video overflow-hidden rounded-[var(--radius-asp-xl)] bg-asp-black bg-cover bg-center shadow-[0_24px_60px_-20px_rgba(0,0,0,0.9)]"
      style={{ backgroundImage: `url(${poster})` }}
    >
      {mounted && (
        <iframe
          ref={frame}
          className="absolute inset-0 h-full w-full"
          src={iframeSrc}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
      {!withSound && (
        <button
          type="button"
          onClick={startWithSound}
          className="group absolute inset-0 flex h-full w-full cursor-pointer items-center justify-center border-0 bg-transparent p-0"
          aria-label={`${reduced ? "Play" : "Unmute and restart"}: ${title}`}
        >
          <span className="flex w-[min(72%,360px)] flex-col items-center gap-2 rounded-[var(--radius-asp-lg)] border border-white/50 bg-asp-purple/85 px-6 py-5 sm:py-7 text-center text-white shadow-[0_10px_28px_-6px_rgba(159,76,255,0.7)] backdrop-blur-sm transition-transform group-hover:scale-[1.03]">
            <svg className="h-8 w-8 sm:h-10 sm:w-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              {reduced ? (
                <path d="M8 5v14l11-7z" />
              ) : (
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.59 3L19 9.59 17.59 8.17 15.17 10.6 12.76 8.17 11.34 9.59 13.76 12l-2.42 2.41 1.42 1.42 2.41-2.42 2.42 2.42L19 14.41 16.59 12z" />
              )}
            </svg>
            <span className="font-black text-lg sm:text-2xl leading-tight">
              {reduced ? "Click to play" : <>Your video is playing<br />Click to unmute</>}
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
