"use client";

import { useId, useState } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import langType from "@/app/constants/langType";
import styles from "./AdventuresFilters.module.css";
import Button from "../Buttons/Button";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import ADVENTURES from "@/app/constants/adventures";

type AdventuresFilterProps = {
  lang?: langType;
  countryFilter: string | null;
};

const AdventuresFilter = ({
  lang = "en",
  countryFilter,
}: AdventuresFilterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownId = useId();
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const toggleOpen = () => setIsOpen((prev) => !prev);

  const queryParam = lang === "en" ? "country" : "gwlad";

  // Extract all unique countries from adventures
  const allCountries = Array.from(
    new Set(
      ADVENTURES.flatMap((adventure) =>
        Object.values(
          lang === "en" ? adventure.areas : adventure.ardaloedd
        ).flatMap((continent) => Object.keys(continent))
      )
    )
  ).sort();

  const handleCountryToggle = (country: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (countryFilter === country) {
      // If clicking the same country, remove the filter
      params.delete(queryParam);
    } else {
      // Set the new country filter
      params.set(queryParam, country);
    }

    const newUrl = params.toString() ? `?${params.toString()}` : pathname || "";
    router.push(newUrl);
  };

  const clearAllFilters = () => {
    router.push(pathname || "");
  };

  return (
    <section className={styles.filtersContainer}>
      <h2>{lang === "en" ? "Filter Adventures" : "Hidlo Anturiaethau"}</h2>
      <Button
        variant="primaryOutline"
        className={styles.filtersToggle}
        onClick={toggleOpen}
        aria-expanded={isOpen}
        aria-controls={dropdownId}
        ariaLabel={lang === "en" ? "Country filter" : "Hidlydd Gwlad"}
      >
        {lang === "en" ? "Countries" : "Gwledydd"}
        <ChevronDownIcon
          className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}
          aria-hidden="true"
        />
      </Button>

      {isOpen && (
        <div id={dropdownId} className={styles.popover}>
          <div className={styles.popoverHeader}>
            <h3 className={styles.popoverTitle}>
              {lang === "en" ? "Filter by Country" : "Hidlo fesul Gwlad"}
            </h3>
            {countryFilter && (
              <Button
                variant="primarySubtle"
                onClick={clearAllFilters}
                ariaLabel={
                  lang === "en"
                    ? "Clear country filter"
                    : "Clirio hidlydd gwlad"
                }
              >
                {lang === "en" ? "Clear" : "Clirio"}
              </Button>
            )}
          </div>
          <div className={styles.checkboxList}>
            {allCountries.map((country) => (
              <label key={country} className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={countryFilter === country}
                  onChange={() => handleCountryToggle(country)}
                  className={styles.checkbox}
                />
                <span className={styles.checkboxText}>{country}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default AdventuresFilter;
