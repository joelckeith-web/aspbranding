import Link from "next/link";
import { NATIONAL_OUTLETS, RANKING } from "@/data/press";

// Sits directly under the homepage hero: the TopMarketingAgencies.com listing on
// the left, outlet logos (each linking to the actual pickup) on the right.
// links={false} renders the same strip with no outbound links, for paid-traffic pages.
export function PressStrip({ links = true }: { links?: boolean }) {
  const logos = NATIONAL_OUTLETS.filter((o) => o.logo);
  const Badge = links ? "a" : "div";
  const badgeLinkProps = links ? { href: RANKING.url, target: "_blank", rel: "noopener" } : {};

  return (
    <section className="bg-[#000C24] border-t border-white/10 text-white">
      <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8 py-7 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
        <Badge
          {...badgeLinkProps}
          className="flex items-center gap-4 shrink-0 lg:pr-10 lg:border-r lg:border-white/15 no-underline text-white hover:text-white"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-asp-lg)] bg-gradient-to-br from-asp-blue-light to-asp-purple font-black text-lg">
            2026
          </span>
          <span className="flex flex-col">
            <span className="font-bold text-[15px]">{RANKING.title}</span>
            <span className="text-xs text-white/60">Listed by {RANKING.source}</span>
          </span>
        </Badge>

        <div className="flex flex-col gap-3 grow">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/60 m-0">ASP in the news</p>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
            {logos.map((o) => {
              const img = (
                <img src={`/images/press/${o.logo}`} alt={o.name} className={`${o.logoClass} w-auto block`} loading="lazy" />
              );
              return links ? (
                <a
                  key={o.name}
                  href={o.href}
                  target="_blank"
                  rel="noopener"
                  className="flex opacity-80 hover:opacity-100 transition-opacity duration-150"
                >
                  {img}
                </a>
              ) : (
                <span key={o.name} className="flex opacity-80">
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
      </div>
    </section>
  );
}
