import Head from 'next/head';
import Link from 'next/link';

import Footer from '../components/Footer';
import styles from '../styles/Linien.module.css';

export default function Linie({ props, params }) {
  let counter = 0;
  return (
    <div className={styles.container}>
      <Head>
        <title>{params.linie} - Geis Busfahrplan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Linie: {params.linie}</h1>
        <h2 className={styles.description}>
          Richtungen:
          <br />
          <Link href="#first" as={params.linie + '#first'}>
            <a>
              {props[0].FROM} &rarr; {props[0].TO}
            </a>
          </Link>
          <br />
          <Link href="#second" as={params.linie + '#second'}>
            <a>
              {props[1].FROM} &rarr; {props[1].TO}
            </a>
          </Link>
        </h2>
      </main>

      <section id="first">
        <h2 className={styles.description}>
          {props[0].FROM} &rarr; {props[0].TO}
        </h2>
        <div className={styles.div_container}>
          <table className={styles.table}>
            <thead></thead>
            <tbody>
              {props[0].array.map((prop) => (
                <tr key={counter++} className={styles.tr}>
                  <th key={counter++} className={styles.th}>
                    {prop.bushaltestelle}
                  </th>
                  {prop.zeiten.map((zeit) =>
                    zeit === 'NULL' ? (
                      <th key={counter++} className={styles.th}></th>
                    ) : (
                      <th key={counter++} className={styles.th}>
                        {zeit}
                      </th>
                    )
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <br />
      <section id="second">
        <h2 className={styles.description}>
          {props[1].FROM} &rarr; {props[1].TO}
        </h2>
        <table className={styles.table}>
          <thead></thead>
          <tbody>
            {props[1].array.map((prop) => (
              <tr key={counter++} className={styles.tr}>
                <th key={counter++} className={styles.th}>
                  {prop.bushaltestelle}
                </th>
                {prop.zeiten.map((zeit) =>
                  zeit === 'NULL' ? (
                    <th key={counter++} className={styles.th}></th>
                  ) : (
                    <th key={counter++} className={styles.th}>
                      {zeit}
                    </th>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className={styles.properties}>
        <p>
          {
            <a
              href={
                'http://www.lkrhoengrabfeld.rhoen-saale.net/fileServer/LKRG/1000/10118/' +
                params.linie +
                '.pdf'
              }>
              PDF
            </a>
          }
        </p>
      </section>
      <Footer />
    </div>
  );
}

// Get Json based on Path
export async function getStaticProps({ params }) {
  const urls = await fetch('https://api.npoint.io/5853be5c4d0d6999f9d4').then((urls) =>
    urls.json()
  );
  const filtered = urls.filter((url) => url.id === params.linie);
  const props = await fetch('https://api.npoint.io/' + filtered[0].url).then((props) =>
    props.json()
  );
  return {
    props: {
      props,
      params
    }
  };
}
// Specify all Paths because its SSG
export async function getStaticPaths() {
  const res = await fetch('https://api.npoint.io/5853be5c4d0d6999f9d4');
  const json = await res.json();
  const linien = json.map((linie) => linie.id);
  const paths = linien.map((linie) => ({ params: { linie: linie.toString() } }));
  return {
    paths,
    fallback: false
  };
}
