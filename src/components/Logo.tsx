import React, { useState } from "react";
import { Link, Box } from "@chakra-ui/react";
import { animated, useSpring, useTransition } from "@react-spring/web";
import useRouter from "../useRouter";

const Logo = () => {
  const { location } = useRouter();
  const transitions = useTransition(location, {
    key: location.pathname,
    from: {
      opacity: location.pathname === "/" ? -8 : 1,
      transform:
        location.pathname === "/" ? "rotate(-90deg)" : "rotate(105deg)",
    },
    enter: {
      opacity: 1,
      transform: "rotate(105deg)",
    },
    config: {},
  });

  return transitions((style, item) => {
    return (
      <animated.div key={item.key} style={style}>
        <Link href="/">
          <svg
            height="96px"
            margin="auto"
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
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
              <linearGradient id="GradientV">
                <stop offset="0" stop-color="#36a126" />
                <stop offset="1" stop-color="#fc466b" />
              </linearGradient>
              <linearGradient id="GradientH" gradientTransform="rotate(90)">
                <stop offset="0" stop-color="#090979" />
                <stop offset="1" stop-color="#fcb045" />
              </linearGradient>
            </defs>

            <mask id="Mask">
              <text fontSize="104px">
                <textPath fill="current" href="#textCurve">
                  Brendan P Miller ***
                </textPath>
              </text>
            </mask>
            <rect
              x="0"
              y="0"
              width="500"
              height="500"
              fill="white"
              mask="url(#Mask)"
            ></rect>
          </svg>
        </Link>
      </animated.div>
    );
  });
};

export { Logo };
