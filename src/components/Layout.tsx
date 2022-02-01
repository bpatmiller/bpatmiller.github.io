import { Box, Flex, LinkBox, LinkOverlay, Spacer } from "@chakra-ui/react";
import React from "react";
import { IoLogoGithub } from "react-icons/io";
import ColorModeButton from "./ColorModeButton";
import { Logo } from "./Logo";

interface LayoutProps {
  children: JSX.Element;
}

export const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <Flex className="layout">
      <Flex className="navbar">
        <Flex
          flexDirection="row"
          align="center"
          justifyContent={"space-around"}
          w="100%"
        >
          <Box p={4} overflow="hidden">
            <Logo />
          </Box>
          <Spacer></Spacer>
          <LinkBox p={6}>
            <LinkOverlay href="https://github.com/bpatmiller"></LinkOverlay>
            <IoLogoGithub size="2em" />
          </LinkBox>
          <Box p={6}>
            <ColorModeButton />
          </Box>
        </Flex>
      </Flex>

      <Flex p={4} w="100%" maxW={1400} alignItems={"stretch"}>
        {props.children}
      </Flex>
    </Flex>
  );
};
