import {
  Flex,
  Spacer,
  Image,
  Box,
  Text,
  Container,
  Link,
} from "@chakra-ui/react";
import { ChildType } from "./util";
import { useSpring, animated } from "react-spring";
import React, { useState } from "react";

const AnimatedText = animated(Text);
const AnimatedImage = animated(Image);

interface ContentGridProps {
  contents: ContentGridItemProps[];
}

interface ContentGridItemProps {
  title: string;
  link: string;
  img: string;
}

const ContentGrid = (props: ContentGridProps) => {
  const children = props.contents.map((x) => (
    <ContentGridItem title={x.title} link={x.link} img={x.img} />
  ));
  return (
    <Flex
      margin="auto"
      wrap="wrap"
      justify="space-around"
      maxWidth="1200px"
      p={8}
    >
      {children}
    </Flex>
  );
};

const ContentGridItem = (props: ContentGridItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const imgProps = useSpring({
    transform: isHovered ? "translate(-20px,-20px)" : "translate(0px,0px)",
  });

  const textProps = useSpring({
    transform: isHovered ? "translate(-20px,-20px)" : "translate(0px,0px)",
    opacity: isHovered ? "100%" : "30%",
    margin: 0,
    padding: 0,
  });

  return (
    <Box
      boxSize={["xs", "sm", "sm", "sm", "md"]}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      p={0}
      m={0}
      paddingTop={[8, 8, 8, 0, 0]}
      // border="1px s/olid red"
    >
      <Link href={props.link}>
        <AnimatedImage
          src={props.img}
          objectFit="fill"
          margin="auto"
          paddingLeft={[4, 4, 8, 8]}
          paddingRight={[4, 4, 8, 8]}
          paddingBottom={0}
          marginBottom={0}
          style={imgProps}
        ></AnimatedImage>
        <Flex
          paddingTop={0}
          paddingBottom={0}
          paddingLeft={[4, 4, 8, 8]}
          justify="flex-start"
          align="flex-start"
        >
          <Box>
            <AnimatedText fontSize="4xl" style={textProps}>
              {props.title}
            </AnimatedText>
          </Box>
        </Flex>
      </Link>
    </Box>
  );
};

export { ContentGrid, ContentGridItem };
