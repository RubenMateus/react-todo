/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaTrashAlt, FaDotCircle } from "react-icons/fa";
import PropTypes from "prop-types";
import { Box } from "@chakra-ui/react";
import { useSelectedProjectValue } from "../context";

export const Project = ({ project }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const { setSelectedProject } = useSelectedProjectValue();

  const deleteProject = (docId) => {
    // firebase
    //   .firestore()
    //   .collection("projects")
    //   .doc(docId)
    //   .delete()
    //   .then(() => {
    //     setProjects([...projects]);
    //     setSelectedProject("INBOX");
    //   });
  };

  return (
    <>
      <span className="sidebar__dot">•</span>
      <Box as={FaDotCircle} boxSize="32px" color="green.400" />
      <span className="sidebar__project-name">{project.name}</span>
      <span
        className="sidebar__project-delete"
        data-testid="delete-project"
        onClick={() => setShowConfirm(!showConfirm)}
        onKeyDown={(e) => {
          if (e.key === "Enter") setShowConfirm(!showConfirm);
        }}
        tabIndex={0}
        role="button"
        aria-label="Confirm deletion of project"
      >
        <FaTrashAlt />
        {showConfirm && (
          <div className="project-delete-modal">
            <div className="project-delete-modal__inner">
              <p>Are you sure you want to delete this project?</p>
              <button
                type="button"
                onClick={() => deleteProject(project.docId)}
              >
                Delete
              </button>
              <span
                onClick={() => setShowConfirm(!showConfirm)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") setShowConfirm(!showConfirm);
                }}
                tabIndex={0}
                role="button"
                aria-label="Cancel adding project, do not delete"
              >
                Cancel
              </span>
            </div>
          </div>
        )}
      </span>
    </>
  );
};

Project.propTypes = {
  project: PropTypes.shape({
    docId: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};
