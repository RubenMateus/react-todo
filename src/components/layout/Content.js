import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Sidebar } from "./Sidebar";
import { Tasks } from "../Tasks";

export const Content = () => (
  <Grid templateColumns="repeat(5, 1fr)" w={1000} m="auto">
    <GridItem colSpan={4}>
      <Sidebar />
    </GridItem>
    <GridItem>
      <Tasks />
    </GridItem>
  </Grid>
);
