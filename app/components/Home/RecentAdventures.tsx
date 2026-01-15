import ADVENTURES from "@/app/constants/adventures";
import { merriweather } from "@/app/fonts";
import styles from "./RecentAdventures.module.css";

export default async function RecentAdventures({
  language = "english",
}: {
  language?: string;
}) {
  return (
    <div className={styles.container}>
      <h2 className={`${merriweather.className} ${styles.heading}`}>
        Recent Adventures
      </h2>
      <div className={styles.adventuresGrid}>
        {ADVENTURES.map((adventure) => {
          return (
            <div
              aria-label={adventure.name}
              key={adventure.name}
              className={styles.adventureCard}
              style={{
                backgroundImage: `url(${adventure.mainImg[1]})`,
              }}
            >
              <h3 className={styles.adventureTitle}>
                {language === "welsh" ? adventure.enw : adventure.name}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
