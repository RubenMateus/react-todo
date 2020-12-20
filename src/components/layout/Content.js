import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import { Sidebar } from "./Sidebar";
import { Tasks } from "../Tasks";

export const Content = () => (
  <SimpleGrid columns={2} w={1000} m="auto">
    <Sidebar />
    <Tasks />
  </SimpleGrid>
);
