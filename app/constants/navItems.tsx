import React from "react";
import {
  CodeBracketIcon,
  DocumentIcon,
  HomeIcon,
  GlobeEuropeAfricaIcon,
} from "@heroicons/react/24/outline";
import styles from "./navItems.module.css";

export type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

export const ENGLISH_NAV_ITEMS: NavItem[] = [
  {
    label: "Home",
    href: "/en/home",
    icon: <HomeIcon className={styles.icon} />,
  },
  {
    label: "Coding Projects",
    href: "/en/codingprojects",
    icon: <CodeBracketIcon className={styles.icon} />,
  },
  {
    label: "Experience",
    href: "/en/experience",
    icon: <DocumentIcon className={styles.icon} />,
  },
  {
    label: "Travel",
    href: "/en/travel",
    icon: <GlobeEuropeAfricaIcon className={styles.icon} />,
  },
];

export const WELSH_NAV_ITEMS: NavItem[] = [
  {
    label: "Adra",
    href: "/cy/adra",
    icon: <HomeIcon className={styles.icon} />,
  },
  {
    label: "Prosiectau Codio",
    href: "/cy/prosiectaucodio",
    icon: <CodeBracketIcon className={styles.icon} />,
  },
  {
    label: "Profiad",
    href: "/cy/profiad",
    icon: <DocumentIcon className={styles.icon} />,
  },
  {
    label: "Trafeilio",
    href: "/cy/trafeilio",
    icon: <GlobeEuropeAfricaIcon className={styles.icon} />,
  },
];
