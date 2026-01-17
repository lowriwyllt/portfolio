"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";
import styles from "./Layout.module.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useSidebar } from "./useSidebar";

const Layout = ({
  language = "english",
  children,
}: {
  language?: "english" | "welsh";
  children: React.ReactNode;
}) => {
  const { Button, Sidebar } = useSidebar({
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
              alt="Logo Lowri Roberts - Datblygwr Gwe"
              width={61}
              height={50}
            />
            <span className={styles.logoText}>
              {language === "welsh" ? "Datblygwr Gwe" : "Web Developer"}
            </span>
          </Link>
          <Navbar
            lang={language === "welsh" ? "cy" : "en"}
            SidebarButton={Button}
          />
        </div>
      </header>
      <main className={styles.main}>{children}</main>
      <Footer lang={language === "welsh" ? "cy" : "en"} />
    </>
  );
};

export default Layout;
