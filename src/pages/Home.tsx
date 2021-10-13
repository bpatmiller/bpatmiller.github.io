import * as React from "react";

import { ContentGrid } from "../components/ContentGrid";

const entries = [
  { title: "Fractalize.JS", link: "fractalize", img: "/frac.png" },
  { title: "Audio Reactive GAN", link: "argan", img: "/gan.jpg" },
  { title: "Chessboard", link: "chess", img: "/chess.png" },
  { title: "Multiple Interacting Fluids", link: "gfm2d", img: "/gfm2d.png" },
];

export const Home = () => {
  return <ContentGrid contents={entries} />;
};
