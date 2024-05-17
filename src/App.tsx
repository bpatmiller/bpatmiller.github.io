import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
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
                <Routes>
                  <Route path="/" element={Home()}></Route>
                  <Route
                    path="/fractalize"
                    element={Fractalize()}
                  ></Route>
                  <Route path="/argan" element={Argan()}></Route>
                  <Route  path="/chess" element={Chess()}></Route>
                  <Route  path="/gfm2d" element={Gfm()}></Route>
                  <Route  path="/bulb" element={Bulb()}></Route>
                  <Route  path="/raytracer" element={Raytracer()}></Route>
                  <Route  path="/theremin" element={Theremin()}></Route>
                </Routes>
              </animated.div>
            );
          })}
        </Layout>
      </Background>
    </ChakraProvider>
  );
};
