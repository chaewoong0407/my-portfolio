"use client";

import { Flex } from "@chakra-ui/react";
import { Certificate } from "../Certificate";
import { Contact } from "../Contact";
import { Education } from "../Education";
import { Experience } from "../Experience";
import { Introduce } from "../Introduce";

export const ClientPage = () => {
  return (
    <Flex direction={"column"} width={"100%"} gap={"20px"}>
      <Introduce />
      <Experience />
      <Education />
      <Certificate />
      <Contact />
    </Flex>
  );
};
