import type { PostVideo as PostVideoData, TranscriptSection } from "@/lib/blog/types";

interface PostVideoProps {
  video: PostVideoData;
  transcript: TranscriptSection[] | null;
}

/**
 * YouTube walkthrough at the end of a post, with the full transcript in an
 * accordion. The transcript is server-rendered into the page HTML, so it is
 * crawlable even while the accordion is closed.
 */
export function PostVideo({ video, transcript }: PostVideoProps) {
  const src = `https://www.youtube-nocookie.com/embed/${video.youtubeId}?rel=0`;

  return (
    <section
      aria-labelledby="post-video-heading"
      className="mt-16 pt-12 border-t border-gray-200"
    >
      <h2
        id="post-video-heading"
        className="font-black text-2xl text-asp-blue mb-6"
      >
        Watch the Video
      </h2>

      <div className="relative w-full overflow-hidden rounded-[var(--radius-asp-lg)] shadow-asp-md bg-black aspect-video">
        <iframe
          src={src}
          title={video.title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>

      {transcript && (
        <details className="group mt-6 bg-asp-blue/[0.03] border border-gray-200 rounded-[var(--radius-asp-lg)] overflow-hidden">
          <summary className="flex items-center justify-between cursor-pointer px-6 py-5 font-bold text-asp-blue hover:text-asp-blue-light transition-colors list-none [&::-webkit-details-marker]:hidden">
            <span>Read the full transcript</span>
            <svg
              className="w-5 h-5 flex-shrink-0 ml-4 transition-transform duration-200 group-open:rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>
          <div className="px-6 pb-6 text-gray-600 leading-relaxed">
            {transcript.map((section) => (
              <div key={section.seconds} className="mt-6 first:mt-2">
                <h3 className="font-bold text-asp-blue text-base mb-2">
                  <span className="text-gray-400 font-semibold mr-2 tabular-nums">
                    {section.time}
                  </span>
                  {section.label}
                </h3>
                {section.paragraphs.map((p, i) => (
                  <p key={i} className="mb-3">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </details>
      )}
    </section>
  );
}
