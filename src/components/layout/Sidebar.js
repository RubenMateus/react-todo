/* eslint-disable no-unused-vars */
import React from "react";
import {
  Stack,
  List,
  ListItem,
  ListIcon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
} from "@chakra-ui/react";
import { Projects } from "../Projects";
import { useSelectedProjectValue } from "../../context";
import { AddProject } from "../AddProject";
import { staticProjects } from "../../constants";

export const Sidebar = () => {
  const { selectedProject, setSelectedProject } = useSelectedProjectValue();

  const selectProject = (id, e) => {
    setSelectedProject(id);
  };

  return (
    <Stack
      data-testid="sidebar"
      borderRight="1px"
      borderRightColor="gray.200"
      pt={8}
      height="100%"
      spacing={6}
    >
      <List spacing={2} pr={2}>
        {staticProjects.map((proj) => (
          <ListItem
            key={proj.id}
            aria-label={proj.ariaLabel}
            data-testid={proj.id}
            onClick={(e) => selectProject(proj.id, e)}
            onKeyDown={(e) => selectedProject(proj.id, e)}
            cursor="pointer"
          >
            <Button
              pl={2}
              isFullWidth
              justifyContent="flex-start"
              variant="ghost"
              isActive={selectedProject === proj.id}
              _focus={{ outline: "none" }}
            >
              <ListIcon as={proj.icon} />
              {proj.name}
            </Button>
          </ListItem>
        ))}
      </List>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton p={2}>
              <Box flex="1" textAlign="left">
                Projects
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pr={2} pb={1} pt={1} pl={1}>
            <Projects />
            <AddProject />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Stack>
  );
};
