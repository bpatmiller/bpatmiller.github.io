import { Box, Flex, Link } from "@chakra-ui/layout";
import React from "react";
import { GrGithub } from "react-icons/gr";
import { JsxElement } from "typescript";
import { Logo } from "./Logo";

export const Layout = ({ children }: JsxElement) => {
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
        height="100%"
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
              <GrGithub size="2em" />
            </Link>
          </Box>
        </Flex>
      </Flex>

      {/* <Flex align="center" justify="center">
      <Box
        height={["0px", "0px", "0px", "33%", "33%"]}
        width={["33%", "33%", "33%", "0px", "0%"]}
        borderLeft="2px solid rgba(255,255,255,0.3)"
        borderTop="2px solid rgba(255,255,255,0.3)"
      ></Box>
    </Flex> */}

      <Flex p={0} height="100%" grow={9} overflow="hide">
        {children}
      </Flex>
    </Flex>
  );
};
