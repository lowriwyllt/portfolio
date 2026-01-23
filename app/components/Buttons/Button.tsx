import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";
import { ibm_plex_mono } from "@/app/fonts";

export type ButtonVariantType =
  | "primary"
  | "primaryOutline"
  | "primarySubtle"
  | "secondaryOutline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  ariaLabel: string;
  children: ReactNode;
  className?: string;
  variant?: ButtonVariantType;
}

const Button = ({
  ariaLabel,
  children,
  className,
  variant = "primary",
  ...rest
}: ButtonProps) => {
  return (
    <button
      aria-label={ariaLabel}
      className={`${styles.button} ${styles[variant]} ${ibm_plex_mono.className} ${className || ""}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
