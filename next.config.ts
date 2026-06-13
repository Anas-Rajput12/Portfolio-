import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Optimize CSS handling in Next.js 16
    optimizeCss: true,
  },
  // Turbopack configuration for Next.js 16
  turbopack: {
    // Empty config acknowledges Turbopack usage
  },
};

export default nextConfig;
