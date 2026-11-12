"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { REVENUE_RANGES, TEAM_SIZES, TRADES } from "../data";

function pick(v: string | null, list: readonly string[], fallback: string) {
  return v && list.includes(v) ? v : fallback;
}

// PREVIEW: not connected to anything. Submitting shows a notice; nothing is sent or stored.
export function ApplyForm() {
  const sp = useSearchParams();
  const [sent, setSent] = useState(false);
  const fromStep1 = Boolean(sp.get("trade"));

  if (sent) {
    return (
      <div className="gr-panel" role="status">
        <h2 style={{ margin: 0, fontWeight: 900, fontSize: "1.5rem", color: "#002366" }}>Preview only</h2>
        <p className="gr-p">This application is not connected yet, so nothing was sent or saved.</p>
        <button className="gr-btn gr-btn-n" type="button" onClick={() => setSent(false)}>Back to the form</button>
      </div>
    );
  }

  return (
    <form
      className="gr-panel gr-form-in"
      aria-label="Guest application"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="gr-steps" aria-hidden="true">
        <div className="gr-step"><i /></div>
        <div className="gr-step"><i style={{ animationDelay: fromStep1 ? "0.3s" : "0s" }} /></div>
      </div>
      <div className="gr-notice">Preview: this form is not connected yet. Nothing you enter is sent or saved.</div>

      <fieldset style={{ border: 0, margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
        <legend style={{ fontWeight: 800, fontSize: "1.1rem", color: "#002366", marginBottom: 10 }}>You and your company</legend>
        <div className="gr-fields">
          <label className="gr-field">Your name<input name="name" autoComplete="name" required /></label>
          <label className="gr-field">Company<input name="company" autoComplete="organization" required /></label>
          <label className="gr-field">Email<input type="email" name="email" autoComplete="email" required /></label>
          <label className="gr-field">Website<input type="url" name="website" autoComplete="url" placeholder="https://" /></label>
        </div>
        <div className="gr-fields">
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
      </fieldset>

      <fieldset style={{ border: 0, margin: "8px 0 0", padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
        <legend style={{ fontWeight: 800, fontSize: "1.1rem", color: "#002366", marginBottom: 10 }}>Your story</legend>
        <label className="gr-field">
          Your proudest win
          <small>A moment in the business you are proud of. A story, not a summary.</small>
          <textarea name="win" required />
        </label>
        <label className="gr-field">
          Where you are stuck
          <small>What is holding the next stage back right now.</small>
          <textarea name="stuck" required />
        </label>
        <label className="gr-field">
          Your craziest story from the field
          <small>The job or customer you still tell people about.</small>
          <textarea name="story" />
        </label>
      </fieldset>

      <button className="gr-btn gr-btn-n" type="submit">Send my application</button>
      <div className="gr-note">Ranges are fine. We never ask for exact numbers on the show.</div>
    </form>
  );
}
