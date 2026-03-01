import langType from "@/app/constants/langType";
import styles from "./TravelPage.module.css";
import Adventures from "./Adventures";

const TravelPageComponent = ({ lang = "en" }: { lang?: langType }) => {
  return (
    <div className={styles.experiencePageContainer}>
      <h1>{lang === "en" ? "Travel" : "Trafeilio"}</h1>
      <Adventures lang={lang} />
    </div>
  );
};

export default TravelPageComponent;
