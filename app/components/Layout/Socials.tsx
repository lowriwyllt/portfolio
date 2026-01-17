import React from "react";
import styles from "./Socials.module.css";
import ButtonAsLink from "../Links/ButtonAsLink";
import SOCIALS from "@/app/constants/socials";
import langType from "@/app/constants/langType";

const Socials = ({ lang }: { lang: langType }) => {
  return (
    <div className={styles.socialsContainer} aria-label="Social media links">
      {SOCIALS.map(({ commonProps, Icon, ...rest }) => (
        <ButtonAsLink
          key={commonProps.href}
          {...commonProps}
          ariaLabel={rest[`${lang}AriaLabel`]}
          variant="primaryOutline"
          className={styles.socialLink}
        >
          <Icon />
        </ButtonAsLink>
      ))}
    </div>
  );
};

export default Socials;
