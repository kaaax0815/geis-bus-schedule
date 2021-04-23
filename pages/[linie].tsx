import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import fetch from 'node-fetch';

import Footer from '../components/Footer';
import styles from '../styles/Linien.module.css';

export default function Linie({ props, params }: Linie) {
  let counter = 0;
  return (
    <div className={styles.container}>
      <Head>
        <title>{params.linie.replace(/—/g, ' ')} - Busfahrplan - Kurt Geis GmbH</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Linie: {params.linie.replace(/—/g, ' ')}</h1>
        <h2 className={styles.description}>
          Richtungen:
          <br />
          <Link
            href={'#' + props[0].FROM.replace(/[^A-Za-z0-9\-_]/g, '-')}
            as={params.linie + '#' + props[0].FROM.replace(/[^A-Za-z0-9\-_]/g, '-')}>
            <a>
              {props[0].FROM} &rarr; {props[0].TO}
            </a>
          </Link>
          <br />
          <Link
            href={'#' + props[1].FROM.replace(/[^A-Za-z0-9\-_]/g, '-')}
            as={params.linie + '#' + props[1].FROM.replace(/[^A-Za-z0-9\-_]/g, '-')}>
            <a>
              {props[1].FROM} &rarr; {props[1].TO}
            </a>
          </Link>
        </h2>
      </main>

      <section className={styles.section} id={props[0].FROM.replace(/[^A-Za-z0-9\-_]/g, '-')}>
        <h2 className={styles.description}>
          {props[0].FROM} &rarr; {props[0].TO}
        </h2>
        <table className={styles.table}>
          <thead></thead>
          <tbody>
            {props[0].array.map((prop: Prop) => (
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

      <br />

      <section className={styles.section} id={props[1].FROM.replace(/[^A-Za-z0-9\-_]/g, '-')}>
        <h2 className={styles.description}>
          {props[1].FROM} &rarr; {props[1].TO}
        </h2>
        <table className={styles.table}>
          <thead></thead>
          <tbody>
            {props[1].array.map((prop: Prop) => (
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

      <section className={styles.section}>
        <a
          href={
            'http://www.lkrhoengrabfeld.rhoen-saale.net/fileServer/LKRG/1000/10118/' +
            params.linie +
            '.pdf'
          }>
          PDF
        </a>
      </section>
      <Footer />
    </div>
  );
}

// Get Json based on Path
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const urls = await fetch('https://api.npoint.io/5853be5c4d0d6999f9d4').then((urls: any) =>
    urls.json()
  );
  const filtered = urls.filter((url: Url) => url.id.replace(/ /g, '—') === params?.linie);
  const props = await fetch('https://api.npoint.io/' + filtered[0].url).then((props:any) =>
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
export const getStaticPaths : GetStaticPaths = async () => {
  const res = await fetch('https://api.npoint.io/5853be5c4d0d6999f9d4');
  const json = await res.json();
  const linien = json.map((linie:Url) => linie.id);
  const paths = linien.map((linie:string) => ({ params: { linie: linie.replace(/ /g, '—') } }));
  return {
    paths,
    fallback: false
  };
}

interface Prop {
  bushaltestelle: string;
  zeiten: string[];
  infos: string[];
}

interface Props {
  TO: string;
  FROM: string;
  array: Array<Prop>;
}

interface Param {
  linie: string;
}

interface Linie {
  props: Array<Props>;
  params: Param;
}

interface Url {
  id: string;
  url: string;
}
