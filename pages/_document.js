import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="de">
        <Head>
          <link rel="stylesheet" href="https://kaaaxcreators.de/css/cookiebanner.css" />
          <link rel="manifest" href="manifest.json" />
          <meta name="theme-color" content="#181818" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="https://kaaaxcreators.de/js/cookiebanner.js"></script>
        </body>
      </Html>
    );
  }
}
