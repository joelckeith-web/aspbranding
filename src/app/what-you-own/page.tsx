import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { Hero } from "@/components/sections/Hero";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BreadcrumbSchema } from "@/components/schema/StructuredData";
import { BrandIcon, BrandGlyph, type BrandIconName } from "@/components/ui/BrandIcon";

const PAGE_TITLE = "Who Owns Your Website, Ad Accounts and Data?";
const PAGE_DESCRIPTION =
  "We run your marketing every month, and every asset we build and all of your data sit in your name, with no handover or exit fees. See what you own.";
const PAGE_URL = "https://www.aspbranding.com/what-you-own";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  // Page-level openGraph/twitter replace the root objects wholesale, so the site defaults are restated here.
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "ASP",
    url: PAGE_URL,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "ASP — Assess. Strategize. Perform." }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@aspbranding",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ["/og-image.png"],
  },
};

const OWN_LIST = [
  "Domain + DNS + hosting",
  "Website source code + design files",
  "Google Business Profile + reviews",
  "Ad accounts (Google, Meta, LSA) in your name",
  "CRM data + customer records",
  "Content + creative library",
  "Automations + workflows",
  "Reporting dashboards",
];


/** Faint ASP logo used as a background watermark. Purely decorative. */
function LogoMark({ variant = "black", className }: { variant?: "black" | "white"; className: string }) {
  return (
    <Image
      src={variant === "white" ? "/images/logos/asp-white.png" : "/images/logos/asp-black.png"}
      alt=""
      aria-hidden="true"
      width={776}
      height={400}
      className={`pointer-events-none select-none absolute h-auto ${className}`}
    />
  );
}

/** Background textures (Joel 2026-09-29: dot grid, diagonal hairlines, grain). All decorative. */
function DotGrid({ color = "rgba(0, 35, 102, 0.16)", mask = "radial-gradient(ellipse 75% 80% at 60% 40%, #000 30%, transparent 85%)" }: { color?: string; mask?: string }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage: `radial-gradient(${color} 1.2px, transparent 1.3px)`,
        backgroundSize: "22px 22px",
        WebkitMaskImage: mask,
        maskImage: mask,
      }}
    />
  );
}

function Hairlines({ mask = "linear-gradient(90deg, transparent 35%, #000 90%)" }: { mask?: string }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage:
          "repeating-linear-gradient(135deg, rgba(0, 35, 102, 0.06) 0px, rgba(0, 35, 102, 0.06) 1px, transparent 1px, transparent 14px)",
        WebkitMaskImage: mask,
        maskImage: mask,
      }}
    />
  );
}

function Grain({ id, opacity = 0.12 }: { id: string; opacity?: number }) {
  return (
    <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full" style={{ opacity }}>
      <filter id={id}>
        <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves={3} stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter={`url(#${id})`} />
    </svg>
  );
}

function A({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="font-semibold text-asp-blue underline decoration-asp-blue-light/60 underline-offset-4 hover:decoration-asp-blue">
      {children}
    </Link>
  );
}

type Asset = { id: string; icon: BrandIconName; title: string; body: ReactNode; links: { href: string; label: string }[] };

