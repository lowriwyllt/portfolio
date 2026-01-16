"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";
import styles from "./Layout.module.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useSidebar } from "./useSidebar";
import { ENGLISH_NAV_ITEMS, WELSH_NAV_ITEMS } from "@/app/constants/navItems";

const Layout = ({
  language = "english",
  children,
}: {
  language?: "english" | "welsh";
  children: React.ReactNode;
}) => {
  const { Button, Sidebar } = useSidebar({
    navItems: language === "welsh" ? WELSH_NAV_ITEMS : ENGLISH_NAV_ITEMS,
    language: language,
  });
  return (
    <>
      <Socials />
      <Sidebar />
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Link href="/" aria-label="Landing Page" className={styles.logoLink}>
            <Image
              src="/logo_Lowri_Roberts.png"
              alt="Logo Lowri Roberts - Web developer"
              width={61}
              height={50}
            />
            <span className={styles.logoText}>Web Developer</span>
          </Link>
          <Navbar
            navItems={
              language === "welsh" ? WELSH_NAV_ITEMS : ENGLISH_NAV_ITEMS
            }
            SidebarButton={Button}
          />
        </div>
      </header>
      <main className={styles.main}>{children}</main>
      <Footer
        navItems={language === "welsh" ? WELSH_NAV_ITEMS : ENGLISH_NAV_ITEMS}
      />
    </>
  );
};

export default Layout;
