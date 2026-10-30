"use client";

// Two-step application for the paid /strategy-call pages (Joel, 2026-10-28,
// from Brady Sticker's paid-ads coaching): one qualifying question, then name,
// email and phone, one screen at a time so a phone visitor never faces a wall
// of fields. Revenue is the only qualifier; website, CRM and job value come up
// on the call. Same defense stack, pixel event and API as LeadEngineForm.
import { useEffect, useRef, useState } from "react";
import { metaCookies, newEventId } from "@/lib/meta-browser";
import { isTestLead } from "@/lib/test-lead";

const RECAPTCHA_ACTION = "lead_engine_apply";

const REVENUE_OPTIONS = [
  { value: "under-500k", label: "Under $500K" },
  { value: "500k-1m", label: "$500K – $1M" },
  { value: "1m-3m", label: "$1M – $3M" },
  { value: "3m-5m", label: "$3M – $5M" },
  { value: "5m-plus", label: "$5M+" },
];

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
  "w-full px-4 py-3 rounded-[var(--radius-asp-md)] bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-asp-blue focus:ring-2 focus:ring-asp-blue/20 transition-all outline-none text-base";

// Byte-identical to the wording rendered above the button (consent record).
const CONSENT_TEXT =
  "Yes, ASP can email me about this application and send marketing updates. I can unsubscribe any time.";

export function StrategyCallForm({
  title,
  successHref,
  submitLabel = "Submit and pick a time",
}: {
  title: string;
  successHref: string;
  submitLabel?: string;
}) {
  const [step, setStep] = useState<1 | 2>(1);
  const [revenue, setRevenue] = useState("");
  const [formState, setFormState] = useState<"idle" | "sending" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [consent, setConsent] = useState(false);
  const [utm, setUtm] = useState<Record<string, string>>({});
  const recaptchaLoaded = useRef(false);
  const mountedAt = useRef<number>(0);

  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  useEffect(() => {
    mountedAt.current = Date.now();

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

  function pickRevenue(value: string) {
    setRevenue(value);
    setStep(2);
    window.gtag?.("event", "apply_step_1", { event_category: "strategy_call", revenue: value });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("sending");
    setErrorMsg("");
    const data = new FormData(e.currentTarget);
    const payload: Record<string, string | number> = Object.fromEntries(
      Array.from(data.entries()).map(([k, v]) => [k, String(v)])
    );
    payload.kind = "strategy-call";
    payload.revenue = revenue;
    payload.referrerPath = window.location.pathname;

    const formTime = Date.now() - mountedAt.current;
    if (formTime < 3000) {
      setFormState("error");
      setErrorMsg("Please take a moment before submitting.");
      return;
    }
    payload.formTime = formTime;

    const metaEventId = newEventId("apply");
    payload.metaEventId = metaEventId;
    const { fbp, fbc } = metaCookies();
    if (fbp) payload.fbp = fbp;
    if (fbc) payload.fbc = fbc;

    payload.marketingConsent = consent ? "Yes" : "No";
    payload.consentText = CONSENT_TEXT;
    payload.consentAt = new Date().toISOString();

    if (recaptchaSiteKey && window.grecaptcha?.enterprise) {
      try {
        await new Promise<void>((resolve) => window.grecaptcha!.enterprise!.ready(resolve));
        payload.recaptchaToken = await window.grecaptcha.enterprise.execute(recaptchaSiteKey, {
          action: RECAPTCHA_ACTION,
        });
        payload.recaptchaAction = RECAPTCHA_ACTION;
      } catch {
        setFormState("error");
        setErrorMsg("Verification failed. Please refresh and try again.");
        return;
      }
    }

    try {
      const res = await fetch("/api/lead-engine", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        setErrorMsg(body?.error || "Something went wrong. Please try again.");
        setFormState("error");
        return;
      }
      // Fires only on a verified submit; the ad sets optimize on this event.
      if (!isTestLead(payload.email)) {
        window.fbq?.(
          "track",
          "SubmitApplication",
          { content_name: "Strategy Call Application", content_category: revenue },
          { eventID: metaEventId },
        );
        window.gtag?.("event", "generate_lead", {
          event_category: "strategy_call",
          event_label: "Strategy Call Application",
        });
      }
      // The booked page prefills Calendly from this; contact details stay out of the URL.
      try {
        sessionStorage.setItem(
          "asp_apply",
          JSON.stringify({ name: String(payload.name || ""), email: String(payload.email || "") }),
        );
      } catch {}
      window.location.assign(successHref);
    } catch {
      setErrorMsg("Network error. Please try again or email us directly.");
      setFormState("error");
    }
  }

  return (
    <div className="relative rounded-[var(--radius-asp-xl)] p-[2px] bg-asp-gradient-cta shadow-asp-xl">
      <div className="bg-white rounded-[calc(var(--radius-asp-xl)-2px)] p-5 md:p-8">
        <div className="flex items-center justify-between gap-3 mb-1">
          <h3 className="font-bold text-lg md:text-xl text-asp-blue">{title}</h3>
          <span className="text-xs font-bold text-gray-400 whitespace-nowrap">Step {step} of 2</span>
        </div>
        <div className="h-1 rounded-full bg-gray-100 mb-5 overflow-hidden" aria-hidden>
          <div
            className="h-full bg-gradient-to-r from-asp-blue-light to-asp-purple transition-all duration-300"
            style={{ width: step === 1 ? "50%" : "100%" }}
          />
        </div>

        {step === 1 ? (
          <fieldset>
            <legend className="font-bold text-gray-900 mb-3">What&apos;s your company&apos;s annual revenue?</legend>
            <div className="grid grid-cols-1 gap-2">
              {REVENUE_OPTIONS.map((o) => (
                <button
                  key={o.value}
                  type="button"
                  onClick={() => pickRevenue(o.value)}
                  className="w-full text-left px-4 py-3 rounded-[var(--radius-asp-md)] border border-gray-200 bg-gray-50 text-gray-900 font-semibold hover:border-asp-blue hover:bg-asp-blue/5 transition-colors"
                >
                  {o.label}
                </button>
              ))}
            </div>
          </fieldset>
        ) : (
          <form className="space-y-3" onSubmit={handleSubmit}>
            <p className="font-bold text-gray-900">Where should Joel reach you?</p>
            <input type="text" name="name" placeholder="Full name *" autoComplete="name" required className={inputClass} />
            <input type="email" name="email" placeholder="Email *" autoComplete="email" required className={inputClass} />
            <input type="tel" name="phone" placeholder="Mobile phone *" autoComplete="tel" required className={inputClass} />

            {/* Honeypot — hidden from humans, tempting to bots. */}
            <input type="text" name="fax" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

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
                </a>{" "}
                and{" "}
                <a href="/terms#install" className="underline hover:text-asp-blue">
                  Terms
                </a>
                .
              </span>
            </label>

            <button
              type="submit"
              disabled={formState === "sending"}
              className="w-full bg-gradient-to-r from-asp-blue-light to-asp-purple text-white font-bold py-3.5 px-6 rounded-[var(--radius-asp-md)] hover:opacity-90 transition-all duration-150 disabled:opacity-50"
            >
              {formState === "sending" ? "Submitting..." : submitLabel}
            </button>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="w-full text-xs text-gray-400 hover:text-asp-blue"
            >
              Back
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
