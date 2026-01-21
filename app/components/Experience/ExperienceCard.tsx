import { ExperienceItem } from "@/app/constants/experience";
import langType from "@/app/constants/langType";
import styles from "./ExperienceCard.module.css";

const ExperienceCard = ({
  experience,
  lang,
  className,
}: {
  experience: ExperienceItem;
  lang: langType;
  className?: string;
}) => {
  return (
    <div className={`${styles.card} ${className || ""}`}>
      <h2 className={styles.title}>
        {lang === "en" ? experience.role : experience.rol}
      </h2>
      <p className={styles.company}>
        {lang === "en" ? experience.company : experience.cwmni}
      </p>
      <p>
        {lang === "en" ? experience.shortDescription : experience.disgrifiadByr}
      </p>
      <p className={styles.dates}>
        {experience.start_date} - {experience.end_date}
      </p>
    </div>
  );
};

export default ExperienceCard;
