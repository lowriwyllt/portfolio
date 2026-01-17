import { merriweather } from "@/app/fonts";
import TECH_STACK from "../../constants/myTechStack";
import styles from "./TechStack.module.css";

export default function TechStack({ lang = "en" }: { lang?: string }) {
  return (
    <div className={styles.container}>
      <h2 className={`${styles.heading} ${merriweather.className}`}>
        {lang === "cy" ? "Stac Techengol" : "Tech Stack"}
      </h2>
      <div className={styles.techGrid}>
        {TECH_STACK.map((tech) => {
          return (
            <div key={tech.label} className={styles.techItem}>
              <svg
                viewBox="0 0 128 128"
                role="img"
                aria-label={`${tech.label} Icon`}
                className={styles.icon}
              >
                {tech.icon}
              </svg>
              <p className={styles.label}>{tech.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
