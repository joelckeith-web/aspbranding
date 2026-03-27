"use client";

import { useState } from "react";
import { Hero } from "@/components/sections/Hero";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTABand } from "@/components/sections/CTABand";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BUSINESS } from "@/lib/constants";
import faqData from "@/data/faq.json";

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data)),
      });
      if (res.ok) {
        setFormState("success");
        form.reset();
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  }

  return (
    <main id="primary" className="site-main">
      <Hero
        eyebrow="Contact Us"
        heading="Let's Build Your<br>Growth Strategy"
        subheading="Ready to break through your revenue ceiling? Get in touch for a free strategy session — no obligation, no pressure, just clarity."
        bgType="dark"
      />

      <section className="pb-12 md:pb-16 lg:pb-18 2xl:pb-24 bg-asp-surface-light relative z-20 flex flex-col overflow-visible">
        {/* Contact Cards — overlapping hero */}
        <div className="w-full max-w-[var(--spacing-ultra)] mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-16" style={{ marginTop: "-80px" }}>
          <ScrollReveal animation="stagger">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
              {/* Phone */}
              <div className="bg-white rounded-[var(--radius-asp-xl)] p-8 md:p-10 text-center border border-gray-100" style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.12)" }}>
                <div className="w-16 h-16 rounded-full bg-asp-blue/10 flex items-center justify-center mx-auto mb-5">
                  <svg className="w-7 h-7 text-asp-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg text-asp-blue mb-2">Call Us</h3>
                <a href={`tel:${BUSINESS.phoneLink}`} className="text-gray-600 hover:text-asp-blue transition-colors no-underline text-lg font-medium">
                  {BUSINESS.phone}
                </a>
                <p className="text-gray-400 text-sm mt-2">Mon–Fri, 9am–5pm CST</p>
              </div>

              {/* Email */}
              <div className="bg-white rounded-[var(--radius-asp-xl)] p-8 md:p-10 text-center border border-gray-100" style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.12)" }}>
                <div className="w-16 h-16 rounded-full bg-asp-blue/10 flex items-center justify-center mx-auto mb-5">
                  <svg className="w-7 h-7 text-asp-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg text-asp-blue mb-2">Email Us</h3>
                <a href={`mailto:${BUSINESS.email}`} className="text-gray-600 hover:text-asp-blue transition-colors no-underline text-lg font-medium">
                  {BUSINESS.email}
                </a>
                <p className="text-gray-400 text-sm mt-2">We reply within 24 hours</p>
              </div>

              {/* Location */}
              <div className="bg-white rounded-[var(--radius-asp-xl)] p-8 md:p-10 text-center border border-gray-100" style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.12)" }}>
                <div className="w-16 h-16 rounded-full bg-asp-blue/10 flex items-center justify-center mx-auto mb-5">
                  <svg className="w-7 h-7 text-asp-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg text-asp-blue mb-2">Location</h3>
                <p className="text-gray-600 text-lg font-medium">Austin, TX</p>
                <p className="text-gray-400 text-sm mt-2">Serving businesses nationwide</p>
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
                        <svg className="w-8 h-8 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-xl text-asp-blue mb-2">Message Sent!</h3>
                      <p className="text-gray-500">We&apos;ll get back to you within one business day.</p>
                    </div>
                  ) : (
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                          <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-[var(--radius-asp-md)] border border-gray-200 focus:border-asp-blue focus:ring-2 focus:ring-asp-blue/20 transition-all outline-none text-base" />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                          <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-[var(--radius-asp-md)] border border-gray-200 focus:border-asp-blue focus:ring-2 focus:ring-asp-blue/20 transition-all outline-none text-base" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                          <input type="tel" id="phone" name="phone" className="w-full px-4 py-3 rounded-[var(--radius-asp-md)] border border-gray-200 focus:border-asp-blue focus:ring-2 focus:ring-asp-blue/20 transition-all outline-none text-base" />
                        </div>
                        <div>
                          <label htmlFor="company" className="block text-sm font-bold text-gray-700 mb-2">Company / Business Name</label>
                          <input type="text" id="company" name="company" className="w-full px-4 py-3 rounded-[var(--radius-asp-md)] border border-gray-200 focus:border-asp-blue focus:ring-2 focus:ring-asp-blue/20 transition-all outline-none text-base" />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-sm font-bold text-gray-700 mb-2">What are you interested in?</label>
                        <select id="service" name="service" className="w-full px-4 py-3 rounded-[var(--radius-asp-md)] border border-gray-200 focus:border-asp-blue focus:ring-2 focus:ring-asp-blue/20 transition-all outline-none text-base bg-white">
                          <option value="">Select a service...</option>
                          <option value="local-seo">Local SEO</option>
                          <option value="ppc">PPC Management</option>
                          <option value="social-media">Social Media Marketing</option>
                          <option value="web-design">Web Design &amp; Development</option>
                          <option value="branding">Branding &amp; Graphic Design</option>
                          <option value="consulting">Consulting &amp; Brand Therapy</option>
                          <option value="other">Other / Not Sure</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Tell us about your project</label>
                        <textarea id="message" name="message" rows={5} required className="w-full px-4 py-3 rounded-[var(--radius-asp-md)] border border-gray-200 focus:border-asp-blue focus:ring-2 focus:ring-asp-blue/20 transition-all outline-none text-base resize-y" />
                      </div>
                      {formState === "error" && (
                        <p className="text-error text-sm">Something went wrong. Please try again or email us directly.</p>
                      )}
                      <button
                        type="submit"
                        disabled={formState === "sending"}
                        className="inline-block bg-asp-blue text-white font-bold py-4 px-8 rounded-[var(--radius-asp-md)] hover:bg-asp-blue-dark transition-all duration-150 text-base disabled:opacity-50"
                      >
                        {formState === "sending" ? "Sending..." : "Send Message"}
                      </button>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              <ScrollReveal>
                {/* What to Expect */}
                <div className="bg-asp-gradient-hero rounded-[var(--radius-asp-xl)] p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="relative z-10">
                    <h3 className="font-bold text-xl text-white mb-6">What to Expect</h3>
                    <div className="space-y-5">
                      {[
                        "Free 30-minute strategy call with a senior strategist",
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
                {/* Trust Signals */}
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
                        <img src={`/images/badges/${badge.file}`} alt={badge.alt} className="h-16 w-auto object-contain" loading="lazy" />
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                {/* Quick Response */}
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

      {/* FAQ */}
      <FAQAccordion faqs={faqData.contact} />

      {/* CTA Band */}
      <CTABand
        heading="Prefer to Talk?"
        subheading={`Call us at ${BUSINESS.phone} for a no-obligation conversation about your business goals.`}
        buttonText={BUSINESS.phone}
        buttonUrl={`tel:${BUSINESS.phoneLink}`}
      />
    </main>
  );
}
