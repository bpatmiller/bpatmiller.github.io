import React from "react";
import { Writeup, WriteupProps } from "../components/Writeup";

const markdown = `
## About

CV Track is a note taking web app. Create an account and store persistent text.

## Technologies

Running Apollo Server (GraphQL) on Node with
Redis on backend. Running Postgres for
database. Running React with Chakra UI library
and URQL GraphQL client for frontend. Frontend
hosted on Vercel, backend hosted on
DigitalOcean with Dokku.
`;

const writeup_props: WriteupProps = {
  title: "CVTrack",
  markdown: markdown,
  short: "A simple notes app",
  date: "2022",
  tags: ["Fullstack", "Typescript"],
  contentLink: "https://www.brendanmiller.io",
  codeLink: "https://gitlab.com/bpatmiller/cv-track",
};

export const Cvtrack = () => {
  return <Writeup {...writeup_props}></Writeup>;
};
