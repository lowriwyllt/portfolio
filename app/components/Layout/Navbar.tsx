import { ENGLISH_NAV_ITEMS, NavItem } from "@/app/constants/navItems";
import styles from "./Navbar.module.css";
import ButtonAsLink from "../Links/ButtonAsLink";

type Props = {
  navItems?: NavItem[];
  SidebarButton: React.FC;
};

const Navbar = ({ navItems = ENGLISH_NAV_ITEMS, SidebarButton }: Props) => {
  return (
    <>
      <nav className={styles.nav}>
        {navItems.map((item) => (
          <ButtonAsLink
            key={item.label}
            href={item.href}
            ariaLabel={item.label}
            variant="primarySubtle"
          >
            <div className={styles.navContent}>
              {item.icon}
              <span>{item.label}</span>
            </div>
          </ButtonAsLink>
        ))}
      </nav>
      <SidebarButton />
    </>
  );
};
export default Navbar;
