import Head from 'next/head'
import styles from '../styles/Linien.module.css'

export default function Home({ prop, params }) {
  const props = prop;
  return (
    <div className={styles.container}>
      <Head>
        <title>KÖN -{'>'} NES - {params.linie} - Geis Busfahrplan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          KÖN -{'>'} NES - {params.linie}
        </h1>
      </main>

      <properties className={styles.properties}>
        <p>{
        JSON.stringify(params)
        }</p>
      </properties>

      <pdf className={styles.properties}>
        <p>{
        <a href={"http://www.lkrhoengrabfeld.rhoen-saale.net/fileServer/LKRG/1000/10118/" + params.linie + ".pdf"}>PDF</a>
        }</p>
      </pdf>

      <footer className={styles.footer}>
        <a
          href="https://kaaaxcreators.de"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="https://kaaaxcreators.de/img/sizes/favicon.svg" alt="kaaaxcreators Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

// Get Json based on Path
export async function getStaticProps({ params }) {
  const res = await fetch('https://api.jsonbin.io/b/6070db2a181177735ef55603')
  const prop = await res.json()
  return {
    props: {
      prop,
      params,
    },
  }
}
// Specify all Paths because its SSG
export async function getStaticPaths() {
  const res = await fetch('https://api.jsonbin.io/b/6070db2a181177735ef55603')
  const lol = await res.json()
  return {
    paths: [
      { params: { linie: '*' } },
      { params: { linie: '8253' } },
    ],
    fallback: false,
  }
}