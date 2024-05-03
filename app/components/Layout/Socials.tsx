import React from "react";
import Image from "next/image";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { Button, HStack, VStack } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { STYLING } from "@/app/theme/Styling";

const Socials = (): JSX.Element => {
  return (
    <VStack
      spacing={2}
      alignItems={"flex-start"}
      marginBottom={{ base: "148px", md: "108px" }}
      position="fixed"
      bottom={5}
      right={0}
      zIndex={1}
    >
      <Button
        as={Link}
        href={"https://github.com/lowriwyllt"}
        aria-label={"Github for Lowri Roberts"}
        style={{ textDecoration: "none" }}
        target="_blank"
        rel="noopener noreferrer"
        borderRightRadius={0}
        borderWidth={2}
        borderColor={STYLING.COLORS.DARK_PURPLE}
        borderRight={"none"}
        {...STYLING.BUTTON.WHITE}
      >
        <HStack spacing={4}>
          <Image
            src="/github-mark.png"
            width="21"
            height="21"
            alt="Github logo"
            className="h-6 w-6 drop-shadow-[0_0_5px_rgba(255,255,255,1)]"
          />
        </HStack>
      </Button>
      <Button
        as={Link}
        href={"https://www.linkedin.com/in/lowri-gwenllian-roberts/"}
        aria-label={"LinkedIn for Lowri Roberts"}
        style={{ textDecoration: "none" }}
        target="_blank"
        rel="noopener noreferrer"
        borderRightRadius={0}
        borderWidth={2}
        borderColor={STYLING.COLORS.DARK_PURPLE}
        borderRight={"none"}
        {...STYLING.BUTTON.WHITE}
      >
        <HStack spacing={4}>
          <Image
            src="/LI-In-Bug.png"
            width="21"
            height="21"
            alt="LinkedIn logo"
            className="h-6 w-6 drop-shadow-[0_0_5px_rgba(255,255,255,1)]"
          />
        </HStack>
      </Button>
      <Button
        as={Link}
        href={"mailto:lowri.g.roberts@hotmail.com"}
        aria-label={"Email Lowri Roberts"}
        style={{ textDecoration: "none" }}
        borderRightRadius={0}
        borderWidth={2}
        borderColor={STYLING.COLORS.DARK_PURPLE}
        borderRight={"none"}
        {...STYLING.BUTTON.WHITE}
      >
        <HStack spacing={4}>
          <EnvelopeIcon className="h-6 w-6" />
        </HStack>
      </Button>
    </VStack>
  );
};
export default Socials;
