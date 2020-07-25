import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import PropTypes from "prop-types";
import { useProjectsValue, useSelectedProjectValue } from "../context";
import { firebase } from "../firebase";

export const Project = ({ project }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const { projects, setProjects } = useProjectsValue();
  const { setSelectedProject } = useSelectedProjectValue();

  const deleteProject = (docId) => {
    firebase
      .firestore()
      .collection("projects")
      .doc(docId)
      .delete()
      .then(() => {
        setProjects([...projects]);
        setSelectedProject("INBOX");
      });
  };

  return (
    <>
      <span className="sidebar__dot">•</span>
    </>
  );
};

Project.propTypes = {
  project: PropTypes.shape.isRequired,
};
