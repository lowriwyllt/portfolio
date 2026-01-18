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
}: {
  lang: langType;
  onClick?: () => void;
}) => {
  const pathname = usePathname();

  return (
    <ButtonAsLink
      lang={lang === "cy" ? "en" : "cy"}
      href={getLanguageChangeUrl(lang, pathname)}
      variant="secondaryOutline"
      className={styles.languageToggle}
      onClick={onClick}
    >
      <Image
        src={
          lang === "cy" ? "/flags/english_flag.svg" : "/flags/welsh_flag.svg"
        }
        alt={lang === "cy" ? "English flag" : "Welsh flag"}
        width={32}
        height={32}
      />
      {lang === "cy" ? "Change to English" : "Newid i Gymraeg"}
    </ButtonAsLink>
  );
};

export default LanguageToggle;
