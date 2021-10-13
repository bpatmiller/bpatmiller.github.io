import React from "react";
import { useColorMode } from "@chakra-ui/react";
import { IoMdMoon } from "react-icons/io";
import { ColorModeProps } from "./util";

const ColorModeButton: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IoMdMoon
      size="2em"
      // color={colorMode === "light" ? "black" : "white"}
      onClick={() => toggleColorMode()}
    />
  );
};

export default ColorModeButton;
