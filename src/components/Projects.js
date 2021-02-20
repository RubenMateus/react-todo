import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import { useSelectedProjectValue } from "../context";
import { Project } from "./Project";

export const Projects = () => {
  const [active, setActive] = useState(true);
  const { setSelectedProject } = useSelectedProjectValue();

  const auth = useSelector((state) => state.firebase.auth);

  useFirestoreConnect([
    {
      collection: "projects",
      where: ["userId", "==", auth.uid],
    },
  ]);

  const projects =
    useSelector((state) => state.firestore.ordered.projects) || [];

  console.log(projects);

  return projects?.map((project) => (
    <li
      key={project.id}
      data-testid="project-action-parent"
      data-doc-id={project.id}
      className={
        active === project.id ? "active sidebar__project" : "sidebar__project"
      }
    >
      <div
        role="button"
        data-testid="project-action"
        tabIndex={0}
        aria-label={`Select ${project.name} as the task project`}
        onClick={() => {
          setActive(project.id);
          setSelectedProject(project.id);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setActive(project.id);
            setSelectedProject(project.id);
          }
        }}
      >
        <Project project={project} />
      </div>
    </li>
  ));
};

Projects.propTypes = {
  activeValue: PropTypes.bool,
};
