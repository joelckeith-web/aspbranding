import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/sections/Hero";
import { TestimonialAnchor } from "@/components/sections/TestimonialAnchor";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { ExpandableDetails } from "@/components/sections/ExpandableDetails";
import { SectionBreak } from "@/components/sections/SectionBreak";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BreadcrumbSchema, ServiceSchema } from "@/components/schema/StructuredData";

const PAGE_TITLE = "Meta Ads Management Services for Home Service Businesses";
const PAGE_DESCRIPTION =
  "Meta ads management for home service businesses: Facebook and Instagram creative, audiences and retargeting built around demand Google already captures.";
const PAGE_URL = "https://www.aspbranding.com/meta-ads";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
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

const TRADES = [
  { name: "HVAC", slug: "hvac", icon: "thermometer" },
  { name: "Plumbing", slug: "plumbing", icon: "wrench" },
  { name: "Roofing", slug: "roofing", icon: "home" },
  { name: "Electrical", slug: "electrical", icon: "zap" },
  { name: "Restoration", slug: "restoration", icon: "shield" },
  { name: "Home Inspection", slug: "home-inspection", icon: "search" },
  { name: "Flooring", slug: "flooring", icon: "grid" },
  { name: "Remodeling", slug: "remodeling", icon: "hammer" },
  { name: "Landscaping", slug: "landscaping", icon: "leaf" },
  { name: "Pressure Washing", slug: "pressure-washing", icon: "droplet" },
  { name: "Pest Control", slug: "pest-control", icon: "bug" },
  { name: "Appliance Repair", slug: "appliance-repair", icon: "plug" },
];

const ICONS: Record<string, string> = {
  thermometer: "M12 3a2 2 0 00-2 2v9.1a4 4 0 104 0V5a2 2 0 00-2-2z",
  wrench: "M14.7 6.3a4 4 0 01-5 5L4 17v3h3l5.7-5.7a4 4 0 015-5l2-2-3-3-2 2z",
  home: "M3 10l9-7 9 7v10a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1V10z",
  zap: "M13 2L4 14h6l-1 8 9-12h-6l1-8z",
  shield: "M12 3l8 3v6c0 4.5-3.2 8.3-8 9-4.8-.7-8-4.5-8-9V6l8-3z",
  search: "M11 4a7 7 0 100 14 7 7 0 000-14zM20 20l-4-4",
  grid: "M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7zm9 0h7v7h-7v-7z",
  hammer: "M14 4l6 6-3 3-6-6 3-3zM10 8l-7 7v5h5l7-7",
  leaf: "M4 20c0-8 5-13 16-13 0 9-5 14-13 14H4v-1zM7 17c3-4 6-6 9-7",
  droplet: "M12 3s6 6.4 6 10.5A6 6 0 016 13.5C6 9.4 12 3 12 3z",
  bug: "M9 8a3 3 0 016 0v5a3 3 0 11-6 0V8zM5 10h4m6 0h4M5 15h4m6 0h4M9 5L7 3m8 2l2-2",
  plug: "M9 3v5m6-5v5M6 8h12v3a6 6 0 01-12 0V8zM12 17v4",
};

const PILLARS = [
  {
    label: "Creative built for your market",
    body: "Your crews, your trucks, your finished work — not stock photography of somebody else's job site.",
  },
  {
    label: "Audiences from your own data",
    body: "Customer lists, site visitors and lookalikes, built off the people who already paid you.",
  },
  {
    label: "Retargeting that closes the loop",
    body: "Back in front of the homeowner who read your service page and left without calling.",
  },
  {
    label: "Reporting against booked jobs",
    body: "Lead source carried through to the job, where your CRM supports it.",
  },
];

