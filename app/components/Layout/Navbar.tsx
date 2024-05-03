// components/layout/Sidebar.tsx
"use client";
import { Link } from "@chakra-ui/next-js";
import { englishNavItems } from "./englishNavItems";
import { Button, HStack } from "@chakra-ui/react";
import { ReactNode } from "react";
import { STYLING } from "@/app/theme/Styling";

export type NavItem = {
  label: string;
  href: string;
  icon: ReactNode;
};

type Props = {
  navItems?: NavItem[];
};

const Navbar = ({ navItems = englishNavItems }: Props): JSX.Element => {
  return (
    <HStack
      justify={"end"}
      p={2}
      spacing={2}
      display={{ base: "none", md: "flex" }}
    >
      {navItems.map((item) => (
        <Button
          as={Link}
          href={item.href}
          aria-label={item.label}
          style={{ textDecoration: "none" }}
          key={item.label}
          {...STYLING.BUTTON.DARK_PURPLE}
        >
          <HStack spacing={4}>
            {item.icon}
            <>{item.label}</>
          </HStack>
        </Button>
      ))}
    </HStack>
  );
};
export default Navbar;
