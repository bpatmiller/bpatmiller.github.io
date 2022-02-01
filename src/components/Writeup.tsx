import { Flex, Heading, Box, Text, Badge, Image, Link } from "@chakra-ui/react";
import React from "react";
import Markdown from "markdown-to-jsx";
import { ContentLink, CodeLink } from "./ContentLink";

interface WriteupProps {
  title: string;
  markdown: string;
  short: string;
  date: string;
  tags: string[];
  contentLink: string;
  codeLink: string;
}

const HBar = () => {
  return (
    <Box margin="auto" textAlign="center">
      · · ·
    </Box>
  );
};

const genColor = (tagName: string) => {
  const colors = ["cyan", "pink", "green", "orange", "red", "purple"];
  const hash = tagName.charCodeAt(0) % colors.length;
  return colors[hash];
};

const Writeup = (props: WriteupProps) => {
  return (
    <Flex
      margin={0}
      mb={16}
      maxWidth={800}
      p={0}
      direction="column"
      align="basline"
    >
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

      <Box className="subhead" mb={4} fontStyle="italic">
        {props.date} - {props.short}
      </Box>

      {/* links */}
      <Flex justify="center" gridGap={4}>
        {props.contentLink && (
          <ContentLink
            colorScheme="orange"
            variant="outline"
            link={props.contentLink}
          />
        )}
        {props.codeLink && (
          <CodeLink
            colorScheme="purple"
            variant="outline"
            link={props.codeLink}
          />
        )}
      </Flex>

      {/* markdown body */}

      <Markdown
        options={{
          overrides: {
            hr: { component: HBar },
            h1: {
              component: Heading,
            },
            h2: {
              component: Heading,
              props: {
                fontSize: "1.5em",
                mt: 4,
                mb: 2,
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
            },
            a: {
              component: Link,
              props: {
                borderRadius: "4",
                border: "1px solid",
                padding: "1",
              },
            },
            li: {
              component: Text,
              props: {
                ml: 4,
                as: "li",
              },
            },
            Image: {
              component: Image,
            },
            Flex: {
              component: Flex,
              props: {
                margin: "auto",
                justify: "center",
                align: "center",
                padding: 2,
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
