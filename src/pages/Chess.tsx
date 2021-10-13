import React from "react";
import { Writeup, WriteupProps } from "../components/Writeup";

const chess_props: WriteupProps = {
  title: "Chess",
  markdown: "",
  short: "A simple chessboard with hand-drawn pieces and eclectic art style",
  date: "2021",
  tags: ["Frontend", "Web", "JS"],
};

export const Chess = () => {
  return <Writeup {...chess_props}></Writeup>;
};
