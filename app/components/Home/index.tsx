import { merriweather } from "@/app/fonts";
import Image from "next/image";
import styles from "./home.module.css";
import TechStack from "./TechStack";
import RecentProjects from "./RecentProjects";
import RecentAdventures from "./RecentAdventures";
import ContactMe from "./ContactMe";

const HomePageComponent = ({ language = "english" }: { language?: string }) => {
  return (
    <>
      <div className={styles.heroSection}>
        <div className={styles.imageContainer}>
          <Image
            src="/lowri_roberts_working.png"
            alt={
              language === "welsh"
                ? "Lowri Roberts yn gweithio wrth ei desg"
                : "Lowri Roberts working at her desk"
            }
            fill
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={merriweather.className}>Lowri Roberts</h1>
          <p>
            {language === "welsh"
              ? "Rwy'n ddatblygwr gwe stac llawn, gyda ffocws ar JavaScript. Rwy'n ymroddedig i ddarparu gwefannau slic a dynamig"
              : "I'm a full stack web developer, with a focus on JavaScript. I'm dedicated to delivering sleek and dynamic websites."}
          </p>
        </div>
      </div>
      <div className={styles.techStackSection}>
        <TechStack language={language} />
        <RecentProjects language={language} />
        <RecentAdventures lang={language === "welsh" ? "cy" : "en"} />
        <ContactMe lang={language === "welsh" ? "cy" : "en"} />
      </div>
    </>
  );
};

export default HomePageComponent;
