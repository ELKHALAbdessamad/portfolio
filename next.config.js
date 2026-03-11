/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  experimental: {
    turbo: {
      root: __dirname,
    },
  },
}

module.exports = nextConfig