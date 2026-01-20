"use client";

import { merriweather } from "@/app/fonts";
import ExperienceCard from "./ExperienceCard";
import EXPERIENCE from "@/app/constants/experience";
import styles from "./ExperiencePage.module.css";
import Image from "next/image";
import langType from "@/app/constants/langType";
import { motion } from "motion/react";
import useIsMobile from "@/app/helpers/hooks/useIsMobile";

const ExperiencePageComponent = ({ lang = "en" }: { lang?: langType }) => {
  const jobs = EXPERIENCE;

  const isMobile = useIsMobile();
  const isClient = typeof window !== "undefined";

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
        const animationX = isClient
          ? isMobile
            ? -100
            : index % 2 === 0
              ? -100
              : 100
          : 0;

        return (
          <motion.div
            className={`${styles.cardsContainer} ${index % 2 === 0 ? styles.cardsContainerLeft : styles.cardsContainerRight}`}
            key={`${experience.company}+${experience.start_date}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: {},
            }}
          >
            <motion.div
              className={`${index % 2 === 0 ? styles.flexRight : ""} ${styles.date}`}
              variants={{
                hidden: { x: index % 2 === 0 ? 100 : -100, opacity: 0 },
                visible: {
                  x: 0,
                  opacity: 1,
                  transition: { duration: 0.5, ease: "easeIn" },
                },
              }}
            >
              <p>
                {experience.start_date} -{" "}
                {experience.end_date === "present"
                  ? lang === "en"
                    ? "present"
                    : "presennol"
                  : experience.end_date}
              </p>
            </motion.div>
            <motion.div
              className={styles.logoContainer}
              variants={{
                hidden: { scale: 0 },
                visible: {
                  scale: 1,
                  transition: {
                    duration: 0.5,
                    ease: "easeIn",
                  },
                },
              }}
            >
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
            </motion.div>
            <motion.div
              className={`${index % 2 === 0 ? "" : styles.flexRight}`}
              variants={{
                hidden: {
                  x: animationX,
                  opacity: 0,
                },
                visible: {
                  x: 0,
                  opacity: 1,
                  transition: { duration: 0.5, ease: "easeIn" },
                },
              }}
            >
              <ExperienceCard lang={lang} experience={experience} />
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ExperiencePageComponent;
