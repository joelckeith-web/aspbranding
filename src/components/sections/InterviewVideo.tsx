"use client";

import { useState } from "react";

// Client interview player. Shows a local poster first and only loads the
// YouTube player on click, so the page stays fast.
export function InterviewVideo({
  youtubeId,
  poster,
  duration,
  spokenDuration,
  title,
  person,
  name,
  caption,
  playAt = { x: "50%", y: "50%" },
  scrim = true,
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
  // Where the play button sits on the poster, so it never covers the poster's headline.
  playAt?: { x: string; y: string };
  // Darkens a video-frame poster. Off for designed posters, so their text stays readable.
  scrim?: boolean;
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
            {scrim && <span className="absolute inset-0 bg-gradient-to-t from-asp-black/70 via-asp-black/10 to-transparent" />}
            <span
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: playAt.x, top: playAt.y }}
            >
              <span className="flex h-14 w-14 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-asp-purple shadow-[0_10px_28px_-6px_rgba(159,76,255,0.7)] transition-transform group-hover:scale-105">
                <svg className="ml-1 h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
            <span className="absolute bottom-4 right-4 rounded-md bg-asp-black/75 px-2 py-1 text-xs font-bold text-white">{duration}</span>
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
