"use client";

import langType from "@/app/constants/langType";
import Link from "next/link";
import ButtonAsLink from "../Links/ButtonAsLink";
import getLanguageChangeUrl from "@/app/helpers/getLanguageChangeUrl";
import { usePathname } from "next/navigation";
import styles from "./LanguageToggle.module.css";
import Image from "next/image";
import Button from "../Buttons/Button";

const LanguageToggle = ({
  lang,
  onClick,
  variant = "default",
  style,
}: {
  lang: langType;
  onClick?: () => void;
  variant?: "default" | "sidebar";
  style?: string;
}) => {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  const handleClick = () => {
    onClick?.();
  };

  if (variant === "default") {
    return (
      <Link
        href={getLanguageChangeUrl(lang, pathname)}
        onClick={handleClick}
        lang={lang === "cy" ? "en" : "cy"}
        aria-label={lang === "cy" ? "Change to English" : "Newid i Gymraeg"}
        className={`${styles.stackedToggle}  ${style || ""}`}
      >
        <Button
          as="div"
          variant="primaryOutline"
          tabIndex={-1}
          aria-hidden="true"
          className={`${styles.languageToggle} ${styles.languageWidget}  ${lang === "cy" ? styles.topButton : styles.bottomButton}`}
        >
          <Image
            src={"/flags/english_flag.svg"}
            alt={"English flag"}
            width={24}
            height={24}
          />
        </Button>
        <Button
          as="div"
          variant="primaryOutline"
          tabIndex={-1}
          aria-hidden="true"
          className={`${styles.languageToggle} ${styles.languageWidget}  ${lang === "en" ? styles.topButton : styles.bottomButton}`}
        >
          <Image
            src={"/flags/welsh_flag.svg"}
            alt={"Fflag Cymraeg"}
            width={24}
            height={24}
          />
        </Button>
      </Link>
    );
  }

  return (
    <ButtonAsLink
      lang={lang === "cy" ? "en" : "cy"}
      href={getLanguageChangeUrl(lang, pathname)}
      variant="secondaryOutline"
      className={`${styles.languageToggle} ${style || ""}`}
      ariaLabel={lang === "cy" ? "Change to English" : "Newid i Gymraeg"}
      onClick={onClick}
    >
      <Image
        src={
          lang === "cy" ? "/flags/english_flag.svg" : "/flags/welsh_flag.svg"
        }
        alt={lang === "cy" ? "English flag" : "Welsh flag"}
        width={24}
        height={24}
      />
      {lang === "cy" ? "Change to English" : "Newid i Gymraeg"}
    </ButtonAsLink>
  );
};

export default LanguageToggle;
