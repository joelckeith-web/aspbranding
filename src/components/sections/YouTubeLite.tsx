"use client";

import { useState } from "react";

// Click-to-play YouTube embed: shows the video's own thumbnail first and only
// loads the player on click, so a paid landing page stays fast. Same treatment
// as VikingInterview, for any video ID.
export function YouTubeLite({
  id,
  title,
  duration,
}: {
  id: string;
  title: string;
  duration?: string;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-video overflow-hidden rounded-[var(--radius-asp-xl)] bg-asp-black shadow-[0_24px_60px_-20px_rgba(0,0,0,0.9)]">
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&cc_load_policy=1&playsinline=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 h-full w-full cursor-pointer border-0 p-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://i.ytimg.com/vi/${id}/maxresdefault.jpg)` }}
          aria-label={`Play: ${title}${duration ? ` (${duration})` : ""}`}
        >
          <span className="absolute inset-0 bg-gradient-to-t from-asp-black/60 via-transparent to-transparent" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-asp-purple shadow-[0_10px_28px_-6px_rgba(159,76,255,0.7)] transition-transform group-hover:scale-105">
              <svg className="ml-1 h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
          {duration && (
            <span className="absolute bottom-4 right-4 rounded-md bg-asp-black/75 px-2 py-1 text-xs font-bold text-white">
              {duration}
            </span>
          )}
        </button>
      )}
    </div>
  );
}
