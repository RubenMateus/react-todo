import React, { useEffect } from "react";
import { Box, Text, List, ListItem, Checkbox } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useFirestoreConnect, useFirestore } from "react-redux-firebase";
import { AddTask } from "./AddTask";
import { useSelectedProjectValue } from "../context";
import { staticProjects } from "../constants";

export var Tasks = function () {
  const { selectedProject } = useSelectedProjectValue();
  const firestore = useFirestore();
  const auth = useSelector((state) => state.firebase.auth);

  useFirestoreConnect([
    {
      collection: "tasks",
      where: [
        ["projectId", "==", selectedProject],
        ["userId", "==", auth.uid],
        ["archived", "==", false],
      ],
      populates: [{ child: "project", root: "projects" }],
    },
  ]);

  const { projects = [], tasks = [] } = useSelector(
    (state) => state.firestore.ordered
  );

  const projectName = projects
    .concat(staticProjects)
    .find((proj) => proj.id === selectedProject)?.name;

  useEffect(() => {
    document.title = `${projectName}: Tasks`;
  });

  const archiveTask = (id) => {
    firestore.collection("tasks").doc(id).update({
      archived: true,
    });
  };

  return (
    <Box
      w={750}
      p={8}
      pt={6}
      minHeight="94.5vh"
      data-testid="tasks"
      borderRight="1px"
      borderRightColor="gray.200"
    >
      <Text fontSize="2xl" fontWeight="bold" data-testid="project-name">
        {projectName}
      </Text>
      <List pt={4} pb={4} spacing={3}>
        {tasks.length === 0 ? (
          <Text as="i">No Tasks...</Text>
        ) : (
          tasks.map((task) => (
            <ListItem key={`${task.id}`}>
              <Checkbox
                isChecked={task.archived}
                colorScheme="teal"
                aria-label={`Mark ${task} as done?`}
                data-testid="checkbox-action"
                onChange={() => archiveTask(task.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") archiveTask(task.id);
                }}
              >
                <Text>{task.task}</Text>
              </Checkbox>
            </ListItem>
          ))
        )}
      </List>

      <AddTask />
    </Box>
  );
};
