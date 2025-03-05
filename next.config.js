/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/rollingwaves',
  images: {
    unoptimized: true
  },
  trailingSlash: true
}

module.exports = nextConfig 