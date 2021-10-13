import { Flex, Heading, Box, Text, Badge, Image } from "@chakra-ui/react";
import React from "react";
import Markdown from "markdown-to-jsx";

interface MediaDisplayProps {
  type: string;
  src: string;
}
const MediaDisplay: React.FC<MediaDisplayProps> = (
  props: MediaDisplayProps
) => {
  if (props.type === "image") {
    return <Image src={props.src} />;
  } else {
    return (
      <iframe
        src={props.src}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
      />
    );
  }
};

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

      <Box className="subhead" mb={4} fontStyle="italic">
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
                mt: 4,
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
            Image: {
              component: Image,
            },
            Flex: {
              component: Flex,
              props: {
                margin: "auto",
                justify: "center",
                align: "center",
                padding: 4,
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
