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
      <h2 className={styles.title}>
        Page Not Found - <span lang="cy">Tudalen heb ei Chanfod</span>
      </h2>
      <p className={styles.description}>
        Sorry, the page you&rsquo;re looking for doesn&rsquo;t exist.
      </p>
      <p className={styles.description} lang="cy">
        Mae&rsquo;n ddrwg gen i, nid yw&rsquo;r dudalen rydych chi&rsquo;n
        chwilio amdani yn bodoli.
      </p>
      <div className={styles.links}>
        {/* TODO: once the separate home pages are implemented, update these links */}
        <Link
          href="/"
          className={`${styles.link} ${ibm_plex_mono.className}`}
          aria-label="Return to english home page"
        >
          Return Home
        </Link>
        <Link
          href="/"
          aria-label="Return to welsh home page"
          className={`${styles.link} ${ibm_plex_mono.className}`}
          lang="cy"
        >
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
