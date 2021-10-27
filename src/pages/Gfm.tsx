import React from "react";
import { Writeup, WriteupProps } from "../components/Writeup";

const gfm_props: WriteupProps = {
  title: "Multiple Interacting Fluids",
  markdown: "",
  short:
    "Simulation of multiple interacting fluids (with varying density, chemical reactions, and fluid boundary projection) in 2-dimensions. Part of a semester long undergraduate reading and research course on fluid simulation .",
  date: "2019",
  tags: ["Fluid Simulation", "Python", "C++"],
  codeLink: "https://github.com/bpatmiller/gfm2d",
};

export const Gfm = () => {
  return <Writeup {...gfm_props}></Writeup>;
};
