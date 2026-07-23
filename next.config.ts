import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Serve modern formats where the browser supports them (perf requirement).
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
