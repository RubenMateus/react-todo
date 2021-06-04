import React from "react";
import { render, cleanup } from "@testing-library/react";
import { App } from "../App";

beforeEach(cleanup); // clean meeeeeeeeee!

jest.mock("../firebase", () => ({
  firebase: {
    firestore: jest.fn(() => ({
      collection: jest.fn(() => ({
        add: jest.fn(() => Promise.resolve("Never mock firebase")),
        where: jest.fn(() => ({
          orderBy: jest.fn(() => ({
            get: jest.fn(() =>
              Promise.resolve({ docs: [], message: "Never mock firebase" })
            ),
          })),
          where: jest.fn(() => ({
            onSnapshot: jest.fn(
              () => () => Promise.resolve("Never mock firebase")
            ),
          })),
        })),
      })),
    })),
  },
}));

describe("<App />", () => {
  it("renders the application", () => {
    const { queryByTestId } = render(<App />);
    expect(queryByTestId("application")).toBeTruthy();
    expect(
      queryByTestId("application").classList.contains("darkmode")
    ).toBeFalsy();
  });

  it("renders the application using dark mode", () => {
    const { queryByTestId } = render(<App darkModeDefault />);
    expect(queryByTestId("application")).toBeTruthy();
    expect(
      queryByTestId("application").classList.contains("darkmode")
    ).toBeTruthy();
  });
});
