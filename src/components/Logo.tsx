import React, { useState } from "react";
import { Box, BoxProps, Link, Text } from "@chakra-ui/react";
import { animated, useSpring } from "@react-spring/web";

const Logo = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [deg, setDeg] = useState(-180);

  const style = useSpring({
    transform: "scale("
      .concat(String(80 + (1.0 + Math.sin(deg)) * 25))
      .concat("%)"),
    height: "96px",
    margin: "auto",
    config: {
      friction: 3,
    },
  });

  return (
    <Link href="/">
      <animated.svg
        style={style}
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
        onMouseEnter={() => {
          setDeg(deg + 1.0 * Math.PI);
        }}
        fill="#logoGradient"
      >
        <defs>
          <path
            fill="white"
            stroke="white"
            id="textCurve"
            d="M243.2, 382.4c-74.8,   
          0-135.5-60.7-135.5-135.5s60.7-135.5,135.5-135.5s135.5, 60.7, 135.5,
          135.5 S318, 382.4, 243.2, 382.4z"
          />
          <linearGradient id="logoGradient">
            <stop offset="5%" stop-color="violet" />
            <stop offset="95%" stop-color="#FF5566" />
          </linearGradient>
        </defs>

        <text fontSize="104px">
          <textPath fill="white" href="#textCurve">
            Brendan P Miller ***
          </textPath>
        </text>
      </animated.svg>
    </Link>
  );
};

export { Logo };
