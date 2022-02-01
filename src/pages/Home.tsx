import * as React from "react";

import { ContentGrid } from "../components/ContentGrid";

const entries = [
  { title: "Theremin", link: "theremin", img: "./theremin.png" },
  { title: "CVTrack", link: "cvtrack", img: "./cvtrack.png" },
  { title: "Fractalize.JS", link: "fractalize", img: "/frac.png" },
  { title: "Audio Reactive GAN", link: "argan", img: "/gan.png" },
  { title: "Chessboard", link: "chess", img: "/chess.png" },
  { title: "Multiple Interacting Fluids", link: "gfm2d", img: "/gfm2d.png" },
  { title: "Raytracer", link: "raytracer", img: "/raytracer.png" },
  { title: "BulbGL", link: "bulb", img: "/bulb.png" },
];

export const Home = () => {
  return <ContentGrid contents={entries} />;
};
