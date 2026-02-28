"use client";

import langType from "@/app/constants/langType";
import ButtonAsLink from "../Links/ButtonAsLink";
import getLanguageChangeUrl from "@/app/helpers/getLanguageChangeUrl";
import { usePathname } from "next/navigation";
import styles from "./LanguageToggle.module.css";
import Image from "next/image";

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
      <div className={`${styles.stackedToggle}  ${style || ""}`}>
        <ButtonAsLink
          lang={lang === "cy" ? "en" : "cy"}
          href={getLanguageChangeUrl(lang, pathname)}
          variant="primaryOutline"
          className={`${styles.languageToggle} ${styles.languageWidget} ${styles.topButton} `}
          ariaLabel={lang === "cy" ? "Change to English" : "Newid i Gymraeg"}
          onClick={handleClick}
        >
          <Image
            src={
              lang === "cy"
                ? "/flags/english_flag.svg"
                : "/flags/welsh_flag.svg"
            }
            alt={lang === "cy" ? "English flag" : "Welsh flag"}
            width={24}
            height={24}
          />
        </ButtonAsLink>
        <ButtonAsLink
          lang={lang === "cy" ? "cy" : "en"}
          href={pathname}
          variant="primaryOutline"
          className={`${styles.languageToggle} ${styles.languageWidget} ${styles.bottomButton} `}
          ariaLabel={lang === "cy" ? "Cymraeg (current)" : "English (current)"}
          tabIndex={-1}
          aria-hidden="true"
        >
          <Image
            src={
              lang === "cy"
                ? "/flags/welsh_flag.svg"
                : "/flags/english_flag.svg"
            }
            alt={lang === "cy" ? "Welsh flag" : "English flag"}
            width={24}
            height={24}
          />
        </ButtonAsLink>
      </div>
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
