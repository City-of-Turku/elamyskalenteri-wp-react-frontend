/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:  {
    domains: ['linkedevents-api.turku.fi', 'testilinkedevents-api.turku.fi' ],
  },
}

module.exports = nextConfig
