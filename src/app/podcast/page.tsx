import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { TestimonialAnchor } from "@/components/sections/TestimonialAnchor";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  BreadcrumbSchema,
  ServiceSchema,
} from "@/components/schema/StructuredData";

export const metadata: Metadata = {
  title: "Podcast Studio — Editing, Clips, and Distribution",
  description:
    "White-label podcast editing, short-form clips, full-episode production, and growth strategy. Three tiers for creators and business owners serious about scaling their show.",
};

const TIERS = [
  {
    slug: "essentials",
    label: "Tier 1",
    name: "Content Essentials",
    price: "$497",
    tagline: "Establish a strong content presence.",
    body: "For business professionals and influencers who need consistent, branded social clips and clean audio without managing editors themselves.",
    highlights: [
      "20 short-form clips per month (9:16, under 90s)",
      "Professionally human-edited — no AI automation",
      "Basic audio mastering, noise reduction, volume leveling",
      "Customized to your brand identity and aesthetic",
      "3–5 day turnaround on clips",
      "Secure content delivery for scheduling",
    ],
    bonus: "Get 5 free extra social clips from your first episode when you join.",
    featured: false,
  },
  {
    slug: "accelerator",
    label: "Tier 2 — Most Popular",
    name: "Podcast Growth Accelerator",
    price: "$1,297",
    tagline: "Scale your show and grow your audience.",
    body: "For established creators and business owners ready to scale. Full-episode editing plus higher-volume short-form clips, with advanced audio mastering and dedicated account support.",
    highlights: [
      "30 short-form clips per month (9:16, under 90s)",
      "2 full-length episodes professionally edited each month (up to 90 min)",
      "Multi-camera video editing where applicable",
      "Advanced audio mastering — dialogue enhancement, de-reverb, EQ",
      "Dedicated account support with priority turnaround",
      "Exclusive access to our Podcast Growth Community",
      "Add-on services unlocked",
    ],
    bonus: "Get 5 free extra social clips from your first batch.",
    featured: true,
  },
  {
    slug: "domination",
    label: "Tier 3",
    name: "Podcast Domination",
    price: "$2,797",
    tagline: "Fully optimize and monetize your show.",
    body: "For entrepreneurs, influencers, and brands who want every episode to work as a growth engine — clips, full production, growth coaching, and monetization strategy.",
    highlights: [
      "40+ short-form clips per month across Reels, Shorts, TikTok, LinkedIn",
      "4 full-length episodes professionally edited each month (up to 90 min)",
      "Multi-camera edits with dynamic visual and audio storytelling",
      "Broadcast-quality mastering and sound design",
      "Monthly growth and monetization coaching with a live-event specialist",
      "Dedicated podcast growth consultant",
      "Priority support and VIP benefits",
    ],
    bonus: "Get 10 free extra social clips from your first month.",
    featured: false,
  },
];

const ADDONS = [
  {
    name: "Social Media Management",
    price: "from $899/mo",
    body: "Posting and scheduling across up to four platforms (every other day), curated captions and hashtags, dedicated account manager, monthly analytics.",
  },
  {
    name: "Podcast Growth Strategy",
    price: "one-time from $1,500",
    body: "Custom content strategy roadmap based on trends and keyword analysis. Episode structure optimization and strategic planning for monetization.",
  },
  {
    name: "Paid Promotion Campaigns",
    price: "from $2,250/mo",
    body: "Data-driven ad campaigns for listener growth. Targeted placements on YouTube, TikTok, and Instagram. Conversion-focused management. Ad spend not included.",
  },
  {
    name: "Studio Consulting",
    price: "$499 per session",
    body: "1:1 live session with a broadcast specialist to optimize your recording setup, camera angles, and audio quality. Gear recommendations included.",
  },
  {
    name: "A-La-Carte Episode Editing",
    price: "from $400 per episode",
    body: "Full-length video and audio editing with premium mastering. Available to Growth and Domination clients.",
  },
];

