import Link from "next/link";
import { BUSINESS } from "@/lib/constants";

interface HeroProps {
  heading: string;
  subheading?: string;
  eyebrow?: string;
  ctaText?: string;
  ctaUrl?: string;
  cta2Text?: string;
  cta2Url?: string;
  bgType?: "dark" | "image" | "video";
  youtubeId?: string;
  imageUrl?: string;
  imagePosition?: string;
  showTrustLogos?: boolean;
  pillars?: string;
}

export function Hero({
  heading,
  subheading,
  eyebrow,
  ctaText,
  ctaUrl = "/contact",
  cta2Text,
  cta2Url,
  bgType = "dark",
  youtubeId,
  imageUrl,
  imagePosition = "center center",
  showTrustLogos = false,
  pillars,
}: HeroProps) {
  return (
    <section className="hero relative min-h-[85vh] flex items-center text-white overflow-hidden">
      {/* Background */}
      {bgType === "video" && youtubeId && (
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-asp-gradient-hero opacity-70 z-10" />
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            style={{ transform: "scale(1.5)" }}
            allow="autoplay; encrypted-media"
            title="Hero background video"
          />
        </div>
      )}

      {bgType === "image" && imageUrl && (
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${imageUrl})`, backgroundPosition: imagePosition }}
          />
          <div className="absolute inset-0 bg-asp-gradient-hero opacity-75" />
        </div>
      )}

      {bgType === "dark" && (
        <div className="absolute inset-0 bg-asp-gradient-hero z-0" />
      )}

      {/* Content */}
      <div className="relative z-20 w-full max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          {eyebrow && (
            <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
              {eyebrow}
            </span>
          )}
          <h1
            className="font-black text-5xl md:text-6xl lg:text-7xl leading-none mb-6"
            dangerouslySetInnerHTML={{ __html: heading }}
          />
          {pillars && (
            <p className="text-lg md:text-xl font-bold text-asp-blue-light mb-4">
              {pillars}
            </p>
          )}
          {subheading && (
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl">
              {subheading}
            </p>
          )}

          {(ctaText || cta2Text) && (
            <div className="flex flex-wrap items-center gap-4">
              {ctaText && (
                <Link
                  href={ctaUrl}
                  className="inline-block bg-white text-asp-blue font-bold py-4 px-8 rounded-[var(--radius-asp-md)] hover:bg-white/90 transition-all duration-150 no-underline text-base"
                >
                  {ctaText}
                </Link>
              )}
              {cta2Text && cta2Url && (
                <Link
                  href={cta2Url}
                  className="inline-block border border-white/30 text-white font-bold py-4 px-8 rounded-[var(--radius-asp-md)] hover:bg-white/5 hover:border-white/50 transition-all duration-150 no-underline text-base"
                >
                  {cta2Text}
                </Link>
              )}
            </div>
          )}
        </div>

        {showTrustLogos && (
          <div className="mt-16 flex flex-wrap items-center gap-8 opacity-60">
            <span className="text-xs uppercase tracking-widest text-white/50 font-bold">
              Trusted Partners
            </span>
            {["google-partner-light.png", "meta-business-partner.webp", "nahb-light.png", "superior-service-color.png"].map(
              (badge) => (
                <img
                  key={badge}
                  src={`/images/badges/${badge}`}
                  alt={badge.replace(/[-_.]\w+$/, "").replace(/-/g, " ")}
                  className="h-10 md:h-14 w-auto object-contain"
                  loading="lazy"
                />
              )
            )}
          </div>
        )}
      </div>
    </section>
  );
}