const ASSETS: Asset[] = [
  {
    id: "website",
    icon: "website",
    title: "Your website and its code",
    body: (
      <>
        Your domain, DNS, hosting, the site&rsquo;s source code and its design files are registered to you. We build and
        run the site, and it stays yours. Each month the site is where much of the other work lands. That means
        technical fixes, new and improved service pages, and call tracking that ties each call to the channel that
        produced it. For what separates a site that books jobs from one that only looks good, read{" "}
        <A href="/blog/websites-that-convert-for-home-service-businesses">our guide to websites that convert for home service businesses</A>.
        To see how the site connects to everything else we run, see <A href="/growth-system">the ASP Growth System</A>.
      </>
    ),
    links: [
      { href: "/blog/websites-that-convert-for-home-service-businesses", label: "Websites that convert" },
      { href: "/growth-system", label: "The Growth System" },
    ],
  },
  {
    id: "search",
    icon: "search",
    title: "Your search rankings",
    body: (
      <>
        No one can own a spot on Google, and ASP does not guarantee rankings. What you do own is the work that earns
        them: the service pages, the content and the technical fixes all live on your domain, so they stay with your
        site. Every month we work in order. First we fix what stops Google from reading the site. Then we build and
        improve the pages that answer what your customers search, and report results against booked jobs.{" "}
        <A href="/seo">How ASP runs SEO each month</A> explains the method. For the map pack side of search, read{" "}
        <A href="/blog/local-seo-for-home-service-businesses">our local SEO playbook for home service businesses</A>.
      </>
    ),
    links: [
      { href: "/seo", label: "SEO" },
      { href: "/blog/local-seo-for-home-service-businesses", label: "Local SEO playbook" },
    ],
  },
  {
    id: "gbp",
    icon: "gbp",
    title: "Your Google Business Profile",
    body: (
      <>
        Your Google Business Profile and its reviews belong to your business. You stay the primary owner, and ASP
        works inside the profile as a manager you can remove. Each month we keep the profile current. We update
        categories and services, publish posts, answer questions, check directory listings for consistency and map
        local rankings against nearby competitors. <A href="/local-seo-pro">See what Local SEO Pro covers each month</A>.
        Deciding where to put your first dollar?{" "}
        <A href="/blog/gbp-vs-website-home-service-priority">Our comparison of Google Business Profile and your website</A>{" "}
        walks through the order by revenue stage.
      </>
    ),
    links: [
      { href: "/local-seo-pro", label: "Local SEO Pro" },
      { href: "/blog/gbp-vs-website-home-service-priority", label: "GBP vs. website" },
    ],
  },
  {
    id: "ads",
    icon: "ads",
    title: "Your ad accounts and their history",
    body: (
      <>
        Your Google Ads, Meta and Local Services Ads accounts are set up in your name. The campaigns, settings and
        conversion data built inside them stay in accounts you own, along with the reports. Your ad spend is paid
        straight to the ad platforms from your own accounts. It is not part of any ASP fee, and ASP never collects,
        holds, disburses or marks up that spend. Each month we review where the spend went, which jobs it produced and
        what changes next. <A href="/ppc">How we manage Google Ads and Local Services Ads</A> and{" "}
        <A href="/meta-ads">how we run Facebook and Instagram ads</A> cover the details.
      </>
    ),
    links: [
      { href: "/ppc", label: "PPC" },
      { href: "/meta-ads", label: "Meta Ads" },
    ],
  },
  {
    id: "ai",
    icon: "ai",
    title: "How AI describes your business",
    body: (
      <>
        You cannot own what ChatGPT, Perplexity or Google&rsquo;s AI Overviews say about your company. You do own
        much of what they read: your website, your Business Profile and your reviews. They also read the listings
        that carry your name, address and phone number. Each month we keep those sources complete, current and
        consistent, and we shape your pages to answer the questions customers ask. ASP does not promise AI
        citations, because no one can control them.{" "}
        <A href="/aeo">How we work toward Google&rsquo;s AI Overviews and featured snippets</A> and{" "}
        <A href="/geo">how we keep AI assistants describing you accurately</A> explain the work.
      </>
    ),
    links: [
      { href: "/aeo", label: "AEO" },
      { href: "/geo", label: "GEO" },
    ],
  },
  {
    id: "data",
    icon: "data",
    title: "Your customer and lead data",
    body: (
      <>
        Your CRM data and customer records are yours, along with the call tracking and form data that show where each
        lead came from. We set up and maintain the tracking that connects a booked job back to the channel that
        produced it. We also carry lead source through to the job records in your CRM, where your CRM supports it.
        That data is the record of what your marketing paid for, so it lives in accounts you control.{" "}
        <A href="/blog/who-owns-your-marketing-data">Who owns your marketing data</A> lists the questions to ask any
        agency. <A href="/blog/marketing-attribution-home-service-businesses">Our guide to marketing attribution</A>{" "}
        explains how the tracking fits together.
      </>
    ),
    links: [
      { href: "/blog/who-owns-your-marketing-data", label: "Who owns your data" },
      { href: "/blog/marketing-attribution-home-service-businesses", label: "Attribution guide" },
    ],
  },
  {
    id: "content",
    icon: "content",
    title: "Your content",
    body: (
      <>
        The social graphics, captions and Google Business Profile posts we produce for you are yours to keep. Each
        month we plan the content calendar ahead and write captions in your business&rsquo;s voice. We deliver posts
        ready to publish on Facebook, Instagram, LinkedIn and your Business Profile. Over time that work becomes a
        content and creative library that belongs to you and can be reused anywhere you choose.{" "}
        <A href="/content-creation">See what the Content Creation Package includes</A>.
      </>
    ),
    links: [{ href: "/content-creation", label: "Content Creation Package" }],
  },
  {
    id: "leaving",
    icon: "key",
    title: "If you ever leave",
    body: (
      <>
        Under <A href="/terms">ASP&rsquo;s terms of service</A>, and unless your Scope of Work states otherwise, you
        own the deliverables created specifically for you during the engagement. That includes websites, design
        files, creative assets, content, automations and the data produced on your behalf. ASP does not charge
        handover or exit fees to transfer those assets when an engagement ends. Whoever you work with, it pays to
        check which logins and access levels are in your name before you need them.{" "}
        <A href="/blog/what-to-secure-before-you-leave-your-marketing-company">What to secure before you leave your marketing company</A>{" "}
        is a checklist for exactly that.
      </>
    ),
    links: [{ href: "/blog/what-to-secure-before-you-leave-your-marketing-company", label: "What to secure" }],
  },
];

