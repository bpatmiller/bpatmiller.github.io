import { useColorMode } from "@chakra-ui/color-mode";
import React from "react";

import ltbg from "../ltbg.svg";
import dkbg from "../dkbg.svg";

const Background = ({ children }: any) => {
  const { colorMode } = useColorMode();

  const style = {
    backgroundImage: colorMode === "light" ? `url(${ltbg})` : `url(${dkbg})`,
    backgroundColor: colorMode === "light" ? "#F7FAFC" : "#171923",

    backgroundRepeat: "repeat",
    backgroundAttachment: "fixed",
    overflow: "scroll",
    backgroundSize: "auto",
    height: "100vh",
  };

  return (
    <div id="bg-container" className="bg-container" style={style}>
      {children}
    </div>
  );
};

export default Background;
