import React from "react";
import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core";
import { Header } from "./components/layout/Header";
import { Content } from "./components/layout/Content";
import { ProjectsProvider, SelectedProjectProvider } from "./context";

export const App = () => {
  return (
    <ThemeProvider>
      <CSSReset />
      <ColorModeProvider>
        <SelectedProjectProvider>
          <ProjectsProvider>
            <main data-testid="application">
              <Header />
              <Content />
            </main>
          </ProjectsProvider>
        </SelectedProjectProvider>
      </ColorModeProvider>
    </ThemeProvider>
  );
};
