"use client";

import { NavItem } from "@/app/constants/navItems";
import {
  Bars3Icon,
  EnvelopeIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./Sidebar.module.css";

type Props = {
  navItems: NavItem[];
};

export const useSidebar = ({ navItems }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return {
    Button: () => (
      <button
        className={styles.menuButton}
        onClick={onOpen}
        aria-label="Open menu"
      >
        <Bars3Icon className={styles.icon} />
      </button>
    ),
    Sidebar: () => (
      <>
        <div
          className={`${styles.overlay} ${isOpen ? styles.open : ""}`}
          onClick={onClose}
        />

        <div className={`${styles.drawer} ${isOpen ? styles.open : ""}`}>
          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close menu"
          >
            <XMarkIcon className={styles.icon} />
          </button>

          <div className={styles.drawerBody}>
            <nav className={styles.nav}>
              {navItems.map((item) => (
                <Link
                  href={item.href}
                  aria-label={item.label}
                  key={item.label}
                  onClick={onClose}
                  className={styles.navButton}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>

            <div className={styles.socialLinks}>
              <a
                href="https://github.com/lowriwyllt"
                aria-label="Github for Lowri Roberts"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className={styles.navButton}
              >
                <Image
                  src="/github-mark.png"
                  width={21}
                  height={21}
                  alt="Github logo"
                  className={styles.iconShadow}
                />
                <span>Github</span>
              </a>

              <a
                href="https://www.linkedin.com/in/lowri-gwenllian-roberts/"
                aria-label="LinkedIn for Lowri Roberts"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className={styles.navButton}
              >
                <Image
                  src="/LI-In-Bug.png"
                  width={21}
                  height={21}
                  alt="LinkedIn logo"
                  className={styles.iconShadow}
                />
                <span>LinkedIn</span>
              </a>

              <a
                href="mailto:lowri.g.roberts@hotmail.com"
                aria-label="Email Lowri Roberts"
                onClick={onClose}
                className={styles.navButton}
              >
                <EnvelopeIcon className={styles.icon} />
                <span>Email me</span>
              </a>
            </div>
          </div>
        </div>
      </>
    ),
  };
};
