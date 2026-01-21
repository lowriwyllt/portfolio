import Image from "next/image";
import styles from "./socials.module.css";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

const SOCIALS = [
  {
    commonProps: {
      href: "https://github.com/lowriwyllt",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    enAriaLabel: "Github for Lowri Roberts",
    cyAriaLabel: "Github i Lowri Roberts",
    cyButtonLabel: "Github",
    enButtonLabel: "Github",
    Icon: () => {
      return (
        <Image
          src="/github-mark.png"
          width={24}
          height={24}
          alt="Github logo"
          className={styles.icon}
          aria-hidden="true"
        />
      );
    },
  },
  {
    commonProps: {
      href: "https://www.linkedin.com/in/lowri-gwenllian-roberts/",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    enAriaLabel: "LinkedIn for Lowri Roberts",
    cyAriaLabel: "LinkedIn i Lowri Roberts",
    cyButtonLabel: "LinkedIn",
    enButtonLabel: "LinkedIn",
    Icon: () => {
      return (
        <Image
          src="/LI-In-Bug.png"
          width={24}
          height={24}
          alt="LinkedIn logo"
          className={styles.icon}
          aria-hidden="true"
        />
      );
    },
  },
  {
    commonProps: {
      href: "mailto:lowri.g.roberts@hotmail.com",
    },
    enAriaLabel: "Email Lowri Roberts",
    cyAriaLabel: "E-bostiwch Lowri Roberts",
    cyButtonLabel: "E-bostiwch fi",
    enButtonLabel: "Email me",
    Icon: () => {
      return <EnvelopeIcon className={styles.icon} aria-hidden="true" />;
    },
  },
];

export default SOCIALS;
