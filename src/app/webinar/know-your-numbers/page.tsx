import type { Metadata } from "next";
import { WebinarPage } from "@/components/sections/WebinarPage";
import { WEBINAR_COPY } from "@/app/webinar/copy";

// Webinar landing page — topic variant "numbers". NOT in the sitemap or nav;
// noindex — traffic arrives from the newsletter and paid campaigns only.
const copy = WEBINAR_COPY["numbers"];

export const metadata: Metadata = {
  title: copy.meta.title,
  description: copy.meta.description,
  robots: { index: false, follow: false },
};

export default function KnowYourNumbersWebinar() {
  return (
    <WebinarPage topic="numbers" copy={copy}
      hero={{ src: "/images/backgrounds/hero-trades-1.jpg", alt: "Home service technician working on an electrical panel", position: "center" }}
    />
  );
}
