/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Flex, Text, Input, Box, Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { SmallAddIcon } from "@chakra-ui/icons";
import { useFirestore } from "react-redux-firebase";

export const AddProject = ({ shouldShow = false }) => {
  const [show, setShow] = useState(shouldShow);
  const [projectName, setProjectName] = useState("");

  const firestore = useFirestore();
  const auth = useSelector((state) => state.firebase.auth);

  const addProject = () => {
    const project = {
      name: projectName,
      userId: auth.uid,
    };

    firestore
      .collection("projects")
      .add(project)
      .then(() => {
        setProjectName("");
        setShow(false);
      });
  };

  return (
    <div data-testid="add-project">
      {show && (
        <Box
          w="95%"
          className="add-project__input"
          data-testid="add-project-inner"
        >
          <Input
            focusBorderColor="teal.400"
            data-testid="project-name"
            onChange={(e) => setProjectName(e.target.value)}
            value={projectName}
            placeholder="Name your project"
            variant="flushed"
            autoFocus
          />
          <Flex mt={4}>
            <Button
              colorScheme="teal"
              onClick={() => addProject()}
              data-testid="add-project-submit"
            >
              Add Project
            </Button>
            <Button
              aria-label="Cancel adding project"
              data-testid="hide-project-overlay"
              variant="ghost"
              colorScheme="teal"
              onClick={() => setShow(false)}
              onKeyDown={(e) => {
                if (e.key === "Enter") setShow(false);
              }}
            >
              Cancel
            </Button>
          </Flex>
        </Box>
      )}
      {!show && (
        <Flex
          data-testid="add-project-action"
          align="center"
          width="100%"
          h={8}
          m={1}
          cursor="pointer"
          aria-label="Add Project"
          onClick={() => setShow(!show)}
          onKeyDown={() => setShow(!show)}
        >
          <SmallAddIcon color="teal.500" boxSize={6} />
          <Text ml={2}>Add Project</Text>
        </Flex>
      )}
    </div>
  );
};

AddProject.propTypes = {
  shouldShow: PropTypes.bool.isRequired,
};
