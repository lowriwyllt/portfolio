import ADVENTURES from "@/app/constants/adventures";
import { merriweather } from "@/app/fonts";
import styles from "./RecentAdventures.module.css";
import langType from "@/app/constants/langType";
import Link from "next/dist/client/link";

export default async function RecentAdventures({
  lang = "en",
}: {
  lang?: langType;
}) {
  const adventuresWithImages = ADVENTURES.filter(
    (adventure) => adventure.mainImg && adventure.mainImg[0]
  );

  const recentAdventures = adventuresWithImages.slice(0, 5);

  return (
    <div className={styles.container}>
      <h2 className={`${merriweather.className} ${styles.heading}`}>
        Recent Adventures
      </h2>
      <div className={styles.adventuresGrid}>
        {recentAdventures.map((adventure) => {
          if (!adventure.mainImg?.[0]) {
            return null;
          }
          return (
            <Link
              href={
                lang === "cy"
                  ? `/cy/trafeilio/${adventure.id}`
                  : `/en/travel/${adventure.id}`
              }
              aria-label={adventure.name}
              key={adventure.name}
              className={styles.adventureCard}
              style={{
                backgroundImage: `url(${adventure.mainImg[0]})`,
              }}
            >
              <h3 className={styles.adventureTitle}>
                {lang === "cy" ? adventure.enw : adventure.name}
              </h3>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
