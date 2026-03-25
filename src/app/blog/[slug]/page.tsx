import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BlogCard } from "@/components/blog/BlogCard";
import {
  ArticleSchema,
  FaqSchema,
  BreadcrumbSchema,
} from "@/components/blog/SchemaMarkup";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog/posts";
import { siteConfig } from "@/lib/blog/site-config";
import type { BlogCategory } from "@/lib/blog/types";

// ── Category labels ──
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

// ── Category badge colors ──
const categoryBadgeColors: Record<BlogCategory, string> = {
  seo: "bg-asp-blue text-white",
  ppc: "bg-asp-purple text-white",
  "social-media": "bg-asp-blue-light text-asp-blue",
  "web-design": "bg-asp-blue-dark text-white",
  "local-seo": "bg-asp-blue text-white",
  aeo: "bg-asp-purple text-white",
  "industry-trends": "bg-asp-surface-navy text-white",
  "business-growth": "bg-asp-blue-light text-asp-blue",
  "tech-stack": "bg-asp-blue-dark text-white",
  "case-studies": "bg-asp-purple text-white",
};

// ── Service links for sidebar ──
const sidebarServices = [
  { label: "Local SEO", href: "https://aspbranding.com/solutions/local-seo" },
  { label: "PPC Management", href: "https://aspbranding.com/solutions/ppc-management" },
  { label: "Social Media", href: "https://aspbranding.com/solutions/social-media-marketing" },
  { label: "Web Design", href: "https://aspbranding.com/solutions/web-design" },
  { label: "Branding", href: "https://aspbranding.com/solutions/branding" },
  { label: "Consulting", href: "https://aspbranding.com/solutions/consulting" },
];

// ═══════════════════════════════════════════════════════════
//  Static Params
// ═══════════════════════════════════════════════════════════

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

// ═══════════════════════════════════════════════════════════
//  SEO Metadata
// ═══════════════════════════════════════════════════════════

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  const { frontmatter } = post;
  const postUrl = `${siteConfig.blogUrl}/${slug}`;

  return {
    title: frontmatter.metaTitle || frontmatter.title,
    description: frontmatter.metaDescription,
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: frontmatter.metaTitle || frontmatter.title,
      description: frontmatter.metaDescription,
      url: postUrl,
      type: "article",
      publishedTime: frontmatter.publishDate,
      authors: [frontmatter.author.name],
      images: frontmatter.featuredImage
        ? [{ url: `${siteConfig.url}${frontmatter.featuredImage}` }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: frontmatter.metaTitle || frontmatter.title,
      description: frontmatter.metaDescription,
    },
  };
}

