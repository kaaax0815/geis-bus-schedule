import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import CookieConsent from 'react-cookie-consent';

import SEO from '../next-seo.config';

function Geis({ Component, pageProps }: AppProps) {
  const style = {
    left: 'auto'
  };
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
      <CookieConsent buttonText="Akzeptieren" style={style} sameSite={'strict'}>
        Wir verwenden Cookies, um unsere Dienste bereitzustellen und zu verbessern. Durch die
        Nutzung dieser Website akzeptieren Sie Cookies.{' '}
        <a style={{ color: 'var(--main-a-color)' }} href="https://kaaaxcreators.de/datenschutz">
          Datenschutzerklärung
        </a>
      </CookieConsent>
    </>
  );
}

export default Geis;
