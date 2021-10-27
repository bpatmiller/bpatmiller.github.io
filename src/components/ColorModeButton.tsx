import React from "react";
import { useColorMode } from "@chakra-ui/react";
import { IoMdMoon } from "react-icons/io";

const ColorModeButton: React.FC = () => {
  const { toggleColorMode } = useColorMode();

  return <IoMdMoon size="2em" onClick={() => toggleColorMode()} />;
};

export default ColorModeButton;
