"use client";

// Note: client component — page-level metadata lives in the app router
// convention but cannot be exported from a "use client" file. The title
// and description for this route are set via the head.tsx sibling below.
import { useEffect, useRef, useState } from "react";
import { Hero } from "@/components/sections/Hero";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTABand } from "@/components/sections/CTABand";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BreadcrumbSchema } from "@/components/schema/StructuredData";
import { BUSINESS } from "@/lib/constants";
import faqData from "@/data/faq.json";

declare global {
  interface Window {
    grecaptcha?: {
      enterprise?: {
        ready: (cb: () => void) => void;
        execute: (siteKey: string, opts: { action: string }) => Promise<string>;
      };
    };
  }
}

const RECAPTCHA_ACTION = "contact_submit";

const GROWTH_PACKAGES = [
  { value: "foundation", label: "Foundation — $2,500/mo" },
  { value: "growth", label: "Growth — $3,850/mo" },
  { value: "premier", label: "Premier Partnership — custom" },
  { value: "local-seo-pro", label: "Local SEO Pro — $1,200/mo" },
  { value: "stormfront", label: "StormFront — $549/mo" },
  { value: "content-package", label: "Content Creation Package — $499/mo" },
  { value: "fractional", label: "Fractional C-Suite — custom" },
  { value: "other", label: "Not sure yet — help me figure it out" },
];

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const recaptchaLoaded = useRef(false);

  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  useEffect(() => {
    if (!recaptchaSiteKey || recaptchaLoaded.current) return;
    if (document.querySelector(`script[src*="recaptcha/enterprise.js"]`)) {
      recaptchaLoaded.current = true;
      return;
    }
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/enterprise.js?render=${recaptchaSiteKey}`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
    recaptchaLoaded.current = true;
  }, [recaptchaSiteKey]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("sending");
    setErrorMsg("");
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload: Record<string, string> = Object.fromEntries(
      Array.from(data.entries()).map(([k, v]) => [k, String(v)])
    );

    // reCAPTCHA Enterprise token
    if (
      recaptchaSiteKey &&
      typeof window !== "undefined" &&
      window.grecaptcha?.enterprise
    ) {
      try {
        await new Promise<void>((resolve) =>
          window.grecaptcha!.enterprise!.ready(resolve)
        );
        const token = await window.grecaptcha.enterprise.execute(recaptchaSiteKey, {
          action: RECAPTCHA_ACTION,
        });
        payload.recaptchaToken = token;
        payload.recaptchaAction = RECAPTCHA_ACTION;
      } catch {
        setFormState("error");
        setErrorMsg("reCAPTCHA check failed. Please refresh and try again.");
        return;
      }
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setFormState("success");
        form.reset();
      } else {
        const body = await res.json().catch(() => ({}));
        setErrorMsg(body?.error || "Something went wrong. Please try again.");
        setFormState("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again or email us directly.");
      setFormState("error");
    }
  }

  return (
    <main id="primary" className="site-main">
      <BreadcrumbSchema items={[{ name: "Home", url: "https://www.aspbranding.com/" }, { name: "Contact", url: "https://www.aspbranding.com/contact" }]} />
      <Hero
        eyebrow="Get Started"
        heading="Let's build your<br><span class='hero-text-gradient'>growth system.</span>"
        subheading="Tell us about your business and we'll come back with a clear next step — even if we're not the right fit. No obligation, no hard sell."
        bgType="image"
        imageUrl="/images/industries/hvac-viking.jpg"
        imagePosition="center center"
      />

      <section className="pb-10 md:pb-12 lg:pb-14 2xl:pb-24 bg-asp-surface-light relative z-20 flex flex-col overflow-visible">
        {/* Contact Cards — 2 centered, dark, blue-light text */}
        <div
          className="w-full max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-16"
          style={{ marginTop: "-80px" }}
        >
          <ScrollReveal animation="stagger">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-3xl mx-auto">
              {/* Phone */}
              <div
                className="bg-white rounded-[var(--radius-asp-xl)] p-8 md:p-10 text-center border border-gray-100"
                style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.12)" }}
              >
                <div className="w-16 h-16 rounded-full bg-asp-blue/10 flex items-center justify-center mx-auto mb-5">
                  <svg
                    className="w-7 h-7 text-asp-blue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-lg text-asp-blue mb-2">Call Us</h3>
                <a
                  href={`tel:${BUSINESS.phoneLink}`}
                  className="text-gray-600 hover:text-asp-blue transition-colors no-underline text-lg font-medium"
                >
                  {BUSINESS.phone}
                </a>
                <p className="text-gray-400 text-sm mt-2">Mon–Fri, 9am–5pm CST</p>
              </div>

              {/* Email */}
              <div
                className="bg-white rounded-[var(--radius-asp-xl)] p-8 md:p-10 text-center border border-gray-100"
                style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.12)" }}
              >
                <div className="w-16 h-16 rounded-full bg-asp-blue/10 flex items-center justify-center mx-auto mb-5">
                  <svg
                    className="w-7 h-7 text-asp-blue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-lg text-asp-blue mb-2">Email Us</h3>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="text-gray-600 hover:text-asp-blue transition-colors no-underline text-lg font-medium"
                >
                  {BUSINESS.email}
                </a>
                <p className="text-gray-400 text-sm mt-2">We reply within 24 hours</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 2xl:gap-16">
            {/* Left: Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <h2 className="font-black text-3xl md:text-4xl text-asp-blue mb-4">
                  Send Us a Message
                </h2>
                <p className="text-gray-500 mb-8 text-lg">
                  Tell us about your business and goals. We&apos;ll get back to you with actionable insights — even if we&apos;re not the right fit.
                </p>

                <div className="bg-white rounded-[var(--radius-asp-xl)] shadow-asp-md p-8 md:p-10 border border-gray-100">
                  {formState === "success" ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                        <svg
                          className="w-8 h-8 text-success"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <h3 className="font-bold text-xl text-asp-blue mb-2">Message Sent!</h3>
                      <p className="text-gray-500">
                        We&apos;ll get back to you within one business day.
                      </p>
                    </div>
                  ) : (
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-bold text-gray-700 mb-2"
                          >
                            Full Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full px-4 py-3 rounded-[var(--radius-asp-md)] border border-gray-200 focus:border-asp-blue focus:ring-2 focus:ring-asp-blue/20 transition-all outline-none text-base"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-bold text-gray-700 mb-2"
                          >
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-3 rounded-[var(--radius-asp-md)] border border-gray-200 focus:border-asp-blue focus:ring-2 focus:ring-asp-blue/20 transition-all outline-none text-base"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-bold text-gray-700 mb-2"
                          >
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className="w-full px-4 py-3 rounded-[var(--radius-asp-md)] border border-gray-200 focus:border-asp-blue focus:ring-2 focus:ring-asp-blue/20 transition-all outline-none text-base"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="company"
                            className="block text-sm font-bold text-gray-700 mb-2"
                          >
                            Company / Business Name
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            required
                            className="w-full px-4 py-3 rounded-[var(--radius-asp-md)] border border-gray-200 focus:border-asp-blue focus:ring-2 focus:ring-asp-blue/20 transition-all outline-none text-base"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="service"
                          className="block text-sm font-bold text-gray-700 mb-2"
                        >
                          What growth package are you interested in?
                        </label>
                        <select
                          id="service"
                          name="service"
                          required
                          className="w-full px-4 py-3 rounded-[var(--radius-asp-md)] border border-gray-200 focus:border-asp-blue focus:ring-2 focus:ring-asp-blue/20 transition-all outline-none text-base bg-white"
                          defaultValue=""
                        >
                          <option value="" disabled>
                            Select a package...
                          </option>
                          {GROWTH_PACKAGES.map((pkg) => (
                            <option key={pkg.value} value={pkg.value}>
                              {pkg.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-bold text-gray-700 mb-2"
                        >
                          Tell us about your business
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          required
                          className="w-full px-4 py-3 rounded-[var(--radius-asp-md)] border border-gray-200 focus:border-asp-blue focus:ring-2 focus:ring-asp-blue/20 transition-all outline-none text-base resize-y"
                        />
                      </div>
                      <label className="flex items-start gap-3 text-gray-600 text-sm cursor-pointer">
                        <input
                          type="checkbox"
                          name="marketingConsent"
                          value="yes"
                          required
                          className="mt-0.5 w-4 h-4 rounded border-gray-300 accent-asp-blue flex-shrink-0"
                        />
                        <span>
                          I agree to receive marketing and promotional emails from ASP and to be subscribed to the ASP newsletter. You can unsubscribe at any time.
                        </span>
                      </label>
                      {formState === "error" && (
                        <p className="text-error text-sm">
                          {errorMsg || "Something went wrong. Please try again or email us directly."}
                        </p>
                      )}
                      <button
                        type="submit"
                        disabled={formState === "sending"}
                        className="inline-block bg-asp-blue text-white font-bold py-4 px-8 rounded-[var(--radius-asp-md)] hover:bg-asp-blue-dark transition-all duration-150 text-base disabled:opacity-50"
                      >
                        {formState === "sending" ? "Sending..." : "Send Message"}
                      </button>
                      <p className="text-xs text-gray-400 mt-4">
                        Protected by reCAPTCHA. Google{" "}
                        <a
                          href="https://policies.google.com/privacy"
                          target="_blank"
                          rel="noreferrer"
                          className="underline hover:text-asp-blue"
                        >
                          Privacy
                        </a>{" "}
                        &middot;{" "}
                        <a
                          href="https://policies.google.com/terms"
                          target="_blank"
                          rel="noreferrer"
                          className="underline hover:text-asp-blue"
                        >
                          Terms
                        </a>
                        .
                      </p>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              <ScrollReveal>
                <div className="bg-asp-gradient-hero rounded-[var(--radius-asp-xl)] p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="relative z-10">
                    <h3 className="font-bold text-xl text-white mb-6">What to Expect</h3>
                    <div className="space-y-5">
                      {[
                        "Free 30-minute strategy call with a senior operator",
                        "Custom growth audit of your current marketing",
                        "Actionable recommendations — even if we're not the right fit",
                        "No pressure, no hard sells — just honest insight",
                      ].map((text, i) => (
                        <div key={i} className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/15 flex items-center justify-center">
                            <span className="font-bold text-sm text-asp-blue-light">{i + 1}</span>
                          </div>
                          <p className="text-white/85 text-sm leading-relaxed pt-1">{text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="bg-asp-gradient-hero rounded-[var(--radius-asp-xl)] p-8 text-white relative overflow-hidden">
                  <h3 className="font-bold text-lg text-white mb-4">Trusted Partners</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { file: "google-partner-light.png", alt: "Google Partner" },
                      { file: "meta-business-partner.webp", alt: "Meta Business Partner" },
                      { file: "nahb-light.png", alt: "NAHB" },
                      { file: "superior-service-color.png", alt: "Superior Service" },
                    ].map((badge) => (
                      <div key={badge.alt} className="flex items-center justify-center p-3">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={`/images/badges/${badge.file}`}
                          alt={badge.alt}
                          className="h-16 w-auto object-contain"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="bg-white rounded-[var(--radius-asp-xl)] shadow-asp-md p-8 border border-gray-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
                    <h3 className="font-bold text-lg text-asp-blue">Quick Response</h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    We typically respond to inquiries within one business day. For urgent matters, call us directly.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <FAQAccordion faqs={faqData.contact} />

      <CTABand
        heading="Prefer to Talk?"
        subheading={`Call us at ${BUSINESS.phone} for a no-obligation conversation about your business goals.`}
        buttonText={BUSINESS.phone}
        buttonUrl={`tel:${BUSINESS.phoneLink}`}
      />
    </main>
  );
}
