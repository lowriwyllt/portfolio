import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";
<<<<<<< Updated upstream
=======
import { ibm_plex_mono } from "@/app/fonts";
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
      className={`${styles.button} ${styles[variant]} ${className || ""}`}
=======
      className={`${styles.button} ${styles[variant]} ${ibm_plex_mono.className} ${className || ""}`}
>>>>>>> Stashed changes
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
