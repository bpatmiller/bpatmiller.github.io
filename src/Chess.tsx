import React from "react";
import { Writeup, WriteupProps } from "./Writeup";

const chess_props: WriteupProps = {
  title: "Chess",
  paragraphs: ["hello", "hi", "test"],
  date: "2021",
  tags: ["Frontend", "Web", "JS"],
};

export const Chess = () => {
  return <Writeup {...chess_props}></Writeup>;
};
