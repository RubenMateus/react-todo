import React from "react";
import {
  Flex,
  Image,
  Grid,
  Box,
  IconButton,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { AddIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import AddQuickTask from "../AddQuickTask";

export var Header = function () {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
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
          <Grid
            autoFlow
            gridAutoColumns
            templateColumns="repeat(2, 1fr)"
            gap={6}
          >
            <IconButton
              aria-label="Add Task"
              icon={<AddIcon />}
              onClick={onOpen}
            />
            <IconButton
              icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
            />
          </Grid>
        </Flex>
      </Box>
      <AddQuickTask onClose={onClose} isOpen={isOpen} />
    </>
  );
};
