import Head from 'next/head'
import styles from '../styles/404.module.css'

export default function Custom404() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Seite nicht gefunden - Geis Busfahrplan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          404 - Seite nicht gefunden
        </h1>
        <p className={styles.description}>
          Gehe <a href="/">zurück</a>
        </p>
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