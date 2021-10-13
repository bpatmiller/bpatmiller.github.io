import { Box, Container, Flex, Link } from "@chakra-ui/layout";
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
    >
      <Flex
        flexDirection="row"
        justify="center"
        align="flex-start"
        height={[32, 32, 32, "100%", "100%"]}
        w={["100%", "100%", "100%", "156px", "256px"]}
      >
        <Flex
          p={0}
          flexDirection={["row", "row", "row", "column", "column"]}
          align="center"
        >
          <Box p={4}>
            <Logo />
          </Box>
          <Box p={4}>
            <Link href="https://github.com/bpatmiller">
              <IoLogoGithub size="2em" />
            </Link>
          </Box>
          <Box p={4}>
            <ColorModeButton />
          </Box>
        </Flex>
      </Flex>

      <Flex
        p={0}
        height="100%"
        grow={9}
        overflow="hide"
        justify={["center", "center", "center", "flex-start", "flex-start"]}
      >
        {props.children}
      </Flex>
    </Flex>
  );
};
