import { Metadata } from "next";
import Link from "next/link";
import { merriweather, ibm_plex_mono } from "./fonts";
import styles from "./global-not-found.module.css";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Lowri Roberts",
  description: "The page you're looking for doesn't exist.",
};

export const NotFoundContent = () => {
  return (
    <div className={`${styles.container} ${merriweather.className}`}>
      <h1 className={styles.errorCode}>404</h1>
      <h2 className={styles.title}>Page Not Found - Tudalen heb ei Chanfod</h2>
      <p className={styles.description}>
        Sorry, the page you're looking for doesn't exist.
      </p>
      <p className={styles.description}>
        Mae'n ddrwg gen i, nid yw'r dudalen rydych chi'n chwilio amdani yn
        bodoli.
      </p>
      <div className={styles.links}>
        {/* TODO: once the separate home pages are implemented, update these links */}
        <Link href="/" className={`${styles.link} ${ibm_plex_mono.className}`}>
          Return Home
        </Link>
        <Link href="/" className={`${styles.link} ${ibm_plex_mono.className}`}>
          Dychwelyd Adref
        </Link>
      </div>
    </div>
  );
};

export default function NotFound() {
  return (
    <html lang="en">
      <body className={styles.body}>
        <main className={styles.main}>
          <NotFoundContent />
        </main>
      </body>
    </html>
  );
}
