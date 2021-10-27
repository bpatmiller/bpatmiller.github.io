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
  codeLink: "https://github.com/bpatmiller/bulbGL",
  contentLink: "https://bpatmiller.github.io/bulbGL",
};

export const Bulb = () => {
  return <Writeup {...bulb_props}></Writeup>;
};
