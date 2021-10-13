import * as React from "react";
import {
  ChakraProvider,
  ColorModeProvider,
  extendTheme,
} from "@chakra-ui/react";
import { Switch, Route } from "react-router-dom";
import useRouter from "./useRouter";
import { useTransition, animated } from "react-spring";

import myTheme from "./theme";
import { Layout } from "./components/Layout";
import { Home } from "./Home";
import { Fractalize } from "./Fractalize";
import { Argan } from "./Argan";
import { Chess } from "./Chess";
import { Gfm } from "./Gfm";
import theme from "./theme";
import Background from "./components/Background";

export const App = () => {
  const { location } = useRouter();
  const transitions = useTransition(location, {
    key: location.pathname,
    from: {
      opacity: 0,
      transform:
        location.pathname === "/"
          ? "translate(0px,-35%)"
          : "translate(0px,100%)",
    },
    enter: { opacity: 1, transform: "translate(0px, 0px)" },
    config: {
      tension: 120,
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <Background>
        <Layout>
          {transitions((style, item) => {
            return (
              <animated.div key={item.key} style={style}>
                <Switch>
                  <Route exact path="/" component={Home}></Route>
                  <Route
                    exact
                    path="/fractalize"
                    component={Fractalize}
                  ></Route>
                  <Route exact path="/argan" component={Argan}></Route>
                  <Route exact path="/chess" component={Chess}></Route>
                  <Route exact path="/gfm2d" component={Gfm}></Route>
                </Switch>
              </animated.div>
            );
          })}
        </Layout>
      </Background>
    </ChakraProvider>
  );
};
