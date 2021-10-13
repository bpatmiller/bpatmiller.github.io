import { Flex, Image, Box, Text, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { useSpring, animated } from "react-spring";
import React, { useState } from "react";

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
    <Flex w="100%" h="100%">
      <Flex
        margin="auto"
        wrap="wrap"
        justify="space-around"
        align="center"
        maxWidth="1400px"
        p={4}
        gridRowGap={8}
      >
        {children}
      </Flex>
    </Flex>
  );
};

const ContentGridItem = (props: ContentGridItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const imgProps = useSpring({
    transform: isHovered ? "translate(-10px,-10px)" : "translate(0px,0px)",
  });

  const desktopBoxWidth = "calc(100% * (1/3) - 32px - 1px)";
  const tabletBoxWidth = "calc(100% * (1/2) - 32px - 1px)";
  const mobileBoxWidth = "calc(100% * (1) - 32px - 1px)";

  return (
    <AnimatedBox
      className="shadowed"
      style={imgProps}
      overflow="hidden"
      borderRadius="lg"
      w={[
        mobileBoxWidth,
        mobileBoxWidth,
        tabletBoxWidth,
        desktopBoxWidth,
        desktopBoxWidth,
      ]}
    >
      <LinkBox
        className="caption-container"
        h="100%"
        w="100%"
        rounded="md"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <LinkOverlay href={"/#".concat(props.link)}>
          <Image
            style={{ filter: isHovered ? "none" : "saturate(50%)" }}
            fit="cover"
            w="100%"
            src={props.img}
          ></Image>

          <Flex w="100%" p={1} justify="center" align="center">
            <Text noOfLines={1} className="caption" fontSize="2xl">
              {props.title}
            </Text>
          </Flex>
        </LinkOverlay>
      </LinkBox>
    </AnimatedBox>
  );
};

export { ContentGrid, ContentGridItem };
