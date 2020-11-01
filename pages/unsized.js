import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Unsized() {
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

        <Image unsized src="/photo.jpg" />
        <Image unsized src="/photo-2.jpg" />
        <Image unsized src="/photo-3.jpg" />
      </main>
    </div>
  );
}
