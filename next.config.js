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
