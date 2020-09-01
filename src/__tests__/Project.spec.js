import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { Project } from "../components/Project";

beforeEach(cleanup);

jest.mock("../firebase", () => ({
  firebase: {
    firestore: jest.fn(() => ({
      collection: jest.fn(() => ({
        doc: jest.fn(() => ({
          delete: jest.fn(() =>
            Promise.resolve("Never mock firebase, but I did!")
          ),
          update: jest.fn(),
        })),
      })),
    })),
  },
}));

jest.mock("../context", () => ({
  useSelectedProjectValue: jest.fn(() => ({
    setSelectedProject: jest.fn(() => "INBOX"),
  })),
  useProjectsValue: jest.fn(() => ({
    setProjects: jest.fn(),
    projects: [
      {
        name: "🙌 THE OFFICE",
        projectId: "1",
        userId: "jlIFXIwyAL3tzHMtzRbw",
        docId: "michael-scott",
      },
    ],
  })),
}));

describe("<Project />", () => {
  const project = {
    name: "🙌 THE OFFICE",
    projectId: "1",
    userId: "jlIFXIwyAL3tzHMtzRbw",
    docId: "michael-scott",
  };

  describe("Success", () => {
    it("renders our project", () => {
      const { getByText } = render(<Project project={project} />);
      expect(getByText("🙌 THE OFFICE")).toBeTruthy();
    });

    it("renders the delete overlay and then deletes a project using onClick", () => {
      const { queryByTestId, getByText } = render(
        <Project project={project} />
      );

      fireEvent.click(queryByTestId("delete-project"));
      expect(
        getByText("Are you sure you want to delete this project?")
      ).toBeTruthy();

      fireEvent.click(getByText("Delete"));
    });

    it("renders the delete overlay and then deletes a project using onKeyDown", () => {
      const { queryByTestId, getByText } = render(
        <Project project={project} />
      );

      fireEvent.keyDown(queryByTestId("delete-project"), {
        key: "a",
        code: 65,
      });

      fireEvent.keyDown(queryByTestId("delete-project"), {
        key: "Enter",
        code: 13,
      });
      expect(
        getByText("Are you sure you want to delete this project?")
      ).toBeTruthy();

      fireEvent.click(getByText("Delete"));
    });

    it("renders the delete overlay and then cancels using onClick", () => {
      const { queryByTestId, getByText } = render(
        <Project project={project} />
      );

      fireEvent.click(queryByTestId("delete-project"));
      expect(
        getByText("Are you sure you want to delete this project?")
      ).toBeTruthy();

      fireEvent.click(getByText("Cancel"));
    });

    it("renders the delete overlay and then cancels using onKeyDown", () => {
      const { queryByTestId, getByText } = render(
        <Project project={project} />
      );

      fireEvent.keyDown(queryByTestId("delete-project"), {
        key: "a",
        code: 65,
      });

      fireEvent.keyDown(queryByTestId("delete-project"), {
        key: "Enter",
        code: 13,
      });
      expect(
        getByText("Are you sure you want to delete this project?")
      ).toBeTruthy();

      fireEvent.keyDown(getByText("Cancel"), {
        key: "a",
        code: 65,
      });

      fireEvent.keyDown(getByText("Cancel"), {
        key: "Enter",
        code: 13,
      });
    });
  });
});
