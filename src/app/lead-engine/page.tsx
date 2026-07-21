import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { FAQSection } from "@/components/sections/FAQSection";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { LeadEngineForm } from "@/components/sections/LeadEngineForm";
import testimonials from "@/data/testimonials.json";

// Ad landing page for the 90-Day Lead Engine offer. Deliberately NOT in the
// sitemap or nav, and noindex until launch — traffic arrives from paid
// campaigns only. Case studies are industry-labeled (site convention) until
// per-client naming approvals land.

export const metadata: Metadata = {
  title: "The 90-Day Lead Engine — $10,000 in Pipeline, Guaranteed | ASP",
  description:
    "A complete lead engine for your trades business — new website, SEO, content, and tracking — for $997/month for 90 days. $10,000 in qualified pipeline or every ASP fee drops to $0.",
  robots: { index: false, follow: false },
};

const STACK = [
  {
    title: "A brand-new website, built to book jobs",
    body: "Not a brochure — a conversion machine. Built on the same structure our highest-performing client sites run on. You own the site and the code from day one.",
  },
  {
    title: "SEO + AEO optimization",
    body: "Rank on Google, and get recommended when homeowners ask AI tools who to call. Both matter now. We build for both.",
  },
  {
    title: "Content + social system",
    body: "A month-by-month content engine for your social channels — planned, written, and designed to match your brand.",
  },
  {
    title: "Local SEO, GBP + review engine",
    body: "Your Google Business Profile tuned to show up when the job is urgent, plus a system that turns happy customers into reviews on repeat.",
  },
  {
    title: "CRM integration",
    body: "We wire the whole thing into Jobber, Housecall Pro, Service Fusion — whatever you run. Need one? We set you up on Housecall Pro at our partner discount.",
  },
  {
    title: "Lead capture + attribution",
    body: "Custom form fields and source tracking on every lead. You'll know exactly which channel sent every job — because we prove our own numbers.",
  },
];

const PROOF = [
  {
    label: "Mechanical / HVAC",
    stat: "$81,000",
    detail: "in closed sales in the first 90 days on this exact system.",
  },
  {
    label: "Outdoor Living",
    stat: "$1M+",
    detail: "in pipeline in the first 90 days. Now closing $400K weeks, pacing $2.5M+ this year.",
  },
  {
    label: "HVAC",
    stat: "$3M → $5M",
    detail: "scaled past the $3M barrier, now set out to do $5M this year.",
  },
  {
    label: "Home Inspection",
    stat: "$3M → $5.3M",
    detail: "$3M year one, $4.2M year two, tracking near $5.3M this year.",
  },
  {
    label: "Flooring",
    stat: "+$1M",
    detail: "on pace to add nearly $1M in revenue this year.",
  },
];

const STEPS = [
  {
    step: "1",
    title: "Apply",
    body: "Six questions, two minutes. Every field matters — it's how we know if we can win for you before anyone gets on a call.",
  },
  {
    step: "2",
    title: "Discovery call",
    body: "We look at your market, your competition, and your current lead flow together. Straight answers about whether this works for your business.",
  },
  {
    step: "3",
    title: "Qualify",
    body: "We only take businesses we're confident we can deliver the guarantee for. If it's not a fit, we'll tell you plainly — no hard sell.",
  },
  {
    step: "4",
    title: "Build + launch",
    body: "Contract signed, we go to work. Site, SEO, content, tracking — live and generating inside your first 90 days.",
  },
];

const FAQS = [
  {
    q: "What does the guarantee cover, exactly?",
    a: "If our system hasn't put $10,000 of qualified work into your pipeline by day 90, every ASP fee drops to $0 until it has. A qualified lead is a tracked, source-verified inquiry where the prospect stated a budget or asked about a service with pricing listed on your site. It's measured on pipeline generated — the leads and the dollar value behind them — not on which jobs you close. Your sales process stays yours.",
  },
  {
    q: "What does 'we work for free' mean? What's the catch?",
    a: "It means our fees go to $0 — all of them — until the $10,000 mark is hit. There's no catch hiding in ad spend, because we never collect ad spend. If you choose to run Google Ads, that money goes straight from your card to Google in your own account. We never touch it.",
  },
  {
    q: "Why do I need a CRM to qualify?",
    a: "Because the guarantee runs on proof. Your CRM is where we track every lead back to its source, so when we say the pipeline is there, the data shows it. If you don't have one, apply anyway — we'll get you set up on Housecall Pro at our partner discount as part of the build.",
  },
  {
    q: "What happens after the 90 days?",
    a: "You move into our full Growth System — the $3,850/month tier on our pricing page — at $2,500/month for your first 6 months. That's Growth-tier service at our Foundation price. After 6 months it renews at the standard rate. No surprises: it's all listed publicly, and you'll see the numbers your system is producing before you decide.",
  },
  {
    q: "Do I have to run ads?",
    a: "No. The $997 sprint is built on organic — your website, search rankings, AI visibility, content, and reviews. If you want to add Google Ads on top, the sprint is $1,497/month with management included, and your ad budget stays in your own account. Ads speed things up; they aren't required.",
  },
  {
    q: "What if I already have a website?",
    a: "We'll rebuild it on a structure that converts better — and you keep full ownership of the new one. If your current site performs, we'll tell you that too. The point is booked jobs, not busywork.",
  },
  {
    q: "Why is this so much cheaper than your normal pricing?",
    a: "Because it's an introductory sprint, capped at a handful of businesses at a time. We're betting that after 90 days of watching your pipeline fill, you'll want to keep going. Most do. That's the whole model — we win when you win, and we're willing to prove it first.",
  },
];

