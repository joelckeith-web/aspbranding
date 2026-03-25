import { siteConfig } from "@/lib/blog/site-config";
import type { BlogPost, FaqItem } from "@/lib/blog/types";

// ═══════════════════════════════════════════════════════════
//  Structured Data Components — JSON-LD for SEO
//  Article, FAQ, Breadcrumb, BlogList schemas
// ═══════════════════════════════════════════════════════════

interface ArticleSchemaProps {
  post: BlogPost;
}

export function ArticleSchema({ post }: ArticleSchemaProps) {
  const { frontmatter, slug } = post;
  const postUrl = `${siteConfig.blogUrl}/${slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": frontmatter.schema?.type || "BlogPosting",
    headline: frontmatter.title,
    description: frontmatter.metaDescription,
    image: frontmatter.featuredImage
      ? `${siteConfig.url}${frontmatter.featuredImage}`
      : undefined,
    datePublished: frontmatter.publishDate,
    dateModified: frontmatter.publishDate,
    url: postUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    author: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url,
      sameAs: siteConfig.sameAs,
      member: {
        "@type": "Person",
        name: frontmatter.author.name,
        jobTitle: frontmatter.author.title,
        url: frontmatter.author.website,
      },
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url,
      sameAs: siteConfig.sameAs,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/asp-logo.png`,
      },
    },
    isPartOf: {
      "@type": "Blog",
      name: "The Sauce — ASP Blog",
      url: siteConfig.blogUrl,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface FaqSchemaProps {
  faqItems: FaqItem[];
}

export function FaqSchema({ faqItems }: FaqSchemaProps) {
  if (!faqItems || faqItems.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbSchemaProps {
  items: { name: string; url: string }[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BlogListSchemaProps {
  posts: BlogPost[];
}

export function BlogListSchema({ posts }: BlogListSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "The Sauce — ASP Blog",
    description:
      "Marketing tips, strategies, and insights from ASP to help home service businesses grow.",
    url: siteConfig.blogUrl,
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url,
      sameAs: siteConfig.sameAs,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/asp-logo.png`,
      },
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.frontmatter.title,
      description: post.frontmatter.metaDescription,
      datePublished: post.frontmatter.publishDate,
      url: `${siteConfig.blogUrl}/${post.slug}`,
      author: {
        "@type": "Person",
        name: post.frontmatter.author.name,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
