import { merriweather } from "@/app/fonts";
import ExperienceCard from "./ExperienceCard";
import EXPERIENCE from "@/app/constants/experience";
import styles from "./ExperiencePage.module.css";
import Image from "next/image";
import langType from "@/app/constants/langType";

const ExperiencePageComponent = ({ lang = "en" }: { lang?: langType }) => {
  const jobs = EXPERIENCE;

  const sortedJobs = jobs.sort((a, b) => {
    const [monthA, yearA] = a.start_date.split("/");
    const [monthB, yearB] = b.start_date.split("/");
    const dateA = new Date(parseInt(yearA), parseInt(monthA) - 1);
    const dateB = new Date(parseInt(yearB), parseInt(monthB) - 1);
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <div className={styles.experiencePageContainer}>
      <h1 className={merriweather.className}>
        {lang === "en" ? "Experience" : "Profiad"}
      </h1>

      {sortedJobs.map((experience, index) => {
        return (
          <div
            className={`${styles.cardsContainer} ${index % 2 === 0 ? styles.cardsContainerLeft : styles.cardsContainerRight}`}
            key={`${experience.company}+${experience.start_date}`}
          >
            <div
              className={`${index % 2 === 0 ? styles.flexRight : ""} ${styles.date}`}
            >
              <p>
                {experience.start_date} -{" "}
                {experience.end_date === "present"
                  ? lang === "en"
                    ? "present"
                    : "presennol"
                  : experience.end_date}
              </p>
            </div>
            <Image
              src={experience.companyImg}
              alt={
                lang === "en"
                  ? `${experience.company} logo`
                  : `logo ${experience.cwmni}`
              }
              width={50}
              height={50}
              className={styles.companyLogo}
            />
            <ExperienceCard
              lang={lang}
              experience={experience}
              className={`${index % 2 === 0 ? "" : styles.flexRight}`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ExperiencePageComponent;
