# Case Studies — Source Reference

Parked for a later dev-branch buildout of `/case-studies` after site goes live. Case Studies has been temporarily removed from the main nav + footer to unblock launch.

## Drive source

**Doc:** "ASP Case Studies - Complete Website Copy"
**File ID:** `1tS0c0C1ANeE1ADUqHE8HGaN_p6BHftkjx4yVQ1VRieI`
**Link:** https://docs.google.com/document/d/1tS0c0C1ANeE1ADUqHE8HGaN_p6BHftkjx4yVQ1VRieI/edit

## What's in it

Five full case studies with real 12-month (or 90-day / 6-month) metrics:

1. **HVAC Services** — 12 months — broke through $3M revenue barrier. Google Ads 161+ conversions, LSA CPL $29.27, 130 Google reviews, 13K+ GBP impressions, 5,291 website sessions, 244 GBP call clicks, 50K Instagram reach.
2. **Home Inspection Services** — 12 months — +$1M revenue increase, broke $3M barrier. Conversion rate 7% → 18%. Monthly ad spend savings $10K. 418 LSA leads. 9,088 YouTube subs. 813 Google reviews. CPC $0.77. 2.76M FB impressions. 45K website sessions. 411K YouTube views. 892K Instagram reach.
3. **Addiction Recovery Center** — 6 months (first year of launch) — on track to break $1M. 238 Google Ads conversions, CPC $6.54, 126K organic impressions, 7,896 sessions.
4. **Commercial Flooring / Concrete Coatings** — 90 days — on track to break $5M in 12 months. 45.22% search visibility. Position #1 for "Concrete Flooring Company," "Floor Coatings." Position #3 for "Epoxy Coatings" (from #7) and "Concrete Coating."
5. **Personal Injury Law Firm** — 12 months — 78,976 sessions, 3.68M search impressions, 13,141 organic clicks. *(Flag: law firms dropped in v4 positioning — keep this one internal or present it as legal-adjacent professional services, not home service trades.)*

Plus a **Local SEO Map Pack Dominance** table with 4 additional wins (Carpet Cleaning #8→#1, Mobile Sand Blasting 12.3→1.7, Stucco Repair 10.7→2.3, Local Painter 16.9→8.4).

## Build plan (post-launch, on feature branch)

1. Create feature branch `feature/case-studies` off main
2. Pull Drive doc content; normalize to the v4 brand voice (remove emoji bullets like "🎯", match tone to pillar pages)
3. Decide on visual treatment: per-case-study card with results grid + testimonial pull (if available), or long-form narrative per case study with CTA
4. Honor the testimonial rules (quote-only, no attribution, industry-agnostic)
5. Drop the law firm case or reframe as "professional services"
6. Replace the current `/case-studies` stub with the full build
7. Add Case Studies back to nav + footer
8. Merge to dev → main after QC

## Related current state

- `/case-studies` page exists as a stub at `src/app/case-studies/page.tsx` — headline stats + "coming soon" CTA. Not deleted, so internal links from pillar pages still resolve.
- RelatedPages cards on `/ai-integration`, `/fractional`, `/case-studies` itself still point to `/case-studies` — they land on the stub until the full page ships.
- Phone number in the source doc (`313-410-4904`) is outdated. Current canonical is `(512) 200-3190`. Update during the build.
