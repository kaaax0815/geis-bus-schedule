import Head from 'next/head';
import Link from 'next/link';

import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Home({ props }) {
  let counter = 0;
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
        <div className={styles.grid}>
          {props.map((prop) => (
            <Link key={counter++} href={'/' + prop.id}>
              <a key={counter++} className={styles.card}>
                <p key={counter++}>{prop.id}</p>
              </a>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

// Get List of Linien
export async function getStaticProps() {
  const props = await fetch('https://api.npoint.io/5853be5c4d0d6999f9d4').then((urls) =>
    urls.json()
  );
  return {
    props: {
      props
    }
  };
}