export default function LeadEnginePage() {
  return (
    <main id="primary" className="site-main">
      <Hero
        eyebrow="The 90-Day Lead Engine"
        heading="$10,000 in your pipeline in 90 days.<br><span class='hero-text-gradient'>Guaranteed, or we work free.</span>"
        subheading="A complete lead engine for your trades business — new website, SEO, content, reviews, and tracking that proves where every lead came from. $997/month for your first 90 days."
        ctaText="Apply now — takes 2 minutes"
        ctaUrl="#apply"
        cta2Text="See the guarantee"
        cta2Url="#guarantee"
        bgType="image"
        imageUrl="/images/industries/hvac-viking.jpg"
        imagePosition="center center"
      />

      {/* The math */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
                Do the math
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl text-asp-blue mb-6 leading-tight">
                $2,991 in. $10,000 guaranteed in your pipeline.
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-5">
                Three months at $997 is $2,991. We guarantee $10,000 of qualified work lands in your
                pipeline in that window — a 3.3x return on the fee before you close a single job. At
                a typical 30% margin, closing just a third of that pipeline covers your entire cost.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Most agencies sell you ads and report impressions. We build the growth system around
                your business and put a number on it. If it doesn&apos;t move a number, we don&apos;t
                ship it.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What you get */}
      <section className="relative py-16 md:py-20 lg:py-24 bg-asp-black text-white overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(76, 201, 240, 0.16), transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
                What the sprint builds
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl mb-4">
                Six pieces. One machine. You own all of it.
              </h2>
              <p className="text-white/70 text-lg">
                This isn&apos;t a service list — it&apos;s one system where every piece feeds the
                next. And every piece belongs to you, from day one.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="stagger">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {STACK.map((c) => (
                <div
                  key={c.title}
                  className="rounded-[var(--radius-asp-xl)] bg-white/[0.03] border border-asp-blue-light/25 hover:border-asp-blue-light/60 transition-colors p-6 lg:p-7"
                >
                  <h3 className="font-black text-lg 2xl:text-xl text-white mb-2">{c.title}</h3>
                  <p className="text-white/65 text-sm leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-10 max-w-3xl mx-auto rounded-[var(--radius-asp-xl)] border border-asp-purple/40 bg-asp-purple/10 p-6 lg:p-8 text-center">
              <p className="font-black text-lg text-white mb-2">
                Founding bonus — first 5 businesses only
              </p>
              <p className="text-white/75 text-sm leading-relaxed">
                The first 5 businesses accepted get a full brand kit built for them — logo system,
                colors, type, and brand guidelines. Yours to keep, whatever you do next.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* The guarantee */}
      <section id="guarantee" className="py-16 md:py-20 lg:py-24 bg-white scroll-mt-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
                The $10K Pipeline Guarantee
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl text-asp-blue mb-6 leading-tight">
                Hit $10,000 in qualified pipeline by day 90 — or every ASP fee drops to $0.
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-5">
                Not store credit. Not a discount on more services. Our fees go to zero and we keep
                working until your pipeline gets there. Your only remaining cost is any ad spend you
                choose to run — and that goes straight to Google from your own account. We never
                collect it, so there&apos;s nothing hidden in &quot;free.&quot;
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-5">
                Every lead is tracked to its source with the attribution system we build into your
                site. When we say the pipeline is there, you&apos;ll see the receipts — lead by lead,
                dollar by dollar.
              </p>
              <p className="font-bold text-asp-blue text-lg">
                And either way: you own the website. You own the accounts. You own the data. Walk
                away any time with all of it.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Proof */}
      <section className="relative py-16 md:py-20 lg:py-24 bg-asp-black text-white overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-35 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(159, 76, 255, 0.2), transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
                Real operators. Real results.
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl mb-4">
                The system already works. Here&apos;s what it did.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="stagger">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {PROOF.map((p) => (
                <div
                  key={p.label}
                  className="rounded-[var(--radius-asp-xl)] bg-white/[0.03] border border-asp-blue-light/25 p-6 text-center"
                >
                  <p className="text-asp-blue-light text-xs font-bold uppercase tracking-widest mb-3">
                    {p.label}
                  </p>
                  <p className="font-black text-2xl lg:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-asp-blue-light to-asp-purple mb-2">
                    {p.stat}
                  </p>
                  <p className="text-white/65 text-xs leading-relaxed">{p.detail}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Review wall */}
      <section className="py-16 md:py-20 lg:py-24 bg-asp-surface-light">
        <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
                In their words
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl text-asp-blue mb-4">
                What operators say about working with ASP.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="stagger">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-5 [&>*]:mb-5">
              {testimonials.map((t) => (
                <blockquote
                  key={t.firstName}
                  className="break-inside-avoid rounded-[var(--radius-asp-xl)] bg-white border border-gray-200 shadow-asp-sm p-6"
                >
                  <div className="flex gap-0.5 mb-3" aria-label="5 star rating">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">{t.quote}</p>
                  <footer className="text-asp-blue font-bold text-sm">— {t.firstName}</footer>
                </blockquote>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
                How it works
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl text-asp-blue mb-4">
                Application first. Contract last.
              </h2>
              <p className="text-gray-600 text-lg">
                We don&apos;t sell this to everyone. We take businesses we know we can win for —
                that&apos;s what makes the guarantee possible.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="stagger">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {STEPS.map((s) => (
                <div
                  key={s.step}
                  className="rounded-[var(--radius-asp-xl)] border border-gray-200 p-7 bg-white shadow-asp-sm"
                >
                  <div className="font-black text-3xl bg-clip-text text-transparent bg-gradient-to-r from-asp-blue-light to-asp-purple mb-3">
                    {s.step}
                  </div>
                  <h3 className="font-black text-lg text-asp-blue mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing transparency */}
      <section className="relative py-16 md:py-20 lg:py-24 bg-asp-black text-white overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-35 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(76, 201, 240, 0.16), transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
              No surprises
            </span>
            <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl mb-6 leading-tight">
              Here&apos;s the whole pricing story — including what comes after.
            </h2>
            <div className="text-left max-w-2xl mx-auto space-y-4 mb-6">
              <div className="rounded-[var(--radius-asp-xl)] bg-white/[0.03] border border-asp-blue-light/25 p-6">
                <p className="font-black text-white mb-1">Days 1–90 · The sprint</p>
                <p className="text-white/70 text-sm leading-relaxed">
                  <strong className="text-white">$997/month.</strong> The full organic engine — site,
                  SEO/AEO, content, reviews, CRM, tracking. Want Google Ads managed on top?{" "}
                  <strong className="text-white">$1,497/month</strong>, with your ad budget staying
                  in your own account.
                </p>
              </div>
              <div className="rounded-[var(--radius-asp-xl)] bg-white/[0.03] border border-asp-purple/40 p-6">
                <p className="font-black text-white mb-1">Months 4–9 · Growth, at intro pricing</p>
                <p className="text-white/70 text-sm leading-relaxed">
                  You move into our full Growth System — the{" "}
                  <strong className="text-white">$3,850/month</strong> tier on our pricing page — at{" "}
                  <strong className="text-white">$2,500/month for 6 months</strong>. Growth-tier
                  service at our Foundation price.
                </p>
              </div>
              <div className="rounded-[var(--radius-asp-xl)] bg-white/[0.03] border border-asp-blue-light/25 p-6">
                <p className="font-black text-white mb-1">Month 10+ · Standard Growth</p>
                <p className="text-white/70 text-sm leading-relaxed">
                  Renews at the standard <strong className="text-white">$3,850/month</strong>. By
                  then you&apos;ll have three quarters of your own pipeline data to judge us on.
                </p>
              </div>
            </div>
            <p className="text-white/60 text-sm">
              Why show you month 10 on day 1? Because we don&apos;t hold clients hostage — we keep
              them by performing. You&apos;ll have the numbers to hold us to it.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <FAQSection
        items={FAQS}
        eyebrow="Before you apply"
        heading="Straight answers to fair questions."
      />

      {/* Application */}
      <section id="apply" className="py-16 md:py-20 lg:py-24 bg-asp-surface-light scroll-mt-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-purple mb-4">
                Apply now
              </span>
              <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl text-asp-blue mb-4 leading-tight">
                Two minutes. Six questions. Zero obligation.
              </h2>
              <p className="text-gray-600 text-lg">
                We review every application by hand and only move forward where we see a real fit.
                Spots are limited — the first 5 accepted get the founding brand-kit bonus.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <LeadEngineForm />
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
