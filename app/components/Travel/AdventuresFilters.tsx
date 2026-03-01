"use client";

import { ReactNode, useId, useState } from "react";
import langType from "@/app/constants/langType";
import styles from "./AdventuresFilters.module.css";
import Button from "../Buttons/Button";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

type AdventuresFilterProps = {
  lang?: langType;
  countryFilter: string | null;
  children?: ReactNode;
};

const AdventuresFilter = ({
  lang = "en",
  countryFilter,
  children,
}: AdventuresFilterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownId = useId();

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <section className={styles.filtersContainer}>
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
    </section>
  );
};

export default AdventuresFilter;
