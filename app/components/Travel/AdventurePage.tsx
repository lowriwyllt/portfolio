import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { merriweather } from "@/app/fonts";
import ADVENTURES from "@/app/constants/adventures";
import langType from "@/app/constants/langType";
import styles from "./AdventurePage.module.css";

const AdventurePage = ({
  id,
  lang = "en",
}: {
  id: string;
  lang?: langType;
}) => {
  const adventure = ADVENTURES.find((item) => item.id === Number(id));

  if (!adventure) {
    notFound();
  }

  const isWelsh = lang === "cy";
  const title = isWelsh ? adventure.enw : adventure.name;
  const description = isWelsh
    ? adventure.disgrifiadByr
    : adventure.shortDescription;
  const areas = isWelsh ? adventure.ardaloedd : adventure.areas;
  const backHref = isWelsh ? "/cy/trafeilio" : "/en/travel";

  const lengthInDays =
    "start" in adventure.time && "end" in adventure.time
      ? (Date.parse(adventure.time.end) - Date.parse(adventure.time.start)) /
          86_400_000 +
        1
      : undefined;

  const year =
    "year" in adventure.time
      ? adventure.time.year
      : adventure.time.start?.split("-")[0];

  return (
    <article className={styles.page}>
      <div className={styles.content}>
        <header className={styles.header}>
          <h1 className={`${merriweather.className} ${styles.title}`}>
            {title} - {year}
          </h1>
          <p className={styles.description}>{description}</p>
        </header>

        {adventure.mainImg?.[0] && (
          <div className={styles.imageFrame}>
            <Image
              src={adventure.mainImg[0]}
              alt={title}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 1200px"
              className={styles.image}
            />
          </div>
        )}

        <section
          className={styles.details}
          aria-label={isWelsh ? "Manylion" : "Trip details"}
        >
          <div className={styles.detailItem}>
            <h2>{isWelsh ? "Hyd" : "Duration"}</h2>
            <p>
              {lengthInDays
                ? `${lengthInDays} ${isWelsh ? "diwrnod" : "days"}`
                : "-"}
            </p>
          </div>
          {adventure.with.length > 0 && (
            <div className={styles.detailItem}>
              <h2>{isWelsh ? "Gyda" : "Travelling with"}</h2>
              <p>{adventure.with.join(", ")}</p>
            </div>
          )}
        </section>

        <section className={styles.places}>
          <h2 className={`${merriweather.className} ${styles.sectionTitle}`}>
            {isWelsh ? "Llefydd" : "Places visited"}
          </h2>
          <div className={styles.areaList}>
            {Object.entries(areas).map(([continent, countries]) => (
              <section className={styles.continent} key={continent}>
                <h3>{continent}</h3>
                {Object.entries(countries).map(([country, cities]) => {
                  const visitedCities = cities.filter((city) => city !== "??");

                  return (
                    <div className={styles.country} key={country}>
                      <h4>{country}</h4>
                      {visitedCities.length > 0 && (
                        <p>{visitedCities.join(" · ")}</p>
                      )}
                    </div>
                  );
                })}
              </section>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
};

export default AdventurePage;
