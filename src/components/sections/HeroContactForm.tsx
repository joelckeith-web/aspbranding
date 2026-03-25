"use client";

import { useState } from "react";

export function HeroContactForm() {
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

  if (formState === "success") {
    return (
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[var(--radius-asp-xl)] p-8 text-center">
        <div className="w-14 h-14 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-bold text-xl text-white mb-2">Message Sent!</h3>
        <p className="text-white/70 text-sm">We&apos;ll get back to you within one business day.</p>
      </div>
    );
  }

  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[var(--radius-asp-xl)] p-6 md:p-8">
      <h3 className="font-bold text-xl text-white mb-1">Get Your Free Strategy Session</h3>
      <p className="text-white/60 text-sm mb-6">No obligation — just actionable insights for your business.</p>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name *"
            required
            className="w-full px-4 py-3 rounded-[var(--radius-asp-md)] bg-white/10 border border-white/20 text-white placeholder-white/40 focus:border-asp-blue-light focus:ring-1 focus:ring-asp-blue-light/30 transition-all outline-none text-sm"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address *"
            required
            className="w-full px-4 py-3 rounded-[var(--radius-asp-md)] bg-white/10 border border-white/20 text-white placeholder-white/40 focus:border-asp-blue-light focus:ring-1 focus:ring-asp-blue-light/30 transition-all outline-none text-sm"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full px-4 py-3 rounded-[var(--radius-asp-md)] bg-white/10 border border-white/20 text-white placeholder-white/40 focus:border-asp-blue-light focus:ring-1 focus:ring-asp-blue-light/30 transition-all outline-none text-sm"
          />
          <select
            name="service"
            className="w-full px-4 py-3 rounded-[var(--radius-asp-md)] bg-white/10 border border-white/20 text-white/70 focus:border-asp-blue-light focus:ring-1 focus:ring-asp-blue-light/30 transition-all outline-none text-sm"
          >
            <option value="" className="bg-asp-blue text-white">Service Interest</option>
            <option value="local-seo" className="bg-asp-blue text-white">Local SEO</option>
            <option value="ppc" className="bg-asp-blue text-white">PPC Management</option>
            <option value="social-media" className="bg-asp-blue text-white">Social Media</option>
            <option value="web-design" className="bg-asp-blue text-white">Web Design</option>
            <option value="branding" className="bg-asp-blue text-white">Branding</option>
            <option value="consulting" className="bg-asp-blue text-white">Consulting</option>
          </select>
        </div>
        <textarea
          name="message"
          placeholder="Tell us about your project *"
          rows={3}
          required
          className="w-full px-4 py-3 rounded-[var(--radius-asp-md)] bg-white/10 border border-white/20 text-white placeholder-white/40 focus:border-asp-blue-light focus:ring-1 focus:ring-asp-blue-light/30 transition-all outline-none text-sm resize-y"
        />
        {formState === "error" && (
          <p className="text-error text-xs">Something went wrong. Please try again.</p>
        )}
        <button
          type="submit"
          disabled={formState === "sending"}
          className="w-full bg-white text-asp-blue font-bold py-3.5 px-6 rounded-[var(--radius-asp-md)] hover:bg-white/90 transition-all duration-150 text-sm disabled:opacity-50"
        >
          {formState === "sending" ? "Sending..." : "Get My Free Strategy Session"}
        </button>
        <p className="text-white/40 text-xs text-center">
          Free 30-min call with a senior strategist. No hard sells.
        </p>
      </form>
    </div>
  );
}
