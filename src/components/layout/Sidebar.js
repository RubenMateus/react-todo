/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  FaChevronDown,
  FaChevronRight,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar,
} from "react-icons/fa";
import {
  Stack,
  List,
  ListItem,
  ListIcon,
  Flex,
  Text,
  Divider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { Projects } from "../Projects";
import { useSelectedProjectValue } from "../../context";
import { AddProject } from "../AddProject";

export const Sidebar = () => {
  const { setSelectedProject } = useSelectedProjectValue();
  const [active, setActive] = useState("inbox");
  const [showProjects, setShowProjects] = useState(true);

  const staticProjects = [
    {
      id: "inbox",
      name: "Inbox",
      ariaLabel: "Show inbox tasks",
      icon: FaInbox,
    },
    {
      id: "today",
      name: "Today",
      ariaLabel: "Show today's tasks",
      icon: FaRegCalendar,
    },
    {
      id: "next_7",
      name: "Next 7 days",
      ariaLabel: "Show tasks for the next 7 days",
      icon: FaRegCalendarAlt,
    },
  ];

  return (
    <Stack
      data-testid="sidebar"
      borderRight="1px"
      borderRightColor="gray.200"
      pt={8}
      spacing={6}
    >
      <List spacing={5} ml={2}>
        {staticProjects.map((proj) => (
          <ListItem
            key={proj.id}
            aria-label={proj.ariaLabel}
            data-testid={proj.id}
            fontWeight={active === proj.id ? "semibold" : ""}
            _hover={{ fontWeight: "semibold" }}
            onClick={() => {
              setActive(proj.id);
              setSelectedProject(proj.id.toUpperCase());
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setActive(proj.id);
                setSelectedProject(proj.id.toUpperCase());
              }
            }}
            cursor="pointer"
          >
            <ListIcon as={proj.icon} />
            {proj.name}
          </ListItem>
        ))}
      </List>
      {/* <div>
        <Flex
          align="center"
          aria-label="Show/hide projects"
          mt={8}
          ml={2}
          width="100%"
          cursor="pointer"
          onClick={() => setShowProjects(!showProjects)}
          onKeyDown={(e) => {
            if (e.key === "Enter") setShowProjects(!showProjects);
          }}
        >
          {showProjects ? <FaChevronDown /> : <FaChevronRight />}
          <Text ml={2} fontSize="md">
            Projects
          </Text>
        </Flex>
      </div> */}
      <Accordion pr="1" allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Projects
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Projects />
            <AddProject />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      {/* {showProjects && <Divider />} */}
      {/* {showProjects && <Projects />}
      {showProjects && <AddProject />} */}
    </Stack>
  );
};
