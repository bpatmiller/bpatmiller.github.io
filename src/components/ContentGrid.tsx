import { Flex, Image, Box, Text, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { useSpring, animated } from "react-spring";
import React, { useState } from "react";

const AnimatedText = animated(Text);
const AnimatedImage = animated(Image);
const AnimatedBox = animated(Box);

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
      align="center"
      maxWidth="1200px"
      height="100%"
      p={4}
    >
      {children}
    </Flex>
  );
};

const ContentGridItem = (props: ContentGridItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const imgProps = useSpring({
    transform: isHovered ? "translate(-10px,-10px)" : "translate(0px,0px)",
  });

  const textProps = useSpring({
    opacity: isHovered ? "100%" : "30%",
    margin: 0,
    padding: 0,
  });

  return (
    <AnimatedBox
      boxSize={["sm", "sm", "sm", "sm", "md"]}
      m={0}
      mb={[10, 10, 10, 0, 0]}
      style={imgProps}
      backgroundColor="gray.700"
      overflow="hidden"
      borderRadius="lg"
      borderWidth="1px"
      boxShadow="6px 6px 8px 2px #000"
      borderColor="gray.600"
    >
      <LinkBox
        h="100%"
        w="100%"
        rounded="md"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <LinkOverlay href={"/#".concat(props.link)}>
          <AnimatedImage
            fit="cover"
            h="calc(100% - 3em)"
            w="100%"
            src={props.img}
          ></AnimatedImage>

          <Flex
            w="100%"
            p={1}
            justify="center"
            align="center"
            backgroundColor="gray.700"
          >
            <Text fontSize="2xl">{props.title}</Text>
          </Flex>
        </LinkOverlay>
      </LinkBox>
    </AnimatedBox>
  );
};

export { ContentGrid, ContentGridItem };
