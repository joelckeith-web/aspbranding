#!/usr/bin/env tsx
/**
 * ASP Blog — Manual blog generation script.
 *
 * Usage:
 *   npx tsx scripts/generate-blog.ts          # Save locally to content/posts/
 *   npx tsx scripts/generate-blog.ts --push   # Push to GitHub main branch
 *
 * Determines topic from content calendar, generates blog via Claude,
 * and either saves locally or pushes to GitHub for auto-deploy.
 */

import "dotenv/config";
import * as fs from "fs";
import * as path from "path";
import {
  selectTopicForDate,
  generateBlogPost,
} from "../src/lib/blog/content-generator";
import { pushBlogToMain } from "../src/lib/blog/github";
import { notifyGoogleIndexing } from "../src/lib/blog/google-indexing";
import { siteConfig } from "../src/lib/blog/site-config";

const PUSH_TO_GIT = process.argv.includes("--push");

async function main() {
  console.log("  ASP Blog Generator");
  console.log("  Assess. Strategize. Perform.");
  console.log("================================\n");

  // Step 1: Determine topic from content calendar
  console.log("Selecting topic from content calendar...");
  const topic = selectTopicForDate(new Date());
  console.log(`   Pillar: ${topic.pillar}`);
  console.log(`   Category: ${topic.suggestedCategory}`);
  console.log(`   Tags: ${topic.suggestedTags.join(", ")}`);
  console.log(`   Topic: ${topic.topicPrompt.substring(0, 100)}...`);
  console.log();

  // Step 2: Generate blog with pillar-specific prompts
  console.log(`Generating ${topic.pillar} blog content via Claude API...`);
  const blog = await generateBlogPost(topic);
  console.log(`   Title: ${blog.frontmatter.title}`);
  console.log(`   Category: ${blog.frontmatter.category}`);
  console.log(`   Content pillar: ${blog.frontmatter.contentPillar}`);
  console.log(`   Slug: ${blog.frontmatter.slug}`);
  console.log(`   Tags: ${blog.frontmatter.tags.join(", ")}`);
  console.log(`   FAQs: ${blog.frontmatter.schema.faqItems.length}`);
  console.log(`   Reading time: ${blog.frontmatter.readingTime}`);
  console.log();

  if (PUSH_TO_GIT) {
    // Push directly to main branch
    console.log("Pushing to GitHub main branch (auto-deploy)...");
    const result = await pushBlogToMain(blog);
    console.log(`   Branch: ${result.branch}`);
    console.log(`   File: ${result.filePath}`);
    console.log(`   Commit: ${result.commitUrl}`);

    // Ping Google Indexing API
    const blogUrl = `${siteConfig.blogUrl}/${blog.frontmatter.slug}`;
    console.log(`\nPinging Google Indexing API for: ${blogUrl}`);
    const indexResult = await notifyGoogleIndexing(blogUrl);
    if (indexResult.success) {
      console.log("   Google notified — expect indexing within minutes.");
    } else {
      console.log(`   ${indexResult.error}`);
    }

    console.log(
      `\nDone! Blog auto-published to '${result.branch}'. Vercel will deploy automatically.`
    );
  } else {
    // Save locally
    const postsDir = path.join(process.cwd(), "content/posts");
    fs.mkdirSync(postsDir, { recursive: true });

    const filePath = path.join(process.cwd(), blog.filePath);
    fs.writeFileSync(filePath, blog.markdownContent, "utf-8");
    console.log(`Saved locally: ${blog.filePath}`);
    console.log(
      `\nDone! Review the post, then run 'npx tsx scripts/generate-blog.ts --push' to push to GitHub main.`
    );
  }
}

main().catch((error) => {
  console.error("\nError:", error.message || error);
  process.exit(1);
});
