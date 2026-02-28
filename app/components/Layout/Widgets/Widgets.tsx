import langType from "@/app/constants/langType";
import Socials from "../Socials";
import styles from "./Widgets.module.css";
import LanguageToggle from "../LanguageToggle";

const Widgets = ({ lang }: { lang: langType }) => {
  return (
    <div className={styles.widgetsContainer}>
      <Socials lang={lang} buttonStyle={styles.linkButton} />
      <LanguageToggle lang={lang} style={styles.languageToggle} />
    </div>
  );
};

export default Widgets;
