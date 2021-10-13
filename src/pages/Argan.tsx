import React from "react";
import { Writeup, WriteupProps } from "../components/Writeup";

const gan_props: WriteupProps = {
  title: "Audio Reactive GAN",
  markdown: "",
  short:
    "A series of audio/visual pieces generated using NVIDIA's stylegan2 and a custom built music analysis tool",
  date: "2021",
  tags: ["ML", "Audio", "Python"],
};

export const Argan = () => {
  return <Writeup {...gan_props}></Writeup>;
};
