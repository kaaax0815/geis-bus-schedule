import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Geis Busfahrplan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a
            href="http://www.geis-reisen.de"
            target="_blank"
            rel="noopener noreferrer"
          >
            Geis</a>
          {' '}Busfahrplan
        </h1>
      </main>

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