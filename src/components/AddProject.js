import React, { useState } from "react";
import { Flex, Input, Box, Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { SmallAddIcon } from "@chakra-ui/icons";
import { useFirestore } from "react-redux-firebase";

export var AddProject = function () {
  const [show, setShow] = useState(false);
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
        <Box data-testid="add-project-inner">
          <Input
            mt={4}
            focusBorderColor="teal.400"
            data-testid="project-name"
            onChange={(e) => setProjectName(e.target.value)}
            value={projectName}
            placeholder="Name your project"
            variant="flushed"
            autoFocus
          />
          <Flex mt={4} mb={4}>
            <Button
              mr={4}
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
        <Button
          mt={6}
          pl={2}
          data-testid="add-project-action"
          justifyContent="flex-start"
          variant="ghost"
          _focus={{ outline: "none" }}
          rightIcon={<SmallAddIcon color="teal.500" boxSize={6} />}
          onClick={() => setShow(!show)}
          onKeyDown={() => setShow(!show)}
        >
          Add Project
        </Button>
      )}
    </div>
  );
};
