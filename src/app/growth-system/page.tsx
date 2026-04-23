import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/sections/Hero";
import { Testimonials } from "@/components/sections/Testimonials";
import { TestimonialAnchor } from "@/components/sections/TestimonialAnchor";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "The Growth System | ASP",
  description:
    "Marketing, operations, and follow-up integrated into one growth system for home service businesses already running $1M+. You own everything we build.",
};

const COMPONENTS = [
  {
    title: "Local SEO & Google Business Profile",
    body: "Profile optimization, citation hygiene, local ranking signals, review generation. Built to own the map pack in every service area you run.",
  },
  {
    title: "Paid Media",
    body: "Google Ads, Local Services Ads, Meta. Managed against revenue, not impressions — every dollar tied to a booked job inside your CRM.",
  },
  {
    title: "StormFront",
    body: "Weather-triggered content that publishes on the days your phones already ring. Proprietary system built for roofing, HVAC, plumbing, and restoration operators.",
  },
  {
    title: "Answer Engine Optimization",
    body: "The content strategy that gets your business cited by ChatGPT, Perplexity, Gemini, and Google AI Overviews when buyers ask 'who should I hire?'",
  },
  {
    title: "Content Creation",
    body: "Social, GBP posts, blog, email. Produced in your brand voice on a schedule, reviewed by you, never AI slop.",
  },
  {
    title: "High-Converting Websites",
    body: "Custom builds on our proven structure. Next.js, Sanity CMS, Vercel. Fast, crawlable, built to convert the traffic the rest of the system sends.",
  },
  {
    title: "Housecall Pro Integration",
    body: "Official HCP Affiliate Partner. Every AI feature HCP ships — CSR AI, dispatch, attribution, reporting — configured for your business from day one.",
  },
  {
    title: "Attribution Stack",
    body: "Which channel drove which job, tracked from first click to booked revenue. No more guessing which half of your spend is working.",
  },
  {
    title: "Follow-Up Automation",
    body: "Quote-to-close sequences, win-back, review capture, maintenance reminders. The layer that protects margin on every lead you pay for.",
  },
  {
    title: "Review Systems",
    body: "Review requests fired at the right moment, routed to the right platform, resolved when something goes wrong. Reputation compounds into ranking.",
  },
];

const VS_VENDORS = [
  {
    them: "A local SEO vendor that reports on rankings you can't tie to revenue.",
    us: "Rankings reported against booked jobs in HCP, month over month.",
  },
  {
    them: "A PPC agency that optimizes to cost-per-click.",
    us: "Ad spend optimized against cost-per-booked-job and cost-per-closed-revenue.",
  },
  {
    them: "A web vendor you'll pay a fee to leave.",
    us: "Every domain, design, and line of code in your name at signup. No exit fees, ever.",
  },
  {
    them: "Six separate tools with six separate logins and zero attribution.",
    us: "One stack, one report, every channel traceable to revenue.",
  },
  {
    them: "A marketing team that doesn't touch your CRM.",
    us: "Native inside Housecall Pro. Setup, training, and the AI layer that actually runs there.",
  },
];

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

