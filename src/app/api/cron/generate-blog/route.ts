import { NextRequest, NextResponse } from "next/server";
import { selectTopicForDate, generateBlogPost } from "@/lib/blog/content-generator";
import { pushBlogToMain } from "@/lib/blog/github";
import { notifyGoogleIndexing } from "@/lib/blog/google-indexing";
import { siteConfig } from "@/lib/blog/site-config";

/**
 * Vercel Cron endpoint — triggers weekly blog generation.
 * Schedule: Every Monday at 10:00 AM UTC (configured in vercel.json)
 *
 * Flow:
 * 1. Determine the next topic based on content calendar rotation
 * 2. Generate blog post via Claude API with pillar-specific prompts
 * 3. Push directly to `main` branch on GitHub — Vercel auto-deploys
 * 4. Ping Google Indexing API for fast crawl (if configured)
 */
export async function GET(request: NextRequest) {
  // Verify cron secret to prevent unauthorized access
  const authHeader = request.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;

  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    console.log("Starting weekly blog generation...");

    // Step 1: Determine topic from content calendar
    const topic = selectTopicForDate(new Date());
    console.log(
      `Topic selected: pillar=${topic.pillar}, category=${topic.suggestedCategory}`
    );

    // Step 2: Generate blog post with pillar-specific content
    console.log(`Generating ${topic.pillar} blog content via Claude...`);
    const blog = await generateBlogPost(topic);
    console.log(`Blog generated: "${blog.frontmatter.title}"`);

    // Step 3: Push directly to main branch
    console.log("Pushing to main branch (auto-deploy)...");
    const result = await pushBlogToMain(blog);
    console.log(`Pushed to ${result.branch}: ${result.commitUrl}`);

    // Step 4: Ping Google Indexing API (optional — skips if not configured)
    const pageUrl = `${siteConfig.blogUrl}/${blog.frontmatter.slug}`;
    console.log(`Pinging Google Indexing API for: ${pageUrl}`);
    const indexResult = await notifyGoogleIndexing(pageUrl);
    if (indexResult.success) {
      console.log("Google Indexing API notified successfully");
    } else {
      console.log(`Google Indexing: ${indexResult.error}`);
    }

    return NextResponse.json({
      success: true,
      blog: {
        title: blog.frontmatter.title,
        slug: blog.frontmatter.slug,
        category: blog.frontmatter.category,
        contentPillar: topic.pillar,
        readingTime: blog.frontmatter.readingTime,
      },
      git: {
        branch: result.branch,
        commitUrl: result.commitUrl,
        filePath: result.filePath,
      },
      indexing: indexResult,
      message: `Blog auto-published to '${result.branch}'. Vercel will deploy automatically.`,
    });
  } catch (error: unknown) {
    console.error("Blog generation failed:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";

    return NextResponse.json(
      {
        success: false,
        error: errorMessage,
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}

// Vercel cron requires GET method
export const dynamic = "force-dynamic";
export const maxDuration = 60;