const AUDIT = [
  {
    label: "Pixel and conversion setup",
    body: "Whether the account is counting the lead you sell or a page view that looks like one. Browser-only pixel data loses events to ad blockers and iOS, so server-side tracking goes in alongside it where the platform and your site support it. A duplicate or mis-fired event makes a bad month read as a good one.",
  },
  {
    label: "Audience overlap and exclusions",
    body: "Prospecting sets bidding against your own retargeting sets is the most common waste we find. Customers, recent leads and current site visitors get excluded from cold delivery, and lookalikes get built from buyers rather than from everyone who ever landed on the site.",
  },
  {
    label: "Creative age and volume",
    body: "How many distinct creatives are live, and how long they have been running. One ad running for eight months to a small service-area audience is a frequency problem, not a targeting problem. Trade accounts need a steady supply of new creative because the audience is a county, not a country.",
  },
  {
    label: "Geography and radius",
    body: "Where delivery went, against the drive time you would accept. Meta will happily spend a service-area budget across a metro if the radius was set once and never revisited.",
  },
  {
    label: "Placements and format",
    body: "Which placements produced leads versus which ones absorbed the impressions. Automatic placements are fine as a starting point and poor as a permanent setting, and vertical video needs to be built as vertical video rather than a cropped landscape cut.",
  },
];

const WORK = [
  {
    label: "Google first, Meta second",
    body: "If you are not yet capturing the demand that already exists, that gets built first. Meta is the layer that keeps you in front of the same market between searches.",
  },
  {
    label: "Retargeting before prospecting",
    body: "The cheapest Meta audience you have is the people who already visited your site or called once. That gets built and running before any budget goes to cold delivery.",
  },
  {
    label: "A creative plan you can shoot",
    body: "We direct what to capture and when — job-site footage, before-and-afters, a technician answering one common question — so there is a steady supply rather than one batch. Creative fatigue is the limiting factor in a service-area account.",
  },
  {
    label: "Offers matched to the decision",
    body: "High-consideration work gets an offer that fits a long decision, like a design consultation or a real estimate. Low-ticket recurring services can carry a seasonal offer directly.",
  },
  {
    label: "Recruiting campaigns where you need crew",
    body: "Hiring is one of the things Meta does genuinely well for the trades, because you are reaching people who are not searching for a job that day. It runs as its own campaign with its own budget, separate from lead generation.",
  },
  {
    label: "A monthly review where you learn the account",
    body: "What was spent, what it produced, which creative carried it and what is being replaced. We build it, then show you how to run it.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Run the Growth Diagnostic",
    body: "About 90 seconds online. You get a read on where your marketing stands before anyone tries to sell you anything.",
  },
  {
    n: "02",
    title: "Account and creative audit",
    body: "A 30-minute call, then we go through the account: pixel and conversion setup, audience overlap, creative age, geography and placements. You get the findings whether or not you hire us.",
  },
  {
    n: "03",
    title: "Your first ninety days",
    body: "Tracking gets fixed, retargeting goes live before cold prospecting, and the creative plan starts running on a schedule. You see what changed and what it moved.",
  },
];

const PROOF = [
  {
    industry: "Home inspection",
    body: "A multi-location inspection company needed to scale lead generation across service areas. Ad spend had flattened and the conversion rate was stuck in single digits. Facebook campaigns were rebuilt from the creative up, with Local Services Ads, YouTube, email and local SEO running alongside.",
    stats: [
      { label: "Conversion rate", value: "7% → 18%" },
      { label: "Facebook Ads reach", value: "834K" },
      { label: "Monthly ad spend saved", value: "$10K" },
    ],
    note: "Twelve-month program. Lead growth +20%. Facebook sat alongside paid search, video, email and organic work, so this is not a Meta-only attribution claim.",
  },
  {
    industry: "HVAC services",
    body: "A regional operator had been flat against a revenue ceiling for two years and needed steadier lead flow in a crowded market. Social presence was built and run across Facebook and Instagram while Google Ads, Local Services Ads and Business Profile work ran on the demand-capture side.",
    stats: [
      { label: "Instagram reach", value: "50,164" },
      { label: "Website sessions", value: "5,291" },
      { label: "Key events tracked", value: "1,580" },
    ],
    note: "Twelve-month program. Sessions and key events are program-wide figures, not social-only.",
  },
];

