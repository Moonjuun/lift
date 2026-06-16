import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/b", destination: "/", permanent: true },
      { source: "/b/:path*", destination: "/:path*", permanent: true },
      { source: "/a", destination: "/", permanent: true },
      { source: "/a/:path*", destination: "/:path*", permanent: true },
      { source: "/compare", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
