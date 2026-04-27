// ═══════════════════════════════════════════════════════════
//  ASP Blog System — Type Definitions
// ═══════════════════════════════════════════════════════════

/** Blog post categories aligned with ASP service offerings */
export type BlogCategory =
  | "seo"
  | "ppc"
  | "social-media"
  | "web-design"
  | "local-seo"
  | "aeo"
  | "industry-trends"
  | "business-growth"
  | "tech-stack"
  | "case-studies";

/** Content pillar — the strategic topic rotation for the content calendar */
export type ContentPillar =
  | "google-algorithm-updates"
  | "service-deep-dive"
  | "business-growth-strategy"
  | "tech-stack-case-study";

/** Blog post status */
export type PostStatus = "draft" | "review" | "published";

/** Author information */
export interface BlogAuthor {
  name: string;
  title: string;
  bio: string;
  avatar: string;
  website: string;
}

/** FAQ item for structured data */
export interface FaqItem {
  question: string;
  answer: string;
}

/** Schema configuration for structured data */
export interface PostSchema {
  type: "Article" | "BlogPosting";
  faqItems: FaqItem[];
}

/** Blog post frontmatter schema */
export interface BlogFrontmatter {
  title: string;
  slug: string;
  publishDate: string; // YYYY-MM-DD
  author: BlogAuthor;
  category: BlogCategory;
  tags: string[];
  metaTitle: string; // 50-60 chars
  metaDescription: string; // 150-160 chars
  featuredImage: string;
  schema: PostSchema;
  status: PostStatus;
  contentPillar: ContentPillar;
  readingTime: string; // e.g. "8 min read"
}

/** Full blog post — frontmatter + rendered content */
export interface BlogPost {
  frontmatter: BlogFrontmatter;
  content: string;
  slug: string;
  readingTime: string;
}

/** Generated blog output from content generator */
export interface GeneratedBlog {
  frontmatter: BlogFrontmatter;
  markdownContent: string;
  filePath: string;
}

/** Topic selection result from the content calendar */
export interface TopicSelection {
  pillar: ContentPillar;
  topicPrompt: string;
  suggestedCategory: BlogCategory;
  suggestedTags: string[];
}