const REASONS = [
  {
    n: "01",
    icon: "monthly" as BrandIconName,
    title: "The quality of the work",
    body: "Campaigns get adjusted against booked jobs, pages get improved, your Business Profile stays current and content ships in your voice.",
  },
  {
    n: "02",
    icon: "respond" as BrandIconName,
    title: "How we respond",
    body: "When something breaks or a question comes up, we pick it up and handle it. That includes the small jobs, like helping you back into a locked Google account or taking someone off an email list on request.",
  },
  {
    n: "03",
    icon: "results" as BrandIconName,
    title: "Results earned over time",
    body: "Each month's pages, fixes and campaign changes build on the last, and we report what they produced against booked jobs.",
  },
  {
    n: "04",
    icon: "search" as BrandIconName,
    title: "No chasing trends or core updates",
    body: "You stop chasing every marketing trend and Google core update. We watch for those updates and adjust the work when Google changes, so your time goes into running the business.",
  },
  {
    n: "05",
    icon: "home" as BrandIconName,
    title: "Home-service know-how",
    body: "ASP was built by an operator and is run by operators, and our leadership team owns trades-based businesses. We work across HVAC, plumbing, roofing, electrical and the other home service trades, so the work fits how your jobs get sold, booked and done.",
  },
];

const FAQS = [
  {
    question: "Do I own my website if ASP builds it?",
    answer:
      "Yes. Under ASP's terms, deliverables created specifically for you under an active engagement are yours, including websites and design files, unless your Scope of Work states otherwise. The domain, DNS, hosting, source code and design files go in your name from day one. ASP does not charge handover or exit fees to transfer them when an engagement ends.",
  },
  {
    question: "Do I own my Google Ads account?",
    answer:
      "Yes. Your Google, Meta and Local Services Ads accounts are set up in your name. You pay the ad platforms directly from your own accounts, and ad spend is not included in any ASP fee. ASP does not collect, hold, disburse or mark up your advertising spend at any time. The account and the spend stay under your control.",
  },
  {
    question: "Does ASP keep my data if I leave?",
    answer:
      "No. Your CRM data, customer records and the data produced on your behalf belong to you. ASP's terms list data among the deliverables clients own. ASP does not charge handover or exit fees to transfer those assets at the end of an engagement. You keep the record of every lead your marketing produced.",
  },
  {
    question: "Are there exit fees?",
    answer:
      "No. ASP does not charge handover or exit fees to transfer the assets created for you when an engagement ends. Your domain, hosting, ad accounts and CRM data are set up in your name from day one, so they are already yours. Section 3 of our terms of service spells this out.",
  },
  {
    question: "What does ASP keep?",
    answer:
      "ASP keeps its own methodologies, frameworks, internal tooling and any generally reusable technology that is not created specifically for you. Everything created specifically for you under your engagement belongs to you. That split is written into section 3 of our terms of service, so you can read the exact wording before you sign anything.",
  },
  {
    question: "If ASP builds it, why do I need a monthly service?",
    answer:
      "Building it is the starting point. A website, ad account or Business Profile keeps producing only when someone runs it well. That means adjusting campaigns against booked jobs, improving pages, keeping your profile current, shipping content and changing course when Google changes. ASP does that work for you each month. ASP does not guarantee specific rankings, lead volumes or revenue, and everything the work builds stays in your name.",
  },
  {
    question: "What keeps me from taking the system and running it myself?",
    answer:
      "Nothing stops you. You own every asset we build and all of your data, so you can run it in-house or hand it to someone else. ASP's own methods, frameworks and internal tooling stay with ASP. The monthly service exists because running it well takes steady time, attention to Google's changes and home-service know-how. Most owners would rather spend those hours on the business.",
  },
];

