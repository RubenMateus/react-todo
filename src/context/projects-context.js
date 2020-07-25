import React, { createContext, useContext } from "react";
import PropTypes from "prop-types";
import { useProjects } from "../hooks";

export const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {
  const { projects, setProjects } = useProjects();

  return (
    <ProjectsContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectsContext.Provider>
  );
};

ProjectsProvider.propTypes = {
  children: PropTypes.shape.isRequired,
};

export const useProjectsValue = () => useContext(ProjectsContext);
