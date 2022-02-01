import { Flex, Image, Box, Text, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { useSpring, animated } from "react-spring";
import React, { useState } from "react";

const AnimatedBox = animated(Box);
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
      direction="column"
      flexWrap="nowrap"
      maxWidth="1200px"
      alignItems="stretch"
      alignContent="flex-start"
      h="100%"
      w="100%"
      flexGrow={1}
      gridGap={2}
    >
      {children}
    </Flex>
  );
};

const ContentGridItem = (props: ContentGridItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const imgProps = useSpring({
    transform: isHovered ? "translate(-10px,-10px)" : "translate(0px,0px)",
    opacity: isHovered ? "100%" : "0%",
  });
  const hoverProps = useSpring({
    transform: isHovered ? "translate(-10px,-10px)" : "translate(0px,0px)",
  });

  return (
    <>
      <AnimatedImage
        className={isHovered ? "image-underlay" : "hidden"}
        src={props.img}
        style={imgProps}
      ></AnimatedImage>

      <AnimatedBox
        width={["calc(100vw - 48px)", "calc(100vw - 48px)", "350px"]}
        className="shadowed"
        style={hoverProps}
        overflow="hidden"
        borderRadius="lg"
        m="auto"
        p={0}
      >
        <LinkBox
          className="caption-container"
          rounded="md"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <LinkOverlay href={"/".concat(props.link)}>
            <Flex flexGrow={1} w="100%" p={1}>
              <Text
                // width={["calc(100vw - 4px)"]}
                fontStyle={"italic"}
                className="caption"
                fontSize="4xl"
              >
                {props.title}
              </Text>
            </Flex>
          </LinkOverlay>
        </LinkBox>
      </AnimatedBox>
    </>
  );
};

export { ContentGrid, ContentGridItem };
