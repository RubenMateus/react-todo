import React, { useState, useContext, createContext } from "react";
import PropTypes from "prop-types";

export const SelectedProjectContext = createContext();

export const SelectedProjectProvider = ({ children }) => {
  const [selectedProject, setSelectedProject] = useState("inbox");

  return (
    <SelectedProjectContext.Provider
      value={{ selectedProject, setSelectedProject }}
    >
      {children}
    </SelectedProjectContext.Provider>
  );
};

SelectedProjectProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useSelectedProjectValue = () => useContext(SelectedProjectContext);
