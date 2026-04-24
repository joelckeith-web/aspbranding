import Link from "next/link";
import { HeroContactForm } from "@/components/sections/HeroContactForm";
import { HeroVideoBackground } from "@/components/sections/HeroVideoBackground";

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
  showForm?: boolean;
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
  showForm = false,
  pillars,
}: HeroProps) {
  return (
    <section className="hero relative min-h-[60vh] lg:min-h-[65vh] 2xl:min-h-[85vh] flex items-center text-white overflow-hidden">
      {/* Background */}
      {bgType === "video" && youtubeId && (
        <HeroVideoBackground youtubeId={youtubeId} />
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
      <div className="relative z-20 w-full max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28 2xl:py-32 3xl:py-40">
        <div className={showForm ? "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 2xl:gap-16 items-start" : ""}>
          {/* Text side */}
          <div className={showForm ? "lg:pt-8" : "max-w-3xl"}>
            {eyebrow && (
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
                {eyebrow}
              </span>
            )}
            <h1
              className="font-black text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl leading-none mb-6"
              dangerouslySetInnerHTML={{ __html: heading }}
            />
            {pillars && (
              <p className="text-lg md:text-xl font-bold text-asp-blue-light mb-4">
                {pillars}
              </p>
            )}
            {subheading && (
              <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-6 lg:mb-8 2xl:mb-10 max-w-2xl">
                {subheading}
              </p>
            )}

            {!showForm && (ctaText || cta2Text) && (
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
                    className="inline-block bg-asp-blue-light text-white font-bold py-4 px-8 rounded-[var(--radius-asp-md)] hover:bg-white hover:text-asp-blue transition-all duration-150 no-underline text-base"
                    style={{ textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}
                  >
                    {cta2Text}
                  </Link>
                )}
              </div>
            )}
          </div>

          {/* Form side */}
          {showForm && <HeroContactForm />}
        </div>

        {showTrustLogos && (
          <div className="mt-10 2xl:mt-16 flex flex-wrap items-center gap-10 md:gap-12">
            {["hcp-affiliate.png", "google-partner-light.png", "meta-business-partner.webp", "nahb-light.png", "superior-service-color.png"].map(
              (badge) => (
                <img
                  key={badge}
                  src={`/images/badges/${badge}`}
                  alt={badge.replace(/[-_.]\w+$/, "").replace(/-/g, " ")}
                  className="h-14 md:h-16 lg:h-20 w-auto object-contain"
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
