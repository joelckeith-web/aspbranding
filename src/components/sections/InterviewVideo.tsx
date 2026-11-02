"use client";

import { useState } from "react";

// Client interview player. Shows the video's YouTube thumbnail first and only
// loads the YouTube player on click, so the page stays fast. The play button
// sits in the corner so it never covers the thumbnail (Joel, 2026-11-02).
export function InterviewVideo({
  youtubeId,
  poster,
  duration,
  spokenDuration,
  title,
  person,
  name,
  caption,
  dark = false,
}: {
  youtubeId: string;
  poster: string;
  duration: string;
  spokenDuration: string;
  title: string;
  person: string;
  name: string;
  caption: string;
  dark?: boolean;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <figure className="m-0">
      <div className="relative aspect-video overflow-hidden rounded-[var(--radius-asp-xl)] bg-asp-black shadow-[0_24px_60px_-20px_rgba(0,0,0,0.9)]">
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1&cc_load_policy=1&playsinline=1`}
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
            aria-label={`Play the interview with ${person} (${spokenDuration})`}
          >
            <span className="absolute bottom-3 right-3 flex items-center gap-2">
              <span className="rounded-md bg-asp-black/75 px-2 py-1 text-xs font-bold text-white">{duration}</span>
              <span className="flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-asp-purple shadow-[0_10px_28px_-6px_rgba(159,76,255,0.7)] transition-transform group-hover:scale-105">
                <svg className="ml-0.5 h-5 w-5 sm:h-6 sm:w-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
          </button>
        )}
      </div>
      <figcaption className={`mt-4 text-sm leading-relaxed ${dark ? "text-white/70" : "text-gray-600"}`}>
        <span className={`font-bold ${dark ? "text-white" : "text-asp-blue"}`}>{name}</span>
        {caption}
      </figcaption>
    </figure>
  );
}
