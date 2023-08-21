import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  components: {
    Popover: {
      baseStyle: {
        motion: {
          enter: {
            transition: "none",
          },
          exit: {
            transition: "none",
          },
        },
      },
    },
  },
});

export default theme;
