import {
  Box,
  Container,
  Flex,
  Link,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import React from "react";
import { IoLogoGithub } from "react-icons/io";
import ColorModeButton from "./ColorModeButton";
import { Logo } from "./Logo";
import { ColorModeProps } from "./util";
import { useColorMode } from "@chakra-ui/react";

interface LayoutProps {
  children: JSX.Element;
}

export const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <Flex
      width="100%"
      height="100vh"
      flexDirection={["column", "column", "column", "row", "row"]}
      p={4}
    >
      <Flex
        flexDirection="row"
        justify="center"
        align="flex-start"
        height={[32, 32, 32, "100%"]}
        w={["100%", "100%", "100%", 48]}
        flexShrink={0}
        className="sidebar"
        paddingTop={[0, 0, 0, 4]}
        paddingBottom={4}
      >
        <Flex
          flexDirection={["row", "row", "row", "column", "column"]}
          align="center"
        >
          <Box p={4} overflow="hidden">
            <Logo />
          </Box>
          <LinkBox p={4}>
            <LinkOverlay href="https://github.com/bpatmiller"></LinkOverlay>
            <IoLogoGithub size="2em" />
          </LinkBox>
          <Box p={4}>
            <ColorModeButton />
          </Box>
        </Flex>
      </Flex>

      <Flex
        p={0}
        height="100%"
        overflow="hide"
        justify={["center", "center", "center", "flex-start", "flex-start"]}
      >
        {props.children}
      </Flex>
    </Flex>
  );
};
