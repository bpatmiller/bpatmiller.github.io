import React from "react";
import { Writeup, WriteupProps } from "../components/Writeup";

const markdown = `
## Background

The project consists of two components - Stylegan2 for image generation, and an audio analyzer.
The audio analyzer does the following:

---

- Finds 'onsets' for low, middle, and high frequencies. Onsets are the sudden increase of magnitude in some frequency space.
- Splits a song into sections using Laplacian Segmentation.
- Finds the 'chromatic weights' - in other words the distribution of notes in a scale at any point in time.
- Determines the most relevant sections of the track when cropping an audio file.

---

Using this information, we can manipulate the latent vectors that we input to Stylegan2 in order to get synchronized animation.
In addition to this, manual/hack-y modifications are performed to tailor the results to the input audio (such as the scrolling transformation in animation #03).


## 01 - Bladee over anime girls

This video was generated using audio from 'I Think...' by Bladee and the anime portraits model from [this page](https://github.com/justinpinkney/awesome-pretrained-stylegan2#Anime-portraits)

<Flex overflow='hidden' flexDirection='column'>
<iframe style='flex-grow:1' src='https://www.youtube.com/embed/hST8RRi3QC0'/>
</Flex>

## 02 - Rev8716 over mountains

This video was generated using audio from 'Rev8617' by Skee Mask and a custom model trained on a dataset of ~1200 images of mountains and volcanos.

<Flex overflow='hidden' flexDirection='column'>
<iframe style='flex-grow:1' src='https://www.youtube.com/embed/fQQU_nPG7XU'/>
</Flex>

## 03 - Outro over drawings

This video was generated using original audio and the figure drawings model from [this page](https://github.com/justinpinkney/awesome-pretrained-stylegan2#figure-drawings)

<Flex overflow='hidden' flexDirection='column'>
<iframe style='flex-grow:1' src='https://www.youtube.com/embed/2g2oluaKL5A'/>
</Flex>

`;

const gan_props: WriteupProps = {
  title: "Audio Reactive GAN",
  markdown: markdown,
  short:
    "A series of audio/visual pieces generated using NVIDIA's stylegan2 and a custom built music analysis tool",
  date: "2021",
  tags: ["ML", "Audio", "Python"],
  contentLink: "",
  codeLink: "",
};

export const Argan = () => {
  return <Writeup {...gan_props}></Writeup>;
};
