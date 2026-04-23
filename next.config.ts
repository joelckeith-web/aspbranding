import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
    ];
  },
};

export default nextConfig;
