// components/layout/Sidebar.tsx
import React, { useRef } from "react";
import Link from "next/link";
import { defaultNavItems } from "./defaultNavItems";

export type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

type Props = {
  navItems?: NavItem[];
};

const Navbar = ({ navItems = defaultNavItems }: Props) => {
  return (
    <nav className="py-2 md:flex flex-row gap-2 hidden  flex-grow  justify-end">
      <ul className="md:sticky top-0 md:top-16 flex flex-grow flex-row  items-center">
        {navItems.map((item, index) => (
          <li
            key={item.label}
            className="text-darkPurple bg-white hover:text-white hover:bg-darkPurple flex gap-4 items-center transition-colors duration-300 rounded-md mx-2"
          >
            <Link
              key={index}
              href={item.href}
              aria-label={item.label}
              className="flex gap-4 items-center rounded-md p-2"
            >
              {item.icon} {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