const FAQS = [
  {
    question: "What are Meta ads for a home service business?",
    answer:
      "Paid placements on Facebook and Instagram, bought through one ad account. Unlike search, nobody on Meta typed a problem into a box — you are interrupting a feed. That makes it a poor tool for catching someone mid-emergency and a strong one for building recognition in your service area, bringing back site visitors, filling a seasonal calendar and hiring crew.",
  },
  {
    question: "Do Facebook ads work for home service businesses?",
    answer:
      "For some jobs, clearly. Remodeling, roof replacement, flooring and other projects decided over weeks do well on Meta, because there is time for finished-work photos and video to do their job. Recurring services and seasonal offers work too. Cold Meta traffic asking a stranger to book a service call rarely performs for the trades, and we will say so before you spend on it.",
  },
  {
    question: "Meta ads or Google Ads — which should I run first?",
    answer:
      "Google first, in almost every case. Search captures demand that already exists, so it is the shorter path to a booked job this month. Meta creates and retains demand around it. Starting with Meta while high-intent searches go unanswered puts the spend in the wrong order.",
  },
  {
    question: "Can Meta ads bring in emergency service calls?",
    answer:
      "Not reliably, and we will not position it that way. Emergency work is searched for at the moment it happens, which is a search-channel job. What Meta contributes to emergency trades is recognition before the emergency, so your name is the familiar one when a homeowner starts searching. That value shows up in search and direct traffic, not in a Facebook lead form.",
  },
  {
    question: "What creative works on Meta for the trades?",
    answer:
      "Your own work, filmed plainly. Before-and-after sequences, a technician explaining one common problem, a finished install walked on camera, a short answer to a question you get every week. Vertical video built as vertical video outperforms cropped landscape footage in feeds and Reels. Stock imagery of unrelated job sites is the most common reason a trade account underperforms.",
  },
  {
    question: "How do you build audiences if I don't have a big customer list?",
    answer:
      "We start with what the site produces. Visitors to your service pages, video viewers, profile engagement, and anyone who started a form without finishing it are all usable audiences without a list. As lead and customer data accumulates, lookalikes get built from buyers rather than from all traffic, which is what makes cold delivery worth testing later.",
  },
  {
    question: "Do you run Instagram as well as Facebook?",
    answer:
      "Yes, from the same ad account, because Meta sells them together. Which platform gets weight depends on where your buyers are and what the creative looks like. In one twelve-month program, Instagram reach came to 50,164 for a regional HVAC operator alongside the Facebook work. Placement decisions come from account data, not from a preference for one app.",
  },
  {
    question: "Can Meta ads help me hire technicians?",
    answer:
      "Yes, and it is one of the strongest uses of the channel for home service businesses. The people you want to hire are usually employed and not browsing job boards, which makes an interruption channel the right tool. Recruiting runs as its own campaign with its own budget, kept separate so hiring spend never gets read as lead-generation performance.",
  },
  {
    question: "How do you know a Meta lead turned into a job?",
    answer:
      "Lead source gets carried from the ad through to the job record, where your CRM supports it. Meta's own reporting will claim credit generously, so the number that matters is what the CRM says was booked and what it was worth. Where a channel assists a job it did not close, the monthly review says that plainly rather than counting it twice.",
  },
  {
    question: "How is Meta ads management priced?",
    answer:
      "There is no rate card here. What management costs depends on how much creative work you need, whether search is already running, and how deep the reporting goes — and you see that number before you commit to anything. Your ad spend is separate, paid directly to Meta, and not part of what you pay us. Current options are on the pricing page.",
  },
];

