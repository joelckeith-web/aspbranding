import type { Metadata } from "next";
import { AIReadinessQuiz } from "@/components/sections/AIReadinessQuiz";
import { BreadcrumbSchema } from "@/components/schema/StructuredData";

export const metadata: Metadata = {
  title: "AI Readiness Check for Home Service Businesses",
  description:
    "Seven questions, two minutes. Find out whether your home service business is ready for AI — crawl, walk, or run — and the first move to make. Free, no email required.",
};

export default function AIReadinessPage() {
  return (
    <main id="primary" className="site-main">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.aspbranding.com/" },
          { name: "AI Readiness Check", url: "https://www.aspbranding.com/ai-readiness" },
        ]}
      />
      <AIReadinessQuiz />
    </main>
  );
}
