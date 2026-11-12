"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { REVENUE_RANGES, SHOW, TEAM_SIZES, TRADES } from "./data";

// Step 1 of the guest application. Carries the answers to the full form.
export function HeroApply() {
  const router = useRouter();
  const [trade, setTrade] = useState<string>(TRADES[0]);
  const [city, setCity] = useState("");
  const [team, setTeam] = useState<string>(TEAM_SIZES[1]);
  const [revenue, setRevenue] = useState<string>(REVENUE_RANGES[1]);

  function next(e: React.FormEvent) {
    e.preventDefault();
    const q = new URLSearchParams({ trade, city, team, revenue });
    router.push(`${SHOW.applyPath}?${q.toString()}`);
  }

  return (
    <form id="apply" className="gr-panel gr-form-in" aria-label="Start your guest application" onSubmit={next}>
      <div className="gr-steps" aria-hidden="true">
        <div className="gr-step"><i /></div>
        <div className="gr-step" />
      </div>
      <h2 style={{ margin: 0, fontWeight: 900, fontSize: "clamp(1.3rem, 2.2vw, 1.7rem)", lineHeight: 1.15, color: "#002366" }}>
        Be a guest on the show
      </h2>
      <p className="gr-p" style={{ fontSize: "0.95rem" }}>
        Guests are home service owner-operators, typically past their first million in revenue. Afterward you get your
        own episode page with your bio and a link to your website, plus short clips to share.
      </p>
      <div className="gr-fields">
        <label className="gr-field">
          Trade
          <select name="trade" value={trade} onChange={(e) => setTrade(e.target.value)}>
            {TRADES.map((t) => <option key={t}>{t}</option>)}
          </select>
        </label>
        <label className="gr-field">
          City
          <input type="text" name="city" autoComplete="address-level2" required value={city} onChange={(e) => setCity(e.target.value)} />
        </label>
        <label className="gr-field">
          Team size
          <select name="team" value={team} onChange={(e) => setTeam(e.target.value)}>
            {TEAM_SIZES.map((t) => <option key={t}>{t}</option>)}
          </select>
        </label>
        <label className="gr-field">
          Revenue range
          <select name="revenue" value={revenue} onChange={(e) => setRevenue(e.target.value)}>
            {REVENUE_RANGES.map((t) => <option key={t}>{t}</option>)}
          </select>
        </label>
      </div>
      <button className="gr-btn gr-btn-n" type="submit">Start my application</button>
      <div className="gr-note">Next: your contact details, then your proudest win, where you are stuck and your craziest story.</div>
    </form>
  );
}
