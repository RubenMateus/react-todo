import React from "react";
import PropTypes from "prop-types";
import { Icon } from "@chakra-ui/react";

export var CircleIcon = function ({ boxSize, color }) {
  return (
    <Icon viewBox="0 0 200 200" boxSize={boxSize} color={color}>
      <path
        fill="currentColor"
        d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
      />
    </Icon>
  );
};

CircleIcon.propTypes = {
  boxSize: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};
