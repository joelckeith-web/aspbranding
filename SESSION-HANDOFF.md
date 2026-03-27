# ASP Branding — Session Handoff

## Project Location
`C:\Users\Joel\Documents\Applications\asp-nextjs`

## What This Project Is
ASP Branding's website rebuilt as a headless Next.js 16 app deployed on Vercel.
- **Live URL**: https://asp-nextjs-seven.vercel.app
- **Repo**: https://github.com/joelckeith-web/aspbranding.git
- **Branch**: main (auto-deploys to Vercel)

## What's Been Built

### Website (Complete)
- Homepage, About, Contact, Solutions listing, 6 individual service pages
- All copy verified against original WordPress source files at `C:\Users\Joel\Documents\Applications\ASP Web Rebuild\aspbranding\`
- ASP design system: dark navy (#001233), Poppins font, gradient accents
- Contact form (Resend API), trust badges, testimonials, FAQ accordions
- Process Steps section with YouTube phone mockup + 3 step cards

### Programmatic Blog System (Just Built — Needs Env Vars)
Architecture adapted from proven Viking HVAC / QC Mechanical / Property Pros blog systems in `C:\Users\Joel\Documents\Applications\Blog Projects\`.

**Content Pipeline:**
- `src/lib/blog/content-generator.ts` — Claude Sonnet 4 generates 1,500-2,200 word posts
- `src/lib/blog/site-config.ts` — ASP business info, brand voice SOP, verified URLs
- `src/lib/blog/github.ts` — Pushes markdown to GitHub via Octokit
- `src/lib/blog/google-indexing.ts` — Optional Google Indexing API ping
- `src/lib/blog/posts.ts` — Reads/parses markdown files from content/posts/
- `src/lib/blog/types.ts` — TypeScript interfaces

**4-Pillar Monthly Rotation:**
- Week 1: Google algorithm updates (dumbed down for non-marketers)
- Week 2: Service deep-dives (Local SEO, PPC, Social Media, etc.)
- Week 3: Business growth strategy (revenue milestones $1M/$3M/$5M)
- Week 4: Tech stack reviews & case studies (Housecall Pro, Jobber, NiceJob)

**Blog UI:**
- `src/app/blog/page.tsx` — Index with category pills + 3-col card grid
- `src/app/blog/[slug]/page.tsx` — Full post with prose, FAQ accordion, sidebar, related posts
- `src/components/blog/BlogCard.tsx` — Card component
- `src/components/blog/SchemaMarkup.tsx` — JSON-LD (Article, FAQ, Breadcrumb)
- `src/app/blog/sitemap.ts` — Dynamic sitemap

**Cron:**
- `vercel.json` — Every Monday at 3PM UTC
- `src/app/api/cron/generate-blog/route.ts` — Cron endpoint
- `scripts/generate-blog.ts` — CLI: `npm run generate` / `npm run generate:push`

## What Still Needs To Be Done

### 1. Set Environment Variables in Vercel Dashboard
```
ANTHROPIC_API_KEY=sk-ant-...        # Claude API key
GITHUB_TOKEN=ghp_...                # GitHub PAT with Contents read/write
GITHUB_OWNER=joelckeith-web         # GitHub org
GITHUB_REPO=aspbranding             # Repo name (check exact name)
GITHUB_BRANCH=main                  # Target branch
CRON_SECRET=<random-hex-32>         # openssl rand -hex 32
NEXT_PUBLIC_SITE_URL=https://aspbranding.com
RESEND_API_KEY=...                  # Already may be set for contact form
```
Optional (for instant indexing):
```
GOOGLE_INDEXING_CLIENT_EMAIL=...
GOOGLE_INDEXING_PRIVATE_KEY=...
```

### 2. Migrate Existing Blogs from ASPbranding.com
The current ASPbranding.com website has existing blog posts that need to be scraped, converted to markdown with proper frontmatter, and placed in `content/posts/`.

### 3. Build Joel Keith Author Profile
Use https://joelkeith.me as the authoritative source. Author info is partially set up in `src/lib/blog/site-config.ts` but needs a dedicated author page and proper avatar image.

### 4. Generate First Test Blog Post
Once env vars are set, run `npm run generate` locally to test the pipeline, then `npm run generate:push` to publish.

### 5. Establish Keywords & Topic Strategy
Once the system is running, define exact keyword targets for programmatic SEO. Content topics should include:
- Google core updates explained for non-marketers
- Service-specific tips (PPC, SEO, AEO, local SEO, social media)
- Home service industry trends
- Revenue milestone growth playbooks
- Tech stack reviews (Housecall Pro, Jobber, NiceJob)
- Programmatic SEO benefits (meta: how this blog system works)
- Google Ads strategies
- Content from ASP YouTube channel (/ASPbranding)
- Topics from Joel Keith's newsletter at joelkeith.me
- Fractional C-suites, operations, financials, budgeting for trades businesses

### 6. Hub & Spoke Pages (Future)
Once blogs are flowing, add hub pages that cluster related posts. Update verified URL list in site-config.ts to include new hub page URLs for internal linking.

### 7. Subdomain Setup (Future)
Eventually move blog to blog.aspbranding.com. Currently lives at aspbranding.com/blog within the same project.

## Key Design Decisions
- Blog is integrated INTO the main asp-nextjs project (not separate)
- No weather trigger (unlike HVAC blogs) — uses date-based topic rotation
- External authority links: Google Search Central, Search Engine Journal, Moz, Ahrefs, Semrush, HubSpot, SBA.gov, FTC.gov, Harvard Business Review, MIT Sloan, etc.
- Internal links: All 6 ASP service pages verified in site-config
- AEO optimized: Immediate Action Summary boxes, 6+ FAQ items, Key Takeaway callouts
- Target audience: Home service business owners at $1M/$3M/$5M revenue milestones

## Reference Blog Systems
Located at `C:\Users\Joel\Documents\Applications\Blog Projects\`:
- `viking-hvac-blog` — Viking Heating & Air, Chandler AZ
- `property-pros-blog` — Property Pros, Muncie IN
- `qc-mechanical-blog` — QC Mechanical, Tacoma WA
- `shorebreak-blog` — Shorebreak

All share identical architecture (weather-triggered, Claude Sonnet 4, Octokit push, Vercel cron).

## WordPress Source Files
Original design reference: `C:\Users\Joel\Documents\Applications\ASP Web Rebuild\aspbranding\`