const FAQS = [
  {
    question: "Is this AI-edited or human-edited?",
    answer:
      "Every clip and full episode is edited by a real person on our production team. We use AI for research and analytics — never to generate the content itself. If you want fast, cheap, AI-cut clips, we're not the right fit.",
  },
  {
    question: "What kinds of creators is this built for?",
    answer:
      "Business owners, professionals, and influencers who are running a show seriously — not people testing whether they'll post consistently. Most clients land in Tier 2 because they already have a cadence and want scale plus quality; Tier 3 is for operators treating their show as a growth engine.",
  },
  {
    question: "Why limited availability?",
    answer:
      "Our services are hands-on — every clip reviewed, every episode mixed by a human. To keep that quality standard, we cap intake at 10 new clients per quarter.",
  },
  {
    question: "Do you handle the recording too?",
    answer:
      "Not directly — we edit, master, and distribute. But the Studio Consulting add-on covers 1:1 sessions with a broadcast specialist to dial in your room, your gear, and your recording workflow.",
  },
  {
    question: "Can I start on Tier 1 and upgrade?",
    answer:
      "Yes. Most clients start on Tier 1 or 2 and upgrade within the first quarter as their show grows. Add-ons unlock at Tier 2 and above.",
  },
  {
    question: "What's included in the Podcast Growth Community?",
    answer:
      "Private community access for Tier 2 and 3 clients — peer feedback on clips and episodes, best-practice playbooks, and periodic live sessions with our broadcast specialist. Think of it as a working room, not a forum.",
  },
];

