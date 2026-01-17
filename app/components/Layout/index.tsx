"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";
import styles from "./Layout.module.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useSidebar } from "./useSidebar";
import langType from "@/app/constants/langType";

const Layout = ({
  lang = "en",
  children,
}: {
  lang?: langType;
  children: React.ReactNode;
}) => {
  const { Button, Sidebar } = useSidebar({
    lang,
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
              {lang === "cy" ? "Datblygwr Gwe" : "Web Developer"}
            </span>
          </Link>
          <Navbar lang={lang} SidebarButton={Button} />
        </div>
      </header>
      <main className={styles.main}>{children}</main>
      <Footer lang={lang} />
    </>
  );
};

export default Layout;
