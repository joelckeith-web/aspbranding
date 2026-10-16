"use client";

// Free Systems Audit request — the front door on /lead-engine (Joel 10/16:
// "lets try free and see what kind of no shows we get").
//
// Two steps. Step 1 is the buy-in: contact details plus one homework question,
// so we show up with real findings and they show up because they asked for
// something specific. It posts to /api/lead-engine with kind "audit", which
// emails ASP and queues the request in the call sheet BEFORE any booking —
// so a no-show is still a lead we can call. Step 2 is the booking itself: the
// Business Audit Calendly event, inline and prefilled.
import { useEffect, useRef, useState } from "react";
import { metaCookies, newEventId } from "@/lib/meta-browser";
import { isTestLead } from "@/lib/test-lead";

const RECAPTCHA_ACTION = "audit_request";
const CALENDLY_URL = "https://calendly.com/joel-keith-asp/business-audit";

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "fbclid",
  "gclid",
] as const;

const CRM_OPTIONS = [
  { value: "", label: "What CRM do you run? *" },
  { value: "jobber", label: "Jobber" },
  { value: "housecall-pro", label: "Housecall Pro" },
  { value: "service-fusion", label: "Service Fusion" },
  { value: "other", label: "Other CRM" },
  { value: "none", label: "I don't have one" },
];

const inputClass =
  "w-full px-4 py-3 rounded-[var(--radius-asp-md)] bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-asp-blue focus:ring-2 focus:ring-asp-blue/20 transition-all outline-none text-sm";

const CONSENT_TEXT =
  "Yes, ASP can email me about my audit and send marketing updates. I can unsubscribe any time.";

