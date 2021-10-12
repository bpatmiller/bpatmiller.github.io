import React from "react";
import { Layout } from "./components/Layout";
import { Writeup, WriteupProps } from "./Writeup";

const gan_props: WriteupProps = {
  title: "Audio Reactive GAN",
  paragraphs: ["hello", "hi", "test"],
  date: "2021",
  tags: ["ML", "Audio", "Python"],
};

export const Argan = () => {
  return <Writeup {...gan_props}></Writeup>;
};