// ═══════════════════════════════════════════════════════════
//  Blog Post Page
// ═══════════════════════════════════════════════════════════

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const { frontmatter, content } = post;
  const relatedPosts = await getRelatedPosts(
    slug,
    frontmatter.category,
    3
  );

  const formattedDate = new Date(frontmatter.publishDate).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  const postUrl = `${siteConfig.blogUrl}/${slug}`;
  const badgeColor =
    categoryBadgeColors[frontmatter.category] || "bg-asp-blue text-white";
  const categoryLabel =
    categoryLabels[frontmatter.category] || frontmatter.category;
  const faqItems = frontmatter.schema?.faqItems || [];

  return (
    <main id="primary" className="site-main">
      {/* ── Structured Data ── */}
      <ArticleSchema post={post} />
      {faqItems.length > 0 && <FaqSchema faqItems={faqItems} />}
      <BreadcrumbSchema
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Blog", url: siteConfig.pages.blog },
          { name: frontmatter.title, url: postUrl },
        ]}
      />

      {/* ── Dark Header ── */}
      <section className="bg-asp-gradient-hero text-white pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(76,201,240,0.06)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-white/60">
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition-colors no-underline text-white/60"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-white transition-colors no-underline text-white/60"
                >
                  Blog
                </Link>
              </li>
              <li aria-hidden="true">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </li>
              <li className="text-white/90 truncate max-w-xs">
                {frontmatter.title}
              </li>
            </ol>
          </nav>

          {/* Category badge, date, reading time, author */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span
              className={`${badgeColor} text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-[var(--radius-asp-sm)]`}
            >
              {categoryLabel}
            </span>
            <time
              dateTime={frontmatter.publishDate}
              className="text-sm text-white/60"
            >
              {formattedDate}
            </time>
            <span className="text-sm text-white/60">
              {frontmatter.readingTime || post.readingTime}
            </span>
            <span className="text-sm text-white/60">
              By {frontmatter.author.name}
            </span>
          </div>

          {/* H1 Title */}
          <h1 className="font-black text-3xl md:text-4xl lg:text-5xl leading-tight max-w-4xl">
            {frontmatter.title}
          </h1>
        </div>
      </section>

      {/* ── Two-column layout ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16">
            {/* ── Main Content Column ── */}
            <article className="min-w-0">
              {/* Prose content */}
              <ScrollReveal>
                <div
                  className="prose prose-lg max-w-none
                    prose-headings:font-black prose-headings:text-asp-blue
                    prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
                    prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                    prose-p:text-gray-600 prose-p:leading-relaxed
                    prose-a:text-asp-blue-light prose-a:font-bold prose-a:no-underline hover:prose-a:underline
                    prose-strong:text-asp-blue
                    prose-ul:text-gray-600 prose-ol:text-gray-600
                    prose-li:leading-relaxed
                    prose-blockquote:border-asp-blue-light prose-blockquote:bg-asp-blue/5 prose-blockquote:rounded-[var(--radius-asp-md)] prose-blockquote:py-1 prose-blockquote:px-6
                    prose-img:rounded-[var(--radius-asp-lg)]
                    prose-code:text-asp-purple prose-code:bg-asp-purple/5 prose-code:rounded prose-code:px-1.5 prose-code:py-0.5 prose-code:before:content-[''] prose-code:after:content-['']"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              </ScrollReveal>

              {/* ── FAQ Accordion ── */}
              {faqItems.length > 0 && (
                <ScrollReveal>
                  <div className="mt-16 pt-12 border-t border-gray-200">
                    <h2 className="font-black text-2xl text-asp-blue mb-8">
                      Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                      {faqItems.map((faq, index) => (
                        <details
                          key={index}
                          className="group bg-asp-blue/[0.03] border border-gray-200 rounded-[var(--radius-asp-lg)] overflow-hidden"
                        >
                          <summary className="flex items-center justify-between cursor-pointer px-6 py-5 font-bold text-asp-blue hover:text-asp-blue-light transition-colors list-none [&::-webkit-details-marker]:hidden">
                            <span>{faq.question}</span>
                            <svg
                              className="w-5 h-5 flex-shrink-0 ml-4 transition-transform duration-200 group-open:rotate-180"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </summary>
                          <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                            {faq.answer}
                          </div>
                        </details>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              )}

              {/* ── CTA Block ── */}
              <ScrollReveal>
                <div className="mt-16 bg-asp-gradient-hero rounded-[var(--radius-asp-xl)] p-8 md:p-10 text-white">
                  <h3 className="font-black text-2xl mb-3">
                    Ready to Put This Into Action?
                  </h3>
                  <p className="text-white/80 leading-relaxed mb-6 max-w-xl">
                    The ASP team can help you implement these strategies and
                    build a marketing system that drives measurable growth.
                  </p>
                  <div className="flex flex-wrap items-center gap-4">
                    <Link
                      href="/contact"
                      className="inline-block bg-white text-asp-blue font-bold py-3 px-6 rounded-[var(--radius-asp-md)] hover:bg-white/90 transition-all no-underline text-sm"
                    >
                      Schedule a Free Consultation
                    </Link>
                    <a
                      href={`tel:${siteConfig.phoneLink}`}
                      className="inline-block border border-white/25 text-white font-bold py-3 px-6 rounded-[var(--radius-asp-md)] hover:bg-white/5 hover:border-white/40 transition-all no-underline text-sm"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              {/* ── Tags ── */}
              {frontmatter.tags && frontmatter.tags.length > 0 && (
                <div className="mt-10 pt-8 border-t border-gray-200">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mr-2">
                      Tags:
                    </span>
                    {frontmatter.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block px-3 py-1 text-xs font-bold text-asp-blue bg-asp-blue/5 rounded-[var(--radius-asp-2xl)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </article>

            {/* ── Sidebar ── */}
            <aside className="lg:sticky lg:top-24 lg:self-start space-y-8">
              {/* Contact card */}
              <div className="bg-asp-gradient-hero rounded-[var(--radius-asp-xl)] p-6 text-white">
                <h3 className="font-black text-lg mb-2">
                  Need Marketing Help?
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-5">
                  Talk to the ASP team about a custom growth strategy for your
                  business.
                </p>
                <a
                  href={`tel:${siteConfig.phoneLink}`}
                  className="flex items-center gap-3 bg-white/10 border border-white/15 rounded-[var(--radius-asp-md)] px-4 py-3 text-white font-bold text-sm hover:bg-white/15 transition-all no-underline mb-4"
                >
                  <svg
                    className="w-5 h-5 text-asp-blue-light flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  {siteConfig.phone}
                </a>
                <Link
                  href="/contact"
                  className="block text-center bg-white text-asp-blue font-bold py-3 px-6 rounded-[var(--radius-asp-md)] hover:bg-white/90 transition-all no-underline text-sm"
                >
                  Get Your Free Strategy Session
                </Link>
              </div>

              {/* Services list */}
              <div className="bg-white border border-gray-200 rounded-[var(--radius-asp-xl)] p-6">
                <h3 className="font-black text-base text-asp-blue mb-4">
                  Our Services
                </h3>
                <ul className="space-y-2">
                  {sidebarServices.map((service) => (
                    <li key={service.label}>
                      <a
                        href={service.href}
                        className="flex items-center gap-2 text-sm text-gray-600 hover:text-asp-blue-light transition-colors no-underline py-1"
                      >
                        <svg
                          className="w-4 h-4 text-asp-blue-light flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        {service.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Back to blog */}
              <Link
                href="/blog"
                className="flex items-center gap-2 text-sm font-bold text-asp-blue hover:text-asp-blue-light transition-colors no-underline"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back to All Posts
              </Link>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Related Posts ── */}
      {relatedPosts.length > 0 && (
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-14">
                <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
                  Keep Reading
                </span>
                <h2 className="font-black text-3xl md:text-4xl text-asp-blue">
                  Related Articles
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="stagger">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((related) => (
                  <BlogCard key={related.slug} post={related} />
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* ── Bottom CTA ── */}
      <section className="py-16 md:py-20 bg-asp-black text-white">
        <div className="max-w-[var(--spacing-content)] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-black text-3xl md:text-4xl text-white mb-4">
              Ready to Grow Your Business?
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
              Let&apos;s build a strategy that delivers measurable results.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block bg-white text-asp-blue font-bold py-4 px-8 rounded-[var(--radius-asp-md)] hover:bg-white/90 transition-all no-underline text-base"
              >
                Schedule a Consultation
              </Link>
              <a
                href={`tel:${siteConfig.phoneLink}`}
                className="inline-block border border-white/25 text-white font-bold py-4 px-8 rounded-[var(--radius-asp-md)] hover:bg-white/5 hover:border-white/40 transition-all no-underline text-base"
              >
                {siteConfig.phone}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
