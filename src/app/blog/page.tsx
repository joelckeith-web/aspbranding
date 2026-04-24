import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { CTABand } from "@/components/sections/CTABand";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogListSchema } from "@/components/blog/SchemaMarkup";
import { getAllPosts } from "@/lib/blog/posts";
import { siteConfig } from "@/lib/blog/site-config";
import type { BlogCategory } from "@/lib/blog/types";

// ── SEO Metadata ──
export const metadata: Metadata = {
  title: "Blog — The Sauce",
  description:
    "Marketing tips, growth strategies, and industry insights from ASP. Learn how to break through revenue barriers with proven digital marketing systems.",
  alternates: {
    canonical: siteConfig.pages.blog,
  },
  openGraph: {
    title: "The Sauce — ASP Blog",
    description:
      "Marketing tips, growth strategies, and industry insights from ASP.",
    url: siteConfig.pages.blog,
    type: "website",
  },
};

// ── Category filter pills with links to ASP service pages ──
const categoryFilters: { label: string; category: BlogCategory; href: string }[] = [
  { label: "SEO", category: "seo", href: "https://www.aspbranding.com/solutions/local-seo" },
  { label: "Local SEO", category: "local-seo", href: "https://www.aspbranding.com/solutions/local-seo" },
  { label: "PPC", category: "ppc", href: "https://www.aspbranding.com/solutions/ppc-management" },
  { label: "Social Media", category: "social-media", href: "https://www.aspbranding.com/solutions/social-media-marketing" },
  { label: "Web Design", category: "web-design", href: "https://www.aspbranding.com/solutions/web-design" },
  { label: "AEO", category: "aeo", href: "https://www.aspbranding.com/solutions/local-seo" },
  { label: "Business Growth", category: "business-growth", href: "https://www.aspbranding.com/solutions/consulting" },
  { label: "Case Studies", category: "case-studies", href: "https://www.aspbranding.com/solutions" },
];

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main id="primary" className="site-main">
      {/* Schema markup */}
      {posts.length > 0 && <BlogListSchema posts={posts} />}

      {/* Hero */}
      <Hero
        eyebrow="The Sauce"
        heading="Learn the Secret Sauce<br>of Marketing"
        subheading="Tips, strategies, and insights from the ASP team to help you grow your business past every revenue barrier."
        bgType="dark"
      />

      {/* Category filter pills */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mr-2">
              Explore:
            </span>
            {categoryFilters.map((filter) => (
              <a
                key={filter.category}
                href={filter.href}
                className="inline-block px-4 py-2 text-sm font-bold text-asp-blue bg-asp-blue/5 rounded-[var(--radius-asp-2xl)] hover:bg-asp-blue hover:text-white transition-all duration-150 no-underline"
              >
                {filter.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Blog grid or empty state */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[var(--spacing-wide)] mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length > 0 ? (
            <>
              <ScrollReveal>
                <div className="text-center mb-14">
                  <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
                    Latest Articles
                  </span>
                  <h2 className="font-black text-3xl md:text-4xl text-asp-blue">
                    Insights to Fuel Your Growth
                  </h2>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="stagger">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {posts.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                  ))}
                </div>
              </ScrollReveal>
            </>
          ) : (
            /* Empty state — Blog Coming Soon */
            <ScrollReveal>
              <div className="text-center py-20">
                <div className="w-20 h-20 rounded-full bg-asp-blue/10 flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-10 h-10 text-asp-blue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                </div>
                <h2 className="font-black text-2xl text-asp-blue mb-4">
                  Blog Coming Soon
                </h2>
                <p className="text-gray-500 text-lg max-w-md mx-auto mb-8">
                  We&apos;re cooking up some great content. Check back soon for
                  marketing tips, case studies, and growth strategies.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-asp-blue text-white font-bold py-3 px-6 rounded-[var(--radius-asp-md)] hover:bg-asp-blue-dark transition-all no-underline text-sm"
                >
                  Get Notified When We Launch
                </Link>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* Bottom CTA band */}
      <CTABand
        heading="Ready to Break Through Your Revenue Barrier?"
        subheading="Let the ASP team build a marketing system that drives real, measurable growth."
        buttonText="Schedule a Free Consultation"
        buttonUrl="/contact"
      />
    </main>
  );
}
