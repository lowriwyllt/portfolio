import React from "react";
import Image from "next/image";
import Link from "next/link";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import styles from "./Socials.module.css";

const Socials = () => {
  return (
    <div className={styles.socialsContainer}>
      <Link
        href="https://github.com/lowriwyllt"
        aria-label="Github for Lowri Roberts"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialLink}
      >
        <Image
          src="/github-mark.png"
          width={21}
          height={21}
          alt="Github logo"
          className={styles.icon}
        />
      </Link>
      <Link
        href="https://www.linkedin.com/in/lowri-gwenllian-roberts/"
        aria-label="LinkedIn for Lowri Roberts"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialLink}
      >
        <Image
          src="/LI-In-Bug.png"
          width={21}
          height={21}
          alt="LinkedIn logo"
          className={styles.icon}
        />
      </Link>
      <Link
        href="mailto:lowri.g.roberts@hotmail.com"
        aria-label="Email Lowri Roberts"
        className={styles.socialLink}
      >
        <EnvelopeIcon className={styles.icon} />
      </Link>
    </div>
  );
};

export default Socials;
