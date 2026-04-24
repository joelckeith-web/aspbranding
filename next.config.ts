import type { NextConfig } from "next";

const SECURITY_HEADERS = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: SECURITY_HEADERS,
      },
    ];
  },
  async redirects() {
    return [
      // v4 IA — retire generic service pages; route to educational 101 blog posts
      { source: "/solutions", destination: "/growth-system", permanent: true },
      {
        source: "/solutions/local-seo",
        destination: "/blog/local-seo-for-home-service-businesses",
        permanent: true,
      },
      {
        source: "/solutions/ppc-management",
        destination: "/blog/ppc-advertising-for-home-service-businesses",
        permanent: true,
      },
      {
        source: "/solutions/social-media-marketing",
        destination: "/blog/social-media-for-home-service-businesses",
        permanent: true,
      },
      {
        source: "/solutions/web-design",
        destination: "/blog/websites-that-convert-for-home-service-businesses",
        permanent: true,
      },
      {
        source: "/solutions/branding",
        destination: "/blog/branding-for-home-service-businesses",
        permanent: true,
      },
      {
        source: "/solutions/consulting",
        destination: "/blog/growth-consulting-for-home-service-businesses",
        permanent: true,
      },

      // Legacy pre-v4 slugs — chain through to the new blog-based destinations
      {
        source: "/local-seo",
        destination: "/blog/local-seo-for-home-service-businesses",
        permanent: true,
      },
      {
        source: "/local-business-marketing",
        destination: "/blog/local-seo-for-home-service-businesses",
        permanent: true,
      },
      { source: "/digital-marketing-services", destination: "/growth-system", permanent: true },
      {
        source: "/social-media-marketing",
        destination: "/blog/social-media-for-home-service-businesses",
        permanent: true,
      },
      { source: "/podcast-marketing-services", destination: "/growth-system", permanent: true },
      { source: "/members-area/:path*", destination: "/", permanent: true },
      { source: "/blog/hashtags/:path*", destination: "/blog", permanent: true },

      // Legacy /post/* → imported blog posts (link equity preservation)
      {
        source: "/post/ai-optimization-aeo-home-service-businesses-2025",
        destination: "/blog/ai-optimization-aeo-home-service-businesses-2025",
        permanent: true,
      },
      {
        source: "/post/best-ai-tools-home-service-businesses-2025",
        destination: "/blog/best-ai-tools-home-service-businesses-2025",
        permanent: true,
      },
      {
        source: "/post/google-seo-strategies-2025",
        destination: "/blog/google-seo-strategies-2025",
        permanent: true,
      },
      {
        source: "/post/why-consistent-nap-info-is-crucial-for-local-seo-success",
        destination: "/blog/why-consistent-nap-info-is-crucial-for-local-seo-success",
        permanent: true,
      },
      {
        source: "/post/choosing-the-right-seo-agency-tips-for-small-business-success",
        destination: "/blog/choosing-the-right-seo-agency-tips-for-small-business-success",
        permanent: true,
      },
      {
        source: "/post/avoid-these-5-common-ppc-mistakes-small-businesses-make",
        destination: "/blog/avoid-these-5-common-ppc-mistakes-small-businesses-make",
        permanent: true,
      },
      {
        source: "/post/home-inspector-marketing-the-foundation-for-success",
        destination: "/blog/home-inspector-marketing-the-foundation-for-success",
        permanent: true,
      },

      // Legacy /post/* → existing blog 101 pillars
      {
        source: "/post/effective-seo-strategies-for-small-businesses",
        destination: "/blog/local-seo-for-home-service-businesses",
        permanent: true,
      },
      {
        source: "/post/seo-marketing-for-professional-services-building-long-term-success",
        destination: "/blog/local-seo-for-home-service-businesses",
        permanent: true,
      },
      {
        source: "/post/the-ultimate-guide-to-local-seo-for-small-businesses-in-2025",
        destination: "/blog/local-seo-for-home-service-businesses",
        permanent: true,
      },
      {
        source: "/post/mastering-seo-services-for-small-businesses-what-you-need-to-know",
        destination: "/blog/local-seo-for-home-service-businesses",
        permanent: true,
      },
      {
        source: "/post/seo-services-the-backbone-of-your-digital-marketing-strategy",
        destination: "/blog/local-seo-for-home-service-businesses",
        permanent: true,
      },
      {
        source: "/post/how-to-build-an-effective-ppc-campaign-for-local-service-businesses",
        destination: "/blog/ppc-advertising-for-home-service-businesses",
        permanent: true,
      },
      {
        source: "/post/maximizing-your-ad-spend-ppc-strategies-for-local-businesses",
        destination: "/blog/ppc-advertising-for-home-service-businesses",
        permanent: true,
      },
      {
        source: "/post/the-power-of-social-media-transforming-small-business-marketing",
        destination: "/blog/social-media-for-home-service-businesses",
        permanent: true,
      },
      {
        source: "/post/leveraging-social-media-algorithms-for-brand-visibility",
        destination: "/blog/social-media-for-home-service-businesses",
        permanent: true,
      },

      // Legacy /post/* → pillar/product pages
      {
        source: "/post/how-custom-web-development-can-revitalize-your-business-in-the-new-year",
        destination: "/blog/websites-that-convert-for-home-service-businesses",
        permanent: true,
      },
      {
        source:
          "/post/the-power-of-asp-branding-as-a-fractional-cmo-driving-revenue-and-business-growth",
        destination: "/fractional",
        permanent: true,
      },
      {
        source: "/post/why-hire-digital-marketing-agency",
        destination: "/blog/growth-consulting-for-home-service-businesses",
        permanent: true,
      },
      { source: "/post/online-marketing-roi", destination: "/growth-system", permanent: true },

      // Legacy /post/* → retired (301 to blog index)
      {
        source: "/post/understanding-the-digital-marketing-landscape-in-2024",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/post/digital-marketing-trends-for-2024-what-small-businesses-need-to-know",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/post/the-ultimate-guide-to-building-your-b2b-marketing-budget",
        destination: "/blog",
        permanent: true,
      },
      {
        source:
          "/post/mastering-customer-engagement-how-to-understand-and-implement-omni-channel-marketing",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
