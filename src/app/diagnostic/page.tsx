import type { Metadata } from "next";
import { DiagnosticQuiz } from "@/components/sections/DiagnosticQuiz";

export const metadata: Metadata = {
  title: "Growth Diagnostic | ASP",
  description:
    "90 seconds. Seven questions. Find out which tier of the ASP Growth System fits your home service business today.",
};

export default function DiagnosticPage() {
  return (
    <main id="primary" className="site-main">
      <DiagnosticQuiz />
    </main>
  );
}
