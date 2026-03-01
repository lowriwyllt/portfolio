"use client";

import { useId, useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import langType from "@/app/constants/langType";
import styles from "./AdventuresFilters.module.css";
import Button from "../Buttons/Button";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import ADVENTURES from "@/app/constants/adventures";

type AdventuresFilterProps = {
  lang?: langType;
  countryFilters: string[];
};

const AdventuresFilter = ({
  lang = "en",
  countryFilters,
}: AdventuresFilterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownId = useId();
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const filterControlRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        filterControlRef.current &&
        !filterControlRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

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

    if (countryFilters.includes(country)) {
      // Remove the country from filter
      params.delete(queryParam);
      const remainingCountries = countryFilters.filter((c) => c !== country);
      remainingCountries.forEach((c) => params.append(queryParam, c));
    } else {
      // Add the country to filter
      params.append(queryParam, country);
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
      <div className={styles.filterControl}>
        <div className={styles.filterControlInner} ref={filterControlRef}>
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
            <div
              id={dropdownId}
              className={styles.popover}
              role="dialog"
              aria-modal="true"
              aria-labelledby="countryFilterPopover"
            >
              <div className={styles.popoverHeader}>
                <h3 className={styles.popoverTitle} id="countryFilterPopover">
                  {lang === "en" ? "Filter by Country" : "Hidlo fesul Gwlad"}
                </h3>
                {countryFilters.length > 0 && (
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
                      checked={countryFilters.includes(country)}
                      onChange={() => handleCountryToggle(country)}
                      className={styles.checkbox}
                    />
                    <span className={styles.checkboxText}>{country}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AdventuresFilter;
