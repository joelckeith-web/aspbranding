import type { Metadata } from "next";
import { WebinarPage } from "@/components/sections/WebinarPage";
import { WEBINAR_COPY } from "@/app/webinar/copy";

// Live audit workshop registration. NOT in the sitemap or nav; noindex, traffic
// arrives from the newsletter, AI for Founders and paid campaigns only.
const copy = WEBINAR_COPY;

export const metadata: Metadata = {
  title: copy.meta.title,
  description: copy.meta.description,
  robots: { index: false, follow: false },
};

export default function AiSearchWebinar() {
  return (
    <WebinarPage
      copy={copy}
      hero={{ src: "/images/backgrounds/hero-chatgpt-laptop.jpg", alt: "Person typing a question into ChatGPT on a laptop", position: "center" }}
    />
  );
}
