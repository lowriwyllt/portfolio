"use client";

import React, { useState, useRef } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Image from "next/image";
import { welshNavItems } from "./welshNavItems";
import { englishNavItems } from "./englishNavItems";
import { Flex, HStack, Text } from "@chakra-ui/react";
import { STYLING } from "@/app/theme/Styling";
import { Link } from "@chakra-ui/next-js";

const Layout = ({
  language = "english",
}: {
  language?: string;
}): JSX.Element => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleMenuButtonClick = (): void => {
    setShowSidebar((prev) => !prev);
  };

  return (
    <>
      <Sidebar
        open={showSidebar}
        setOpen={setShowSidebar}
        onMenuButtonClick={handleMenuButtonClick}
        navItems={language === "welsh" ? welshNavItems : englishNavItems}
      />
      <Flex
        ref={ref}
        display="flex"
        justifyContent="space-between"
        color="darkPurple"
        width="full"
        height="100px"
        position="fixed"
        top={0}
        left={0}
        zIndex={20}
        bgColor="whiteAlpha.500"
        backdropFilter="blur(4px)"
      >
        <HStack justify={"space-between"} w="full">
          <Link
            href="/"
            aria-label="Landing Page"
            className="m-5 flex flex-col items-center justify-center"
          >
            <Image
              src="/logo_Lowri_Roberts.png"
              alt="Logo Lowri Roberts - Web developer"
              width={61}
              height={50}
            />
            <Text color={STYLING.COLORS.DARK_PURPLE}>Web Developer</Text>
          </Link>
          <Navbar
            navItems={language === "welsh" ? welshNavItems : englishNavItems}
          />
        </HStack>
      </Flex>
    </>
  );
};

export default Layout;
