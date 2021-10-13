import React from "react";
import { Writeup, WriteupProps } from "./components/Writeup";

const markdown = `

## Motivation

The aim of the project was to produce dynamic art from ordinary images.

## Image Processing Pipeline

## Animation
<Flex>
<iframe width='720' height='540' src='https://www.youtube.com/embed/jaG-7IOh0d0'/>
</Flex>
`;

const frac_props: WriteupProps = {
  title: "Fractalize.JS",
  short:
    "A tool for generating complex images composed of Julia Sets, in browser",
  markdown: markdown,
  date: "2021",
  tags: ["ML", "Fractals", "Web", "JS"],
};

export const Fractalize = () => {
  return <Writeup {...frac_props}></Writeup>;
};
