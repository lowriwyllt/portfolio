import { Metadata, NextPage } from "next";
import { merriweather } from "../fonts";
import Image from "next/image";
import styles from "./page.module.css";
import ButtonAsLink from "../components/Links/ButtonAsLink";

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
        <ButtonAsLink href="/en/home" className={styles.languageLink}>
          Continue in English
        </ButtonAsLink>

        <ButtonAsLink href="/cy/adra" lang="cy" className={styles.languageLink}>
          Parhau yn Gymraeg
        </ButtonAsLink>
      </div>
    </main>
  );
};

export default LandingPage;
