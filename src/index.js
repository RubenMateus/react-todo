import React from "react";
import { render } from "react-dom";
import { ColorModeScript } from "@chakra-ui/react";
import { App } from "./App";
import "./App.scss";

render(
  <div>
    <ColorModeScript initialColorMode="light" />
    <App />
  </div>,
  document.getElementById("root")
);
