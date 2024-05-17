import React from "react";
import { Writeup, WriteupProps } from "../components/Writeup";

const markdown = `
## About

A virtual theremin powered by the MediaPipe hand detector. The left hand controls a sawtooth synth, the right hand controls and ambient granular synth. The hand detection models work best with well-defined lighting and contrast between the hands and background.

---
`;

const writeup_props: WriteupProps = {
  title: "Theremin",
  markdown: markdown,
  short: "Make music with your hands and a webcam",
  date: "2022",
  tags: ["ML", "Audio"],
  contentLink: "https://bpatmiller.github.io/theremin",
  codeLink: "https://github.com/bpatmiller/theremin",
};

export const Theremin = () => {
  return <Writeup {...writeup_props}></Writeup>;
};
