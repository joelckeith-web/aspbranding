"use client";

import { useState } from "react";

// Click-to-play YouTube player: a local poster first, the YouTube iframe only
// after a click, so the page stays fast. Same pattern as VikingInterview.
export function YouTubeFacade({
  id,
  title,
  poster,
  duration,
}: {
  id: string;
  title: string;
  poster: string;
  duration: string;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-video overflow-hidden rounded-[var(--radius-asp-xl)] bg-asp-black shadow-[0_24px_60px_-20px_rgba(0,0,0,0.9)]">
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 h-full w-full cursor-pointer border-0 p-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${poster})` }}
          aria-label={`Play: ${title} (${duration})`}
        >
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-asp-purple shadow-[0_10px_28px_-6px_rgba(159,76,255,0.7)] transition-transform group-hover:scale-105">
              <svg className="ml-1 h-7 w-7 md:h-8 md:w-8 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
          <span className="absolute bottom-4 right-4 rounded-md bg-asp-black/75 px-2 py-1 text-xs font-bold text-white">{duration}</span>
        </button>
      )}
    </div>
  );
}
