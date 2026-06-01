import { NextRequest, NextResponse } from "next/server";
import { publishNextDraft } from "@/lib/blog/github";
import { notifyGoogleIndexing } from "@/lib/blog/google-indexing";
import { siteConfig } from "@/lib/blog/site-config";

/**
 * Vercel Cron endpoint — publishes the next curated draft, one per week.
 * Schedule: Every Monday at 16:00 UTC (configured in vercel.json), one hour
 * after the auto-generator so the two don't collide.
 *
 * Flow:
 * 1. Walk the curated PUBLISH_QUEUE; find the first slug still at status "review".
 * 2. Flip it to "published" (stamp publishDate = today) and commit to main —
 *    Vercel auto-deploys, which makes the post live (status === "published").
 * 3. Ping Google Indexing for the newly live URL.
 * Only touches slugs in PUBLISH_QUEUE; other review-status drafts are left alone.
 * When the queue is drained, it no-ops cleanly.
 */
export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;

  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const result = await publishNextDraft();

    if (!result.published) {
      console.log(`publish-next: ${result.reason}`);
      return NextResponse.json({ success: true, ...result });
    }

    console.log(`publish-next: published "${result.title}" (${result.slug})`);

    const pageUrl = `${siteConfig.blogUrl}/${result.slug}`;
    const indexResult = await notifyGoogleIndexing(pageUrl);

    return NextResponse.json({
      success: true,
      ...result,
      pageUrl,
      indexed: indexResult.success,
    });
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error("publish-next failed:", msg);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
