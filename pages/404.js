import Head from 'next/head';
import Link from 'next/link';

import Footer from '../components/Footer';
import styles from '../styles/404.module.css';

export default function Custom404() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Seite nicht gefunden - Geis Busfahrplan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>404 - Seite nicht gefunden</h1>
        <p className={styles.description}>
          Gehe{' '}
          <Link href="/">
            <a>zurück</a>
          </Link>
        </p>
      </main>
      <Footer />
    </div>
  );
}
