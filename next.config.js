const { withNextVideo } = require('next-video/process')
const withNextIntl = require('next-intl/plugin')()

const nextConfig = withNextIntl({
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: 'place-hold.it',
      },
      {
        protocol: 'https',
        hostname: 'stpapi.bypentatone.com',
      },
      {
        protocol: 'https',
        hostname: 'api.stpaquaculture.com',
      },
      {
        protocol: 'http',
        hostname: 'api.stpaquaculture.com',
      },
    ],
  },
  output: 'standalone',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
})

module.exports = withNextVideo(nextConfig)
