const withOffline = require('next-offline');

const nextConfig = {
  future: {
    webpack5: false
  },
  poweredByHeader: false,
  workboxOpts: {
    runtimeCaching: [
      {
        urlPattern: /\.(?:html?)$/,
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'html'
        }
      },
      {
        urlPattern: /\.(?:css|js)$/,
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'assets'
        }
      },
      {
        urlPattern: /\.(?:json)$/,
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'json'
        }
      },
      {
        urlPattern: /\.(?:jpe?g|png|gif|webp|svg|ico)$/,
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'images'
        }
      }
    ]
  }
};

module.exports = withOffline(nextConfig);
