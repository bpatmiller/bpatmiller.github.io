import React from "react";
import { Writeup, WriteupProps } from "./components/Writeup";

const gan_props: WriteupProps = {
  title: "Audio Reactive GAN",
  paragraphs: ["hello", "hi", "test"],
  date: "2021",
  tags: ["ML", "Audio", "Python"],
};

export const Argan = () => {
  return <Writeup {...gan_props}></Writeup>;
};
