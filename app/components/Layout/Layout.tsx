"use client";

import React, { useState, useRef } from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import { Flex, HStack, Text } from "@chakra-ui/react";
import { STYLING } from "@/app/theme/Styling";
import { Link } from "@chakra-ui/next-js";
import Socials from "./Socials";
import { englishNavItems, welshNavItems } from "./navItems";

const Layout = ({
  language = "english",
}: {
  language?: string;
}): JSX.Element => {
  return (
    <>
      <Socials />
      <Flex
        justifyContent="space-between"
        width="full"
        height="100px"
        position="fixed"
        top={0}
        left={0}
        zIndex={1}
        bgColor="whiteAlpha.500"
        backdropFilter="blur(4px)"
        p={4}
      >
        <HStack justify={"space-between"} w="full">
          <Link
            href="/"
            aria-label="Landing Page"
            display="flex"
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
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
