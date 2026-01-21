import React from "react";
import styles from "./Socials.module.css";
import ButtonAsLink from "../Links/ButtonAsLink";
import SOCIALS from "@/app/constants/socials";
import langType from "@/app/constants/langType";

const Socials = ({
  lang,
  variant = "default",
  buttonStyle,
}: {
  lang: langType;
  variant?: "default" | "sidebar";
  buttonStyle?: string;
}) => {
  return (
    <ul className={styles.socialsContainer} aria-label="Social media links">
      {SOCIALS.map(({ commonProps, Icon, ...rest }) => {
        return (
          <li
            key={commonProps.href}
            className={styles[`${variant}SocialLinkItem`]}
          >
            <ButtonAsLink
              {...commonProps}
              ariaLabel={rest[`${lang}AriaLabel`]}
              variant={
                variant === "default" ? "primaryOutline" : "secondaryOutline"
              }
              className={`${styles[`${variant}SocialLink`]} ${buttonStyle || ""}`}
            >
              <Icon />
              {variant === "default" ? null : rest[`${lang}ButtonLabel`]}
            </ButtonAsLink>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
