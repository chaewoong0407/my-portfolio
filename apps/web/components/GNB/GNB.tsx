import { CloseIcon } from "@chakra-ui/icons";
import { Flex, Heading } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { GNBContainer, Overlay } from "./GNB.styled";

interface GNBProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const GNB = ({ isOpen, setIsOpen }: GNBProps) => {
  return (
    <Overlay open={isOpen}>
      <GNBContainer open={isOpen}>
        <CloseIcon
          onClick={() => setIsOpen(false)}
          position={"absolute"}
          right={"20px"}
          top={"20px"}
          boxSize={5}
        />
        <Flex direction={"column"} gap={6}>
          <Heading>Introduction</Heading>
          <Heading>Introduce</Heading>
          <Heading>Introduce</Heading>
          <Heading>Introduce</Heading>
        </Flex>
      </GNBContainer>
    </Overlay>
  );
};
