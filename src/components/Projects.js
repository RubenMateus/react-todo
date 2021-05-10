import React from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import { Text } from "@chakra-ui/react";
import { Project } from "./Project";

export const Projects = () => {
  const auth = useSelector((state) => state.firebase.auth);

  useFirestoreConnect([
    {
      collection: "projects",
      where: ["userId", "==", auth.uid],
    },
  ]);

  const projects =
    useSelector((state) => state.firestore.ordered.projects) || [];

  if (!projects.length) {
    return (
      <Text pb={8} color="gray" as="em">
        You have no projects...
      </Text>
    );
  }

  return projects.map((project) => (
    <Project key={project.id} project={project} />
  ));
};
