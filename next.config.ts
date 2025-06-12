import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      'images.unsplash.com',
      'live.staticflickr.com',
      'flickr.com',
      'www.flickr.com',
      'galleries.page.link'
    ],
  },
};

export default nextConfig;