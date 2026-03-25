import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/local-seo", destination: "/solutions/local-seo", permanent: true },
      { source: "/local-business-marketing", destination: "/solutions/local-seo", permanent: true },
      { source: "/digital-marketing-services", destination: "/solutions", permanent: true },
      { source: "/social-media-marketing", destination: "/solutions/social-media-marketing", permanent: true },
      { source: "/podcast-marketing-services", destination: "/solutions", permanent: true },
      { source: "/members-area/:path*", destination: "/", permanent: true },
      { source: "/blog/hashtags/:path*", destination: "/blog", permanent: true },
    ];
  },
};

export default nextConfig;
