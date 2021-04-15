const withOffline = require('next-offline');

const nextConfig = {
  future: {
    webpack5: true
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
    ],
    // https://github.com/hanford/next-offline/issues/190#issuecomment-819499496
    modifyURLPrefix: { 'autostatic/': '_next/static/' },
    additionalManifestEntries: [{ url: 'index.html', revision: '2A99D780840F7DF0A8851084E8AAADBE' }]
  }
};

module.exports = withOffline(nextConfig);
// module.exports = nextConfig;
