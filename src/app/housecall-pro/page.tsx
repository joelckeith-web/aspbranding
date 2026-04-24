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
  title: "Housecall Pro Marketing Agency — Official Affiliate Partner",
  description:
    "ASP is an Official Housecall Pro Affiliate Partner. We configure the HCP AI stack — CSR AI, dispatch, attribution, follow-up automation — inside home service businesses running the platform.",
  alternates: { canonical: "https://www.aspbranding.com/housecall-pro" },
};

const CAPABILITIES = [
  {
    title: "CSR AI deployment",
    body: "HCP's AI receptionist configured for your shop — call routing, intent capture, after-hours answer, booking handoff. Recovers missed-call revenue without adding headcount.",
  },
  {
    title: "Dispatch + scheduling AI",
    body: "The HCP dispatch intelligence tuned to your service area, crew structure, and job types. Fewer misrouted jobs, tighter windows, better crew utilization.",
  },
  {
    title: "Job attribution",
    body: "Every booked job tied back to the marketing dollar that earned it — Google Ads, LSA, GBP, Meta, referrals. Reported against revenue inside HCP, not vanity metrics.",
  },
  {
    title: "Follow-up automation",
    body: "Quote-to-close sequences, win-back flows, review capture, maintenance reminders — wired inside HCP so no lead goes cold and no repeat revenue gets left behind.",
  },
  {
    title: "Ad platform feedback loops",
    body: "Booked-revenue signal fed back into Google Ads and Meta so the paid media optimizes to cost-per-closed-job instead of cost-per-click.",
  },
  {
    title: "Reporting and ops dashboards",
    body: "Monthly reports pulling directly from HCP — attributed revenue by channel, cost per booked job, pipeline aging, follow-up win-rate. Numbers your ops team can defend.",
  },
];

const WHO_ITS_FOR = [
  "You're already on Housecall Pro and want to get the AI features actually running",
  "You're switching to Housecall Pro and need the setup done right the first time",
  "You're on a competing CRM and evaluating a move — we help you scope the migration",
  "You're an HCP customer whose marketing agency doesn't know HCP exists",
];

const FAQS = [
  {
    question: "What does Official Housecall Pro Affiliate Partner mean?",
    answer:
      "It's Housecall Pro's formal partner designation for agencies that actively deploy the HCP stack for their clients. It gives ASP direct product access, priority support, and visibility into the HCP product roadmap so we can configure new features the week they ship. It also means HCP routes qualified operators our direction when those operators need marketing help that understands the platform.",
  },
  {
    question: "Do I have to move to Housecall Pro to work with you?",
    answer:
      "No. We run the full Growth System on any reasonable CRM. But if you're on HCP — or considering a move — our depth in the platform is one of the real advantages of working with ASP versus an agency that only runs ads on top of whatever CRM you happen to use. The attribution and AI integration is dramatically stronger when we're native to the platform.",
  },
  {
    question: "What's CSR AI actually doing for my shop?",
    answer:
      "It's answering calls your team would miss — after-hours, peak-volume overflow, simultaneous inbound — and routing them like a trained receptionist would. Most shops recover 10–18% of missed-call revenue in the first month just from calls that previously went to voicemail. The AI then hands qualified callers off to your scheduling flow inside HCP.",
  },
  {
    question: "How long does the HCP setup take?",
    answer:
      "Base configuration — CSR AI, dispatch, attribution tagging, follow-up sequences — typically runs 4–6 weeks from kickoff. Ad-platform feedback loops and reporting dashboards layer in during the second month. Most operators see attribution clarity inside the first 30 days, which alone changes how budget gets allocated.",
  },
  {
    question: "Do you help migrate us from another CRM?",
    answer:
      "Yes — scoped separately from the Growth System. Migration scope depends on data volume, existing workflow complexity, and integrations. We'll spec it during the growth audit and if HCP is the right move, coordinate directly with their onboarding team so nothing gets dropped in transition.",
  },
  {
    question: "Is this available inside every Growth System tier?",
    answer:
      "Growth and Premier include the full HCP integration layer. Foundation includes GBP, ad, and content work without the operational layer. AI Integration is also available standalone for operators who want the HCP stack configured but don't need the rest of the Growth System.",
  },
];

