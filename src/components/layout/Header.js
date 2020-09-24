import React, { useState } from "react";
import { FaPizzaSlice } from "react-icons/fa";
import {
  Flex,
  Image,
  Grid,
  Box,
  IconButton,
  useColorMode,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Button,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/core";
import { AddTask } from "../AddTask";

export const Header = () => {
  const [shouldShowMain, setShouldShowMain] = useState(false);
  const [showQuickAddTask, setShowQuickAddTask] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      position="fixed"
      bg="teal.500"
      h="3rem"
      w="100%"
      as="header"
      data-testid="header"
    >
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        bg="teal.500"
        color="white"
        h="100%"
      >
        <Flex mr={5}>
          <Image size="35px" src="/images/logo.png" alt="Todo it" />
        </Flex>
        <div className="settings">
          <ul>
            <li className="settings__add">
              <button
                data-testid="quick-add-task-action"
                aria-label="Quick add task"
                type="button"
                onClick={() => {
                  setShowQuickAddTask(true);
                  setShouldShowMain(true);
                }}
              >
                +
              </button>
            </li>
            <li className="settings__darkmode">
              <button
                data-testid="dark-mode-action"
                aria-label="Darkmode on/off"
                type="button"
                onClick={toggleColorMode}
              >
                <FaPizzaSlice />
              </button>
            </li>
          </ul>
        </div>
        <Grid autoFlow gridAutoColumns templateColumns="repeat(2, 1fr)" gap={6}>
          <IconButton aria-label="Add Task" icon="add" onClick={onOpen} />
          <IconButton
            icon={colorMode === "light" ? "moon" : "sun"}
            onClick={toggleColorMode}
          />
        </Grid>
      </Flex>

      <AddTask
        showAddTaskMain={false}
        shouldShowMain={shouldShowMain}
        showQuickAddTask={showQuickAddTask}
        setShowQuickAddTask={setShowQuickAddTask}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>TESTE</ModalBody>
          <ModalFooter>
            <Button variantColor="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
