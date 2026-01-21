import PROJECTS from "@/app/constants/projects";
import { merriweather } from "@/app/fonts";
import Image from "next/image";
import styles from "./RecentProjects.module.css";
import langType from "@/app/constants/langType";

export default async function RecentProjects({
  lang = "en",
}: {
  lang?: langType;
}) {
  return (
    <div className={styles.container}>
      <h2 className={`${merriweather.className} ${styles.heading}`}>
        {lang === "cy" ? "Prosiectau Diweddar" : "Recent Projects"}
      </h2>
      <div className={styles.projectsGrid}>
        {PROJECTS.map((project) => {
          return (
            <div
              key={lang === "cy" ? project.enw : project.name}
              className={styles.projectCard}
            >
              <Image
                src={project.mainImg}
                alt={`Main image of ${project.name}`}
                fill
                className={styles.projectImage}
              />
              <div className={styles.overlay}>
                <h3>{lang === "cy" ? project.enw : project.name}</h3>
                <p className={styles.description}>
                  {lang === "cy"
                    ? project.disgrifiadByr
                    : project.shortDescription}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
