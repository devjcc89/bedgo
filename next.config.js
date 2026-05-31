/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/tenant',
        destination: '/inquilinos',
        permanent: true,
      },
    ]
  },
  images: {
    // Serve /public assets directly — avoids /_next/image 404s on Netlify
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

module.exports = nextConfig
