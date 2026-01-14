"use client";

import { merriweather } from "@/app/fonts";
import { NavItem, ENGLISH_NAV_ITEMS } from "../../constants/navItems";
import Link from "next/link";
import styles from "./Footer.module.css";

type Props = {
  navItems?: NavItem[];
};

const Footer = ({ navItems = ENGLISH_NAV_ITEMS }: Props) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <h2 className={`${styles.name} ${merriweather.className}`}>
          Lowri Roberts
        </h2>
        <p className={styles.role}>Web Developer</p>
      </div>
      <nav className={styles.nav}>
        {navItems.map((item) => {
          return (
            <Link
              key={item.label}
              href={item.href}
              aria-label={item.label}
              className={styles.navLink}
            >
              <span className={styles.iconWrapper}>{item.icon}</span>
              <span className={styles.labelText}>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </footer>
  );
};

export default Footer;
