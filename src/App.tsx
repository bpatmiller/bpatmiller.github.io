import * as React from "react";
import { ChakraProvider, extendTheme, ThemeConfig } from "@chakra-ui/react";
import { HashRouter as Router, Route } from "react-router-dom";
import myTheme from "./theme";
import { Home } from "./Home";
import { Fractalize } from "./Fractalize";

const theme = extendTheme({ ...myTheme, initialColorMode: "light" });

export const App = () => (
  <ChakraProvider theme={theme}>
    <Router basename={"/page/"}>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/fractalize" component={Fractalize}></Route>
    </Router>
  </ChakraProvider>
);