const RELATED = [
  {
    label: "Search",
    href: "/ppc",
    title: "PPC Management Services",
    body: "The demand-capture side: Google Search Ads, Local Services Ads and conversion tracking.",
  },
  {
    label: "Organic",
    href: "/seo",
    title: "Home Service SEO",
    body: "Where the traffic Meta retargets comes from in the first place.",
  },
  {
    label: "Content",
    href: "/content-creation",
    title: "Content Creation Package",
    body: "Social graphics and Business Profile posts, produced on a schedule.",
  },
];

export default function MetaAdsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.aspbranding.com/" },
          { name: "Meta Ads", url: PAGE_URL },
        ]}
      />
      {/* No price field — method page. */}
      <ServiceSchema
        name="Meta Ads Management Services"
        description="Facebook and Instagram advertising management for home service businesses: creative direction, audience build, retargeting, and reporting against booked jobs."
        url={PAGE_URL}
        serviceType="Social Media Advertising"
        audienceType="Home service businesses"
      />

      <Hero
        eyebrow="Services"
        heading="Meta Ads Management"
        subheading="Facebook and Instagram campaigns that build demand in your service area and bring back the homeowners who visited your site without calling."
        ctaText="Book a call"
        ctaUrl="/contact"
        cta2Text="Run the Growth Diagnostic"
        cta2Url="/diagnostic"
        bgType="image"
        imageUrl="/images/backgrounds/growth-system-bg.png"
        imagePosition="72% 62%"
        size="compact"
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <ScrollReveal animation="stagger">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {PILLARS.map((p) => (
                <div
                  key={p.label}
                  className="rounded-[var(--radius-asp-xl)] border border-gray-200 bg-white p-6 shadow-asp-sm"
                >
                  <h2 className="font-black text-lg text-asp-black">{p.label}</h2>
                  <p className="mt-2 text-base leading-relaxed text-black/70">{p.body}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Value prop */}
      <section className="py-16 md:py-20 bg-asp-surface-light">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <ScrollReveal>
              <p className="font-black uppercase tracking-wide text-sm text-asp-blue">
                Facebook &amp; Instagram
              </p>
              <h2 className="mt-3 font-black text-3xl md:text-4xl leading-tight text-asp-black">
                What Meta ads management covers for home service businesses
              </h2>
              <p className="mt-5 text-lg text-black/70 leading-relaxed">
                Meta ads management is the work of building the creative, audiences and retargeting
                that keep your company in front of homeowners in your service area between the
                moments they need you. Google Ads catches the person searching right now. Meta
                reaches the people who will search next month, and the ones who already visited your
                site without calling.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-asp-blue px-8 py-4 font-bold text-white transition hover:bg-asp-blue/90"
                >
                  Book a call
                </Link>
                <Link
                  href="/ppc"
                  className="inline-flex items-center justify-center rounded-full border-2 border-asp-black px-8 py-4 font-bold text-asp-black transition hover:bg-asp-black hover:text-white"
                >
                  See the search side
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="relative overflow-hidden rounded-[var(--radius-asp-2xl)] shadow-asp-lg">
                <Image
                  src="/images/portfolio/portfolio-mockup.avif"
                  alt="A home service Facebook and Instagram ad account reviewed by ASP"
                  width={880}
                  height={660}
                  className="h-auto w-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Trade grid */}
      <section className="py-14 md:py-16 bg-asp-black text-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <p className="font-black uppercase tracking-wide text-sm text-asp-blue-light">
                Every trade, every home service
              </p>
              <h2 className="mt-3 font-black text-3xl md:text-4xl leading-tight">
                Meta ads for roofing, HVAC, remodeling and every other home service trade
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-lg text-white/70 leading-relaxed">
                One platform, very different jobs to sell. Remodeling and roof replacement are
                decided over weeks, so Meta gets room to show finished work before anyone fills in a
                form. Emergency trades use it differently — the goal is being the name a homeowner
                already recognises when the water heater fails. Recurring services sit in between.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="stagger">
            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              {TRADES.map((t) => (
                <div
                  key={t.slug}
                  className="flex flex-col items-center gap-3 rounded-[var(--radius-asp-xl)] border border-asp-blue-light/25 bg-white/[0.03] px-4 py-6 text-center transition-colors hover:border-asp-blue-light/60"
                >
                  <svg
                    className="h-8 w-8 text-asp-blue-light"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={ICONS[t.icon]} />
                  </svg>
                  <span className="font-bold text-base">{t.name}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <p className="mx-auto mt-8 max-w-3xl text-center text-base text-white/60 leading-relaxed">
              Not on the list? We work with specialty contractors and home service businesses of
              every kind. The method is the same — what changes is how long your buyer takes to
              decide.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <ExpandableDetails heading="More details about our Meta Ads services">
        <h3 className="font-black text-2xl text-asp-black">What a Meta ad account audit looks at</h3>
        <p className="mt-4 text-black/70 leading-relaxed">
          Most Meta accounts we take over were set up once and left running. The creative is a year
          old, the audiences overlap each other, and the pixel is firing on page views instead of
          leads. We work through the same list every time, and you see the findings before we change
          a budget.
        </p>

        <ul className="mt-7 space-y-5">
          {AUDIT.map((l) => (
            <li key={l.label} className="flex gap-4">
              <svg
                className="mt-1 h-5 w-5 shrink-0 text-asp-blue"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <p className="font-black text-asp-black">{l.label}</p>
                <p className="mt-1 text-base leading-relaxed text-black/70">{l.body}</p>
              </div>
            </li>
          ))}
        </ul>

        <hr className="my-10 border-black/10" />

        <h3 className="font-black text-2xl text-asp-black">How a Meta engagement runs</h3>
        <p className="mt-4 text-black/70 leading-relaxed">
          Meta works best when it is not carrying the whole load. The order below assumes search is
          either running or going in alongside it.
        </p>

        <div className="mt-7 grid gap-5 md:grid-cols-2">
          {WORK.map((w) => (
            <div
              key={w.label}
              className="rounded-[var(--radius-asp-lg)] border border-gray-200 bg-white p-5 shadow-asp-sm"
            >
              <p className="font-black text-asp-black">{w.label}</p>
              <p className="mt-1 text-base leading-relaxed text-black/70">
                {w.label === "Google first, Meta second" ? (
                  <>
                    If you are not yet capturing the demand that already exists, that gets built
                    first. Our{" "}
                    <Link href="/ppc" className="text-asp-blue underline underline-offset-4">
                      PPC management
                    </Link>{" "}
                    work covers Google Search and Local Services Ads; Meta is the layer that keeps
                    you in front of the same market between searches.
                  </>
                ) : (
                  w.body
                )}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-7 text-base leading-relaxed text-black/70">
          One line stays fixed here, the same as on the search side. We do not swap the conversion
          action to a softer event — a landing-page view, a click on a phone number — to make
          delivery leave the learning phase faster. The levers we use are creative, audiences,
          geography and budget weighting. Meta does not run in isolation either: it sits inside{" "}
          <Link href="/growth-system" className="text-asp-blue underline underline-offset-4">
            the Growth System
          </Link>{" "}
          alongside the organic,{" "}
          <Link href="/local-seo-pro" className="text-asp-blue underline underline-offset-4">
            local
          </Link>{" "}
          and{" "}
          <Link href="/content-creation" className="text-asp-blue underline underline-offset-4">
            content
          </Link>{" "}
          work, reporting into one monthly review.
        </p>

        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-asp-blue px-8 py-4 font-bold text-white transition hover:bg-asp-blue/90"
          >
            Book a call
          </Link>
        </div>
      </ExpandableDetails>

      {/* Proof */}
      <section className="py-16 md:py-20 bg-asp-surface-light">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-black text-3xl md:text-4xl leading-tight text-asp-black">
              Meta ad results from real client work
            </h2>
            <p className="mt-4 font-black text-asp-blue">
              2.76M Facebook impressions · 834K Facebook Ads reach · conversion rate 7% → 18%
            </p>
          </ScrollReveal>

          <ScrollReveal animation="stagger">
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {PROOF.map((p) => (
                <div
                  key={p.industry}
                  className="rounded-[var(--radius-asp-2xl)] border border-gray-200 bg-white p-7 shadow-asp-md"
                >
                  <h3 className="font-black text-xl text-asp-black">{p.industry}</h3>
                  <p className="mt-3 text-base leading-relaxed text-black/70">{p.body}</p>
                  <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-black/10 pt-5">
                    {p.stats.map((s) => (
                      <div key={s.label}>
                        <dt className="text-xs uppercase tracking-wide text-black/50">{s.label}</dt>
                        <dd className="mt-1 font-black text-lg text-asp-blue">{s.value}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-4 text-sm text-black/50">{p.note}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <p className="mt-8 max-w-6xl text-base text-black/55 leading-relaxed">
              Neither program above isolates Meta. Both ran paid search, local and organic work at
              the same time, and a reach or impression figure measures how many people saw the work,
              not what it booked. A result somebody else got is not a forecast of yours. More detail
              on the{" "}
              <Link href="/case-studies" className="text-asp-blue underline underline-offset-4">
                full case studies page
              </Link>
              .
            </p>
          </ScrollReveal>
        </div>
      </section>

      <TestimonialAnchor
        quote="The team at ASP knows the business very well and continues to come up with ideas that have my small business thriving."
        attribution="Mike"
        variant="dark"
        size="sm"
        widthClassName="max-w-6xl"
      />

      {/* How to start */}
      <section className="py-14 md:py-16 bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-black text-3xl md:text-4xl leading-tight text-asp-black text-center">
              How to start with ASP
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="stagger">
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {STEPS.map((s) => (
                <div
                  key={s.n}
                  className="rounded-[var(--radius-asp-xl)] border border-gray-200 bg-white p-6 shadow-asp-sm"
                >
                  <span className="font-black text-3xl text-asp-blue-light">{s.n}</span>
                  <h3 className="mt-3 font-black text-lg text-asp-black">{s.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-black/70">{s.body}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/diagnostic"
                className="inline-flex items-center justify-center rounded-full bg-asp-blue px-8 py-4 font-bold text-white transition hover:bg-asp-blue/90"
              >
                Run the Growth Diagnostic
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border-2 border-asp-black px-8 py-4 font-bold text-asp-black transition hover:bg-asp-black hover:text-white"
              >
                Book a call
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionBreak />

      <FAQAccordion
        faqs={FAQS}
        heading="Frequently Asked Questions"
        columns={2}
        widthClassName="max-w-6xl"
      />

      <RelatedPages items={RELATED} heading="Related across the Growth System" />

      {/* Closing CTA */}
      <section className="py-14 md:py-16 bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-black text-3xl md:text-4xl leading-tight text-asp-black">
              Running Facebook ads that aren&rsquo;t producing jobs?
            </h2>
            <p className="mt-5 text-lg text-black/70 leading-relaxed">
              Start with the 90-second Growth Diagnostic, or book a call and we will read your ad
              account with you — pixel and conversion setup, audience overlap, creative age and where
              the delivery went. Either way you leave with findings, not a pitch.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-asp-blue px-8 py-4 font-bold text-white transition hover:bg-asp-blue/90"
              >
                Book a call
              </Link>
              <Link
                href="/diagnostic"
                className="inline-flex items-center justify-center rounded-full border-2 border-asp-black px-8 py-4 font-bold text-asp-black transition hover:bg-asp-black hover:text-white"
              >
                Run the Growth Diagnostic
              </Link>
            </div>
            <p className="mt-8 text-sm text-black/50">
              Every ad account, asset, and report built in your name · No exit fees · We report
              booked jobs and cost per job — not reach.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
