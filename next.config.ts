import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/madwaresolutions' : '',
  trailingSlash: true,
};

export default nextConfig;
