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

  return (
    <ButtonAsLink
      lang={lang === "cy" ? "en" : "cy"}
      href={getLanguageChangeUrl(lang, pathname)}
      variant={variant === "default" ? "primaryOutline" : "secondaryOutline"}
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
      {variant === "default"
        ? null
        : lang === "cy"
          ? "Change to English"
          : "Newid i Gymraeg"}
    </ButtonAsLink>
  );
};

export default LanguageToggle;
