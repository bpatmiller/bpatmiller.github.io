import React from "react";
import { Writeup, WriteupProps } from "../components/Writeup";

const markdown = `
`;

const ray_props: WriteupProps = {
  title: "Raytracer",
  markdown: markdown,
  short:
    "Parallelized raytracer written in C++ with Bounded Volume Heirarchy acceleration, depth of field, cube and texture mapping, and adaptive supersampling",
  date: "2019",
  tags: ["C++"],
};

export const Raytracer = () => {
  return <Writeup {...ray_props}></Writeup>;
};
