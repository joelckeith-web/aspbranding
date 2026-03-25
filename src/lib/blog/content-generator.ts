import Anthropic from "@anthropic-ai/sdk";
import type {
  BlogFrontmatter,
  GeneratedBlog,
  TopicSelection,
  ContentPillar,
  BlogCategory,
} from "./types";
import { siteConfig, serviceRotation, industryRotation } from "./site-config";

// ═══════════════════════════════════════════════════════════
//  ASP Blog System — Content Generator
//  Adapted from QC Mechanical weather-triggered system
//  Replaces weather context with topic selection system
// ═══════════════════════════════════════════════════════════

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

/**
 * Generate a blog post based on the content calendar topic selection.
 * No weather integration — uses date-based topic rotation instead.
 */
export async function generateBlogPost(
  topic: TopicSelection
): Promise<GeneratedBlog> {
  const internalLinks = buildInternalLinksContext();
  const externalSources = buildExternalSourcesContext();

  const systemPrompt = buildSystemPrompt(topic.pillar);
  const userPrompt = buildUserPrompt(topic, internalLinks, externalSources);

  const response = await anthropic.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 8000,
    system: systemPrompt,
    messages: [{ role: "user", content: userPrompt }],
  });

  const rawContent =
    response.content[0].type === "text" ? response.content[0].text : "";

  const parsed = parseGeneratedContent(rawContent, topic);

  return parsed;
}

// ═══════════════════════════════════════════════════════════
//  TOPIC SELECTION — date-based content calendar rotation
// ═══════════════════════════════════════════════════════════

/**
 * Determine what topic to write about based on the current date.
 * Rotates through 4 content pillars (one per week of the month).
 * Also rotates the specific sub-topic within each pillar.
 */
export function selectTopicForDate(date: Date = new Date()): TopicSelection {
  const weekOfMonth = getWeekOfMonth(date);
  const monthIndex = date.getMonth(); // 0-11
  const year = date.getFullYear();

  // Map week to content pillar (1-4, wrap around for week 5)
  const pillarIndex = Math.min(weekOfMonth - 1, 3);
  const schedule = siteConfig.topicCalendar.schedule[pillarIndex];
  const pillar = schedule.pillar;

  // Generate unique rotation index based on month+year for sub-topic variety
  const rotationIndex = (year * 12 + monthIndex) % 12;

  switch (pillar) {
    case "google-algorithm-updates":
      return buildAlgorithmUpdateTopic(rotationIndex);
    case "service-deep-dive":
      return buildServiceDeepDiveTopic(rotationIndex);
    case "business-growth-strategy":
      return buildBusinessGrowthTopic(rotationIndex);
    case "tech-stack-case-study":
      return buildTechStackTopic(rotationIndex);
    default:
      return buildAlgorithmUpdateTopic(rotationIndex);
  }
}

function getWeekOfMonth(date: Date): number {
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  const dayOfMonth = date.getDate();
  const firstDayOfWeek = firstDay.getDay();
  return Math.ceil((dayOfMonth + firstDayOfWeek) / 7);
}

function buildAlgorithmUpdateTopic(rotationIndex: number): TopicSelection {
  const topics = [
    "the latest Google Search algorithm update and what it means for home service businesses ranking in local search",
    "Google Business Profile changes and new features that home service businesses need to leverage for local visibility",
    "how AI Overviews and SGE are changing local search for service businesses and how to optimize for them",
    "Google Maps ranking factors that have changed recently and actionable steps for home service businesses",
    "Core Web Vitals updates and what home service business websites need to fix to maintain rankings",
    "the latest Google Ads policy changes affecting home service businesses and Local Service Ads",
    "schema markup updates and structured data changes that impact home service business search visibility",
    "Google review algorithm changes and how they affect local pack rankings for service businesses",
    "E-E-A-T signals and how Google evaluates expertise for home service business websites",
    "voice search and AEO (Answer Engine Optimization) trends for home service businesses",
    "mobile-first indexing updates and what they mean for home service business websites",
    "Google Search Console new features and how home service businesses should use them for SEO insights",
  ];

  return {
    pillar: "google-algorithm-updates",
    topicPrompt: topics[rotationIndex % topics.length],
    suggestedCategory: "seo",
    suggestedTags: [
      "google updates",
      "algorithm changes",
      "local seo",
      "home service marketing",
    ],
  };
}

