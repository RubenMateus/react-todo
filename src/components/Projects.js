import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import { useSelectedProjectValue } from "../context";
import { Project } from "./Project";

export const Projects = ({ activeValue = null }) => {
  const [active, setActive] = useState(activeValue);
  const { setSelectedProject } = useSelectedProjectValue();
  // let { projects } = useProjectsValue();

  useFirestoreConnect([{ collection: "projects" }]);

  const projects = useSelector((state) => state.firestore.ordered.projects);
  console.log(projects);

  const status = useSelector((state) => state);
  console.log(status);

  // projects = projects.concat({
  //   name: "test project",
  //   userId: "ruben",
  //   projectId: "1",
  // });

  return projects?.map((project) => (
    <li
      key={project.projectId}
      data-testid="project-action-parent"
      data-doc-id={project.docId}
      className={
        active === project.projectId
          ? "active sidebar__project"
          : "sidebar__project"
      }
    >
      <div
        role="button"
        data-testid="project-action"
        tabIndex={0}
        aria-label={`Select ${project.name} as the task project`}
        onClick={() => {
          setActive(project.projectId);
          setSelectedProject(project.projectId);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setActive(project.projectId);
            setSelectedProject(project.projectId);
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
