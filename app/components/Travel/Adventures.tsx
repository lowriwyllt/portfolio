"use client";

import langType from "@/app/constants/langType";
import { merriweather } from "@/app/fonts";
import styles from "./Adventures.module.css";
import ADVENTURES from "@/app/constants/adventures";
import Image from "next/image";
import ButtonAsLink from "../Links/ButtonAsLink";
import { useSearchParams } from "next/navigation";
import AdventuresFilter from "./AdventuresFilters";

const Adventures = ({ lang = "en" }: { lang?: langType }) => {
  const searchParams = useSearchParams();
  const countryFilter = searchParams.get(lang === "en" ? "country" : "gwlad");

  const filteredAdventures = ADVENTURES.filter((adventure) => {
    if (
      countryFilter &&
      !Object.values(
        lang === "en" ? adventure.areas : adventure.ardaloedd
      ).some((countries) => Object.keys(countries).includes(countryFilter))
    ) {
      return false;
    }
    return true;
  });

  return (
    <div className={styles.adventuresContainer}>
      <AdventuresFilter lang={lang} countryFilter={countryFilter} />
      <div className={styles.travelGrid}>
        {filteredAdventures.length === 0 ? (
          <div className={styles.noAdventures}>
            <p>
              {lang === "en"
                ? "No adventures found for this filter."
                : "Dim anturiaethau wedi'u canfod ar gyfer yr hidlydd hwn."}
            </p>
            {countryFilter && (
              <p className={styles.noAdventuresHint}>
                {lang === "en"
                  ? "Try selecting a different filter."
                  : "Ceisiwch ddewis hidlydd gwahanol."}
              </p>
            )}
          </div>
        ) : (
          filteredAdventures.map((adventure) => {
            const title = lang === "cy" ? adventure.enw : adventure.name;
            const companions = adventure.with.join(", ");

            return (
              <article
                key={`${adventure.name}-${adventure.year}`}
                className={styles.travelCard}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={adventure.mainImg[0]}
                    alt={title}
                    className={styles.image}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className={styles.cardContent}>
                  <h2
                    className={`${merriweather.className} ${styles.cardTitle}`}
                  >
                    {title} - {adventure.year}
                  </h2>
                  <div className={styles.metaRow}>
                    {Object.entries(
                      lang === "en" ? adventure.areas : adventure.ardaloedd
                    ).map(([continent, countries]) =>
                      Object.keys(countries).map((country) => (
                        <ButtonAsLink
                          key={`${continent}-${country}`}
                          href={
                            lang === "en"
                              ? `?country=${country}`
                              : `?gwlad=${country}`
                          }
                          variant="primary"
                          aria-label={`${country} filter`}
                          className={styles.metaBadge}
                        >
                          {country}
                        </ButtonAsLink>
                      ))
                    )}
                  </div>
                  <p className={styles.descriptionText}>
                    {lang === "en"
                      ? adventure.shortDescription
                      : adventure.disgrifiadByr}
                  </p>
                  <p className={styles.metaText}>
                    {lang === "en" ? "With" : "Gyda"}: {companions}
                  </p>
                </div>
              </article>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Adventures;
