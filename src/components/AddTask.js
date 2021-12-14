import React, { useState } from "react";
import moment from "moment";

import { useSelector } from "react-redux";
import { useFirestore } from "react-redux-firebase";

import { Box, Flex, Input, Button } from "@chakra-ui/react";
import { SmallAddIcon } from "@chakra-ui/icons";
import { useSelectedProjectValue } from "../context";

export var AddTask = function () {
  const [taskName, setTaskName] = useState("");
  const [showMain, setShowMain] = useState(false);

  const auth = useSelector((state) => state.firebase.auth);
  const { selectedProject } = useSelectedProjectValue();

  const firestore = useFirestore();

  const addTask = () => {
    const projectId = selectedProject;
    let collatedDate = "";

    if (projectId === "TODAY") {
      collatedDate = moment().format("DD/MM/YYYY");
    } else if (projectId === "NEXT_7") {
      collatedDate = moment().add(7, "days").format("DD/MM/YYYY");
    }

    const task = {
      archived: false,
      projectId,
      task: taskName,
      date: collatedDate,
      userId: auth.uid,
    };

    firestore
      .collection("tasks")
      .add(task)
      .then(() => {
        setTaskName("");
        setShowMain("");
      });
  };

  return (
    <Box mt={4} data-testid="add-task-comp">
      {!showMain && (
        <Button
          mt={1}
          pl={2}
          data-testid="show-main-action"
          justifyContent="flex-start"
          variant="ghost"
          _focus={{ outline: "none" }}
          rightIcon={<SmallAddIcon color="teal.500" boxSize={6} />}
          onClick={() => setShowMain(!showMain)}
          onKeyDown={() => setShowMain(!showMain)}
        >
          Add Task
        </Button>
      )}
      {showMain && (
        <>
          <Input
            focusBorderColor="teal.400"
            data-testid="task-name"
            onChange={(e) => setTaskName(e.target.value)}
            value={taskName}
            placeholder="Name your task"
            variant="flushed"
            autoFocus
          />
          <Flex mt={4}>
            <Button
              mr={4}
              colorScheme="teal"
              disabled={!taskName}
              onClick={addTask}
              data-testid="add-task"
            >
              Add Task
            </Button>
            <Button
              aria-label="Cancel adding a task"
              data-testid="add-task-main-cancel"
              variant="ghost"
              colorScheme="teal"
              onClick={() => setShowMain(false)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setShowMain(false);
                }
              }}
            >
              Cancel
            </Button>
          </Flex>
        </>
      )}
    </Box>
  );
};
