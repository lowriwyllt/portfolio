import { merriweather } from "@/app/fonts";
import styles from "./Footer.module.css";
import WebsiteNavigation from "./WebsiteNavigation";
import langType from "@/app/constants/langType";

type Props = {
  lang?: langType;
};

const Footer = ({ lang = "en" }: Props) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <h2 className={`${styles.name} ${merriweather.className}`}>
          Lowri Roberts
        </h2>
        <p className={styles.role}>
          {lang === "cy" ? "Datblygwr Gwe" : "Web Developer"}
        </p>
      </div>
      <WebsiteNavigation
        lang={lang}
        variation="footer"
        buttonVariant="primary"
      />
    </footer>
  );
};

export default Footer;
