"use client";

import { useSearchParams } from "next/navigation";
import { useRef, useState } from "react";
import { REVENUE_RANGES, TEAM_SIZES, TRADES } from "../data";

function pick(v: string | null, list: readonly string[], fallback: string) {
  return v && list.includes(v) ? v : fallback;
}

// Two-step guest application. Both steps stay mounted (hidden) so answers survive Back.
// PREVIEW: not connected to anything. Submitting shows a notice; nothing is sent or stored.
export function ApplyForm() {
  const sp = useSearchParams();
  const [step, setStep] = useState<1 | 2>(1);
  const [sent, setSent] = useState(false);
  const step1 = useRef<HTMLFieldSetElement>(null);
  const top = useRef<HTMLFormElement>(null);

  function go(n: 1 | 2) {
    setStep(n);
    top.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function next() {
    const fields = step1.current?.querySelectorAll<HTMLInputElement | HTMLSelectElement>("input, select") ?? [];
    for (const f of Array.from(fields)) {
      if (!f.checkValidity()) {
        f.reportValidity();
        return;
      }
    }
    go(2);
  }

  if (sent) {
    return (
      <div className="gr-panel" role="status">
        <h2 style={{ margin: 0, fontWeight: 900, fontSize: "1.5rem", color: "#002366" }}>Preview only</h2>
        <p className="gr-p">This application is not connected yet, so nothing was sent or saved.</p>
        <button className="gr-btn gr-btn-n" type="button" onClick={() => { setSent(false); setStep(1); }}>
          Back to the form
        </button>
      </div>
    );
  }

  return (
    <form
      ref={top}
      className="gr-panel gr-form-in"
      aria-label="Guest application"
      onSubmit={(e) => {
        e.preventDefault();
        if (step === 1) return next();
        setSent(true);
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <div className="gr-steps" aria-hidden="true">
          <div className="gr-step"><i /></div>
          <div className="gr-step">{step === 2 && <i />}</div>
        </div>
        <div className="gr-note" aria-live="polite">
          Step {step} of 2 · {step === 1 ? "You and your company" : "Your story"}
        </div>
      </div>
      <div className="gr-notice" style={{ padding: "10px 14px", fontSize: "0.85rem" }}>
        Preview: this form is not connected yet. Nothing you enter is sent or saved.
      </div>

      <fieldset ref={step1} hidden={step !== 1} style={{ border: 0, margin: 0, padding: 0, display: step === 1 ? "flex" : "none", flexDirection: "column", gap: 14 }}>
        <legend className="sr-only">You and your company</legend>
        <div className="gr-fields">
          <label className="gr-field">Your name<input name="name" autoComplete="name" required /></label>
          <label className="gr-field">Company<input name="company" autoComplete="organization" required /></label>
          <label className="gr-field">Email<input type="email" name="email" autoComplete="email" required /></label>
          <label className="gr-field">Website<input type="url" name="website" autoComplete="url" placeholder="https://" /></label>
          <label className="gr-field">
            Trade
            <select name="trade" defaultValue={pick(sp.get("trade"), TRADES, TRADES[0])}>
              {TRADES.map((t) => <option key={t}>{t}</option>)}
            </select>
          </label>
          <label className="gr-field">City<input name="city" autoComplete="address-level2" required defaultValue={sp.get("city") ?? ""} /></label>
          <label className="gr-field">
            Team size
            <select name="team" defaultValue={pick(sp.get("team"), TEAM_SIZES, TEAM_SIZES[1])}>
              {TEAM_SIZES.map((t) => <option key={t}>{t}</option>)}
            </select>
          </label>
          <label className="gr-field">
            Revenue range
            <select name="revenue" defaultValue={pick(sp.get("revenue"), REVENUE_RANGES, REVENUE_RANGES[1])}>
              {REVENUE_RANGES.map((t) => <option key={t}>{t}</option>)}
            </select>
          </label>
        </div>
        <button className="gr-btn gr-btn-n" type="button" onClick={next}>Next: your story</button>
        <div className="gr-note">Ranges are fine. We never ask for exact numbers on the show.</div>
      </fieldset>

      <fieldset hidden={step !== 2} disabled={step !== 2} style={{ border: 0, margin: 0, padding: 0, display: step === 2 ? "flex" : "none", flexDirection: "column", gap: 14 }}>
        <legend className="sr-only">Your story</legend>
        <label className="gr-field">
          Your proudest win
          <small>A moment in the business you are proud of. A story, not a summary.</small>
          <textarea name="win" rows={3} required />
        </label>
        <label className="gr-field">
          Where you are stuck
          <small>What is holding the next stage back right now.</small>
          <textarea name="stuck" rows={3} required />
        </label>
        <label className="gr-field">
          Your craziest story from the field
          <small>The job or customer you still tell people about.</small>
          <textarea name="story" rows={3} />
        </label>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
          <button className="gr-btn" type="button" onClick={() => go(1)} style={{ background: "#fff", color: "#002366", border: "1px solid #C7CFDD", boxShadow: "none" }}>
            Back
          </button>
          <button className="gr-btn gr-btn-n" type="submit" style={{ flex: 1 }}>Send my application</button>
        </div>
      </fieldset>
    </form>
  );
}
