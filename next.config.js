const { withNextVideo } = require('next-video/process');
const withNextIntl = require('next-intl/plugin')();

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
        hostname: 'apidev.stpaquaculture.com',
      },
    ],
  },
  output: 'standalone',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self' https://api.stpaquaculture.com http://apidev.stpaquaculture.com https://www.youtube.com; 
              script-src 'self' 'unsafe-inline' 'unsafe-eval' https://apis.google.com; 
              style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; 
              img-src 'self' data: https://storage.googleapis.com https://place-hold.it https://api.stpaquaculture.com http://apidev.stpaquaculture.com; 
              font-src 'self' https://fonts.gstatic.com; 
              frame-ancestors 'self'; 
              media-src 'self';
              object-src 'none';
            `.replace(/\s{2,}/g, ' ').trim()  // Minifies spaces for a compact header
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
        ],
      },
    ];
  },
});

module.exports = withNextVideo(nextConfig);
