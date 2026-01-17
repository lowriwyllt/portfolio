import Link, { LinkProps } from "next/link";
import { AriaRole, HTMLAttributeAnchorTarget, ReactNode } from "react";
import { ButtonVariantType } from "../Buttons/Button";
import styles from "../Buttons/Button.module.css";
import langType from "@/app/constants/langType";

interface ButtonAsLinkProps extends Omit<LinkProps, "href"> {
  href: string;
  ariaLabel?: string;
  children: ReactNode;
  lang?: langType;
  className?: string;
  variant?: ButtonVariantType;
  role?: AriaRole;
  target?: HTMLAttributeAnchorTarget;
  rel?: string;
}

const ButtonAsLink = ({
  href,
  ariaLabel,
  children,
  lang = "en",
  className,
  variant = "primary",
  role,
  target,
  rel,
  ...rest
}: ButtonAsLinkProps) => {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      lang={lang}
      className={`${styles.button} ${styles[variant]} ${className || ""}`}
      role={role}
      target={target}
      rel={rel}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default ButtonAsLink;
