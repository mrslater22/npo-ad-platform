/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable SWC for WebContainer compatibility
  swcMinify: false,
};

module.exports = nextConfig;