function buildServiceDeepDiveTopic(rotationIndex: number): TopicSelection {
  const serviceKey = serviceRotation[rotationIndex % serviceRotation.length];
  const service =
    siteConfig.services[serviceKey as keyof typeof siteConfig.services];
  const industry =
    industryRotation[rotationIndex % industryRotation.length];

  const categoryMap: Record<string, BlogCategory> = {
    localSeo: "local-seo",
    ppc: "ppc",
    socialMedia: "social-media",
    webDesign: "web-design",
    branding: "business-growth",
    consulting: "business-growth",
  };

  return {
    pillar: "service-deep-dive",
    topicPrompt: `a comprehensive guide to ${service.label} for ${industry} businesses — covering strategy, implementation, common mistakes, and how to measure ROI. Focus on actionable advice that a ${industry} business owner can start implementing this week.`,
    suggestedCategory: categoryMap[serviceKey] || "seo",
    suggestedTags: [
      service.label.toLowerCase(),
      industry.toLowerCase(),
      "home service marketing",
      "digital marketing guide",
    ],
  };
}

function buildBusinessGrowthTopic(rotationIndex: number): TopicSelection {
  const topics = [
    "breaking through the $1M revenue barrier — the marketing systems every home service business needs before scaling",
    "how to build a lead generation machine that scales your home service business from $1M to $3M",
    "the 5 marketing metrics every home service business owner should track weekly to drive growth",
    "building a brand that commands premium pricing — how home service businesses escape the race to the bottom",
    "hiring your first marketing person vs. hiring an agency — the real math for home service businesses",
    "how to systemize your marketing so it runs without you — the owner's guide to marketing automation",
    "seasonal marketing strategies that keep your home service business booked year-round",
    "multi-location growth playbook — marketing strategies for home service businesses expanding to new territories",
    "the real cost of bad marketing — calculating what random acts of marketing cost your service business",
    "from technician to CEO — building the marketing infrastructure that lets you step out of the truck",
    "customer lifetime value and retention marketing for home service businesses that want to grow sustainably",
    "competitive analysis for home service businesses — how to identify and exploit your competitors' marketing gaps",
  ];

  const industry =
    industryRotation[rotationIndex % industryRotation.length];

  return {
    pillar: "business-growth-strategy",
    topicPrompt: `${topics[rotationIndex % topics.length]} Use ${industry} as the primary industry example throughout the post.`,
    suggestedCategory: "business-growth",
    suggestedTags: [
      "business growth",
      "revenue scaling",
      industry.toLowerCase(),
      "home service business",
    ],
  };
}

