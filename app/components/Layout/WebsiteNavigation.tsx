import { WELSH_NAV_ITEMS, ENGLISH_NAV_ITEMS } from "@/app/constants/navItems";
import ButtonAsLink from "../Links/ButtonAsLink";
import styles from "./WebsiteNavigation.module.css";
import { ButtonVariantType } from "../Buttons/Button";
import langType from "@/app/constants/langType";

type Props = {
  lang?: langType;
  variation: "header" | "footer" | "sidebar";
  buttonVariant: ButtonVariantType;
};

const WebsiteNavigation = ({
  lang = "en",
  variation,
  buttonVariant,
}: Props) => {
  const navigationItmes = lang === "cy" ? WELSH_NAV_ITEMS : ENGLISH_NAV_ITEMS;
  return (
    <nav className={styles[`${variation}Nav`]}>
      <ul
        role="menubar"
        className={`${styles.menubar} ${styles[`${variation}Menubar`]}`}
      >
        {navigationItmes.map((item) => {
          const labelId = `label-${item.label
            .toLowerCase()
            .replace(/\s+/g, "-")}`;
          return (
            <li
              key={labelId}
              role="none"
              className={styles[`${variation}ListItem`]}
            >
              <ButtonAsLink
                href={item.href}
                ariaLabel={item.label}
                role="menuitem"
                className={`${styles.menuitem} ${styles[`${variation}Menuitem`]}`}
                variant={buttonVariant}
              >
                <span className={styles[`${variation}IconWrapper`]}>
                  {item.icon}
                </span>
                <span className={styles[`${variation}LabelText`]}>
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
