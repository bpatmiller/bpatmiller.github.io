import { Flex, Heading, Box, Text, Badge } from "@chakra-ui/layout";
import React from "react";

interface WriteupProps {
  title: string;
  paragraphs: string[];
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
    <Flex p={8} direction="column" align="basline">
      <Flex justify="space-between" align="baseline" gridColumnGap={8}>
        <Box>
          <Heading>{props.title}</Heading>
        </Box>
        <Box>{props.date}</Box>
        <Box>
          {props.tags.map((x: string) => (
            <Badge colorScheme={genColor(x)} m={1}>
              {x}
            </Badge>
          ))}
        </Box>
      </Flex>

      <Box maxW={800}>
        {props.paragraphs.map((x) => (
          <Text>{x}</Text>
        ))}
      </Box>
    </Flex>
  );
};

export { Writeup, WriteupProps };
