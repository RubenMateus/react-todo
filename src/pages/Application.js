import React from "react";
import { PrivateRoute } from "../components/hocs/PrivateRoute";
import { Header } from "../components/layout/Header";
import { Content } from "../components/layout/Content";
import { SelectedProjectProvider } from "../context";

export var Application = function () {
  return (
    <PrivateRoute path="/">
      <SelectedProjectProvider>
        <main data-testid="application">
          <Header />
          <Content />
        </main>
      </SelectedProjectProvider>
    </PrivateRoute>
  );
};