export default function PodcastPage() {
  return (
    <main id="primary" className="site-main">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.aspbranding.com/" },
          { name: "Podcast Studio", url: "https://www.aspbranding.com/podcast" },
        ]}
      />
      <ServiceSchema
        name="ASP Podcast Studio"
        description="White-label podcast editing, short-form clip production, full-episode editing, and growth strategy for business creators and influencers."
        url="https://www.aspbranding.com/podcast"
        serviceType="Podcast Production Services"
        price="497"
      />

      <Hero
        eyebrow="Podcast Studio · from $497/mo"
        heading="Podcast editing, distribution,<br><span class='hero-text-gradient'>and growth strategy.</span>"
        subheading="White-label production for business owners, creators, and influencers serious about the show. Human-edited clips and full episodes, advanced audio mastering, and — at higher tiers — monetization strategy. Limited to ten new clients per quarter."
        ctaText="Book a podcast audit"
        ctaUrl="/contact?topic=podcast"
        cta2Text="See the tiers"
        cta2Url="#tiers"
        bgType="image"
        imageUrl="/images/industries/hvac-viking.jpg"
        imagePosition="center center"
      />

      {/* What it is */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
                What it is
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl text-asp-blue mb-5 leading-tight">
                Podcast production as a managed service.
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-5">
                Recording is the easy part. What kills most shows is the editing cadence, the short-form distribution, and the compounding effect of consistently clean audio. Podcast Studio handles all three.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Every tier includes human-edited clips built for vertical feeds, professional audio mastering, and delivery timed to your publishing schedule. Higher tiers add full-episode editing, multi-cam video, growth strategy, and monetization coaching.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Tiers */}
      <section
        id="tiers"
        className="relative py-16 md:py-20 lg:py-24 2xl:py-28 bg-asp-black text-white overflow-hidden"
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 20% 30%, rgba(76, 201, 240, 0.18), transparent 70%), radial-gradient(ellipse 60% 50% at 80% 70%, rgba(159, 76, 255, 0.14), transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14 max-w-3xl mx-auto">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
                Three tiers
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl mb-4">
                Pick the tier that matches your show.
              </h2>
              <p className="text-white/70 text-lg">
                Every tier includes human-edited production and advanced audio mastering. The tier you pick determines how much volume, how much full-episode work, and how much strategic support.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="stagger">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {TIERS.map((tier) => (
                <div
                  key={tier.slug}
                  className={`relative rounded-[var(--radius-asp-2xl)] p-[1.5px] ${
                    tier.featured
                      ? "bg-gradient-to-br from-asp-blue-light via-asp-purple to-asp-blue-light"
                      : "bg-white/10"
                  }`}
                >
                  <div className="relative h-full rounded-[calc(var(--radius-asp-2xl)-1px)] bg-asp-black p-7 lg:p-8 flex flex-col">
                    <div
                      className={`inline-block self-start px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5 ${
                        tier.featured
                          ? "bg-gradient-to-r from-asp-blue-light to-asp-purple text-white"
                          : "bg-white/10 text-asp-blue-light border border-white/15"
                      }`}
                    >
                      {tier.label}
                    </div>
                    <h3 className="font-black text-2xl lg:text-3xl mb-2">
                      {tier.name}
                    </h3>
                    <div className="flex items-baseline gap-1 mb-3">
                      <span className="font-black text-4xl lg:text-5xl text-asp-blue-light">
                        {tier.price}
                      </span>
                      <span className="text-white/60 text-sm">/mo</span>
                    </div>
                    <p className="text-asp-blue-light font-bold text-sm mb-3">
                      {tier.tagline}
                    </p>
                    <p className="text-white/70 text-sm leading-relaxed mb-6">
                      {tier.body}
                    </p>
                    <ul className="space-y-2.5 mb-6 flex-1">
                      {tier.highlights.map((h) => (
                        <li key={h} className="flex gap-3 text-sm text-white/85">
                          <svg
                            className="flex-shrink-0 w-5 h-5 mt-0.5 text-asp-blue-light"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2.5}
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                    {tier.bonus && (
                      <p className="text-xs text-asp-purple/90 font-semibold mb-5 italic">
                        {tier.bonus}
                      </p>
                    )}
                    <Link
                      href={`/contact?topic=podcast-${tier.slug}`}
                      className={`inline-flex items-center justify-center gap-2 font-bold py-3 px-6 rounded-[var(--radius-asp-lg)] transition-colors ${
                        tier.featured
                          ? "bg-asp-blue-light text-asp-black hover:bg-white"
                          : "border-2 border-white/25 text-white hover:border-asp-blue-light hover:text-asp-blue-light"
                      }`}
                    >
                      Start with {tier.name.split(" ")[0]}
                      <span aria-hidden>&rarr;</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 md:py-20 lg:py-24 bg-asp-surface-light">
        <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10 max-w-3xl mx-auto">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
                Add-ons for Tier 2 & 3
              </span>
              <h2 className="font-black text-3xl md:text-4xl text-asp-blue mb-3">
                Extra leverage when you need it.
              </h2>
              <p className="text-asp-blue/70 text-lg">
                Available to Growth Accelerator and Domination clients. Scope up as the show scales.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="stagger">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {ADDONS.map((a) => (
                <div
                  key={a.name}
                  className="rounded-[var(--radius-asp-xl)] bg-white border border-asp-blue/10 shadow-asp-md hover:shadow-asp-lg transition-shadow p-6 lg:p-7"
                >
                  <h3 className="font-black text-lg text-asp-blue mb-1">
                    {a.name}
                  </h3>
                  <p className="text-asp-purple font-semibold text-sm mb-3">
                    {a.price}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">{a.body}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <p className="text-center text-asp-blue/60 text-sm mt-10 italic">
              Podcast Gear Affiliate Program — coming soon. Curated studio recommendations with exclusive partner discounts.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Limited availability */}
      <section className="relative py-16 md:py-20 bg-asp-black text-white overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(159, 76, 255, 0.2), transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
              Limited availability
            </span>
            <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl mb-5 leading-tight">
              Ten new clients per quarter. That&apos;s the cap.
            </h2>
            <p className="text-white/75 text-lg mb-8 leading-relaxed">
              Every clip reviewed. Every episode mixed by a human. To hold that quality standard, we cap intake at ten new podcasts per quarter. Lock your spot before the window closes.
            </p>
            <Link
              href="/contact?topic=podcast"
              className="inline-flex items-center justify-center gap-2 bg-asp-blue-light text-asp-black font-bold px-8 py-4 rounded-[var(--radius-asp-lg)] hover:bg-white transition-colors text-base"
            >
              Book a podcast audit
              <span aria-hidden>&rarr;</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <FAQAccordion faqs={FAQS} heading="Podcast Studio — common questions." />

      <RelatedPages
        items={[
          {
            label: "Pillar",
            href: "/growth-system",
            title: "The Growth System",
            body: "How Podcast Studio plugs into the full marketing + operations stack for operators running it at scale.",
          },
          {
            label: "Productized",
            href: "/content-creation",
            title: "Content Creation Package",
            body: "Branded social graphics, GBP posts, and captions for operators who want content handled across every channel — not just podcast.",
          },
          {
            label: "Decision tool",
            href: "/diagnostic",
            title: "Growth Diagnostic",
            body: "90 seconds, 7 questions. Find out whether Podcast Studio is the right entry point for your business.",
          },
        ]}
      />

      <TestimonialAnchor quote="A game-changer for my business." />

      <ConsultationCTA />
    </main>
  );
}
