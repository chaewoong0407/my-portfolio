"use client";

import { Box } from "@chakra-ui/react";
import { Experience } from "../Experience";
import { Introduce } from "../Introduce";

export const ClientPage = () => {
  return (
    <Box width={"100%"}>
      <Introduce />
      <Experience />
    </Box>
  );
};
