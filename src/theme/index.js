import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  useSystemColorMode: false,
  components: {
    Button: {
      baseStyle: {
        _focus: {
          boxShadow: "none",
        },
      },
    },
    Accordion: {
      baseStyle: {
        button: {
          _focus: {
            boxShadow: "none",
          },
        },
      },
    },
  },
});

export default theme;
