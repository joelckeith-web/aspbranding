"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "homepage-newsletter" }),
      });

      if (res.ok) {
        setStatus("success");
        setMessage("You're in. Check your inbox for confirmation.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage("Something went wrong. Try again in a moment.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Try again.");
    }
  };

  return (
    <section className="relative py-16 md:py-20 lg:py-24 2xl:py-28 bg-white">
      <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[var(--radius-asp-2xl)] p-[1.5px] bg-gradient-to-br from-asp-blue via-asp-blue-light to-asp-purple shadow-asp-xl">
          <div
            className="relative rounded-[calc(var(--radius-asp-2xl)-1px)] overflow-hidden bg-asp-surface-navy text-white p-8 md:p-12 lg:p-16 2xl:p-20"
          >
            <div
              aria-hidden
              className="absolute inset-0 opacity-30 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 60% 50% at 20% 0%, rgba(76, 201, 240, 0.3), transparent 70%), radial-gradient(ellipse 50% 40% at 100% 100%, rgba(159, 76, 255, 0.25), transparent 70%)",
              }}
            />
            <ScrollReveal>
              <div className="relative z-10 max-w-2xl">
                <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
                  Free weekly read
                </span>
                <h2 className="font-black text-3xl md:text-4xl 2xl:text-5xl mb-4 leading-tight">
                  9,000+ home service owners already get it.
                </h2>
                <p className="text-white/75 text-lg mb-8 leading-relaxed">
                  Every week, our CEO Joel Keith sends one tight email on growth strategy for service businesses — marketing, AI, operations, margin. No fluff. Just the plays we&apos;re running on our own book.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    disabled={status === "loading"}
                    className="flex-1 bg-white/10 border border-white/20 rounded-[var(--radius-asp-lg)] px-5 py-3.5 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-asp-blue-light focus:border-transparent disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="bg-gradient-to-r from-asp-blue-light to-asp-purple text-white font-bold px-7 py-3.5 rounded-[var(--radius-asp-lg)] hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
                  >
                    {status === "loading" ? "Subscribing…" : "Subscribe"}
                  </button>
                </form>

                {message && (
                  <p
                    className={`mt-4 text-sm ${
                      status === "success" ? "text-asp-blue-light" : "text-red-300"
                    }`}
                  >
                    {message}
                  </p>
                )}

                <p className="text-white/40 text-xs mt-5">
                  Growing by 4,000 readers a month. Unsubscribe anytime.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
