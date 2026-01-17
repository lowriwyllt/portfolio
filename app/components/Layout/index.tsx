"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";
import styles from "./Layout.module.css";
import Footer from "./Footer";
import { useSidebar } from "./useSidebar";
import langType from "@/app/constants/langType";
import WebsiteNavigation from "./WebsiteNavigation";

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
          <WebsiteNavigation
            lang={lang}
            variation="header"
            buttonVariant="primarySubtle"
          />
          <Button />
        </div>
      </header>
      <main className={styles.main}>{children}</main>
      <Socials lang={lang} />
      <Footer lang={lang} />
    </>
  );
};

export default Layout;
