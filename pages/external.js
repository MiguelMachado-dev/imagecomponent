import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

export default function External() {
  return (
    <div className={styles.container}>
      <Head>
        <title>External</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Link href="/">
          <h1 className={styles.title}>
            <a>Back</a>
          </h1>
        </Link>

        <Image
          width={1280}
          height={853}
          src="https://images.unsplash.com/photo-1604153352994-8b68d406ad43"
        />
        <Image
          width={1280}
          height={960}
          src="https://images.unsplash.com/photo-1604210722789-29c044c1339d"
        />
        <Image
          width={1280}
          height={854}
          src="https://images.unsplash.com/photo-1478260882997-c7958d3e6a3b"
        />
      </main>
    </div>
  );
}
