import { ReactChild, ReactChildren } from "react";

interface ChildType {
  children: ReactChild | ReactChildren;
}

interface ColorModeProps {
  colormode: string;
  toggleColormode: any;
}

export type { ChildType, ColorModeProps };
