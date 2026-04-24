import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact ASP — Book a Free Growth Audit",
  description:
    "Talk to ASP. Book a free growth audit, get a recommended tier, or ask a question. We respond within one business day.",
  alternates: { canonical: "https://www.aspbranding.com/contact" },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
