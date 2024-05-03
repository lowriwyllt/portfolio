"use client";

import { merriweather } from "@/app/fonts";
import { NavItem, englishNavItems } from "./navItems";
import { Box, Button, Flex, HStack, Text } from "@chakra-ui/react";
import { STYLING } from "@/app/theme/Styling";
import { Link } from "@chakra-ui/next-js";

type Props = {
  navItems?: NavItem[];
};
const Footer = ({ navItems = englishNavItems }: Props): JSX.Element => {
  return (
    <Flex
      as="footer"
      backgroundColor={STYLING.COLORS.DARK_PURPLE}
      py={6}
      px={4}
      width={"full"}
      zIndex={1}
      flexDirection={{ base: "column", sm: "row" }}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Box w={{ base: "full", md: "1/3" }}>
        <Text
          size="lg"
          fontWeight="semibold"
          color="white"
          className={`${merriweather.className}`}
        >
          Lowri Roberts
        </Text>
        <Text color="white" mt={2}>
          Web Developer
        </Text>
      </Box>
      <HStack
        as={"nav"}
        w={{ base: "full", md: "2/3" }}
        justify="flex-end"
        alignItems={"center"}
      >
        {navItems.map((item) => {
          return (
            <Button
              as={Link}
              aria-label={item.label}
              key={item.label}
              href={item.href}
              style={{ textDecoration: "none" }}
              {...STYLING.BUTTON.DARK_PURPLE}
            >
              <HStack spacing={4}>
                <Box display={{ base: "block", sm: "none", md: "block" }}>
                  {item.icon}
                </Box>
                <Text display={{ base: "none", sm: "block" }}>
                  {item.label}
                </Text>
              </HStack>
            </Button>
          );
        })}
      </HStack>
    </Flex>
  );
};

export default Footer;