export function AuditRequestForm() {
  const [formState, setFormState] = useState<"idle" | "sending" | "booking" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [consent, setConsent] = useState(false);
  const [booked, setBooked] = useState(false);
  const [prefill, setPrefill] = useState({ name: "", email: "" });
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

  // Calendly posts a message when the booking completes. That is the show-up
  // signal worth tracking separately from the request itself.
  useEffect(() => {
    if (formState !== "booking") return;
    function onMessage(e: MessageEvent) {
      if (e.origin !== "https://calendly.com") return;
      const data = e.data as { event?: string } | undefined;
      if (data?.event !== "calendly.event_scheduled") return;
      setBooked(true);
      if (!isTestLead(prefill.email)) {
        window.fbq?.("track", "Schedule", { content_name: "Free Systems Audit" });
        window.gtag?.("event", "audit_booked", { event_category: "lead_engine" });
      }
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [formState, prefill.email]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("sending");
    setErrorMsg("");
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload: Record<string, string | number> = Object.fromEntries(
      Array.from(data.entries()).map(([k, v]) => [k, String(v)])
    );
    payload.kind = "audit";

    const formTime = Date.now() - mountedAt.current;
    if (formTime < 3000) {
      setFormState("error");
      setErrorMsg("Please take a moment before submitting.");
      return;
    }
    payload.formTime = formTime;

    const metaEventId = newEventId("audit");
    payload.metaEventId = metaEventId;
    const { fbp, fbc } = metaCookies();
    if (fbp) payload.fbp = fbp;
    if (fbc) payload.fbc = fbc;

    payload.marketingConsent = consent ? "Yes" : "No";
    payload.consentText = CONSENT_TEXT;
    payload.consentAt = new Date().toISOString();

    if (recaptchaSiteKey && typeof window !== "undefined" && window.grecaptcha?.enterprise) {
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
      if (res.ok) {
        // SubmitApplication is what the live Applications ad set optimizes
        // on, so the audit request — this page's main conversion now — keeps
        // feeding it. content_name tells the two apart in Events Manager.
        if (!isTestLead(payload.email)) {
          window.fbq?.(
            "track",
            "SubmitApplication",
            { content_name: "Free Systems Audit request" },
            { eventID: metaEventId },
          );
          window.gtag?.("event", "generate_lead", {
            event_category: "lead_engine",
            event_label: "Free Systems Audit request",
          });
        }
        setPrefill({ name: String(payload.name || ""), email: String(payload.email || "") });
        setFormState("booking");
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

  if (formState === "booking") {
    const src =
      `${CALENDLY_URL}?embed_type=Inline&hide_gdpr_banner=1` +
      `&embed_domain=${encodeURIComponent(typeof window !== "undefined" ? window.location.host : "www.aspbranding.com")}` +
      `&name=${encodeURIComponent(prefill.name)}&email=${encodeURIComponent(prefill.email)}`;
    return (
      <div className="relative rounded-[var(--radius-asp-xl)] p-[2px] bg-asp-gradient-cta">
        <div className="bg-white rounded-[calc(var(--radius-asp-xl)-2px)] p-5 sm:p-6">
          <h3 className="font-bold text-xl text-asp-blue mb-1">
            {booked ? "You're booked." : "Got it. Now pick your time."}
          </h3>
          <p className="text-gray-500 text-sm mb-4">
            {booked
              ? "The confirmation is in your inbox. We'll have your audit ready when we get on the call."
              : "Your audit is a 45-minute call with Joel. Grab a slot that works and we'll do the homework before it."}
          </p>
          <iframe
            title="Book your free Systems Audit"
            src={src}
            className="w-full rounded-[var(--radius-asp-md)] border border-gray-200"
            style={{ height: 680 }}
          />
          <p className="text-gray-400 text-xs mt-3">
            Calendar not loading?{" "}
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="underline">
              Open it in a new tab
            </a>
            .
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative rounded-[var(--radius-asp-xl)] p-[2px] bg-asp-gradient-cta">
      <div className="bg-white rounded-[calc(var(--radius-asp-xl)-2px)] p-6 sm:p-7">
        <h3 className="font-bold text-xl text-asp-blue mb-1">Get a free Systems Audit</h3>
        <p className="text-gray-500 text-sm mb-5">
          A competitor teardown, a check on whether AI tools recommend you, a technical read on your
          website, and where your lead tracking is broken. Walked through on a 45-minute call.
        </p>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid sm:grid-cols-2 gap-3">
            <input type="text" name="name" placeholder="Full Name *" required autoComplete="name" className={inputClass} />
            <input type="email" name="email" placeholder="Email Address *" required autoComplete="email" className={inputClass} />
            <input type="tel" name="phone" placeholder="Mobile Phone *" required autoComplete="tel" className={inputClass} />
            <input
              type="text"
              inputMode="url"
              name="websiteUrl"
              placeholder="Business Website"
              autoComplete="url"
              className={inputClass}
            />
          </div>
          <select name="crm" required defaultValue="" className={inputClass}>
            {CRM_OPTIONS.map((o) => (
              <option key={o.value} value={o.value} disabled={o.value === ""}>
                {o.label}
              </option>
            ))}
          </select>
          <textarea
            name="question"
            required
            rows={2}
            placeholder="What's the one thing about your marketing you can't answer right now? *"
            className={inputClass}
          />

          <input type="text" name="fax" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
          {Object.entries(utm).map(([k, v]) => (
            <input key={k} type="hidden" name={k} value={v} />
          ))}

          <label className="flex items-start gap-2.5 text-xs text-gray-500 leading-relaxed">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-0.5"
            />
            <span>
              {CONSENT_TEXT} See our{" "}
              <a href="/privacy-policy" className="underline">
                Privacy Policy
              </a>
              .
            </span>
          </label>

          {formState === "error" && <p className="text-red-600 text-sm">{errorMsg}</p>}

          <button
            type="submit"
            disabled={formState === "sending"}
            className="w-full bg-asp-gradient-cta text-white font-semibold py-3.5 rounded-[var(--radius-asp-md)] shadow-asp-md hover:shadow-asp-lg transition-all disabled:opacity-60"
          >
            {formState === "sending" ? "Sending…" : "Get my free audit"}
          </button>
          <p className="text-gray-400 text-xs text-center">Next step: pick a time on Joel&apos;s calendar.</p>
        </form>
      </div>
    </div>
  );
}
