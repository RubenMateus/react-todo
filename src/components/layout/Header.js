import React, { useState } from "react";
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
  Tooltip,
} from "@chakra-ui/core";
import { AddTask } from "../AddTask";

export const Header = () => {
  const [shouldShowMain, setShouldShowMain] = useState(false);
  const [showQuickAddTask, setShowQuickAddTask] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box as="header" bg="teal.500" h="3rem" w="100%" data-testid="header">
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        bg="teal.500"
        h="100%"
        maxW={1000}
        m="auto"
      >
        <Flex mr={5}>
          <Image size="35px" src="/images/logo.png" alt="Todo it" />
        </Flex>
        <Grid autoFlow gridAutoColumns templateColumns="repeat(2, 1fr)" gap={6}>
          <Tooltip
            hasArrow
            label="Add task"
            bg="black"
            color="white"
            placement="bottom"
            h={15}
          >
            <IconButton
              aria-label="Add Task"
              icon="add"
              onClick={() => {
                setShowQuickAddTask(true);
                setShouldShowMain(true);
                onOpen();
              }}
            />
          </Tooltip>
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
