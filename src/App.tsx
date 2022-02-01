import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Switch, Route } from "react-router-dom";
import useRouter from "./useRouter";
import { useTransition, animated } from "react-spring";

import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Fractalize } from "./pages/Fractalize";
import { Argan } from "./pages/Argan";
import { Chess } from "./pages/Chess";
import { Gfm } from "./pages/Gfm";
import { Raytracer } from "./pages/Raytracer";
import { Bulb } from "./pages/Bulb";

import theme from "./theme";
import Background from "./components/Background";
import { Cvtrack } from "./pages/Cvtrack";
import { Theremin } from "./pages/Theremin";

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
                  <Route exact path="/bulb" component={Bulb}></Route>
                  <Route exact path="/raytracer" component={Raytracer}></Route>
                  <Route exact path="/cvtrack" component={Cvtrack}></Route>
                  <Route exact path="/theremin" component={Theremin}></Route>
                </Switch>
              </animated.div>
            );
          })}
        </Layout>
      </Background>
    </ChakraProvider>
  );
};
