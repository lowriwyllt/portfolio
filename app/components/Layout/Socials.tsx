import React from "react";
import styles from "./Socials.module.css";
import ButtonAsLink from "../Links/ButtonAsLink";
import SOCIALS from "@/app/constants/socials";
import langType from "@/app/constants/langType";

const Socials = ({
  lang,
  variant = "default",
}: {
  lang: langType;
  variant?: "default" | "sidebar";
}) => {
  return (
    <ul
      className={`${styles.socialsContainer} ${styles[`${variant}SocialsContainer`]}`}
      aria-label="Social media links"
    >
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
              className={`${styles.socialLink} ${styles[`${variant}SocialLink`]}`}
            >
              <Icon />
              {variant === "default" ? null : (
                <span>{rest[`${lang}ButtonLabel`]}</span>
              )}
            </ButtonAsLink>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
