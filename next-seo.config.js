export default {
  title: 'Busfahrplan - Kurt Geis GmbH',
  description:
    'Das ist der offizielle Busfahrplan für Kurt Geis GmbH. Sehen Sie alle Zeiten für alle Linien',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://brave-feynman-a25437.netlify.app/',
    site_name: 'Busfahrplan - Kurt Geis GmbH',
    images: [
      {
        url: 'https://brave-feynman-a25437.netlify.app/manifest-icon-512.png',
        width: 512,
        height: 512,
        alt: 'kaaaxcreators Logo'
      },
      {
        url: 'https://brave-feynman-a25437.netlify.app/apple-touch-icon-precomposed.png',
        width: 180,
        height: 180,
        alt: 'kaaaxcreators Logo'
      }
    ]
  },
  twitter: {
    site: '@kaaax0815',
    cardType: 'summary'
  },
  additionalLinkTags: [
    {
      rel: 'manifest',
      href: '/manifest.json'
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-icon-180.png'
    },
    {
      rel: 'apple-touch-startup-image',
      href: '/apple-splash-2048-2732.png',
      media:
        '(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
    },
    {
      rel: 'apple-touch-startup-image',
      href: '/apple-splash-2732-2048.png',
      media:
        '(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
    },
    {
      rel: 'apple-touch-startup-image',
      href: '/apple-splash-1668-2388.png',
      media:
        '(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
    },
    {
      rel: 'apple-touch-startup-image',
      href: '/apple-splash-2388-1668.png',
      media:
        '(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
    },
    {
      rel: 'apple-touch-startup-image',
      href: '/apple-splash-1536-2048.png',
      media:
        '(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
    },
    {
      rel: 'apple-touch-startup-image',
      href: '/apple-splash-2048-1536.png',
      media:
        '(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
    },
    {
      rel: 'icon',
      href: '/favicon-32x32.png',
      type: 'image/png',
      sizes: '32x32'
    },
    {
      rel: 'icon',
      href: '/favicon-16x16.png',
      type: 'image/png',
      sizes: '16x16'
    },
    {
      rel: 'mask-icon',
      href: '/safari-pinned-tab.svg',
      color: '#00021f'
    }
  ],
  additionalMetaTags: [
    {
      name: 'theme-color',
      content: '#181818'
    },
    {
      property: 'msapplication-square70x70logo',
      content: '/mstile-icon-128.png'
    },
    {
      property: 'msapplication-square150x150logo',
      content: '/mstile-icon-270.png'
    },
    {
      property: 'msapplication-square310x310logo',
      content: '/mstile-icon-558.png'
    },
    {
      property: 'msapplication-wide310x150logo',
      content: '/mstile-icon-558-270.png'
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes'
    },
    {
      property: 'msapplication-wide310x150logo',
      content: '/mstile-icon-558-270.png'
    },
    {
      name: 'msapplication-TileColor',
      content: '#00021f'
    }
  ]
};
