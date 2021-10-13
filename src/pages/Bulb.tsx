import React from "react";
import { Writeup, WriteupProps } from "../components/Writeup";

const markdown = `
`;

const bulb_props: WriteupProps = {
  title: "BulbGL",
  markdown: markdown,
  short: "Interactive Mandelbulb viewer, accelerated with WebGL",
  date: "2018",
  tags: ["JS", "Fractals"],
};

export const Bulb = () => {
  return <Writeup {...bulb_props}></Writeup>;
};
