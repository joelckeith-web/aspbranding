"use client";

// Gate form for "The 5 Marketing Frameworks for Home Service Businesses".
//
// Fields (Joel, 2026-10-05): name, email and business website, plus phone if
// they will give it. Trade, company and revenue are gone — the website tells
// us who they are, and every extra field costs downloads.
//
// This is the TOP of the paid funnel — the ads point here, not at the
// application. The trade is that we ask for less and get far more people
// through: the application converts at 1–3%, a gated asset at 20–30%, which
// is the difference between readable creative data and noise at $33/day.
//
// The guide is DELIVERED BY EMAIL, never as a direct link on the success
// screen. A real address is the whole point of the gate.
import { useEffect, useRef, useState } from "react";
import { metaCookies, newEventId } from "@/lib/meta-browser";
import { isTestLead } from "@/lib/test-lead";

declare global {
  interface Window {
    grecaptcha?: {
      enterprise?: {
        ready: (cb: () => void) => void;
        execute: (siteKey: string, opts: { action: string }) => Promise<string>;
      };
    };
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

const RECAPTCHA_ACTION = "frameworks_download";

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "fbclid",
  "gclid",
] as const;

const inputClass =
  "w-full px-4 py-3 rounded-[var(--radius-asp-md)] bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-asp-blue focus:ring-2 focus:ring-asp-blue/20 transition-all outline-none text-sm";

// Byte-identical to the wording rendered above the button — storing only
// "Yes" proves nothing later; what they agreed to is the record.
const CONSENT_TEXT =
  "Yes, ASP can email me the guide and send marketing updates. I can unsubscribe any time.";

// variant/submitLabel exist for the CTA A/B test (/frameworks vs
// /frameworks/explore). The variant rides along with the request so the
// notification email shows which page converted.
export function FrameworksForm({
  variant = "A",
  submitLabel = "Send me the 5 frameworks",
}: { variant?: string; submitLabel?: string } = {}) {
  const [formState, setFormState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [consent, setConsent] = useState(false);
  const [utm, setUtm] = useState<Record<string, string>>({});
  const recaptchaLoaded = useRef(false);
  const mountedAt = useRef<number>(0);

  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  useEffect(() => {
    mountedAt.current = Date.now();

    // Source attribution. utm_content carries the creative ID (C1–C4), which
    // is how we learn which graphic produced each lead.
    const params = new URLSearchParams(window.location.search);
    const captured: Record<string, string> = {};
    for (const key of UTM_KEYS) {
      const v = params.get(key);
      if (v) captured[key] = v;
    }
    setUtm(captured);

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
    const payload: Record<string, string | number> = Object.fromEntries(
      Array.from(data.entries()).map(([k, v]) => [k, String(v)])
    );

    payload.lp_variant = variant;

    // Shared with the server-side (CAPI) event so Meta counts the lead once.
    const metaEventId = newEventId("lead");
    payload.metaEventId = metaEventId;
    const { fbp, fbc } = metaCookies();
    if (fbp) payload.fbp = fbp;
    if (fbc) payload.fbc = fbc;

    // Honeypot — silent success so bots don't learn the trap exists.
    if (payload.fax) {
      setFormState("success");
      form.reset();
      return;
    }

    const formTime = Date.now() - mountedAt.current;
    if (formTime < 3000) {
      setFormState("error");
      setErrorMsg("Please take a moment before submitting.");
      return;
    }
    payload.formTime = formTime;

    payload.marketingConsent = consent ? "Yes" : "No";
    payload.consentText = CONSENT_TEXT;
    payload.consentAt = new Date().toISOString();

    if (recaptchaSiteKey && typeof window !== "undefined" && window.grecaptcha?.enterprise) {
      try {
        await new Promise<void>((resolve) => window.grecaptcha!.enterprise!.ready(resolve));
        const token = await window.grecaptcha.enterprise.execute(recaptchaSiteKey, {
          action: RECAPTCHA_ACTION,
        });
        payload.recaptchaToken = token;
        payload.recaptchaAction = RECAPTCHA_ACTION;
      } catch {
        setFormState("error");
        setErrorMsg("Verification failed. Please refresh and try again.");
        return;
      }
    }

    try {
      const res = await fetch("/api/frameworks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        // Meta optimizes delivery against this event, so it fires only on a
        // verified submit — never on page load, never on the honeypot path.
        if (typeof window !== "undefined" && !isTestLead(payload.email)) {
          window.fbq?.(
            "track",
            "Lead",
            { content_name: "5 Marketing Frameworks", lp_variant: variant },
            { eventID: metaEventId },
          );
          window.gtag?.("event", "generate_lead", {
            event_category: "frameworks",
            event_label: "5 Marketing Frameworks",
            lp_variant: variant,
          });
        }
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

  if (formState === "success") {
    return (
      <div className="relative rounded-[var(--radius-asp-xl)] p-[2px] bg-asp-gradient-cta">
        <div className="bg-white rounded-[calc(var(--radius-asp-xl)-2px)] p-8 text-center">
          <div className="w-14 h-14 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
            <svg className="w-7 h-7 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="font-bold text-xl text-asp-blue mb-2">Check your email.</h3>
          <p className="text-gray-500 text-sm">
            The 5 Marketing Frameworks are on their way now. If it hasn&apos;t landed in a couple of
            minutes, check your spam folder — then email{" "}
            <a href="mailto:info@aspbranding.com" className="underline hover:text-asp-blue">
              info@aspbranding.com
            </a>{" "}
            and we&apos;ll send it straight over.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative rounded-[var(--radius-asp-xl)] p-[2px] bg-asp-gradient-cta shadow-asp-xl">
      <div className="bg-white rounded-[calc(var(--radius-asp-xl)-2px)] p-6 md:p-8">
        <h3 className="font-bold text-xl text-asp-blue mb-1">Send me the 5 frameworks</h3>
        <p className="text-gray-500 text-sm mb-6">
          Free. We email it to you so you have it to keep.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" name="name" placeholder="Full Name *" required className={inputClass} />
            <input type="email" name="email" placeholder="Email Address *" required className={inputClass} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="websiteUrl"
              inputMode="url"
              placeholder="Business Website *"
              required
              className={inputClass}
            />
            <input type="tel" name="phone" placeholder="Phone (optional)" className={inputClass} />
          </div>

          {/* Honeypot — hidden from humans, tempting to bots. */}
          <input
            type="text"
            name="fax"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />

          {/* Source attribution — captured from the landing URL. */}
          {Object.entries(utm).map(([k, v]) => (
            <input key={k} type="hidden" name={k} value={v} />
          ))}

          {formState === "error" && <p className="text-error text-xs">{errorMsg}</p>}

          <label className="flex items-start gap-2 text-gray-500 text-xs cursor-pointer">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="w-4 h-4 mt-0.5 shrink-0 rounded border-gray-300 accent-asp-blue"
            />
            <span>
              {CONSENT_TEXT} See our{" "}
              <a href="/privacy-policy" className="underline hover:text-asp-blue">
                Privacy Policy
              </a>
              .
            </span>
          </label>

          <button
            type="submit"
            disabled={formState === "sending"}
            className="w-full bg-asp-gradient-cta text-white font-semibold py-3.5 rounded-[var(--radius-asp-md)] shadow-asp-md hover:shadow-asp-lg transition-all disabled:opacity-60"
          >
            {formState === "sending" ? "Sending…" : submitLabel}
          </button>
        </form>
      </div>
    </div>
  );
}
