"use client";

// Application form for the 90-Day Install offer. Every field is
// required — the form IS the qualification filter. UTM params are captured
// into hidden fields so every application carries its source (the same
// attribution treatment the offer sells).
import { useEffect, useRef, useState } from "react";

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

const RECAPTCHA_ACTION = "lead_engine_apply";

const CRM_OPTIONS = [
  { value: "", label: "What CRM do you run? *" },
  { value: "jobber", label: "Jobber" },
  { value: "housecall-pro", label: "Housecall Pro" },
  { value: "service-fusion", label: "Service Fusion" },
  { value: "other", label: "Other CRM" },
  { value: "none", label: "I don't have one" },
];

const REVENUE_OPTIONS = [
  { value: "", label: "Annual revenue *" },
  { value: "under-500k", label: "Under $500K" },
  { value: "500k-1m", label: "$500K – $1M" },
  { value: "1m-3m", label: "$1M – $3M" },
  { value: "3m-5m", label: "$3M – $5M" },
  { value: "5m-plus", label: "$5M+" },
];

// Average job value is the filter that keeps low-ticket trades out — the
// pipeline math in the offer only works above roughly $1,500 a job.
const JOB_VALUE_OPTIONS = [
  { value: "", label: "Average job value *" },
  { value: "under-500", label: "Under $500" },
  { value: "500-1500", label: "$500 – $1,500" },
  { value: "1500-5000", label: "$1,500 – $5,000" },
  { value: "5000-15000", label: "$5,000 – $15,000" },
  { value: "15000-plus", label: "$15,000+" },
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
  "w-full px-4 py-3 rounded-[var(--radius-asp-md)] bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-asp-blue focus:ring-2 focus:ring-asp-blue/20 transition-all outline-none text-sm";

export function LeadEngineForm() {
  const [formState, setFormState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [noWebsite, setNoWebsite] = useState(false);
  const [utm, setUtm] = useState<Record<string, string>>({});
  const recaptchaLoaded = useRef(false);
  const mountedAt = useRef<number>(0);

  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  useEffect(() => {
    mountedAt.current = Date.now();

    // Capture UTM/click-id params from the landing URL.
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

    // Honeypot — silent success if filled. (Named "fax" here because this
    // form has a real website field, unlike /contact.)
    if (payload.fax) {
      setFormState("success");
      form.reset();
      return;
    }

    // Time-gate — anything under 3 seconds is bot behaviour.
    const formTime = Date.now() - mountedAt.current;
    if (formTime < 3000) {
      setFormState("error");
      setErrorMsg("Please take a moment before submitting.");
      return;
    }
    payload.formTime = formTime;

    if (noWebsite) payload.websiteUrl = "I don't have one";

    // reCAPTCHA Enterprise token
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
      const res = await fetch("/api/lead-engine", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        // Conversion signal for paid campaigns. Meta optimizes ad delivery
        // against this event, so it must fire only on a verified submit —
        // never on page load, and never on the honeypot path above.
        if (typeof window !== "undefined") {
          window.fbq?.("track", "Lead", {
            content_name: "90-Day Install Application",
            content_category: String(payload.revenue || "unspecified"),
          });
          window.gtag?.("event", "generate_lead", {
            event_category: "lead_engine",
            event_label: "90-Day Install Application",
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
          <h3 className="font-bold text-xl text-asp-blue mb-2">Application received.</h3>
          <p className="text-gray-500 text-sm">
            We review every application by hand. If it looks like a fit, you&apos;ll hear from us
            within one business day to set up your discovery call.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative rounded-[var(--radius-asp-xl)] p-[2px] bg-asp-gradient-cta shadow-asp-xl">
      <div className="bg-white rounded-[calc(var(--radius-asp-xl)-2px)] p-6 md:p-8">
        <h3 className="font-bold text-xl text-asp-blue mb-1">Apply for the 90-Day Install</h3>
        <p className="text-gray-500 text-sm mb-6">
          Every application gets a discovery call first. We only take businesses we know we can win
          for.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" name="name" placeholder="Full Name *" required className={inputClass} />
            <input type="email" name="email" placeholder="Email Address *" required className={inputClass} />
          </div>
          <input type="text" name="company" placeholder="Company Name *" required className={inputClass} />

          <div>
            <input
              type="url"
              name="websiteUrl"
              placeholder="Website URL *"
              required={!noWebsite}
              disabled={noWebsite}
              className={`${inputClass} disabled:opacity-50 disabled:bg-gray-100`}
            />
            <label className="flex items-center gap-2 text-gray-600 text-xs cursor-pointer mt-2">
              <input
                type="checkbox"
                checked={noWebsite}
                onChange={(e) => setNoWebsite(e.target.checked)}
                className="w-4 h-4 rounded border-gray-300 accent-asp-blue"
              />
              <span>I don&apos;t have a website (that&apos;s fine — we build you one)</span>
            </label>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <select name="crm" required defaultValue="" className={`${inputClass} text-gray-500`}>
              {CRM_OPTIONS.map((o) => (
                <option key={o.value} value={o.value} disabled={o.value === ""}>
                  {o.label}
                </option>
              ))}
            </select>
            <select name="revenue" required defaultValue="" className={`${inputClass} text-gray-500`}>
              {REVENUE_OPTIONS.map((o) => (
                <option key={o.value} value={o.value} disabled={o.value === ""}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>

          <select name="jobValue" required defaultValue="" className={`${inputClass} text-gray-500`}>
            {JOB_VALUE_OPTIONS.map((o) => (
              <option key={o.value} value={o.value} disabled={o.value === ""}>
                {o.label}
              </option>
            ))}
          </select>

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

          <button
            type="submit"
            disabled={formState === "sending"}
            className="w-full bg-gradient-to-r from-asp-blue-light to-asp-purple text-white font-bold py-3.5 px-6 rounded-[var(--radius-asp-md)] hover:opacity-90 transition-all duration-150 text-sm disabled:opacity-50"
          >
            {formState === "sending" ? "Submitting..." : "Submit My Free Application"}
          </button>
        </form>
      </div>
    </div>
  );
}
