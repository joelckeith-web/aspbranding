import type { Metadata } from "next";
import Link from "next/link";
import {
  PRESS_RELEASE,
  RANKING,
  NATIONAL_OUTLETS,
  LOCAL_TV_OUTLETS,
  LOCAL_TV_TOTAL,
  LOCAL_PAPER_OUTLETS,
  type PressOutlet,
} from "@/data/press";

export const metadata: Metadata = {
  title: "Press | ASP",
  description:
    "ASP's 2026 announcement on its growth plans for home service companies, as published on AP News, USA Today, Yahoo Finance and more.",
  alternates: { canonical: "/press" },
};

function OutletGroup({ label, outlets, more }: { label: string; outlets: PressOutlet[]; more?: string }) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs font-bold uppercase tracking-[0.12em] text-gray-500 m-0">{label}</p>
      <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 list-none p-0 m-0">
        {outlets.map((o) => (
          <li key={o.name}>
            <a href={o.href} target="_blank" rel="noopener" className="font-semibold text-[15px] text-asp-blue hover:text-asp-purple">
              {o.name}
            </a>
          </li>
        ))}
      </ul>
      {more && <p className="text-sm text-gray-500 m-0">{more}</p>}
    </div>
  );
}

export default function PressPage() {
  return (
    <main id="primary" className="site-main">
      <section className="bg-asp-surface-navy text-white pt-36 pb-14 md:pt-40 md:pb-16">
        <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">Press</span>
          <h1 className="font-black text-3xl md:text-5xl leading-tight max-w-4xl mb-4">{PRESS_RELEASE.title}</h1>
          <p className="text-white/60 text-sm md:text-base m-0">
            <time dateTime={PRESS_RELEASE.date}>{PRESS_RELEASE.dateLabel}</time> · {PRESS_RELEASE.dateline} · Distributed by{" "}
            {PRESS_RELEASE.wire}
          </p>
        </div>
      </section>

      <section className="py-14 md:py-16 bg-white">
        <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-14">
          <div className="flex flex-col gap-6">
            <p className="text-lg leading-relaxed text-gray-800 m-0">
              ASP was listed on TopMarketingAgencies.com&apos;s 2026 page of home services marketing agencies. In 2026, ASP
              is expanding its marketing and AI services for home service companies, including answer engine optimization
              and AI tools that help owners run their businesses more efficiently.
            </p>
            <figure className="m-0 rounded-[var(--radius-asp-xl)] bg-asp-surface-light p-7">
              <blockquote className="m-0 text-xl leading-snug font-semibold text-asp-blue">
                &ldquo;This ranking means a lot to everyone on our team, because it reflects the work we do for our clients
                every day.&rdquo;
              </blockquote>
              <figcaption className="mt-3 text-sm text-gray-500">Joel Keith, CEO, ASP</figcaption>
            </figure>
            <div className="flex flex-wrap gap-3">
              <a
                href={PRESS_RELEASE.url}
                target="_blank"
                rel="noopener"
                className="inline-block bg-asp-purple text-white font-bold py-3.5 px-6 rounded-[var(--radius-asp-md)] hover:bg-asp-blue no-underline"
              >
                Read the full release on AP News
              </a>
              <a
                href={RANKING.url}
                target="_blank"
                rel="noopener"
                className="inline-block border border-gray-300 text-asp-blue font-bold py-3.5 px-6 rounded-[var(--radius-asp-md)] hover:border-asp-blue no-underline"
              >
                See the TopMarketingAgencies.com list
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <OutletGroup label="National and financial" outlets={NATIONAL_OUTLETS} />
            <OutletGroup
              label="Local TV station sites"
              outlets={LOCAL_TV_OUTLETS}
              more={`and ${LOCAL_TV_TOTAL - LOCAL_TV_OUTLETS.length} more station sites`}
            />
            <OutletGroup label="Local newspaper sites" outlets={LOCAL_PAPER_OUTLETS} />
            <p className="border-t border-gray-200 pt-4 text-sm text-gray-500 m-0">
              Media inquiries: <Link href="/contact">contact us</Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