function buildTechStackTopic(rotationIndex: number): TopicSelection {
  const topics = [
    {
      prompt:
        "the best CRM platforms for home service businesses — comparing ServiceTitan, Housecall Pro, Jobber, and more for marketing integration",
      category: "tech-stack" as BlogCategory,
      tags: ["crm", "software review", "service titan", "home service tech"],
    },
    {
      prompt:
        "call tracking tools for home service businesses — why every marketing dollar should be tracked to the phone ring",
      category: "tech-stack" as BlogCategory,
      tags: [
        "call tracking",
        "marketing attribution",
        "callrail",
        "home service marketing",
      ],
    },
    {
      prompt:
        "website platforms for home service businesses — WordPress vs Next.js vs Wix vs custom builds, and what actually matters for SEO and conversions",
      category: "tech-stack" as BlogCategory,
      tags: ["website platform", "web development", "seo", "home service websites"],
    },
    {
      prompt:
        "reputation management tools for home service businesses — automating review collection, responding to reviews, and building social proof",
      category: "tech-stack" as BlogCategory,
      tags: [
        "reputation management",
        "online reviews",
        "google reviews",
        "home service marketing",
      ],
    },
    {
      prompt:
        "marketing automation for home service businesses — email sequences, SMS follow-ups, and nurturing systems that convert leads while you sleep",
      category: "tech-stack" as BlogCategory,
      tags: [
        "marketing automation",
        "email marketing",
        "sms marketing",
        "lead nurturing",
      ],
    },
    {
      prompt:
        "Google Analytics 4 and Google Tag Manager setup for home service businesses — tracking what matters and ignoring vanity metrics",
      category: "tech-stack" as BlogCategory,
      tags: ["google analytics", "tracking", "data analytics", "marketing metrics"],
    },
    {
      prompt:
        "local SEO tools compared — BrightLocal vs Whitespark vs Moz Local for managing your home service business's local presence",
      category: "tech-stack" as BlogCategory,
      tags: [
        "local seo tools",
        "brightlocal",
        "citation management",
        "home service seo",
      ],
    },
    {
      prompt:
        "AI tools that home service businesses can actually use — from chatbots to content creation to scheduling optimization",
      category: "tech-stack" as BlogCategory,
      tags: [
        "ai tools",
        "artificial intelligence",
        "automation",
        "home service technology",
      ],
    },
    {
      prompt:
        "social media scheduling and management tools for home service businesses — Buffer, Hootsuite, Sprout Social, and when to DIY vs delegate",
      category: "tech-stack" as BlogCategory,
      tags: [
        "social media tools",
        "content scheduling",
        "social media management",
        "home service marketing",
      ],
    },
    {
      prompt:
        "building a marketing dashboard for your home service business — what to track, which tools to connect, and how to make data-driven decisions",
      category: "tech-stack" as BlogCategory,
      tags: [
        "marketing dashboard",
        "reporting",
        "kpi tracking",
        "data-driven marketing",
      ],
    },
    {
      prompt:
        "programmatic SEO for home service businesses — how to generate hundreds of local landing pages that rank and convert",
      category: "tech-stack" as BlogCategory,
      tags: [
        "programmatic seo",
        "landing pages",
        "local seo",
        "scalable marketing",
      ],
    },
    {
      prompt:
        "the complete tech stack audit — how to evaluate whether your marketing tools are helping or hurting your home service business growth",
      category: "tech-stack" as BlogCategory,
      tags: [
        "tech stack",
        "marketing audit",
        "tool evaluation",
        "home service business",
      ],
    },
  ];

  const topicObj = topics[rotationIndex % topics.length];

  return {
    pillar: "tech-stack-case-study",
    topicPrompt: topicObj.prompt,
    suggestedCategory: topicObj.category,
    suggestedTags: topicObj.tags,
  };
}

// ═══════════════════════════════════════════════════════════
//  SYSTEM PROMPT — encodes ASP brand voice
// ═══════════════════════════════════════════════════════════

function buildSystemPrompt(pillar: ContentPillar): string {
  const pillarConfig =
    siteConfig.contentPillars[pillar as keyof typeof siteConfig.contentPillars];

  return `You are a professional SEO content writer for ${siteConfig.legalName}, a digital marketing agency based in ${siteConfig.address.city}, ${siteConfig.address.state} that specializes in helping home service businesses grow. You write expert-level blog posts that connect digital marketing strategy to real business growth outcomes.

BRAND VOICE — ASP LANGUAGE PROFILE:
- Expert but accessible: Explain industry concepts clearly. Never use jargon without immediately defining it.
- Data-driven: Reference real statistics, benchmarks, and measurable outcomes. If you cite a number, it must be realistic and defensible.
- Systematic: Frame advice through the "Assess. Strategize. Perform." methodology. Every recommendation follows a logical framework.
- Transparent: Explain the WHY behind every tactic. No black-box recommendations. Home service owners are smart — treat them that way.
- Actionable: Every post must give readers concrete steps they can implement immediately.
- Growth-focused: Connect marketing tactics back to revenue milestones ($1M, $3M, $5M).

CONTENT PILLAR: ${pillarConfig.label}
${pillarConfig.description}

SIGNATURE LANGUAGE — weave these naturally (do NOT force them):
- "ASP Growth System" — our systematic approach to marketing
- Revenue barriers and growth plateaus — how marketing overcomes them
- "Assess, Strategize, Perform" — our framework for every engagement
- Digital foundation — the baseline marketing every business needs

TARGET AUDIENCE:
- Home service business owners: ${siteConfig.targetAudience.industries.join(", ")}
- Revenue range: $500K to $5M+ trying to scale
- Pain points: ${siteConfig.targetAudience.painPoints.slice(0, 3).join("; ")}

STRICT CONTENT RULES (ASP Core Content Creation SOP):
1. Write exactly 1,500-2,200 words of verified, substantive content. No filler.
2. Include the primary keyword in the H1 title and within the first 100 words.
3. Introduce the business entity "${siteConfig.name}" or "${siteConfig.legalName}" in the first paragraph.
4. Include 4 or more internal links to verified ASP service pages (provided below).
5. Include 2 or more external Tier 1 links — ONLY to .gov, .edu, or established industry authorities (e.g., Google Search Central, Moz, Search Engine Journal, HubSpot, SBA.gov).
6. Add "Key Takeaway" callout blocks after every 2-3 H2 sections.
7. Include 6 or more FAQ items at the end, structured for FAQPage schema.
8. Do NOT fabricate statistics, case study results, or client testimonials.
9. Reference ${siteConfig.address.city}, ${siteConfig.address.state} and home service businesses by name.
10. Include a CTA paragraph at the end with phone number ${siteConfig.phone}.
11. Write in a professional but approachable tone — like a knowledgeable marketing partner who genuinely wants to help.
12. Include specific industry examples (HVAC, plumbing, electrical, roofing, etc.) to make content relatable.

CRITICAL — IMMEDIATE ACTION SUMMARY BOX (AEO):
Your FIRST content after the intro paragraph MUST be a summary box block formatted EXACTLY like this:

> **Immediate Action Summary for Home Service Business Owners**
> [Write a 75-100 word summary that directly answers the implied search query. This text must be self-contained, factual, and parseable by AI Overview systems. Include the business name ASP, the specific topic, and recommended action. Do NOT use marketing fluff — write like a factual advisory.]

This summary box is critical for AI Overview / Answer Engine Optimization (AEO). It must appear within the first 2 scroll-lengths of the page.

OUTPUT FORMAT — respond with EXACTLY this structure (use the delimiters precisely):

===TITLE===
[SEO-optimized H1 title, 50-70 characters]
===META_TITLE===
[Title tag, 50-60 characters]
===META_DESCRIPTION===
[Meta description, 150-160 characters]
===CATEGORY===
[One of: seo, ppc, social-media, web-design, local-seo, aeo, industry-trends, business-growth, tech-stack, case-studies]
===TAGS===
[Comma-separated tags]
===FAQ_JSON===
[JSON array of {question, answer} objects — minimum 6 items]
===CONTENT===
[Full Markdown blog post content starting with intro paragraph, NOT the H1]`;
}

