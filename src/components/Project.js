import React, { useState } from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import PropTypes from "prop-types";
import {
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  useColorMode,
} from "@chakra-ui/react";
import { MdSettings } from "react-icons/md";
import { useFirestore } from "react-redux-firebase";
import { useSelectedProjectValue } from "../context";
import { CircleIcon } from "./icons";
import { getRandomColor } from "../helpers";

export const Project = ({ project }) => {
  const [showIcon, setShowIcon] = useState(false);
  const { selectedProject, setSelectedProject } = useSelectedProjectValue();
  const { colorMode } = useColorMode();

  const firestore = useFirestore();

  const deleteProject = () => {
    firestore
      .collection("projects")
      .doc(project.id)
      .delete()
      .then(() => {
        setSelectedProject("INBOX");
      });
  };

  return (
    <Flex
      alignItems="center"
      sx={{ borderRadius: "0.375rem" }}
      _hover={{
        backgroundColor:
          colorMode === "light" ? "#E2E8F0" : "rgba(255, 255, 255, 0.16)",
      }}
      mt={1}
      onMouseOver={() => setShowIcon(true)}
      onMouseLeave={() => setShowIcon(false)}
      onClick={() => setSelectedProject(project.id)}
    >
      <Button
        pl={1}
        isFullWidth
        justifyContent="flex-start"
        variant="ghost"
        isActive={selectedProject === project.id}
        _focus={{ outline: "none" }}
        leftIcon={<CircleIcon boxSize={3} color={getRandomColor()} />}
      >
        {project.name}
      </Button>
      {showIcon && (
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<MdSettings />}
            size="xs"
            variant="ghost"
            _focus={{ outline: "none" }}
            _active={{ backgroundColor: "transparent" }}
            _hover={{ backgroundColor: "transparent" }}
          />
          <MenuList p={0} size={6}>
            <MenuItem icon={<FaEdit />}>Edit</MenuItem>
            <MenuItem onClick={deleteProject} icon={<FaTrashAlt />}>
              Delete
            </MenuItem>
          </MenuList>
        </Menu>
      )}
    </Flex>
  );
};

Project.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};
