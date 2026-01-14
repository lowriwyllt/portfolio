"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";
import styles from "./Layout.module.css";

const Layout = ({
  language = "english",
  children,
}: {
  language?: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      <Socials />
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
        </div>
      </header>
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default Layout;
