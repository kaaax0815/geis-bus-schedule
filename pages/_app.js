import '../styles/globals.css';

import { DefaultSeo } from 'next-seo';

import SEO from '../next-seo.config';

function Geis({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}

export default Geis;
