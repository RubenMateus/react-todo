import React from "react";
import PropTypes from "prop-types";
import { firebase } from "../firebase";

export const Checkbox = ({ id }) => {
  const archiveTask = () => {
    firebase.firestore().collection("tasks").doc(id).update({
      archived: true,
    });
  };

  return (
    <div
      className="checkbox-holder"
      data-testid="checkbox-action"
      role="checkbox"
      aria-checked="false"
      aria-labelledby="archive"
      tabIndex="0"
      onClick={() => archiveTask()}
      onKeyDown={() => archiveTask()}
    >
      <span className="checkbox" />
    </div>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
};
