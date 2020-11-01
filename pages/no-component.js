import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function NoComponent() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Não utilizando Image Component</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Link href="/">
          <h1 className={styles.title}>
            <a>Back</a>
          </h1>
        </Link>

        <img src="/photo.jpg" />
        <img src="/photo-2.jpg" />
        <img src="/photo-3.jpg" />
      </main>
    </div>
  );
}
