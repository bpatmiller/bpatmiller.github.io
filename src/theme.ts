import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  colors: {
    pink: {
      "50": "#F7EEEF",
      "100": "#E8CED2",
      "200": "#DAAFB6",
      "300": "#CB8F99",
      "400": "#BD707C",
      "500": "#AE5160",
      "600": "#8C404D",
      "700": "#693039",
      "800": "#462026",
      "900": "#231013",
    },
    red: {
      "50": "#FAECEA",
      "100": "#F1CAC5",
      "200": "#E8A9A0",
      "300": "#E0877B",
      "400": "#D76556",
      "500": "#CE4331",
      "600": "#A53627",
      "700": "#7C281D",
      "800": "#521B14",
      "900": "#290D0A",
    },
    teal: {
      "50": "#ECF9F7",
      "100": "#C9EEE9",
      "200": "#A6E2DA",
      "300": "#84D7CC",
      "400": "#61CCBD",
      "500": "#3EC1AF",
      "600": "#329A8C",
      "700": "#257469",
      "800": "#194D46",
      "900": "#0C2723",
    },
    cyan: {
      "50": "#E8F4FC",
      "100": "#BFE1F7",
      "200": "#97CEF2",
      "300": "#6EBBED",
      "400": "#45A8E8",
      "500": "#1C94E3",
      "600": "#1677B6",
      "700": "#115988",
      "800": "#0B3B5B",
      "900": "#061E2D",
    },
    purple: {
      "50": "#F0EDF7",
      "100": "#D6CDE9",
      "200": "#BCADDC",
      "300": "#A28DCE",
      "400": "#876DC0",
      "500": "#6D4DB2",
      "600": "#573E8E",
      "700": "#412E6B",
      "800": "#2C1F47",
      "900": "#160F24",
    },
    green: {
      "50": "#EDF8EF",
      "100": "#CCEBD3",
      "200": "#ABDEB7",
      "300": "#8AD19B",
      "400": "#69C47F",
      "500": "#48B763",
      "600": "#3A9250",
      "700": "#2B6E3C",
      "800": "#1D4928",
      "900": "#0E2514",
    },
    orange: {
      "50": "#FCF0E9",
      "100": "#F6D4C1",
      "200": "#F0B999",
      "300": "#EA9E70",
      "400": "#E58248",
      "500": "#DF6720",
      "600": "#B2521A",
      "700": "#863E13",
      "800": "#59290D",
      "900": "#2D1506",
    },
  },
  styles: {
    global: (props) => ({
      body: {
        color: mode("gray.900", "gray.50")(props),
        bg: mode("gray.50", "gray.900")(props),
      },
      ".shadowed": {
        boxShadow: mode(
          "6px 6px 8px 2px #A0AEC0",
          "6px 6px 8px 2px black"
        )(props),
      },
      ".caption": {
        color: mode("gray.900", "gray.50")(props),
      },
      ".caption-container": {
        bg: mode("gray.50", "gray.700")(props),
      },
      ".subhead": {
        color: mode("gray.700", "gray.200")(props),
      },
    }),
  },
});

export default theme;
