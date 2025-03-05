/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/rollingwaves' : '',
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/rollingwaves/' : '',
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  // Agregar configuración para archivos estáticos
  async rewrites() {
    return [
      {
        source: '/images/:path*',
        destination: '/images/:path*',
      },
      {
        source: '/audio/:path*',
        destination: '/audio/:path*',
      },
    ];
  }
}

module.exports = nextConfig 