export default function GrowthSystemPage() {
  return (
    <main id="primary" className="site-main">
      <Hero
        eyebrow="The Product"
        heading="The Growth System<br>Marketing, operations, and follow-up — <span class='hero-text-gradient'>integrated.</span>"
        subheading="A single system that runs the marketing that wins the lead, the operations that close it, and the follow-up that protects margin. Built for home service operators already running a serious business."
        ctaText="Book a growth audit"
        ctaUrl="/contact"
        cta2Text="Run the Growth Diagnostic"
        cta2Url="/diagnostic"
        bgType="image"
        imageUrl="/images/backgrounds/team-at-work.jpg"
        imagePosition="center center"
      />

      {/* Three outcomes */}
      <section className="relative py-16 md:py-20 lg:py-24 2xl:py-32 text-white overflow-hidden bg-asp-black">
        <div
          aria-hidden
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(76, 201, 240, 0.14), transparent 70%), radial-gradient(ellipse 60% 50% at 50% 100%, rgba(159, 76, 255, 0.12), transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14 max-w-3xl mx-auto">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
                What it does
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl mb-5">
                One system. Three outcomes.
              </h2>
              <p className="text-white/70 text-lg">
                More leads, better operations, stronger margin. Every component below exists to move one of these three numbers.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="stagger">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  label: "More Leads",
                  headline: "Leads your pipeline actually needs.",
                  body: "Local SEO, GBP, paid media, StormFront, AEO visibility. Predictable lead flow — not vanity traffic.",
                },
                {
                  label: "Better Operations",
                  headline: "AI that works the job, not the dashboard.",
                  body: "HCP AI stack set up and running. Every lead answered, tracked, and attributed to the channel that delivered it.",
                },
                {
                  label: "Stronger Margin",
                  headline: "Follow-up systems that protect profit.",
                  body: "Quote-to-close sequences, win-back, review capture, reporting that proves what's moving revenue.",
                },
              ].map((o) => (
                <div
                  key={o.label}
                  className="relative rounded-[var(--radius-asp-2xl)] p-[1.5px] bg-gradient-to-br from-asp-blue-light/40 via-asp-purple/30 to-asp-blue-light/40"
                >
                  <div className="relative h-full rounded-[calc(var(--radius-asp-2xl)-1px)] bg-asp-black p-8 2xl:p-10">
                    <div className="inline-block font-bold text-[11px] uppercase tracking-widest mb-5 px-3 py-1 rounded-full bg-gradient-to-r from-asp-blue-light to-asp-purple text-white">
                      {o.label}
                    </div>
                    <h3 className="font-black text-2xl 2xl:text-3xl mb-4 leading-tight">
                      {o.headline}
                    </h3>
                    <p className="text-white/70 leading-relaxed">{o.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Testimonials />

      {/* What's inside */}
      <section className="relative py-16 md:py-20 lg:py-24 2xl:py-32 bg-asp-black text-white overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-50 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 40% at 50% 50%, rgba(159, 76, 255, 0.2), transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
                What&apos;s inside
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl mb-4">
                Ten components. One integrated system.
              </h2>
              <p className="text-white/70 text-lg mb-4">
                Every component below runs against the same revenue number. Each one is a lever most agencies sell as a separate retainer — we run them as one.
              </p>
              <p className="text-white/60 text-sm">
                Four of these components are also available as standalone products:{" "}
                <Link href="/local-seo-pro" className="text-asp-blue-light hover:text-white font-semibold">Local SEO Pro</Link>,{" "}
                <Link href="/stormfront" className="text-asp-blue-light hover:text-white font-semibold">StormFront</Link>,{" "}
                <Link href="/content-creation" className="text-asp-blue-light hover:text-white font-semibold">Content Creation Package</Link>, and{" "}
                <Link href="/ai-integration" className="text-asp-blue-light hover:text-white font-semibold">AI Integration</Link>.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="stagger">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {COMPONENTS.map((c) => (
                <div
                  key={c.title}
                  className="rounded-[var(--radius-asp-xl)] bg-white/[0.03] border border-asp-purple/25 hover:border-asp-purple/60 transition-colors p-6 lg:p-7"
                >
                  <h3 className="font-black text-lg 2xl:text-xl text-white mb-2">
                    {c.title}
                  </h3>
                  <p className="text-white/65 text-sm leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* vs hiring 6 vendors */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
                The difference
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl text-asp-blue mb-4">
                An integrated system, not six vendors.
              </h2>
              <p className="text-gray-600 text-lg">
                The operators we work with have tried stitching together a local SEO vendor, a PPC agency, a web vendor, a content agency, and a CRM consultant. Then they came to us.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="stagger">
            <div className="space-y-4">
              {VS_VENDORS.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-1 md:grid-cols-2 rounded-[var(--radius-asp-xl)] overflow-hidden"
                >
                  <div className="p-6 lg:p-7 bg-white text-asp-blue text-sm lg:text-base border border-gray-200 rounded-[var(--radius-asp-xl)] md:rounded-r-none md:border-r-0">
                    <div className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-2">
                      Industry standard
                    </div>
                    {row.them}
                  </div>
                  <div className="p-6 lg:p-7 bg-asp-blue text-white text-sm lg:text-base rounded-[var(--radius-asp-xl)] md:rounded-l-none">
                    <div className="font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-2">
                      The Growth System
                    </div>
                    {row.us}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Tier peek */}
      <section className="py-16 md:py-20 bg-asp-black text-white">
        <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
                How it&apos;s delivered
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl mb-4">
                Three tiers. Built for where you are.
              </h2>
              <p className="text-white/70 text-lg">
                Foundation starts the system. Growth adds the paid and creative depth. Premier is full-stack — including the fractional strategic direction most $5M+ operators don&apos;t get anywhere else.
              </p>
            </div>
            <div className="text-center">
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 bg-asp-blue-light text-asp-black font-bold px-7 py-3.5 rounded-[var(--radius-asp-lg)] hover:bg-white transition-colors"
              >
                See pricing &amp; tiers
                <span aria-hidden>&rarr;</span>
              </Link>
              <p className="text-white/40 text-sm mt-4">
                Not sure which tier? <Link href="/diagnostic" className="text-asp-blue-light hover:text-white">Run the Growth Diagnostic</Link> — 90 seconds.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Ownership — absorbed section */}
      <section
        id="ownership"
        className="relative py-16 md:py-20 lg:py-24 2xl:py-32 bg-asp-black text-white overflow-hidden"
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 40% at 0% 100%, rgba(76, 201, 240, 0.2), transparent 70%), radial-gradient(ellipse 50% 40% at 100% 0%, rgba(76, 201, 240, 0.14), transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-stretch">
              <div className="flex flex-col justify-center">
                <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
                  Ownership
                </span>
                <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl mb-5 leading-tight">
                  You own the data. You own the assets. We deliver the results.
                </h2>
                <p className="text-white/75 text-lg leading-relaxed mb-5">
                  Most home service marketing agencies rent you traffic, rent you tools, and either keep your data when you leave or charge a steep fee to hand it over. We work the other way around. Everything we build goes in your name from day one, at no exit cost.
                </p>
                <p className="text-white/60 leading-relaxed">
                  It&apos;s written into onboarding. In ten years, if you decide to take it all in-house &mdash; or move it to another agency &mdash; it all goes with you.
                </p>
              </div>

              <div className="rounded-[var(--radius-asp-2xl)] bg-white/[0.04] border border-asp-blue-light/25 p-8 lg:p-10 flex flex-col justify-center">
                <div className="font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-6">
                  What you own on day one
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
                  {OWN_LIST.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-white/90 text-base lg:text-lg leading-snug"
                    >
                      <svg
                        className="w-5 h-5 mt-0.5 flex-shrink-0 text-asp-blue-light"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* About — absorbed */}
      <section id="about" className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
                Operator-led
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl text-asp-blue mb-5 leading-tight">
                Built by an operator. Run by operators.
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                ASP is led by Joel Keith &mdash; founder, CEO, and a marketing operator who has spent years inside home service companies, building and refining the systems we now ship to clients. Every tactic in the Growth System has been deployed, measured, broken, and rebuilt against real client revenue. Every play we run has a number on the other side of it.
              </p>
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed mt-5">
                That&apos;s why the answer is specific. It&apos;s why the reporting ties to booked revenue. And it&apos;s why every recommendation we make is grounded in what we&apos;ve already seen work.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/logos/asp-white.png"
                alt="ASP"
                width={120}
                height={32}
                className="h-10 w-auto opacity-30"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <RelatedPages
        items={[
          {
            label: "Pillar",
            href: "/ai-integration",
            title: "AI Integration",
            body: "The Housecall Pro AI stack — CSR AI, attribution, follow-up — integrated into your business by an Official Affiliate Partner.",
          },
          {
            label: "Pricing",
            href: "/pricing",
            title: "Pricing & tiers",
            body: "Foundation, Growth, and Premier Partnership. Plus three productized entry points that scale into the full system.",
          },
          {
            label: "Leadership",
            href: "/fractional",
            title: "Fractional C-Suite",
            body: "For $5M–$20M operators ready for senior CFO / CMO / COO leadership. One cohesive team, not disconnected vendors.",
          },
        ]}
      />

      <TestimonialAnchor quote="It's a night-and-day difference from our last company." />

      <ConsultationCTA />
    </main>
  );
}
