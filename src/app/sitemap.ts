import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog/posts";

const BASE = "https://www.aspbranding.com";

const STATIC_ROUTES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/growth-system", priority: 0.9, changeFrequency: "monthly" },
  { path: "/ai-integration", priority: 0.9, changeFrequency: "monthly" },
  { path: "/pricing", priority: 0.9, changeFrequency: "monthly" },
  { path: "/case-studies", priority: 0.8, changeFrequency: "monthly" },
  { path: "/local-seo-pro", priority: 0.8, changeFrequency: "monthly" },
  { path: "/stormfront", priority: 0.8, changeFrequency: "monthly" },
  { path: "/content-creation", priority: 0.8, changeFrequency: "monthly" },
  { path: "/podcast", priority: 0.8, changeFrequency: "monthly" },
  { path: "/fractional", priority: 0.8, changeFrequency: "monthly" },
  { path: "/diagnostic", priority: 0.7, changeFrequency: "monthly" },
  { path: "/about", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
  { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  let posts: Awaited<ReturnType<typeof getAllPosts>> = [];
  try {
    posts = await getAllPosts();
  } catch {
    posts = [];
  }

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified:
      (post.frontmatter as { dateModified?: string }).dateModified
        ? new Date((post.frontmatter as { dateModified?: string }).dateModified!)
        : post.frontmatter.publishDate
        ? new Date(post.frontmatter.publishDate)
        : now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
