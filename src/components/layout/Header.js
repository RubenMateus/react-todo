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
} from "@chakra-ui/react";
import { AddIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
// import { useSelector } from "react-redux";
import { AddTask } from "../AddTask";

export const Header = () => {
  const [shouldShowMain, setShouldShowMain] = useState(false);
  const [showQuickAddTask, setShowQuickAddTask] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  // const profile = useSelector((state) => state.firebase.profile);
  // console.log(profile);

  // const auth = useSelector((state) => state.firebase.auth);
  // console.log(auth);

  // const status = useSelector((state) => state);
  // console.log(status);

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
          <Image w={10} h={10} src="/images/logo.png" alt="Todo it" />
        </Flex>
        <Grid autoFlow gridAutoColumns templateColumns="repeat(2, 1fr)" gap={6}>
          <IconButton
            aria-label="Add Task"
            icon={<AddIcon />}
            onClick={() => {
              setShowQuickAddTask(true);
              setShouldShowMain(true);
              onOpen();
            }}
          />
          <IconButton
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
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
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
