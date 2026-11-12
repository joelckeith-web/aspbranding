import { Anton } from "next/font/google";
import "./growth-report.css";

// Display face for the REPORT wordmark only. Body copy stays Poppins (site font).
const anton = Anton({ subsets: ["latin"], weight: "400", display: "swap", variable: "--font-anton" });

export default function GrowthReportLayout({ children }: { children: React.ReactNode }) {
  return <div className={`gr-root ${anton.variable}`}>{children}</div>;
}
