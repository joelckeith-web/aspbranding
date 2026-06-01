import { Octokit } from "@octokit/rest";
import matter from "gray-matter";
import type { GeneratedBlog } from "./types";

/**
 * Curated publish queue — slugs are published one per week by the
 * /api/cron/publish-next cron, in this exact order. ONLY these posts are
 * auto-published; any other review-status drafts are left untouched.
 * To queue more posts later, add their slugs here.
 */
export const PUBLISH_QUEUE: string[] = [
  "field-software-data-security",
  "who-owns-your-marketing-data",
  "real-seo-vs-fake-seo",
  "hvac-demand-marketing-budget-2026",
  "home-service-fractional-cmo",
];

// ═══════════════════════════════════════════════════════════
//  ASP Blog System — GitHub Integration
//  Pushes markdown files to the asp-nextjs repo under content/posts/
//  Vercel auto-deploys from main — NO human-in-the-loop.
// ═══════════════════════════════════════════════════════════

function getOctokit(): Octokit {
  const token = process.env.GITHUB_TOKEN;
  if (!token) throw new Error("GITHUB_TOKEN is not set");
  return new Octokit({ auth: token });
}

function getRepoConfig() {
  const owner = process.env.GITHUB_OWNER;
  const repo = process.env.GITHUB_REPO;
  const branch = process.env.GITHUB_BRANCH || "main";
  if (!owner || !repo)
    throw new Error("GITHUB_OWNER and GITHUB_REPO must be set");
  return { owner, repo, branch };
}

/**
 * Push a blog post markdown file directly to main branch.
 * Vercel will auto-deploy on push.
 */
export async function pushBlogToMain(blog: GeneratedBlog): Promise<{
  commitUrl: string;
  filePath: string;
  branch: string;
}> {
  const octokit = getOctokit();
  const { owner, repo, branch } = getRepoConfig();

  // Get the current commit SHA of the target branch
  const { data: refData } = await octokit.git.getRef({
    owner,
    repo,
    ref: `heads/${branch}`,
  });
  const latestCommitSha = refData.object.sha;

  // Get the tree SHA of the latest commit
  const { data: commitData } = await octokit.git.getCommit({
    owner,
    repo,
    commit_sha: latestCommitSha,
  });
  const baseTreeSha = commitData.tree.sha;

  // Create a blob for the new blog file
  const { data: blob } = await octokit.git.createBlob({
    owner,
    repo,
    content: Buffer.from(blog.markdownContent).toString("base64"),
    encoding: "base64",
  });

  // Create a new tree with the blog file
  const { data: newTree } = await octokit.git.createTree({
    owner,
    repo,
    base_tree: baseTreeSha,
    tree: [
      {
        path: blog.filePath,
        mode: "100644",
        type: "blob",
        sha: blob.sha,
      },
    ],
  });

  // Create the commit
  const commitMessage = `Auto-publish: ${blog.frontmatter.title}\n\nContent pillar: ${blog.frontmatter.contentPillar}\nCategory: ${blog.frontmatter.category}\nReading time: ${blog.frontmatter.readingTime}\n\nAutomated blog post — direct to main.`;

  const { data: newCommit } = await octokit.git.createCommit({
    owner,
    repo,
    message: commitMessage,
    tree: newTree.sha,
    parents: [latestCommitSha],
  });

  // Update the branch reference
  await octokit.git.updateRef({
    owner,
    repo,
    ref: `heads/${branch}`,
    sha: newCommit.sha,
  });

  const commitUrl = `https://github.com/${owner}/${repo}/commit/${newCommit.sha}`;
  console.log(`Blog pushed to ${branch}: ${commitUrl}`);

  return {
    commitUrl,
    filePath: blog.filePath,
    branch,
  };
}

/**
 * Publish the next queued draft: walks PUBLISH_QUEUE in order, finds the first
 * slug still at status "review", flips it to "published" (and stamps publishDate
 * to today), then commits to main. Only touches slugs in PUBLISH_QUEUE.
 */
export async function publishNextDraft(): Promise<{
  published: boolean;
  slug?: string;
  title?: string;
  commitUrl?: string;
  remaining?: number;
  reason?: string;
}> {
  const octokit = getOctokit();
  const { owner, repo, branch } = getRepoConfig();

  // Count how many queued slugs are still review-status (for reporting).
  let remainingReview = 0;
  let target: { path: string; raw: string; title: string; slug: string } | null =
    null;

  for (const slug of PUBLISH_QUEUE) {
    const path = `content/posts/${slug}.md`;
    let fileData: unknown;
    try {
      const res = await octokit.repos.getContent({ owner, repo, ref: branch, path });
      fileData = res.data;
    } catch {
      continue; // file missing — skip
    }
    if (Array.isArray(fileData) || (fileData as { type?: string }).type !== "file")
      continue;
    const raw = Buffer.from(
      (fileData as { content: string }).content,
      "base64"
    ).toString("utf-8");
    const { data: fm } = matter(raw);
    if (fm.status !== "review") continue; // already published — skip
    remainingReview++;
    if (!target) {
      target = { path, raw, title: fm.title as string, slug };
    }
  }

  if (!target) {
    return {
      published: false,
      remaining: 0,
      reason: "Queue empty — all curated drafts are published",
    };
  }

  // Flip status review → published and stamp publishDate to today (UTC).
  const today = new Date().toISOString().slice(0, 10);
  const updated = target.raw
    .replace(/^status:\s*["']?review["']?\s*$/m, 'status: "published"')
    .replace(/^publishDate:\s*["'][^"']*["'].*$/m, `publishDate: "${today}"`);

  // Commit the single updated file (same flow as pushBlogToMain).
  const { data: refData } = await octokit.git.getRef({
    owner,
    repo,
    ref: `heads/${branch}`,
  });
  const latestCommitSha = refData.object.sha;
  const { data: commitData } = await octokit.git.getCommit({
    owner,
    repo,
    commit_sha: latestCommitSha,
  });
  const { data: blob } = await octokit.git.createBlob({
    owner,
    repo,
    content: Buffer.from(updated).toString("base64"),
    encoding: "base64",
  });
  const { data: newTree } = await octokit.git.createTree({
    owner,
    repo,
    base_tree: commitData.tree.sha,
    tree: [{ path: target.path, mode: "100644", type: "blob", sha: blob.sha }],
  });
  const { data: newCommit } = await octokit.git.createCommit({
    owner,
    repo,
    message: `Auto-publish queued draft: ${target.title}\n\nFlipped status review → published (${target.slug}). Weekly publish-next cron.`,
    tree: newTree.sha,
    parents: [latestCommitSha],
  });
  await octokit.git.updateRef({
    owner,
    repo,
    ref: `heads/${branch}`,
    sha: newCommit.sha,
  });

  return {
    published: true,
    slug: target.slug,
    title: target.title,
    commitUrl: `https://github.com/${owner}/${repo}/commit/${newCommit.sha}`,
    remaining: remainingReview - 1,
  };
}
