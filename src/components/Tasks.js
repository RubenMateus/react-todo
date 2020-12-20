import React, { useEffect } from "react";
import { Box, Text, List, ListItem, Checkbox } from "@chakra-ui/core";
import { AddTask } from "./AddTask";
import { useTasks } from "../hooks";
import { collatedTasks } from "../constants";
import { getTitle, getCollatedTitle, collatedTasksExist } from "../helpers";
import { useSelectedProjectValue, useProjectsValue } from "../context";
import { firebase } from "../firebase";

export const Tasks = () => {
  const { selectedProject } = useSelectedProjectValue();
  const { projects } = useProjectsValue();
  let { tasks } = useTasks(selectedProject);

  let projectName = "";

  if (collatedTasksExist(selectedProject) && selectedProject) {
    projectName = getCollatedTitle(collatedTasks, selectedProject)?.name;
  }

  if (
    projects &&
    projects.length > 0 &&
    selectedProject &&
    !collatedTasksExist(selectedProject)
  ) {
    projectName = getTitle(projects, selectedProject)?.name;
  }

  useEffect(() => {
    document.title = `${projectName}: Todos`;
  });

  const archiveTask = (id) => {
    firebase.firestore().collection("tasks").doc(id).update({
      archived: true,
    });
  };

  tasks = tasks.concat({ id: "1123", task: "teste", archived: true });

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
        {tasks.map((task) => (
          <ListItem key={`${task.id}`}>
            <Checkbox
              size="lg"
              colorScheme="teal"
              aria-label={`Mark ${task} as done?`}
              data-testid="checkbox-action"
              onClick={() => archiveTask(task.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter") archiveTask();
              }}
            >
              <Text>{task.task}</Text>
            </Checkbox>
          </ListItem>
        ))}
      </List>

      <AddTask />
    </Box>
  );
};
