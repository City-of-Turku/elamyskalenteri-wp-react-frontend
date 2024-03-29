/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  staticPageGenerationTimeout: 180,
  images: {
    domains: ['linkedevents-api.turku.fi', 'testilinkedevents-api.turku.fi'],
  },


  async redirects() {
    return [
      {
        source: "/",
        destination: "/fi/etusivu",
        permanent: true,
      }
    ]
  }
}

module.exports = nextConfig
