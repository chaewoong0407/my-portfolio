"use client";

import { Box } from "@chakra-ui/react";
import { Introduce } from "../Introduce";

export const ClientPage = () => {
  return (
    <Box width={"100%"} height={"100vh"} backgroundColor={"#111111"}>
      <Introduce />
    </Box>
  );
};
