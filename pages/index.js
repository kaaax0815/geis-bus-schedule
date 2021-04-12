import Head from 'next/head';
import Link from 'next/link';

import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Geis Busfahrplan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="http://www.geis-reisen.de" target="_blank" rel="noopener noreferrer">
            Geis
          </a>{' '}
          Busfahrplan
        </h1>
        <Link href="/8304">
          <a className={styles.description}>8304</a>
        </Link>
      </main>
      <Footer />
    </div>
  );
}
