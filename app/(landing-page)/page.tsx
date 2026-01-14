import { Metadata, NextPage } from "next";
import { merriweather } from "../fonts";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Landing page - Lowri Roberts",
  description: "",
};

const LandingPage: NextPage = () => {
  return (
    <main className={styles.main}>
      <h1 className={merriweather.className}>
        Welcome to my portfolio - Croeso i fy mhortfolio
      </h1>
      <Image
        src="/lowri_roberts_working.png"
        alt="Set up of Lowri Roberts work area.  She is wearing headphones while working on a laptop with a second monitor. She has a ipad on side."
        width={250}
        height={250}
        priority
      />
      <div className={styles.languageLinks}>
        <Link
          href="/en/home"
          aria-label={"English Home"}
          className={styles.languageLink}
        >
          English
        </Link>
        <Link
          href="/cy/adra"
          aria-label={"Welsh Home"}
          className={styles.languageLink}
        >
          Cymraeg
        </Link>
      </div>
    </main>
  );
};

export default LandingPage;
