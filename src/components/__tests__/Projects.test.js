import React from "react";
import { render, cleanup } from "@testing-library/react";
import { useSelector } from "react-redux";
import { Projects } from "../Projects";

beforeEach(cleanup);

jest.mock("../../context", () => ({
  useSelectedProjectValue: jest.fn(() => ({
    setSelectedProject: jest.fn(() => "INBOX"),
  })),
}));

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
}));

describe("<Projects", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it.only("renders with no projects", async () => {
    // auth
    useSelector.mockReturnValueOnce({}).mockReturnValueOnce([]);

    // projects
    // useSelector.mockImplementationOnce(() => null);

    const component = <Projects />;

    const { queryByTestId } = render(component);

    expect(queryByTestId("no-projects")).toBeTruthy();
  });
});
