import React from "react";
import Image from "next/image";

import styles from "./Layout.module.css";
import Footer from "./Footer/Footer";
import langType from "@/app/constants/langType";
import WebsiteNavigation from "./WebsiteNavigation";
import Sidebar from "./MobileMenu/Sidebar";
import Widgets from "./Widgets/Widgets";

const Layout = ({
  lang = "en",
  children,
}: {
  lang?: langType;
  children: React.ReactNode;
}) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logoContainer}>
            <Image
              src="/logo_Lowri_Roberts.png"
              alt={`Logo Lowri Roberts - ${lang === "cy" ? "Datblygwr Gwe" : "Web Developer"}`}
              width={61}
              height={50}
              aria-hidden="true"
            />
            <span className={styles.logoText} aria-hidden="true">
              {lang === "cy" ? "Datblygwr Gwe" : "Web Developer"}
            </span>
          </div>
          <WebsiteNavigation
            lang={lang}
            variation="header"
            buttonVariant="primarySubtle"
          />
          <Sidebar lang={lang} />
        </div>
      </header>

      <main className={styles.main}>
        <Widgets lang={lang} />
        {children}
      </main>

      <Footer lang={lang} />
    </>
  );
};

export default Layout;