export default function WhatYouOwnPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.aspbranding.com/" },
          { name: "What You Own", url: PAGE_URL },
        ]}
      />

      <Hero
        eyebrow="Ownership"
        heading="What You Own When ASP Runs Your Marketing"
        subheading="We run your marketing for you every month. Every asset we build and all of your data stay in your name."
        ctaText="Get Started"
        ctaUrl="/contact"
        bgType="image"
        imageUrl="/images/backgrounds/growth-system-bg.png"
        imagePosition="72% 62%"
        size="compact"
      />

      {/* Intro + the ownership checklist */}
      <section className="relative overflow-hidden py-16 md:py-20 bg-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse 45% 55% at 85% 20%, rgba(76, 201, 240, 0.10), transparent 70%)" }}
        />
        <DotGrid mask="radial-gradient(ellipse 45% 70% at 85% 30%, #000 20%, transparent 80%)" />
        <LogoMark className="-right-24 -bottom-16 w-[30rem] opacity-[0.035] md:w-[40rem]" />
        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <ScrollReveal>
              <p className="font-black uppercase tracking-wide text-sm text-asp-blue">How it works</p>
              <h2 className="mt-3 font-black text-3xl md:text-4xl leading-tight text-asp-black">
                Run for you every month, built in your name
              </h2>
              <p className="mt-5 text-lg text-black/70 leading-relaxed">
                ASP runs your marketing for you on a monthly service. That covers the website, search, your Google
                Business Profile, ads, content and the tracking that ties it all to booked jobs. You own every asset we
                build and all of your data, and everything we build goes in your name from day one. The work we do
                with those assets each month is what puts them to use for your business.
              </p>
              <p className="mt-4 text-lg text-black/70 leading-relaxed">
                This page walks through each piece: what it is, what we do with it each month, and where to read more.
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <div className="rounded-[var(--radius-asp-2xl)] bg-asp-surface-navy p-7 lg:p-9 shadow-asp-lg border border-asp-blue-light/25">
                <p className="font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-5">What you own</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                  {OWN_LIST.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-white/90 text-base leading-snug">
                      <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-asp-blue-light" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>

          {/* Jump links to each asset */}
          <ScrollReveal>
            <nav aria-label="On this page" className="mt-12 flex flex-wrap gap-3">
              {ASSETS.map((a) => (
                <a
                  key={a.id}
                  href={`#${a.id}`}
                  className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-asp-surface-light px-4 py-2 text-sm font-semibold text-asp-black no-underline transition hover:border-asp-blue-light hover:text-asp-blue"
                >
                  <BrandGlyph name={a.icon} className="w-4 h-4 text-asp-blue" />
                  {a.title}
                </a>
              ))}
            </nav>
          </ScrollReveal>
        </div>
      </section>

      {/* The hub: one row per owned asset */}
      <section className="relative overflow-hidden py-16 md:py-20 bg-asp-surface-light border-y border-gray-200">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 40% 30% at 0% 25%, rgba(76, 201, 240, 0.12), transparent 70%), radial-gradient(ellipse 40% 30% at 100% 70%, rgba(159, 76, 255, 0.08), transparent 70%)",
          }}
        />
        <Hairlines />
        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <div className="space-y-6">
            {ASSETS.map((a, i) => (
              <ScrollReveal key={a.id}>
                <article
                  id={a.id}
                  className="relative overflow-hidden scroll-mt-28 grid gap-6 rounded-[var(--radius-asp-xl)] border border-gray-200 bg-white p-7 shadow-asp-sm md:grid-cols-[14rem_1fr] lg:p-9"
                >
                  <div className="relative">
                    <BrandIcon name={a.icon} size="md" />
                    <p className="mt-4 font-black text-sm tracking-widest text-asp-blue-light">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h2 className="mt-1 font-black text-2xl leading-tight text-asp-black">{a.title}</h2>
                  </div>
                  <div className="relative">
                    <p className="text-lg text-black/70 leading-relaxed">{a.body}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {a.links.map((l) => (
                        <Link
                          key={l.href}
                          href={l.href}
                          className="inline-flex items-center gap-1.5 rounded-full bg-asp-blue/5 px-3.5 py-1.5 text-sm font-semibold text-asp-blue no-underline transition hover:bg-asp-blue hover:text-white"
                        >
                          {l.label}
                          <span aria-hidden="true">&rarr;</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Centerpiece: why clients keep ASP */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-asp-black text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 45% at 50% 0%, rgba(76, 201, 240, 0.16), transparent 70%), radial-gradient(ellipse 55% 40% at 85% 100%, rgba(159, 76, 255, 0.14), transparent 70%)",
          }}
        />
        <DotGrid color="rgba(76, 201, 240, 0.22)" mask="radial-gradient(ellipse 70% 60% at 50% 10%, #000 20%, transparent 80%)" />
        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="font-black uppercase tracking-wide text-sm text-asp-blue-light">The monthly work</p>
              <h2 className="mt-3 font-black text-3xl md:text-5xl leading-tight">Why clients keep ASP</h2>
              <p className="mt-5 text-lg md:text-xl text-white/75 leading-relaxed">
                Owning the assets protects you. The reason clients keep working with ASP is what we do with those
                assets for them every month.
              </p>
            </div>
          </ScrollReveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {REASONS.map((r, i) => (
              <ScrollReveal key={r.n}>
                <div
                  className={`h-full rounded-[var(--radius-asp-2xl)] border-2 border-asp-blue-light/30 bg-white/[0.03] p-7 transition-colors hover:border-asp-blue-light/70 ${
                    i === REASONS.length - 1 ? "lg:col-span-1 md:col-span-2" : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <BrandIcon name={r.icon} size="md" onDark />
                    <p className="font-black text-2xl text-asp-blue-light/60">{r.n}</p>
                  </div>
                  <h3 className="mt-5 font-black text-xl">{r.title}</h3>
                  <p className="mt-3 text-white/75 leading-relaxed">{r.body}</p>
                </div>
              </ScrollReveal>
            ))}
            <ScrollReveal>
              <div className="flex h-full flex-col justify-center rounded-[var(--radius-asp-2xl)] bg-asp-gradient-primary p-7 md:col-span-2 lg:col-span-1">
                <p className="text-lg font-bold leading-snug">
                  <Link
                    href="/blog/marketing-vendor-vs-marketing-partner"
                    className="text-white underline decoration-white/50 underline-offset-4 hover:decoration-white"
                  >
                    What separates a marketing vendor from a marketing partner
                  </Link>{" "}
                  shows what an ordinary week of this work looks like.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Yours vs. what ASP keeps */}
      <section className="relative overflow-hidden py-16 md:py-20 bg-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse 50% 45% at 25% 60%, rgba(76, 201, 240, 0.12), transparent 70%)" }}
        />
        <Grain id="grain-keeps" opacity={0.1} />
        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <p className="font-black uppercase tracking-wide text-sm text-asp-blue">Where the line sits</p>
              <h2 className="mt-3 font-black text-3xl md:text-4xl leading-tight text-asp-black">What ASP keeps</h2>
            </div>
          </ScrollReveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <ScrollReveal>
              <div className="h-full rounded-[var(--radius-asp-2xl)] border-2 border-asp-blue bg-asp-blue/[0.03] p-7 lg:p-9">
                <p className="font-bold text-xs uppercase tracking-widest text-asp-blue">Yours</p>
                <p className="mt-4 text-lg text-black/75 leading-relaxed">
                  Everything built specifically for you under your engagement is yours: the website and its code, your
                  accounts, your content, your automations and your data.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="h-full rounded-[var(--radius-asp-2xl)] border border-gray-200 bg-asp-surface-light p-7 lg:p-9">
                <p className="font-bold text-xs uppercase tracking-widest text-black/50">ASP keeps</p>
                <p className="mt-4 text-lg text-black/75 leading-relaxed">
                  ASP keeps ownership of its own methodologies, frameworks, internal tooling and any generally reusable
                  technology that was not created specifically for you. Those are the methods and tools we bring to
                  every account.
                </p>
              </div>
            </ScrollReveal>
          </div>
          <p className="mt-6 text-center text-black/60">
            We spell out that line plainly so there is no confusion about where it sits.
          </p>
        </div>
      </section>

      <FAQAccordion faqs={FAQS} heading="Frequently Asked Questions" columns={2} widthClassName="max-w-6xl" />

      {/* Closing CTA */}
      <section className="relative overflow-hidden py-16 md:py-20 bg-asp-surface-light border-t border-gray-200">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse 50% 70% at 50% 100%, rgba(159, 76, 255, 0.12), transparent 70%)" }}
        />
        <Grain id="grain-cta" opacity={0.12} />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-black text-3xl md:text-4xl leading-tight text-asp-black">
              Ready to hand off the work and keep what you own?
            </h2>
            <p className="mt-5 text-lg text-black/70 leading-relaxed">
              Want your marketing run for you every month, with every asset we build and all of your data in your name?
              Start with a conversation about your business and where you want it to go.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-asp-blue px-10 py-4 font-bold text-white transition hover:bg-asp-blue/90"
              >
                Get Started
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
