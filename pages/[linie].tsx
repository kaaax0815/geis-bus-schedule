import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import fetch from 'node-fetch';
import ReactTooltip from 'react-tooltip';

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
            href={'#' + props.arrays[0].FROM.replace(/[^A-Za-z0-9\-_]/g, '-')}
            as={params.linie + '#' + props.arrays[0].FROM.replace(/[^A-Za-z0-9\-_]/g, '-')}>
            <a>
              {props.arrays[0].FROM} &rarr; {props.arrays[0].TO}
            </a>
          </Link>
          <br />
          <Link
            href={'#' + props.arrays[1].FROM.replace(/[^A-Za-z0-9\-_]/g, '-')}
            as={params.linie + '#' + props.arrays[1].FROM.replace(/[^A-Za-z0-9\-_]/g, '-')}>
            <a>
              {props.arrays[1].FROM} &rarr; {props.arrays[1].TO}
            </a>
          </Link>
        </h2>
      </main>

      <section
        className={styles.section}
        id={props.arrays[0].FROM.replace(/[^A-Za-z0-9\-_]/g, '-')}>
        <h2 className={styles.description}>
          {props.arrays[0].FROM} &rarr; {props.arrays[0].TO}
        </h2>
        <table className={styles.table}>
          <thead></thead>
          <tbody>
            <tr key={counter++} className={styles.tr}>
              <th key={counter++} className={styles.th}>
                Beschränkungen
              </th>
              {props.arrays[0].INFO.map((info: string) => (
                <th key={counter++} className={styles.th}>
                  <div
                    data-tip={
                      props.global.INFOS.filter((filter: INFO) => filter.id === info)[0].text
                    }
                    className={styles.info}>
                    {info}
                  </div>
                </th>
              ))}
              <ReactTooltip />
            </tr>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td></td>
            </tr>
            {props.arrays[0].array.map((prop: Array) => (
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

      <section
        className={styles.section}
        id={props.arrays[1].FROM.replace(/[^A-Za-z0-9\-_]/g, '-')}>
        <h2 className={styles.description}>
          {props.arrays[1].FROM} &rarr; {props.arrays[1].TO}
        </h2>
        <table className={styles.table}>
          <thead></thead>
          <tbody>
            <tr key={counter++} className={styles.tr}>
              <th key={counter++} className={styles.th}>
                Beschränkungen
              </th>
              {props.arrays[1].INFO.map((info: string) => (
                <th key={counter++} className={styles.th}>
                  <div
                    data-tip={
                      props.global.INFOS.filter((filter: INFO) => filter.id === info)[0].text
                    }
                    className={styles.info}>
                    {info}
                  </div>
                </th>
              ))}
              <ReactTooltip />
            </tr>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td></td>
            </tr>
            {props.arrays[1].array.map((prop: Array) => (
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
  const urls = await fetch('https://api.npoint.io/5853be5c4d0d6999f9d4').then((urls: Json) =>
    urls.json<Url[]>()
  );
  const filtered = urls.filter((url: Url) => url.id.replace(/ /g, '—') === params?.linie);
  const props = await fetch('https://api.npoint.io/' + filtered[0].url).then((props: Json) =>
    props.json()
  );
  return {
    props: {
      props,
      params
    }
  };
};

// Specify all Paths because its SSG
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://api.npoint.io/5853be5c4d0d6999f9d4');
  const json = await res.json();
  const linien = json.map((linie: Url) => linie.id);
  const paths = linien.map((linie: string) => ({ params: { linie: linie.replace(/ /g, '—') } }));
  return {
    paths,
    fallback: false
  };
};

interface Global {
  INFOS: INFO[];
}

interface INFO {
  id: string;
  text: string;
}

interface Arrays {
  FROM: string;
  TO: string;
  INFO: string[];
  array: Array[];
}

interface Array {
  bushaltestelle: string;
  zeiten: string[];
}

interface Props {
  global: Global;
  arrays: Arrays[];
}

interface Param {
  linie: string;
}

interface Linie {
  props: Props;
  params: Param;
}

interface Url {
  id: string;
  url: string;
}

interface Json {
  json<T>(): Promise<T>;
}
