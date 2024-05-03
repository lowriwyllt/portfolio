import { Link } from "@chakra-ui/next-js";
import { Button, HStack, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { STYLING } from "@/app/theme/Styling";
import { Sidebar } from "./Sidebar";
import { englishNavItems } from "./navItems";

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
    <>
      <HStack
        as={"nav"}
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
            {...STYLING.BUTTON.WHITE}
          >
            <HStack spacing={4}>
              {item.icon}
              <Text>{item.label}</Text>
            </HStack>
          </Button>
        ))}
      </HStack>
      <Sidebar navItems={navItems} />
    </>
  );
};
export default Navbar;
