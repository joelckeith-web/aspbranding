import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog/posts";
import { siteConfig } from "@/lib/blog/site-config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.frontmatter.publishDate),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: `${siteConfig.url}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...postEntries,
  ];
}
