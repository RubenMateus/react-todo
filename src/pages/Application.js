import React from "react";
import { PrivateRoute } from "../components/hocs/PrivateRoute";
import { Header } from "../components/layout/Header";
import { Content } from "../components/layout/Content";
import { SelectedProjectProvider } from "../context";

export const Application = () => (
  <PrivateRoute path="/">
    <SelectedProjectProvider>
      <main data-testid="application">
        <Header />
        <Content />
      </main>
    </SelectedProjectProvider>
  </PrivateRoute>
);
