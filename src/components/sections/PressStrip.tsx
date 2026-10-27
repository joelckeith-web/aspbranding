import Link from "next/link";
import { NATIONAL_OUTLETS, RANKING } from "@/data/press";

// Laid out like the "Trusted by Growing Businesses" strip (small centered label,
// logos in a row) on a black band. The TopMarketingAgencies.com seal (same file
// as the footer badge) sits on the left; outlet logos link to the actual pickups.
// links={false} renders the same strip with no outbound links, for paid-traffic pages.
export function PressStrip({ links = true }: { links?: boolean }) {
  const logos = NATIONAL_OUTLETS.filter((o) => o.logo);
  const Badge = links ? "a" : "div";
  const badgeLinkProps = links ? { href: RANKING.url, target: "_blank", rel: "noopener" } : {};

  return (
    <section className="py-8 md:py-10 bg-asp-black border-y border-white/10 text-white">
      <p className="text-center text-xs uppercase tracking-widest text-white/55 font-bold mb-8 px-4">
        ASP in the News
      </p>
      <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
        <Badge
          {...badgeLinkProps}
          className="flex items-center gap-4 shrink-0 lg:pr-12 lg:border-r lg:border-white/15 no-underline text-white hover:text-white"
        >
          <img
            src="/images/badges/tma-featured-2026-dark.png"
            alt="Featured Home Services Marketing Agency, TopMarketingAgencies.com 2026"
            className="h-16 md:h-[72px] w-auto"
            loading="lazy"
          />
          <span className="flex flex-col">
            <span className="font-bold text-[15px]">{RANKING.title}</span>
            <span className="text-xs text-white/55">Listed by {RANKING.source}</span>
          </span>
        </Badge>

        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {logos.map((o) => {
            const img = (
              <img
                src={`/images/press/${o.logo}`}
                alt={o.name}
                className={`${o.logoClass} w-auto block`}
                loading="lazy"
              />
            );
            return links ? (
              <a
                key={o.name}
                href={o.href}
                target="_blank"
                rel="noopener"
                className="flex opacity-90 hover:opacity-100 transition-opacity duration-150"
              >
                {img}
              </a>
            ) : (
              <span key={o.name} className="flex opacity-90">
                {img}
              </span>
            );
          })}
          {links && (
            <Link href="/press" className="text-sm font-semibold text-asp-blue-light hover:text-white no-underline">
              See all press
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
