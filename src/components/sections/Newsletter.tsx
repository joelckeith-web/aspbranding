"use client";

import { useEffect, useRef, useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

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

const RECAPTCHA_ACTION = "newsletter_submit";

export function Newsletter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");
  const recaptchaLoaded = useRef(false);
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  const mountedAt = useRef<number>(0);
  const honeypotRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    mountedAt.current = Date.now();
  }, []);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;
    if (!consent) {
      setStatus("error");
      setMessage("Please confirm you agree to receive marketing emails.");
      return;
    }
    // Honeypot — bots fill hidden fields, real users never see them.
    if (honeypotRef.current?.value) {
      // Pretend everything's fine; do nothing. Don't tell the bot it lost.
      setStatus("success");
      setMessage("You're in. Check your inbox for confirmation.");
      setEmail("");
      return;
    }

    // Time-gate — bots submit instantly, humans take a beat.
    const formTime = Date.now() - mountedAt.current;
    if (formTime < 3000) {
      setStatus("error");
      setMessage("Please take a moment before submitting.");
      return;
    }

    setStatus("loading");
    setMessage("");

    let recaptchaToken: string | undefined;
    if (
      recaptchaSiteKey &&
      typeof window !== "undefined" &&
      window.grecaptcha?.enterprise
    ) {
      try {
        await new Promise<void>((resolve) =>
          window.grecaptcha!.enterprise!.ready(resolve),
        );
        recaptchaToken = await window.grecaptcha.enterprise.execute(
          recaptchaSiteKey,
          { action: RECAPTCHA_ACTION },
        );
      } catch {
        setStatus("error");
        setMessage("Security check failed. Please refresh and try again.");
        return;
      }
    }

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          source: "homepage-newsletter",
          recaptchaToken,
          recaptchaAction: RECAPTCHA_ACTION,
          formTime,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setMessage("You're in. Check your inbox for confirmation.");
        setName("");
        setEmail("");
      } else {
        const body = await res.json().catch(() => ({}));
        setStatus("error");
        setMessage(body?.error || "Something went wrong. Try again in a moment.");
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

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* Honeypot — hidden from real users + assistive tech, bots fill it */}
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: "-10000px",
                      top: "auto",
                      width: "1px",
                      height: "1px",
                      overflow: "hidden",
                    }}
                  >
                    <label>
                      Website (do not fill)
                      <input
                        ref={honeypotRef}
                        type="text"
                        name="website"
                        tabIndex={-1}
                        autoComplete="off"
                        defaultValue=""
                      />
                    </label>
                  </div>

                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    autoComplete="name"
                    disabled={status === "loading"}
                    className="bg-white/10 border border-white/20 rounded-[var(--radius-asp-lg)] px-5 py-3.5 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-asp-blue-light focus:border-transparent disabled:opacity-50"
                  />
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      autoComplete="email"
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
                  </div>
                  <label className="flex items-start gap-3 text-white/70 text-sm cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-0.5 w-4 h-4 rounded border-white/30 bg-white/10 accent-asp-blue-light flex-shrink-0"
                    />
                    <span>
                      I agree to receive marketing and promotional emails from ASP. Unsubscribe anytime.
                    </span>
                  </label>
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
                  Protected by reCAPTCHA. Growing by 4,000 readers a month. Unsubscribe anytime.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
