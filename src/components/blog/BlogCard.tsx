import Link from "next/link";
import type { BlogPost, BlogCategory } from "@/lib/blog/types";

// ── Category color map using ASP brand palette ──
const categoryColors: Record<BlogCategory, { bg: string; text: string }> = {
  seo: { bg: "bg-asp-blue", text: "text-white" },
  ppc: { bg: "bg-asp-purple", text: "text-white" },
  "social-media": { bg: "bg-asp-blue-light", text: "text-asp-blue" },
  "web-design": { bg: "bg-asp-blue-dark", text: "text-white" },
  "local-seo": { bg: "bg-asp-blue", text: "text-white" },
  aeo: { bg: "bg-asp-purple", text: "text-white" },
  "industry-trends": { bg: "bg-asp-surface-navy", text: "text-white" },
  "business-growth": { bg: "bg-asp-blue-light", text: "text-asp-blue" },
  "tech-stack": { bg: "bg-asp-blue-dark", text: "text-white" },
  "case-studies": { bg: "bg-asp-purple", text: "text-white" },
};

// ── Human-readable category labels ──
const categoryLabels: Record<BlogCategory, string> = {
  seo: "SEO",
  ppc: "PPC",
  "social-media": "Social Media",
  "web-design": "Web Design",
  "local-seo": "Local SEO",
  aeo: "AEO",
  "industry-trends": "Industry Trends",
  "business-growth": "Business Growth",
  "tech-stack": "Tech Stack",
  "case-studies": "Case Studies",
};

// ── Content pillar labels ──
const pillarLabels: Record<string, string> = {
  "google-algorithm-updates": "Algorithm Updates",
  "service-deep-dive": "Service Deep-Dive",
  "business-growth-strategy": "Growth Strategy",
  "tech-stack-case-study": "Tech & Case Study",
};

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const { frontmatter, slug } = post;
  const colors = categoryColors[frontmatter.category] || {
    bg: "bg-asp-blue",
    text: "text-white",
  };
  const categoryLabel =
    categoryLabels[frontmatter.category] || frontmatter.category;
  const pillarLabel = pillarLabels[frontmatter.contentPillar] || "";

  const formattedDate = new Date(frontmatter.publishDate).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <Link
      href={`/blog/${slug}`}
      className="group flex flex-col bg-white rounded-[var(--radius-asp-xl)] border border-gray-100 shadow-asp-sm hover:shadow-asp-xl hover:-translate-y-1 transition-all duration-250 no-underline overflow-hidden"
    >
      {/* Gradient placeholder image area */}
      <div className="relative h-48 bg-asp-gradient-hero overflow-hidden">
        {/* Decorative accent circles */}
        <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-asp-blue-light/10" />
        <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-asp-purple/10" />

        {/* Category badge */}
        <span
          className={`absolute top-4 left-4 ${colors.bg} ${colors.text} text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-[var(--radius-asp-sm)]`}
        >
          {categoryLabel}
        </span>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-asp-blue-light/0 group-hover:bg-asp-blue-light/10 transition-colors duration-250" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Date & reading time */}
        <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
          <time dateTime={frontmatter.publishDate}>{formattedDate}</time>
          <span aria-hidden="true">&middot;</span>
          <span>{frontmatter.readingTime || post.readingTime}</span>
        </div>

        {/* Title */}
        <h3 className="font-bold text-lg text-asp-blue mb-3 leading-snug group-hover:text-asp-blue-light transition-colors duration-150 line-clamp-2">
          {frontmatter.title}
        </h3>

        {/* Meta description excerpt */}
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
          {frontmatter.metaDescription}
        </p>

        {/* Content pillar label */}
        {pillarLabel && (
          <div className="mt-auto pt-4 border-t border-gray-100">
            <span className="text-xs font-bold uppercase tracking-wider text-asp-blue-light">
              {pillarLabel}
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}
