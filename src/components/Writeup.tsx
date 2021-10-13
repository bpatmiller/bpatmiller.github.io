import { Flex, Heading, Box, Text, Badge } from "@chakra-ui/layout";
import React from "react";
import Markdown from "markdown-to-jsx";

interface WriteupProps {
  title: string;
  markdown: string;
  short: string;
  date: string;
  tags: string[];
}

const genColor = (tagName: string) => {
  const colors = ["cyan", "pink", "green", "orange", "red", "purple"];
  const hash = tagName.charCodeAt(0) % colors.length;
  return colors[hash];
};

const Writeup = (props: WriteupProps) => {
  return (
    <Flex margin="auto" maxWidth={800} p={8} direction="column" align="basline">
      <Flex justify="space-between" align="baseline" gridColumnGap={8}>
        <Box>
          <Heading>{props.title}</Heading>
        </Box>
        <Box>
          {props.tags.map((x: string) => (
            <Badge colorScheme={genColor(x)} m={1}>
              {x}
            </Badge>
          ))}
        </Box>
      </Flex>

      <Box className="subhead" mb={8} fontStyle="italic">
        {props.date} - {props.short}
      </Box>

      <Markdown
        options={{
          overrides: {
            h1: {
              component: Heading,
            },
            h2: {
              component: Heading,
              props: {
                fontSize: "1.5em",
              },
            },
            h3: {
              component: Heading,
              props: {
                fontSize: "1em",
              },
            },
            p: {
              component: Text,
              props: {
                // color: "red",
              },
            },
          },
        }}
      >
        {props.markdown}
      </Markdown>
    </Flex>
  );
};

export type { WriteupProps };
export { Writeup };
