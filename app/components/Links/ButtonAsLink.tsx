import Link, { LinkProps } from "next/link";
import { AriaRole, ReactNode } from "react";
import { ButtonVariantType } from "../Buttons/Button";
import styles from "../Buttons/Button.module.css";

interface ButtonAsLinkProps extends Omit<LinkProps, "href"> {
  href: string;
  ariaLabel: string;
  children: ReactNode;
  lang?: string;
  className?: string;
  variant?: ButtonVariantType;
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
      className={`${styles.button} ${styles[variant]} ${className || ""}`}
      role={role}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default ButtonAsLink;
