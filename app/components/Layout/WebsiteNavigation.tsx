import { WELSH_NAV_ITEMS, ENGLISH_NAV_ITEMS } from "@/app/constants/navItems";
import ButtonAsLink from "../Links/ButtonAsLink";
import styles from "./WebsiteNavigation.module.css";

type Props = { lang?: "en" | "cy"; variation: "header" | "footer" };

const WebsiteNavigation = ({ lang = "en", variation }: Props) => {
  const navigationItmes = lang === "cy" ? WELSH_NAV_ITEMS : ENGLISH_NAV_ITEMS;
  return (
    <nav className={styles[`${variation}Nav`]}>
      <ul role="menubar" className={styles.menubar}>
        {navigationItmes.map((item) => {
          const labelId = `label-${item.label
            .toLowerCase()
            .replace(/\s+/g, "-")}`;
          return (
            <li key={labelId} role="none">
              <ButtonAsLink
                href={item.href}
                ariaLabel={item.label}
                role="menuitem"
                className={styles.menuitem}
                variant={variation === "footer" ? "primary" : "primarySubtle"}
              >
                <span className={styles[`${variation}IconWrapper`]}>
                  {item.icon}
                </span>
                <span className={styles[`${variation}LableText`]}>
                  {item.label}
                </span>
              </ButtonAsLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default WebsiteNavigation;