// ═══════════════════════════════════════════════════════════
//  USER PROMPT — topic-specific instructions
// ═══════════════════════════════════════════════════════════

function buildUserPrompt(
  topic: TopicSelection,
  internalLinks: string,
  externalSources: string
): string {
  const today = new Date();
  const dateStr = today.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return `Write a blog post about ${topic.topicPrompt}

CONTENT PILLAR: ${topic.pillar}
PUBLICATION DATE: ${dateStr}
SUGGESTED CATEGORY: ${topic.suggestedCategory}
SUGGESTED TAGS: ${topic.suggestedTags.join(", ")}

VERIFIED INTERNAL LINKS (use 4+ of these — ONLY these URLs):
${internalLinks}

VERIFIED EXTERNAL AUTHORITY SOURCES (use 2+ from this list):
${externalSources}

BUSINESS INFO:
- Name: ${siteConfig.name} (${siteConfig.legalName})
- Phone: ${siteConfig.phone}
- Email: ${siteConfig.email}
- Location: ${siteConfig.address.city}, ${siteConfig.address.state}
- Website: ${siteConfig.url}
- Contact page: ${siteConfig.pages.contact}
- CEO: ${siteConfig.author.name}, ${siteConfig.author.title}

TARGET INDUSTRIES: ${siteConfig.targetAudience.industries.join(", ")}

REVENUE MILESTONES TO REFERENCE:
${siteConfig.targetAudience.revenueMilestones.join("\n")}

KEY TAKEAWAY FORMAT — use this exact markdown after every 2-3 H2 sections:
> **Key Takeaway:** [One-sentence actionable insight from the preceding sections]

CTA TEMPLATE — end the post with a section like this:
## Ready to [action related to topic]?

[2-3 sentences connecting the post's advice to ASP's services. Mention the ASP Growth System and the Assess, Strategize, Perform framework.]

**Call ${siteConfig.phone} or [contact us](${siteConfig.pages.contact}) to schedule your free strategy session.**

Generate the blog post now following all SOP rules and the exact output format specified.`;
}

// ═══════════════════════════════════════════════════════════
//  INTERNAL LINKS CONTEXT
// ═══════════════════════════════════════════════════════════

