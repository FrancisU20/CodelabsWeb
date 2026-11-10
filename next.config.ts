import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  experimental: {
    globalNotFound: true,
    inlineCss: true,
  },
};

export default nextConfig;
