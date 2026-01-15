import { ENGLISH_NAV_ITEMS, NavItem } from "@/app/constants/navItems";
import Link from "next/link";
// import { Sidebar } from "./Sidebar";
import styles from "./Navbar.module.css";

type Props = {
  navItems?: NavItem[];
};

const Navbar = ({ navItems = ENGLISH_NAV_ITEMS }: Props) => {
  return (
    <>
      <nav className={styles.nav}>
        {navItems.map((item) => (
          <Link
            href={item.href}
            aria-label={item.label}
            key={item.label}
            className={styles.navButton}
          >
            <div className={styles.navContent}>
              {item.icon}
              <span>{item.label}</span>
            </div>
          </Link>
        ))}
      </nav>
      {/* <Sidebar navItems={navItems} /> */}
    </>
  );
};
export default Navbar;
