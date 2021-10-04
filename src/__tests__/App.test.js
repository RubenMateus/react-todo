import React from "react";
import { render, cleanup } from "@testing-library/react";
import { App } from "../App";

beforeEach(cleanup);

describe("<App />", () => {
  it.only("renders the login", () => {
    const { queryByTestId } = render(<App />);

    expect(queryByTestId("login-page")).toBeTruthy();
  });
});
