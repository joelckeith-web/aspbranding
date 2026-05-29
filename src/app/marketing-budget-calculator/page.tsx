import type { Metadata } from "next";
import { MarketingBudgetCalculator } from "@/components/sections/MarketingBudgetCalculator";
import {
  BreadcrumbSchema,
  FaqPageSchema,
  ServiceSchema,
} from "@/components/schema/StructuredData";
import { FAQ_ITEMS } from "@/lib/marketing-budget";

const URL = "https://www.aspbranding.com/marketing-budget-calculator";

export const metadata: Metadata = {
  title: "Marketing Budget Calculator for Home Service Businesses",
  description:
    "Free marketing budget calculator for home service businesses. See how much to spend on marketing based on your revenue, industry, and market — in seconds.",
  alternates: { canonical: "/marketing-budget-calculator" },
  openGraph: {
    type: "website",
    url: URL,
    title: "Marketing Budget Calculator for Home Service Businesses | ASP",
    description:
      "See how much your HVAC, plumbing, roofing, or home service business should spend on marketing. Data-driven budget ranges by revenue and industry.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketing Budget Calculator for Home Service Businesses | ASP",
    description:
      "See how much your home service business should spend on marketing, based on revenue and industry.",
  },
};

export default function MarketingBudgetCalculatorPage() {
  return (
    <main id="primary" className="site-main">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.aspbranding.com/" },
          { name: "Marketing Budget Calculator", url: URL },
        ]}
      />
      <ServiceSchema
        name="Marketing Budget Calculator"
        description="Free tool that recommends a marketing budget range for home service businesses based on revenue, industry, and market."
        url={URL}
        serviceType="Marketing Strategy"
      />
      <FaqPageSchema items={FAQ_ITEMS} />
      <MarketingBudgetCalculator />
    </main>
  );
}
