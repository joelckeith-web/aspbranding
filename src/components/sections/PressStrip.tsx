import Link from "next/link";
import { NATIONAL_OUTLETS, RANKING } from "@/data/press";

// Styled to match the "Trusted by Growing Businesses" strip: white band, small
// centered label, logos in one row. The TopMarketingAgencies.com seal (same file
// as the footer badge) sits on the left; outlet logos link to the actual pickups.
// The logo files are white, so brightness-0 renders them black on the white band.
// links={false} renders the same strip with no outbound links, for paid-traffic pages.
export function PressStrip({ links = true }: { links?: boolean }) {
  const logos = NATIONAL_OUTLETS.filter((o) => o.logo);
  const Badge = links ? "a" : "div";
  const badgeLinkProps = links ? { href: RANKING.url, target: "_blank", rel: "noopener" } : {};

  return (
    <section className="py-8 md:py-10 bg-white border-t border-asp-black/5">
      <p className="text-center text-xs uppercase tracking-widest text-asp-black/55 font-bold mb-8 px-4">
        ASP in the News
      </p>
      <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
        <Badge
          {...badgeLinkProps}
          className="flex items-center gap-4 shrink-0 lg:pr-12 lg:border-r lg:border-asp-black/10 no-underline text-asp-black hover:text-asp-black"
        >
          <img
            src="/images/badges/tma-featured-2026-dark.png"
            alt="Featured Home Services Marketing Agency, TopMarketingAgencies.com 2026"
            className="h-16 md:h-[72px] w-auto"
            loading="lazy"
          />
          <span className="flex flex-col">
            <span className="font-bold text-[15px]">{RANKING.title}</span>
            <span className="text-xs text-asp-black/55">Listed by {RANKING.source}</span>
          </span>
        </Badge>

        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {logos.map((o) => {
            const img = (
              <img
                src={`/images/press/${o.logo}`}
                alt={o.name}
                className={`${o.logoClass} w-auto block brightness-0`}
                loading="lazy"
              />
            );
            return links ? (
              <a
                key={o.name}
                href={o.href}
                target="_blank"
                rel="noopener"
                className="flex opacity-60 hover:opacity-100 transition-opacity duration-150"
              >
                {img}
              </a>
            ) : (
              <span key={o.name} className="flex opacity-60">
                {img}
              </span>
            );
          })}
          {links && (
            <Link href="/press" className="text-sm font-semibold text-asp-purple hover:text-asp-blue no-underline">
              See all press
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
