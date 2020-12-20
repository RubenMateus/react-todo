import React, { useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { Flex, Text, Input, Box, Button } from "@chakra-ui/core";
import { SmallAddIcon } from "@chakra-ui/icons";
import { firebase } from "../firebase";
import { useProjectsValue } from "../context";

export const AddProject = ({ shouldShow = false }) => {
  const [show, setShow] = useState(shouldShow);
  const [projectName, setProjectName] = useState("");

  const { projects, setProjects } = useProjectsValue();

  const addProject = () =>
    projectName &&
    firebase
      .firestore()
      .collection("projects")
      .add({
        projectId: uuidv4(),
        name: projectName,
        userId: "ruben", // change this
      })
      .then(() => {
        setProjects([...projects]);
        setProjectName("");
        setShow(false);
      });

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
          />
          <Flex mt={4}>
            <Button
              colorScheme="teal"
              onClick={() => addProject()}
              data-testid="add-project-submit"
              size="md"
            >
              Add Project
            </Button>
            <Button
              aria-label="Cancel adding project"
              data-testid="hide-project-overlay"
              variant="ghost"
              colorScheme="teal"
              color="black"
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
