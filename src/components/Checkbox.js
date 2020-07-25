import React from "react";
import { firebase } from "firebase";
import PropTypes from "prop-types";

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
