import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

import Meta from "../components/Meta";

export default function LowQuality() {
  return (
    <div className={styles.container}>
      <Meta title="Low Quality" />

      <main className={styles.main}>
        <Link href="/">
          <h1 className={styles.title}>
            <a>Back</a>
          </h1>
        </Link>

        <Image width={1280} height={853} quality={1} src="/photo.jpg" />
        <Image width={1280} height={960} quality={1} src="/photo-2.jpg" />
        <Image width={1280} height={854} quality={1} src="/photo-3.jpg" />
      </main>
    </div>
  );
}
