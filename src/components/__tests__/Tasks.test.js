import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Tasks } from "../Tasks";
import { useSelectedProjectValue } from "../../context";

jest.mock("../context", () => ({
  useSelectedProjectValue: jest.fn(),
  useProjectsValue: jest.fn(() => ({
    projects: [
      {
        name: "🙌 THE OFFICE",
        projectId: "1",
        userId: "jlIFXIwyAL3tzHMtzRbw",
        docId: "michael-scott",
      },
      {
        name: "🚀 DAILY",
        projectId: "2",
        userId: "jlIFXIwyAL3tzHMtzRbw",
        docId: "daily-office",
      },
      {
        name: "🎯 FUTURE",
        projectId: "3",
        userId: "jlIFXIwyAL3tzHMtzRbw",
        docId: "wake-up",
      },
      {
        name: "📚 WORDS",
        projectId: "4",
        userId: "jlIFXIwyAL3tzHMtzRbw",
        docId: "arcade-fire",
      },
      {
        name: "🎵 MUSIC",
        projectId: "5",
        userId: "jlIFXIwyAL3tzHMtzRbw",
        docId: "bella-ciao",
      },
    ],
  })),
}));

beforeEach(cleanup);

describe("<Tasks />", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders tasks", () => {
    useSelectedProjectValue.mockImplementation(() => ({
      setSelectedProject: jest.fn(() => "INBOX"),
      selectedProject: "INBOX",
    }));

    const { queryByTestId } = render(<Tasks />);
    expect(queryByTestId("tasks")).toBeTruthy();
    expect(queryByTestId("project-name").textContent).toBe("Inbox");
  });

  it("renders a task with a project title", () => {
    useSelectedProjectValue.mockImplementation(() => ({
      setSelectedProject: jest.fn(() => "1"),
      selectedProject: "1",
    }));

    const { queryByTestId } = render(<Tasks />);
    expect(queryByTestId("tasks")).toBeTruthy();
    expect(queryByTestId("project-name").textContent).toBe("🙌 THE OFFICE");
  });

  it("renders a task with a collated title", () => {
    useSelectedProjectValue.mockImplementation(() => ({
      setSelectedProject: jest.fn(() => "INBOX"),
      selectedProject: "INBOX",
    }));

    const { queryByTestId } = render(<Tasks />);
    expect(queryByTestId("tasks")).toBeTruthy();
    expect(queryByTestId("project-name").textContent).toBe("Inbox");
  });
});
