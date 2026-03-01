import langType from "@/app/constants/langType";
import styles from "./TravelPage.module.css";
import Adventures from "./Adventures";
import { Suspense } from "react";

const TravelPageComponent = ({ lang = "en" }: { lang?: langType }) => {
  return (
    <div className={styles.experiencePageContainer}>
      <h1>{lang === "en" ? "Travel" : "Trafeilio"}</h1>
      <Suspense
        fallback={
          <p>
            {lang === "en"
              ? "Loading adventures..."
              : "Llwytho anturiaethau..."}
          </p>
        }
      >
        <Adventures lang={lang} />
      </Suspense>
    </div>
  );
};

export default TravelPageComponent;
