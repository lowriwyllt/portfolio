import Link from "next/link";
import { ReactNode } from "react";
import styles from "./ButtonAsLink.module.css";

interface ButtonAsLinkProps {
  href: string;
  ariaLabel: string;
  children: ReactNode;
  lang?: string;
  className?: string;
}

const ButtonAsLink = ({
  href,
  ariaLabel,
  children,
  lang = "en",
  className,
}: ButtonAsLinkProps) => {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      lang={lang}
      className={`${styles.buttonAsLink} ${className}`}
    >
      {children}
    </Link>
  );
};

export default ButtonAsLink;
