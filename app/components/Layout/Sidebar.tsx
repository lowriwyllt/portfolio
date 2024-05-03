import { STYLING } from "@/app/theme/Styling";
import { Link } from "@chakra-ui/next-js";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  HStack,
  Text,
  VStack,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { Bars3Icon, EnvelopeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useRef } from "react";
import { NavItem } from "./navItems";

type Props = {
  navItems: NavItem[];
};

export const Sidebar = ({ navItems }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  const isOpenValue = useBreakpointValue(
    { base: isOpen, md: false },
    { fallback: "md" }
  );

  return (
    <>
      <Button
        ref={btnRef}
        display={{ md: "none" }}
        onClick={onOpen}
        {...STYLING.BUTTON.WHITE}
      >
        <Bars3Icon className="h-6 w-6" />
      </Button>
      <Drawer
        isOpen={isOpenValue !== undefined ? isOpenValue : isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
          >
            <VStack as={"nav"} spacing={2} alignItems={"flex-start"}>
              {navItems.map((item) => (
                <Button
                  as={Link}
                  href={item.href}
                  aria-label={item.label}
                  style={{ textDecoration: "none" }}
                  key={item.label}
                  onClick={onClose}
                  {...STYLING.BUTTON.WHITE}
                >
                  <HStack spacing={4}>
                    {item.icon}
                    <Text>{item.label}</Text>
                  </HStack>
                </Button>
              ))}
            </VStack>
            <VStack
              spacing={2}
              alignItems={"flex-start"}
              marginBottom={{ base: "148px", md: "108px" }}
            >
              <Button
                as={Link}
                href={"https://github.com/lowriwyllt"}
                aria-label={"Github for Lowri Roberts"}
                style={{ textDecoration: "none" }}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
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
                  <Text>Github</Text>
                </HStack>
              </Button>
              <Button
                as={Link}
                href={"https://www.linkedin.com/in/lowri-gwenllian-roberts/"}
                aria-label={"LinkedIn for Lowri Roberts"}
                style={{ textDecoration: "none" }}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
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
                  <Text>LinkedIn</Text>
                </HStack>
              </Button>
              <Button
                as={Link}
                href={"mailto:lowri.g.roberts@hotmail.com"}
                aria-label={"Email Lowri Roberts"}
                style={{ textDecoration: "none" }}
                onClick={onClose}
                {...STYLING.BUTTON.WHITE}
              >
                <HStack spacing={4}>
                  <EnvelopeIcon className="h-6 w-6" />
                  <Text>Email me</Text>
                </HStack>
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
