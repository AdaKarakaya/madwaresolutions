import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/madwaresolutions',
  trailingSlash: true,
};

export default nextConfig;
