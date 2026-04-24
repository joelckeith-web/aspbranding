import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/schema/StructuredData";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How ASP collects, uses, and protects the personal information of visitors, subscribers, and clients of aspbranding.com.",
  alternates: { canonical: "https://www.aspbranding.com/privacy-policy" },
};

const LAST_UPDATED = "April 24, 2026";

export default function PrivacyPolicyPage() {
  return (
    <main id="primary" className="site-main">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.aspbranding.com/" },
          { name: "Privacy Policy", url: "https://www.aspbranding.com/privacy-policy" },
        ]}
      />

      <section className="bg-asp-gradient-hero text-white py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block font-bold text-xs uppercase tracking-widest text-asp-blue-light mb-4">
            Legal
          </span>
          <h1 className="font-black text-4xl md:text-5xl lg:text-6xl mb-4 leading-none">
            Privacy Policy
          </h1>
          <p className="text-white/75 text-lg">
            How we collect, use, and protect information from visitors and clients of aspbranding.com.
          </p>
          <p className="text-white/50 text-sm mt-3">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <article className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 legal-prose">
          <p className="text-gray-600 leading-relaxed mb-8">
            ASP (<em>&ldquo;ASP,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;</em>) respects your privacy. This Privacy Policy describes how we collect, use, and share personal information when you visit aspbranding.com, fill out a form, subscribe to our newsletter, or engage with us as a client.
          </p>

          <h2 className="font-black text-2xl text-asp-blue mt-10 mb-4">1. Information We Collect</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We collect the following categories of personal information:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-relaxed mb-6">
            <li>
              <strong>Information you provide.</strong> Name, email, phone number, company name, and any message or information you submit through our contact forms, newsletter signup, or a growth audit request.
            </li>
            <li>
              <strong>Technical information.</strong> IP address, browser type, device and operating system, referring URL, pages viewed, timestamps, and interaction events captured through server logs and analytics.
            </li>
            <li>
              <strong>Cookies and similar technologies.</strong> First- and third-party cookies set by Google Analytics, Google Tag Manager, Meta (Facebook) Pixel, Crazy Egg, and reCAPTCHA Enterprise for analytics, advertising measurement, security, and user-experience research.
            </li>
          </ul>

          <h2 className="font-black text-2xl text-asp-blue mt-10 mb-4">2. How We Use Information</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We use personal information to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-relaxed mb-6">
            <li>Respond to inquiries and deliver the services you request.</li>
            <li>
              Send marketing and promotional emails, including the ASP newsletter, <em>only where you have given us consent</em> through the marketing-consent checkbox on our contact and newsletter forms.
            </li>
            <li>Operate, secure, and improve our website, including abuse detection via reCAPTCHA Enterprise.</li>
            <li>Measure and analyze site performance, audience engagement, and advertising effectiveness.</li>
            <li>Comply with legal obligations and enforce our Terms of Service.</li>
          </ul>

          <h2 className="font-black text-2xl text-asp-blue mt-10 mb-4">3. Who We Share Information With</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We do not sell personal information. We share limited information with vendors who process data on our behalf, including:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-relaxed mb-6">
            <li><strong>Google</strong> (Analytics, Tag Manager, reCAPTCHA Enterprise)</li>
            <li><strong>Meta Platforms</strong> (Facebook Pixel for advertising measurement)</li>
            <li><strong>Crazy Egg</strong> (heatmap and session replay for UX research)</li>
            <li><strong>Vercel</strong> (website hosting, edge caching)</li>
            <li><strong>Gmail / Google Workspace</strong> (email delivery for form submissions and newsletter notifications)</li>
            <li><strong>Beehiiv</strong> (newsletter subscriber management, when active)</li>
            <li><strong>Housecall Pro</strong> (only for clients whose engagement includes HCP integration)</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-6">
            Each of these vendors processes information under its own privacy terms. We may also disclose information when required by law, to enforce our Terms, or to protect the rights, safety, or property of ASP, our clients, or others.
          </p>

          <h2 className="font-black text-2xl text-asp-blue mt-10 mb-4">4. Your Rights and Choices</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Depending on where you live (including California residents under the CCPA/CPRA and residents of the EU/UK under the GDPR), you may have the right to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-relaxed mb-6">
            <li>Request access to the personal information we hold about you.</li>
            <li>Request correction or deletion of your personal information.</li>
            <li>Withdraw consent for marketing communications at any time.</li>
            <li>Opt out of the sale or sharing of personal information (we do not sell personal information).</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-6">
            To exercise any of these rights, email{" "}
            <a
              href="mailto:info@aspbranding.com"
              className="text-asp-blue font-semibold underline hover:text-asp-purple"
            >
              info@aspbranding.com
            </a>
            . We will respond within 30 days.
          </p>

          <h2 className="font-black text-2xl text-asp-blue mt-10 mb-4">5. Unsubscribing from Marketing</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Every marketing email we send includes an unsubscribe link in the footer. You can also email us at{" "}
            <a
              href="mailto:info@aspbranding.com"
              className="text-asp-blue font-semibold underline hover:text-asp-purple"
            >
              info@aspbranding.com
            </a>{" "}
            to be removed from marketing lists. Transactional and account communications related to an active client engagement are not affected by marketing unsubscribes.
          </p>

          <h2 className="font-black text-2xl text-asp-blue mt-10 mb-4">6. Data Retention</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We retain personal information only as long as necessary to fulfill the purposes described in this policy, to provide services to clients, to comply with legal obligations, or to resolve disputes. Inactive contact-form and newsletter records are reviewed periodically and purged when no longer needed.
          </p>

          <h2 className="font-black text-2xl text-asp-blue mt-10 mb-4">7. Security</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We use reasonable administrative, technical, and physical safeguards — including HTTPS/TLS, restricted vendor access, and hardened security headers — to protect personal information. No internet transmission is fully secure, however, and we cannot guarantee absolute security.
          </p>

          <h2 className="font-black text-2xl text-asp-blue mt-10 mb-4">8. Children&apos;s Privacy</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            aspbranding.com is intended for business audiences and is not directed to children under 13. We do not knowingly collect personal information from children.
          </p>

          <h2 className="font-black text-2xl text-asp-blue mt-10 mb-4">9. International Visitors</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            ASP is based in the United States. If you access the site from outside the U.S., your information may be transferred to, stored, and processed in the U.S. under applicable laws.
          </p>

          <h2 className="font-black text-2xl text-asp-blue mt-10 mb-4">10. Changes to This Policy</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We may update this Privacy Policy from time to time. The &ldquo;Last updated&rdquo; date at the top of this page reflects the most recent revision. Material changes will be communicated through a notice on the website.
          </p>

          <h2 className="font-black text-2xl text-asp-blue mt-10 mb-4">11. Contact Us</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Questions about this Privacy Policy or our data practices?
          </p>
          <p className="text-gray-600 leading-relaxed mb-10">
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
            <strong className="text-asp-blue">Disclaimer:</strong> This Privacy Policy is provided for informational purposes and reflects ASP&apos;s current practices. It is not legal advice. Jurisdictional requirements vary — contact a licensed attorney before relying on this policy for regulatory compliance.
          </div>

          <p className="mt-10 text-sm text-asp-blue/60">
            See also: <Link href="/terms" className="text-asp-blue font-semibold underline hover:text-asp-purple">Terms of Service</Link>
          </p>
        </div>
      </article>
    </main>
  );
}
