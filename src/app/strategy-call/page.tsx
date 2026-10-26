import type { Metadata } from "next";
import { StrategyCallLanding, DEFAULT_COPY } from "./StrategyCallLanding";

export const metadata: Metadata = {
  title: "See Where Every Digital Lead Came From",
  description:
    "ASP runs your marketing and builds the tracking that proves which marketing booked which jobs. Apply for a strategy call with Joel.",
  robots: { index: false, follow: false },
};

export default function StrategyCallPage() {
  return <StrategyCallLanding copy={DEFAULT_COPY} />;
}
