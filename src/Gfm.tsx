import React from "react";
import { Layout } from "./components/Layout";
import { Writeup, WriteupProps } from "./Writeup";

const gfm_props: WriteupProps = {
  title: "Multiple Interacting Fluids",
  paragraphs: ["hello", "hi", "test"],
  date: "2019",
  tags: ["Fluid Simulation", "Python"],
};

export const Gfm = () => {
  return <Writeup {...gfm_props}></Writeup>;
};
