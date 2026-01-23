import { WELSH_NAV_ITEMS, ENGLISH_NAV_ITEMS } from "@/app/constants/navItems";
import ButtonAsLink from "../Links/ButtonAsLink";
import styles from "./WebsiteNavigation.module.css";
<<<<<<< Updated upstream
import { ButtonVariantType } from "../Buttons/Button";
import langType from "@/app/constants/langType";
=======
import Button, { ButtonVariantType } from "../Buttons/Button";
import langType from "@/app/constants/langType";
import { usePathname } from "next/navigation";
>>>>>>> Stashed changes

type Props = {
  lang?: langType;
  variation: "header" | "footer" | "sidebar";
  buttonVariant: ButtonVariantType;
  onClick?: () => void;
};

const WebsiteNavigation = ({
  lang = "en",
  variation,
  buttonVariant,
  onClick,
}: Props) => {
  const navigationItems = lang === "cy" ? WELSH_NAV_ITEMS : ENGLISH_NAV_ITEMS;
<<<<<<< Updated upstream
=======
  const pathname = usePathname();

>>>>>>> Stashed changes
  return (
    <nav
      className={styles[`${variation}Nav`]}
      aria-label={`${variation === "header" ? "Main" : variation === "footer" ? "Footer" : "Sidebar"} navigation`}
    >
      <ul className={`${styles.menubar} ${styles[`${variation}Menubar`]}`}>
        {navigationItems.map((item) => {
<<<<<<< Updated upstream
          return (
            <li key={item.label} className={styles[`${variation}ListItem`]}>
              <ButtonAsLink
                href={item.href}
                ariaLabel={item.label}
                className={`${styles.menuitem} ${styles[`${variation}Menuitem`]}`}
                variant={buttonVariant}
                onClick={onClick}
              >
                <span
                  className={styles[`${variation}IconWrapper`]}
                  aria-hidden="true"
                >
                  {item.icon}
                </span>
                <span className={styles[`${variation}LabelText`]}>
                  {item.label}
                </span>
              </ButtonAsLink>
=======
          const isCurrent =
            pathname === item.href ||
            (item.href !== "/" && pathname.startsWith(item.href));
          return (
            <li key={item.label} className={styles[`${variation}ListItem`]}>
              {isCurrent ? (
                <Button
                  ariaLabel={`${item.label} (current page)`}
                  className={`${styles.menuitem} ${styles[`${variation}Menuitem`]}`}
                  aria-current="page"
                  variant={buttonVariant}
                  onClick={onClick}
                  disabled={variation !== "sidebar" && isCurrent}
                >
                  <span
                    className={styles[`${variation}IconWrapper`]}
                    aria-hidden="true"
                  >
                    {item.icon}
                  </span>
                  <span className={styles[`${variation}LabelText`]}>
                    {item.label}
                  </span>
                </Button>
              ) : (
                <ButtonAsLink
                  href={item.href}
                  ariaLabel={item.label}
                  className={`${styles.menuitem} ${styles[`${variation}Menuitem`]}`}
                  variant={buttonVariant}
                  onClick={onClick}
                >
                  <span
                    className={styles[`${variation}IconWrapper`]}
                    aria-hidden="true"
                  >
                    {item.icon}
                  </span>
                  <span className={styles[`${variation}LabelText`]}>
                    {item.label}
                  </span>
                </ButtonAsLink>
              )}
>>>>>>> Stashed changes
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default WebsiteNavigation;
