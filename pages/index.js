import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js 10!</a>
        </h1>

        <p className={styles.description}>
          This project on{" "}
          <h1 className={styles.title}>
            <a href="https://github.com/MiguelMachado-dev/imagecomponent">
              Github!
            </a>
          </h1>
        </p>

        <div className={styles.grid}>
          <Link href="/no-component">
            <a className={styles.card}>
              <h3>No Image component &rarr;</h3>
              <p>Not using the new Image component.</p>
            </a>
          </Link>

          <Link href="/unsized">
            <a className={styles.card}>
              <h3>Unsized &rarr;</h3>
              <p>
                Using unsized parameter. Optimized and converted image! Layout
                shift may occur.
              </p>
            </a>
          </Link>

          <Link href="/defined-size">
            <a className={styles.card}>
              <h3>Defined Size &rarr;</h3>
              <p>
                Defined image size, preventing layout shift. Optimized and
                converted image!
              </p>
            </a>
          </Link>

          <Link href="/low-quality">
            <a className={styles.card}>
              <h3>Low quality &rarr;</h3>
              <p>Low quality image, full optimization.</p>
            </a>
          </Link>

          <Link href="/external">
            <a className={styles.card}>
              <h3>External &rarr;</h3>
              <p>Loading and optimizing external images.</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
