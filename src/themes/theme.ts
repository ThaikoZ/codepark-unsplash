import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { menuTheme } from "./menuTheme";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  components: {
    Menu: menuTheme,
    // Popover: popoverTheme,
  },
});

export default theme;
