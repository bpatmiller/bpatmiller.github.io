import React from "react";
import { Writeup, WriteupProps } from "../components/Writeup";

const markdown = `

## Animation
<Flex overflow='hidden' flexDirection='column'>
<iframe style='flex-grow:1' src='https://www.youtube.com/embed/jaG-7IOh0d0'/>
</Flex>

## Motivation

The aim of the project was to produce dynamic art from ordinary images.
The project makes use of a technique to approximate a closed curve on the complex plane with a Julia set from Fekete polynomials. Read more about it [here](https://arxiv.org/abs/1607.05055).

## Using the software

- Drag an image from your computer onto the page to \`fractalize\` it
- Click and drag on fractal display to pan the view
- Hover over the fractal output to animate it
- Scroll to zoom in and out
- Press \`s\` to hide/show the source image
- Press \`SPACEBAR\` to disable/enable animation

## Image Processing Pipeline

Source images are segmented using pretrained [DeepLab](https://github.com/tensorflow/tfjs-models/blob/master/deeplab/README.md) tensorflow.js models. The user can select which segmentation model to use.
The segmented image is broken up into connected subsets, to satisfy that each subset is a [closed jordan curve](https://en.wikipedia.org/wiki/Jordan_curve_theorem). Parallel to this, the source image color pallete is extracted for coloring the generated fractals.

---

For each connected subset, we find \`n\` Leja points of that set.
In this context, a Leja point can be thought of "the most efficient bounding point", so a set of Leja points provides an efficient description of a curve's boundary.
These Leja points are required to find the Fekete Polynomial of that shape, which will be used by the WebGL shaders to generate fractals.

---

The fragment shader iterates each fragment as a complex point through the generated Fekete polynomial, and shades based on the resulting iterations to divergence and total distance travelled by the point.
This is the "standard method" of generating iterative fractals using graphics shaders. After shading has been applied, each fractal is colored with a color from the pallete generated earlier.
The many layers of colored fractals are then composed together to render the final result.

## Limitations and further work

Segmentation is a clear limiting factor in this pipeline. The DeepLab models provide reasonable and visually pleasing results with a broad range of real images, but struggles with synthetic images and images that are overly complex.

---

Managing the overlap of fractals is a current limitation that can be overcome. At this point, some results are "muddy" and detailed parts of the generated image are obscured by what should be background components. I plan on implimenting some sort of z-sorting determined by the amount of overlap each fractal has with the convex hull of each other fractal.

---

I have had some version of this project on the backburner for many years, and still have yet to achieve "animating the fractals while preserving their general shape in a visually compelling way". This is also a candidate for future work.

## More technical details

This project was built using Typescript. Three.js is used for WebGL bindings. Tensorflow.js is used for image segmentation.

Snowpack and webpack are used for development and bundling.

This project is currently deployed through Github Pages.

`;

const frac_props: WriteupProps = {
  title: "Fractalize.JS",
  short:
    "A tool for generating complex images composed of Julia Sets, in browser",
  markdown: markdown,
  date: "2021",
  tags: ["ML", "Fractals", "Web", "JS"],
  contentLink: "https://bpatmiller.github.io/fractalize.js/",
  codeLink: "https://github.com/bpatmiller/fractalize.js",
};

export const Fractalize = () => {
  return <Writeup {...frac_props}></Writeup>;
};