function buildInternalLinksContext(): string {
  const links: string[] = [];

  for (const [, service] of Object.entries(siteConfig.services)) {
    links.push(`- ${service.label}: ${service.url}`);
  }

  links.push(`- About ASP: ${siteConfig.pages.about}`);
  links.push(`- All Solutions: ${siteConfig.pages.solutions}`);
  links.push(`- Contact Us: ${siteConfig.pages.contact}`);
  links.push(`- Blog: ${siteConfig.pages.blog}`);

  return links.join("\n");
}

// ═══════════════════════════════════════════════════════════
//  EXTERNAL SOURCES CONTEXT
// ═══════════════════════════════════════════════════════════

function buildExternalSourcesContext(): string {
  return siteConfig.externalAuthoritySources
    .map((src) => `- ${src.name} (${src.type}): ${src.url}`)
    .join("\n");
}

// ═══════════════════════════════════════════════════════════
//  RESPONSE PARSER — same delimiter pattern as QC Mechanical
// ═══════════════════════════════════════════════════════════

function parseGeneratedContent(
  raw: string,
  topic: TopicSelection
): GeneratedBlog {
  const extract = (tag: string): string => {
    const regex = new RegExp(`===${tag}===\\s*([\\s\\S]*?)(?====\\w|$)`);
    const match = raw.match(regex);
    return (match?.[1] || "").trim();
  };

  const title = extract("TITLE");
  const metaTitle = extract("META_TITLE") || title.substring(0, 60);
  const metaDescription = extract("META_DESCRIPTION");
  const category = (extract("CATEGORY") || topic.suggestedCategory) as BlogCategory;
  const tags = extract("TAGS")
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  let faqItems: { question: string; answer: string }[] = [];
  try {
    const faqRaw = extract("FAQ_JSON");
    faqItems = JSON.parse(faqRaw);
  } catch {
    faqItems = [];
  }

  const content = extract("CONTENT");

  // Generate slug from title
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  const now = new Date();
  const dateStr = now.toISOString().split("T")[0];

  // Calculate reading time (average 225 words per minute)
  const wordCount = content.split(/\s+/).length;
  const readingMinutes = Math.max(1, Math.ceil(wordCount / 225));
  const readingTime = `${readingMinutes} min read`;

  const frontmatter: BlogFrontmatter = {
    title,
    slug,
    publishDate: dateStr,
    author: {
      name: siteConfig.author.name,
      title: siteConfig.author.title,
      bio: siteConfig.author.bio,
      avatar: siteConfig.author.avatar,
      website: siteConfig.author.website,
    },
    category,
    tags,
    metaTitle: metaTitle.substring(0, 60),
    metaDescription: metaDescription.substring(0, 160),
    featuredImage: "",
    schema: {
      type: "BlogPosting",
      faqItems,
    },
    status: "published",
    contentPillar: topic.pillar,
    readingTime,
  };

  // Compose the full Markdown file
  const frontmatterYaml = composeFrontmatterYaml(frontmatter);
  const markdownContent = `${frontmatterYaml}\n\n${content}`;

  const fileName = `${dateStr}-${slug}.md`;
  const filePath = `content/posts/${fileName}`;

  return {
    frontmatter,
    markdownContent,
    filePath,
  };
}

function composeFrontmatterYaml(fm: BlogFrontmatter): string {
  const faqYaml = fm.schema.faqItems
    .map(
      (item) =>
        `    - question: "${escapeYaml(item.question)}"\n      answer: "${escapeYaml(item.answer)}"`
    )
    .join("\n");

  return `---
title: "${escapeYaml(fm.title)}"
slug: "${fm.slug}"
publishDate: "${fm.publishDate}"
author:
  name: "${escapeYaml(fm.author.name)}"
  title: "${escapeYaml(fm.author.title)}"
  bio: "${escapeYaml(fm.author.bio)}"
  avatar: "${fm.author.avatar}"
  website: "${fm.author.website}"
category: "${fm.category}"
tags: [${fm.tags.map((t) => `"${escapeYaml(t)}"`).join(", ")}]
metaTitle: "${escapeYaml(fm.metaTitle)}"
metaDescription: "${escapeYaml(fm.metaDescription)}"
featuredImage: "${fm.featuredImage}"
schema:
  type: "${fm.schema.type}"
  faqItems:
${faqYaml}
status: "${fm.status}"
contentPillar: "${fm.contentPillar}"
readingTime: "${fm.readingTime}"
---`;
}

function escapeYaml(str: string): string {
  return str.replace(/"/g, '\\"').replace(/\n/g, " ");
}
