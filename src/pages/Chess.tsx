import React from "react";
import { Writeup, WriteupProps } from "../components/Writeup";

const markdown = `
## Motivation

I have become obsessed with chess for the last several months.
In the official React docs, there is an example project of tic-tac-toe.
I thought it was a logical step to synthesize these two ideas and learn React while indulging in my obsession.

## Further work

Before any exciting features can be added, I must implement castling and disable moving when inspecting a previous position.

---

After that... I plan on splitting the project into a separate backend and frontend.

The next step after that is to begin working on networked multiplayer.

`;

const chess_props: WriteupProps = {
  title: "Chess",
  markdown: markdown,
  short: "A simple chessboard with hand-drawn pieces and eclectic art style",
  date: "2021",
  tags: ["Frontend", "Web", "JS"],
  codeLink: "https://github.com/bpatmiller/chess",
  contentLink: "https://bpatmiller.github.io/chess/",
};

export const Chess = () => {
  return <Writeup {...chess_props}></Writeup>;
};