export default function HousecallProPage() {
  return (
    <main id="primary" className="site-main">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.aspbranding.com/" },
          {
            name: "Housecall Pro",
            url: "https://www.aspbranding.com/housecall-pro",
          },
        ]}
      />
      <ServiceSchema
        name="Housecall Pro Marketing & AI Integration"
        description="Official Housecall Pro Affiliate Partner. Full HCP AI stack configuration, attribution, and marketing integration for home service businesses."
        url="https://www.aspbranding.com/housecall-pro"
        serviceType="Housecall Pro Integration Services"
      />

      <Hero
        eyebrow="Official Housecall Pro Affiliate Partner"
        heading="The agency that runs<br><span class='hero-text-gradient'>the Housecall Pro stack.</span>"
        subheading="Most marketing agencies run ads on top of whatever CRM you happen to use. We run the CRM. ASP is an Official Housecall Pro Affiliate Partner — we configure CSR AI, dispatch, attribution, and follow-up automation natively inside HCP so every lead is answered, tracked, and tied to the revenue that paid for it."
        ctaText="Book an HCP audit"
        ctaUrl="/contact?topic=housecall-pro"
        cta2Text="See AI Integration"
        cta2Url="/ai-integration"
        bgType="image"
        imageUrl="/images/backgrounds/team-at-work.jpg"
        imagePosition="center center"
      />

      {/* Partnership section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
                The partnership
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl text-asp-blue mb-5 leading-tight">
                Platform-native agencies win.
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
              <p>
                The gap between &ldquo;we run your ads&rdquo; and &ldquo;we run your platform&rdquo; is the gap between a marketing vendor and a growth partner. Everything that compounds for a home service business — attribution, AI answer, dispatch intelligence, quote-to-close follow-up, repeat-customer motion — lives inside the CRM. When the marketing team can&apos;t see that layer, they optimize the wrong numbers.
              </p>
              <p>
                ASP is an Official Housecall Pro Affiliate Partner. That gives us direct product access, priority support, and configuration depth most agencies don&apos;t have. When HCP ships a new feature, our team configures it for your business that week — not next quarter. And when your ad spend performs, the revenue signal feeds back into the platforms so the next dollar compounds.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Capabilities */}
      <section className="relative py-16 md:py-20 lg:py-24 bg-asp-black text-white overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 20% 50%, rgba(76, 201, 240, 0.18), transparent 70%), radial-gradient(ellipse 60% 50% at 80% 50%, rgba(159, 76, 255, 0.14), transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
                What we configure
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl mb-4 leading-tight">
                Six layers of the HCP stack.
              </h2>
              <p className="text-white/70 text-lg">
                The configuration depth every HCP operator should have — and most agencies never touch.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="stagger">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {CAPABILITIES.map((c) => (
                <div
                  key={c.title}
                  className="rounded-[var(--radius-asp-xl)] bg-white/[0.04] border border-white/10 backdrop-blur-sm p-6 lg:p-7"
                >
                  <h3 className="font-black text-lg lg:text-xl text-asp-blue-light mb-2">
                    {c.title}
                  </h3>
                  <p className="text-white/75 text-sm leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-16 md:py-20 lg:py-24 bg-asp-surface-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
                Who it&apos;s for
              </span>
              <h2 className="font-black text-3xl md:text-4xl text-asp-blue mb-5 leading-tight">
                Good fit if any of these are true.
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <ul className="space-y-3">
              {WHO_ITS_FOR.map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-4 rounded-[var(--radius-asp-lg)] bg-white border border-asp-blue/10 shadow-asp-sm p-5 lg:p-6"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 mt-1 text-asp-purple"
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
                  <span className="text-gray-700 text-base leading-relaxed">
                    {line}
                  </span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      <FAQAccordion
        faqs={FAQS}
        heading="Housecall Pro + ASP — common questions."
      />

      <RelatedPages
        items={[
          {
            label: "Pillar",
            href: "/ai-integration",
            title: "AI Integration",
            body: "The full AI stack we configure — CSR AI, dispatch, attribution, and follow-up automation. Native to HCP, adaptable to anything.",
          },
          {
            label: "Pillar",
            href: "/growth-system",
            title: "The Growth System",
            body: "The marketing + operations system every engagement plugs into. HCP depth is what makes the attribution layer actually work.",
          },
          {
            label: "By trade",
            href: "/marketing",
            title: "Marketing by trade",
            body: "HVAC, plumbing, roofing, and more. Each trade has its own playbook inside the Growth System — and all of them run on HCP.",
          },
        ]}
      />

      <TestimonialAnchor quote="A game-changer for my business." />

      <ConsultationCTA />
    </main>
  );
}
