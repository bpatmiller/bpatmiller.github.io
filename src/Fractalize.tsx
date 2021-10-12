import React from "react";
import { Layout } from "./components/Layout";
import { Writeup, WriteupProps } from "./Writeup";

const frac_props: WriteupProps = {
  title: "Fractalize.JS",
  paragraphs: ["hello", "hi", "test"],
  date: "2021",
  tags: ["ML", "Fractals", "Web", "JS"],
};

export const Fractalize = () => {
  return <Writeup {...frac_props}></Writeup>;
};
