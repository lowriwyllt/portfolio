import { Metadata, NextPage } from "next";
import { merriweather } from "../fonts";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Landing page - Lowri Roberts",
  description:
    "Welcome to Lowri Roberts' portfolio. Full stack web developer specializing in JavaScript, React, and Next.js. Explore my projects and experience.",
};

const LandingPage: NextPage = () => {
  return (
    <main className={styles.main}>
      <h1 className={`${styles.title} ${merriweather.className}`}>
        Welcome - <span lang="cy">Croeso</span>
      </h1>
      <div>
        <Image
          src="/lowri_roberts_working.png"
          alt="Lowri Roberts working at her desk"
          width={250}
          height={250}
          priority
          fetchPriority="high"
        />
      </div>
      <div className={styles.languageLinks}>
        <Link
          href="/en/home"
          aria-label="View portfolio in English"
          className={styles.languageLink}
          lang="en"
        >
          Continue in English
        </Link>
        <Link
          href="/cy/adra"
          aria-label="Gweld portffolio yn Gymraeg"
          className={styles.languageLink}
          lang="cy"
        >
          Parhau yn Gymraeg
        </Link>
      </div>
    </main>
  );
};

export default LandingPage;
