import fs from "fs";
import path from "path";
import type { TranscriptSection } from "./types";

const TRANSCRIPTS_DIR = path.join(process.cwd(), "content/transcripts");

/** Load a post's video transcript, or null if the post has none. */
export function getTranscript(slug: string): TranscriptSection[] | null {
  const file = path.join(TRANSCRIPTS_DIR, `${slug}.json`);
  if (!fs.existsSync(file)) return null;
  const data = JSON.parse(fs.readFileSync(file, "utf8")) as {
    sections: TranscriptSection[];
  };
  return data.sections?.length ? data.sections : null;
}
