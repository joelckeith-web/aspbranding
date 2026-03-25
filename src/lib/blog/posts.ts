import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import readingTime from "reading-time";
import type { BlogPost, BlogFrontmatter, BlogCategory } from "./types";

// ═══════════════════════════════════════════════════════════
//  ASP Blog System — Post Reader & Parser
//  Reads markdown files from content/posts/
//  Uses gray-matter for frontmatter, remark + remark-html for rendering
// ═══════════════════════════════════════════════════════════

const POSTS_DIR = path.join(process.cwd(), "content/posts");

/**
 * Ensure the posts directory exists.
 */
function ensurePostsDir(): void {
  if (!fs.existsSync(POSTS_DIR)) {
    fs.mkdirSync(POSTS_DIR, { recursive: true });
  }
}

/**
 * Get all markdown file paths from the posts directory.
 */
function getPostFiles(): string[] {
  ensurePostsDir();
  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => path.join(POSTS_DIR, file));
}

/**
 * Parse a single markdown file into a BlogPost object.
 */
async function parsePostFile(filePath: string): Promise<BlogPost> {
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  // Render markdown to HTML
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  // Calculate reading time
  const stats = readingTime(content);
  const readingTimeStr = stats.text; // e.g. "8 min read"

  const frontmatter = data as BlogFrontmatter;

  // Ensure reading time is set (use calculated if not in frontmatter)
  if (!frontmatter.readingTime) {
    frontmatter.readingTime = readingTimeStr;
  }

  return {
    frontmatter,
    content: contentHtml,
    slug: frontmatter.slug || path.basename(filePath, ".md"),
    readingTime: frontmatter.readingTime || readingTimeStr,
  };
}

/**
 * Get all blog posts, sorted by date descending (newest first).
 */
export async function getAllPosts(): Promise<BlogPost[]> {
  const files = getPostFiles();

  const posts = await Promise.all(files.map((file) => parsePostFile(file)));

  // Filter to only published posts, sort by date descending
  return posts
    .filter((post) => post.frontmatter.status === "published")
    .sort((a, b) => {
      const dateA = new Date(a.frontmatter.publishDate).getTime();
      const dateB = new Date(b.frontmatter.publishDate).getTime();
      return dateB - dateA;
    });
}

/**
 * Get a single blog post by slug.
 */
export async function getPostBySlug(
  slug: string
): Promise<BlogPost | null> {
  const files = getPostFiles();

  for (const file of files) {
    const fileContent = fs.readFileSync(file, "utf-8");
    const { data } = matter(fileContent);

    // Check if slug matches (from frontmatter or filename)
    const frontmatterSlug = data.slug;
    const filenameSlug = path
      .basename(file, ".md")
      .replace(/^\d{4}-\d{2}-\d{2}-/, ""); // Strip date prefix

    if (frontmatterSlug === slug || filenameSlug === slug) {
      return parsePostFile(file);
    }
  }

  return null;
}

/**
 * Get all posts in a specific category.
 */
export async function getPostsByCategory(
  category: BlogCategory
): Promise<BlogPost[]> {
  const allPosts = await getAllPosts();
  return allPosts.filter((post) => post.frontmatter.category === category);
}

/**
 * Get all posts with a specific tag.
 */
export async function getPostsByTag(tag: string): Promise<BlogPost[]> {
  const allPosts = await getAllPosts();
  const normalizedTag = tag.toLowerCase();
  return allPosts.filter((post) =>
    post.frontmatter.tags.some((t) => t.toLowerCase() === normalizedTag)
  );
}

/**
 * Get related posts based on category and tags.
 * Excludes the current post by slug. Returns up to `count` posts.
 */
export async function getRelatedPosts(
  currentSlug: string,
  category: BlogCategory,
  count: number = 3
): Promise<BlogPost[]> {
  const allPosts = await getAllPosts();

  // Score posts by relevance (same category = 2 points, shared tag = 1 point each)
  const currentPost = allPosts.find((p) => p.slug === currentSlug);
  const currentTags = currentPost?.frontmatter.tags || [];

  const scored = allPosts
    .filter((post) => post.slug !== currentSlug)
    .map((post) => {
      let score = 0;
      if (post.frontmatter.category === category) score += 2;

      for (const tag of post.frontmatter.tags) {
        if (currentTags.some((ct) => ct.toLowerCase() === tag.toLowerCase())) {
          score += 1;
        }
      }

      return { post, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, count).map((item) => item.post);
}

/**
 * Get all unique categories from published posts.
 */
export async function getAllCategories(): Promise<
  { category: BlogCategory; count: number }[]
> {
  const allPosts = await getAllPosts();
  const categoryMap = new Map<BlogCategory, number>();

  for (const post of allPosts) {
    const cat = post.frontmatter.category;
    categoryMap.set(cat, (categoryMap.get(cat) || 0) + 1);
  }

  return Array.from(categoryMap.entries())
    .map(([category, count]) => ({ category, count }))
    .sort((a, b) => b.count - a.count);
}

/**
 * Get all unique tags from published posts.
 */
export async function getAllTags(): Promise<
  { tag: string; count: number }[]
> {
  const allPosts = await getAllPosts();
  const tagMap = new Map<string, number>();

  for (const post of allPosts) {
    for (const tag of post.frontmatter.tags) {
      const normalized = tag.toLowerCase();
      tagMap.set(normalized, (tagMap.get(normalized) || 0) + 1);
    }
  }

  return Array.from(tagMap.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}
