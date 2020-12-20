import React from "react";
import { render } from "react-dom";
import { ColorModeScript } from "@chakra-ui/core";
import { App } from "./App";
import "./App.scss";

render(
  <>
    <ColorModeScript initialColorMode="light" />
    <App />
  </>,
  document.getElementById("root")
);
