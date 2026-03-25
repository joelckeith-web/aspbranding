const BADGES = [
  { file: "google-partner-rgb.png", alt: "Google Partner", height: "h-14 md:h-20" },
  { file: "meta-business-partner.webp", alt: "Meta Business Partner", height: "h-14 md:h-20" },
  { file: "nahb.png", alt: "NAHB", height: "h-14 md:h-20" },
  { file: "superior-service-color.png", alt: "Superior Service", height: "h-14 md:h-20" },
];

export function TrustLogos() {
  return (
    <section className="bg-asp-surface-light border-y border-gray-200 py-10 md:py-12">
      <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs uppercase tracking-widest text-gray-400 font-bold mb-6">
          Trusted Technology Partners
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {BADGES.map((badge) => (
            <img
              key={badge.alt}
              src={`/images/badges/${badge.file}`}
              alt={badge.alt}
              className={`${badge.height} w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-150`}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
