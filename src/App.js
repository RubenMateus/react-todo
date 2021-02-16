import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Header } from "./components/layout/Header";
import { Content } from "./components/layout/Content";
import { ProjectsProvider, SelectedProjectProvider } from "./context";

const config = {
  useSystemColorMode: true,
};

const customTheme = extendTheme({ config });

export const App = () => (
  <ChakraProvider theme={customTheme}>
    <SelectedProjectProvider>
      <ProjectsProvider>
        <main data-testid="application">
          <Header />
          <Content />
        </main>
      </ProjectsProvider>
    </SelectedProjectProvider>
  </ChakraProvider>
);
