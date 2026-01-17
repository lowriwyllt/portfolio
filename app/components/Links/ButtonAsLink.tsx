import Link, { LinkProps } from "next/link";
import { AriaRole, ReactNode } from "react";
import styles from "./ButtonAsLink.module.css";

interface ButtonAsLinkProps extends Omit<LinkProps, "href"> {
  href: string;
  ariaLabel: string;
  children: ReactNode;
  lang?: string;
  className?: string;
  variant?: "primary" | "primaryOutline" | "primarySubtle";
  role?: AriaRole;
}

const ButtonAsLink = ({
  href,
  ariaLabel,
  children,
  lang = "en",
  className,
  variant = "primary",
  role,
  ...rest
}: ButtonAsLinkProps) => {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      lang={lang}
      className={`${styles.buttonAsLink} ${styles[variant]} ${className || ""}`}
      role={role}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default ButtonAsLink;
