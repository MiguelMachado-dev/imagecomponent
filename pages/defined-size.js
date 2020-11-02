import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

import Meta from "../components/Meta";

export default function DefinedSize() {
  return (
    <div className={styles.container}>
      <Meta title="Defined size" />

      <main className={styles.main}>
        <Link href="/">
          <h1 className={styles.title}>
            <a>Back</a>
          </h1>
        </Link>

        <Image width={1280} height={853} src="/photo.jpg" />
        <Image width={1280} height={960} src="/photo-2.jpg" />
        <Image width={1280} height={854} src="/photo-3.jpg" />
      </main>
    </div>
  );
}
