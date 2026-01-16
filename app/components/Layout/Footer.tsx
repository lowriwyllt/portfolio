"use client";

import { merriweather } from "@/app/fonts";
import { NavItem, ENGLISH_NAV_ITEMS } from "../../constants/navItems";
import Link from "next/link";
import styles from "./Footer.module.css";
import ButtonAsLink from "../Links/ButtonAsLink";

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
          const labelId = `label-${item.label
            .toLowerCase()
            .replace(/\s+/g, "-")}`;
          return (
            <ButtonAsLink
              key={item.label}
              href={item.href}
              ariaLabel={item.label}
              className={styles.navLink}
            >
              <span className={styles.iconWrapper}>{item.icon}</span>
              <span className={styles.labelText} id={labelId}>
                {item.label}
              </span>
            </ButtonAsLink>
          );
        })}
      </nav>
    </footer>
  );
};

export default Footer;
