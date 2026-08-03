import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/schema/StructuredData";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms and conditions that govern your use of aspbranding.com and any services you engage ASP to perform.",
  alternates: { canonical: "https://www.aspbranding.com/terms" },
};

const LAST_UPDATED = "August 3, 2026";

export default function TermsPage() {
  return (
    <main id="primary" className="site-main">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.aspbranding.com/" },
          { name: "Terms of Service", url: "https://www.aspbranding.com/terms" },
        ]}
      />

      <section className="bg-asp-gradient-hero text-white py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
            Legal
          </span>
          <h1 className="font-black text-4xl md:text-5xl lg:text-6xl mb-4 leading-none">
            Terms of Service
          </h1>
          <p className="text-white/75 text-lg">
            The terms and conditions that govern your use of aspbranding.com and any services you engage ASP to perform.
          </p>
          <p className="text-white/50 text-sm mt-3">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <article className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 legal-prose">
          <p className="text-gray-600 leading-relaxed mb-8">
            These Terms of Service (the <em>&ldquo;Terms&rdquo;</em>) govern your access to and use of aspbranding.com (the <em>&ldquo;Site&rdquo;</em>) and any services provided by ASP (<em>&ldquo;ASP,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;</em>). By accessing the Site or engaging ASP, you agree to these Terms.
          </p>

          <h2 className="font-black text-2xl text-asp-blue mt-10 mb-4">1. Use of the Site</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            You agree to use the Site only for lawful purposes and in accordance with these Terms. You may not misuse, disrupt, or attempt to gain unauthorized access to any part of the Site, its systems, or its users.
          </p>

          <h2 className="font-black text-2xl text-asp-blue mt-10 mb-4">2. Services</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            ASP offers digital marketing, operations, and AI-integration services, including but not limited to the Growth System, AI Integration, Local SEO Pro, StormFront, Content Creation Package, Podcast Studio, Fractional C-Suite, and related a-la-carte services. The specific scope, deliverables, pricing, and timeline of any engagement are defined in a separate written agreement (a <em>&ldquo;Scope of Work&rdquo;</em> or <em>&ldquo;Order Form&rdquo;</em>) between ASP and the client.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            In the event of a conflict between these Terms and a signed Scope of Work, the Scope of Work controls for that engagement.
          </p>

          <h2 className="font-black text-2xl text-asp-blue mt-10 mb-4">3. Asset Ownership</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            ASP operates on an ownership-first model. Unless a Scope of Work states otherwise, clients own all deliverables created specifically for them under an active engagement, including websites, design files, creative assets, content, automations, and data produced on their behalf. ASP does not charge handover or exit fees to transfer these assets at the conclusion of an engagement.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            ASP retains ownership of its own methodologies, frameworks, internal tooling, and any generally-reusable technology that is not specifically created for a client. The Site itself — including its copy, design, proprietary systems like StormFront, and all ASP trademarks and branding — remains the exclusive property of ASP.
          </p>

          <h2 className="font-black text-2xl text-asp-blue mt-10 mb-4">4. Client Responsibilities</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Clients are responsible for providing accurate information, timely approvals and feedback, access to the systems and accounts required for ASP to perform its work, and payment in accordance with the agreed Scope of Work. Delays in client response or delivery of required inputs may affect timelines.
          </p>

          <h2 className="font-black text-2xl text-asp-blue mt-10 mb-4">5. Fees, Payment, and Termination</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Pricing for ASP services is set out on the Site and in the governing Scope of Work. Recurring services are billed on a monthly cadence unless otherwise agreed. Either party may terminate a recurring engagement with the notice period specified in the Scope of Work; termination does not relieve the client of payment for services rendered prior to the termination date.
          </p>

          <h2 id="install" className="font-black text-2xl text-asp-blue mt-10 mb-4 scroll-mt-28">
            6. The 90-Day Install
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            This section governs the offer marketed as the 90-Day Install. Where it conflicts with a signed Scope of Work for the same engagement, the Scope of Work controls.
          </p>

          <h3 className="font-bold text-lg text-asp-blue mt-8 mb-3">6.1 Pricing and billing</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            The 90-Day Install is billed monthly at $2,997 per month, or $3,850 per month for the tier that includes management of Google Local Services Ads, Google Ads, and Meta ads. Setup and system installation is ordinarily charged at $7,500 and is waived for founding clients. Fees already paid are non-refundable except as set out in Section 6.3.
          </p>

          <h3 className="font-bold text-lg text-asp-blue mt-8 mb-3">6.2 Term and cancellation</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            The first ninety (90) days constitute the initial term. After day 90 the client may cancel at any time. A client who continues past day 90 may elect to lock their monthly rate for twelve (12) months with no increase; that rate lock carries a corresponding twelve-month term.
          </p>

          <h3 className="font-bold text-lg text-asp-blue mt-8 mb-3">6.3 The 30-Day Clarity Guarantee</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            ASP guarantees that lead-source attribution will be live and populated in the client&apos;s dashboard within thirty (30) days of engagement start, subject to the client having completed its onboarding obligations: returning the onboarding checklist within fourteen (14) days, granting ASP access to the client&apos;s CRM, Google Business Profile, domain or DNS, and analytics, attending the kickoff call, and returning the setup questionnaire.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            The guarantee is measured on <strong>source attribution being live and populated for new leads generated after the client&apos;s system goes live.</strong> It does not apply to contacts already present in the client&apos;s CRM at engagement start, and it is <strong>not</strong> measured on lead volume, pipeline value, or revenue.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Where the client has met its onboarding obligations and attribution is not live by day 30, the client&apos;s first month&apos;s fee is refunded and the client is released from the remainder of the initial 90-day term. The client retains all assets built to that point.
          </p>

          <h3 className="font-bold text-lg text-asp-blue mt-8 mb-3">6.4 Advertising spend</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Advertising spend is not included in any ASP fee. The client pays advertising platforms directly from the client&apos;s own accounts. ASP does not collect, hold, disburse, or mark up advertising spend at any time. Recommended budgets are discussed during the discovery call and remain the client&apos;s decision.
          </p>

          <h3 className="font-bold text-lg text-asp-blue mt-8 mb-3">6.5 What the client owns</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Consistent with Section 3, every asset built for the client under this offer is the client&apos;s to keep and is transferred at no charge on request or at the conclusion of the engagement: the website and its source code, the domain and hosting accounts, advertising and analytics accounts, content, and data. There are no handover or exit fees.
          </p>

          <h3 className="font-bold text-lg text-asp-blue mt-8 mb-3">6.6 Results</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Revenue, pipeline, and growth figures presented in ASP marketing materials describe the past performance of specific clients, identified by trade rather than by name. They are illustrative and are not a promise, projection, or guarantee of results for any other client. The only performance commitment ASP makes under this offer is the 30-Day Clarity Guarantee in Section 6.3, and Section 8 continues to apply in full.
          </p>

          <h2 className="font-black text-2xl text-asp-blue mt-10 mb-4">7. Confidentiality</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Each party agrees to keep confidential any non-public information shared by the other during an engagement, and to use such information only for the purpose of performing the agreed work. This obligation survives termination of any Scope of Work.
          </p>

          <h2 className="font-black text-2xl text-asp-blue mt-10 mb-4">8. Warranties and Disclaimers</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            ASP performs its services in a professional and workmanlike manner. Marketing results depend on many factors outside ASP&apos;s control, including market conditions, competitive activity, client execution, and third-party platform behavior. <strong>ASP does not guarantee specific rankings, lead volumes, revenue outcomes, or any other forward-looking performance metric.</strong> Case study results reflect the past performance of specific clients and are not a prediction of future results for any other engagement.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            The Site and any content on it are provided on an <em>&ldquo;as is&rdquo;</em> and <em>&ldquo;as available&rdquo;</em> basis without warranties of any kind, whether express or implied, to the maximum extent permitted by law.
          </p>

          <h2 className="font-black text-2xl text-asp-blue mt-10 mb-4">9. Limitation of Liability</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            To the maximum extent permitted by applicable law, ASP&apos;s total liability arising out of or related to these Terms or the use of the Site or services shall not exceed the total amount paid by the client to ASP in the three (3) months preceding the event giving rise to the claim. ASP shall not be liable for any indirect, incidental, special, consequential, or punitive damages.
          </p>

          <h2 className="font-black text-2xl text-asp-blue mt-10 mb-4">10. Indemnification</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Clients agree to defend, indemnify, and hold harmless ASP and its team from any claims, damages, liabilities, or expenses arising from client-provided content, client-approved campaigns, or any violation of these Terms by the client.
          </p>

          <h2 className="font-black text-2xl text-asp-blue mt-10 mb-4">11. Third-Party Services</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Engagements frequently involve third-party platforms (Google, Meta, Housecall Pro, and others). ASP is not responsible for the availability, accuracy, or policies of third-party services, and clients are subject to the terms of those third parties when using them.
          </p>

          <h2 className="font-black text-2xl text-asp-blue mt-10 mb-4">12. Changes to These Terms</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We may update these Terms from time to time. The &ldquo;Last updated&rdquo; date at the top of this page reflects the most recent revision. Continued use of the Site after an update constitutes acceptance of the revised Terms.
          </p>

          <h2 className="font-black text-2xl text-asp-blue mt-10 mb-4">13. Governing Law and Disputes</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            These Terms are governed by the laws of the State of Texas, without regard to conflict-of-laws principles. Any dispute arising out of or relating to these Terms will be resolved in the state or federal courts located in Travis County, Texas, and you consent to personal jurisdiction there.
          </p>

          <h2 className="font-black text-2xl text-asp-blue mt-10 mb-4">14. Contact</h2>
          <p className="text-gray-600 leading-relaxed mb-10">
            Questions about these Terms?
            <br />
            <br />
            <strong className="text-asp-blue">ASP</strong>
            <br />
            Austin, Texas, USA
            <br />
            Email:{" "}
            <a
              href="mailto:info@aspbranding.com"
              className="text-asp-blue font-semibold underline hover:text-asp-purple"
            >
              info@aspbranding.com
            </a>
            <br />
            Phone: (512) 200-3190
          </p>

          <div className="mt-12 p-5 rounded-[var(--radius-asp-lg)] bg-asp-surface-light border border-asp-blue/10 text-sm text-asp-blue/70 leading-relaxed">
            <strong className="text-asp-blue">Disclaimer:</strong> These Terms are provided for informational purposes and reflect ASP&apos;s current engagement practices. They are not legal advice. Enforceability of contract provisions varies by jurisdiction — contact a licensed attorney before relying on these Terms for binding commercial agreements.
          </div>

          <p className="mt-10 text-sm text-asp-blue/60">
            See also: <Link href="/privacy-policy" className="text-asp-blue font-semibold underline hover:text-asp-purple">Privacy Policy</Link>
          </p>
        </div>
      </article>
    </main>
  );
}
