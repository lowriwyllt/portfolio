import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";
import styles from "./ButtonAsLink.module.css";

interface ButtonAsLinkProps extends Omit<LinkProps, "href"> {
  href: string;
  ariaLabel: string;
  children: ReactNode;
  lang?: string;
  className?: string;
  variant?: "primary" | "primaryOutline" | "primarySubtle";
}

const ButtonAsLink = ({
  href,
  ariaLabel,
  children,
  lang = "en",
  className,
  variant = "primary",
  ...rest
}: ButtonAsLinkProps) => {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      lang={lang}
      className={`${styles.buttonAsLink} ${styles[variant]} ${className || ""}`}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default ButtonAsLink;
