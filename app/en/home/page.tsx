import TechStack from "@/app/components/Home/TechStack";
import { merriweather } from "@/app/fonts";
import Image from "next/image";
import styles from "./page.module.css";
import RecentProjects from "@/app/components/Home/RecentProjects";
import RecentAdventures from "@/app/components/Home/RecentAdventures";

const HomePage = () => {
  return (
    <>
      <div className={styles.heroSection}>
        <div className={styles.imageContainer}>
          <Image
            src="/lowri_roberts_working.png"
            alt="Set up of Lowri Roberts work area.  She is wearing headphones while working on a laptop with a second monitor. She has a ipad on side."
            fill
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={merriweather.className}>Lowri Roberts</h1>
          <p>
            I&apos;m a full stack web developer, with a focus on JavaScript.
            I&apos;m dedicated to delivering sleek and dynamic websites.
          </p>
        </div>
      </div>
      <div className={styles.techStackSection}>
        <TechStack />
        <RecentProjects />
        <RecentAdventures />
      </div>
    </>
  );
};

export default HomePage;
