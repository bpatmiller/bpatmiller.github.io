import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Flex,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./components/Logo";
import { ContentGrid, ContentGridItem } from "./components/ContentGrid";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouteLink,
} from "react-router-dom";
import { GrGithub } from "react-icons/gr";

const entries = [
  { title: "Fractalize.JS", link: "fractalize", img: "/frac.png" },
  { title: "Audio Reactive GAN", link: "argan", img: "/gan.jpg" },
  { title: "Chessboard", link: "chess", img: "/chess.png" },
  { title: "Multiple Interacting Fluids", link: "gfm2d", img: "/gfm2d.png" },
];

export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
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

        <Flex height="100%" grow={9} overflow="hide">
          <Switch>
            <Route path="/fractalize">fractalize</Route>
            <Route path="/gfm2d">gfm2d</Route>
            <Route path="/argan">argan</Route>
            <Route path="/chess">chess</Route>
            <Route path="/">
              <ContentGrid contents={entries} />
            </Route>
          </Switch>
        </Flex>
      </Flex>
    </Router>
  </ChakraProvider>
);
