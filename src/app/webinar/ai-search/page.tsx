import type { Metadata } from "next";
import { WebinarPage } from "@/components/sections/WebinarPage";
import { WEBINAR_COPY } from "@/app/webinar/copy";

// Webinar landing page — topic variant "ai-search". NOT in the sitemap or nav;
// noindex — traffic arrives from the newsletter and paid campaigns only.
const copy = WEBINAR_COPY["ai-search"];

export const metadata: Metadata = {
  title: copy.meta.title,
  description: copy.meta.description,
  robots: { index: false, follow: false },
};

export default function AiSearchWebinar() {
  return (
    <WebinarPage topic="ai-search" copy={copy}
      hero={{ src: "/images/backgrounds/hero-chatgpt-laptop.jpg", alt: "Business owner typing a question into ChatGPT on a laptop", position: "center" }}
    />
  );
}
