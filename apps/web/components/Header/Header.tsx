import { HamburgerIcon } from "@chakra-ui/icons";
import { Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { GNB } from "..";
import { HeaderContainer } from "./Header.styled";

export const Header = () => {
  const [isOpenGNB, setIsOpenGNB] = useState(false);

  return (
    <HeaderContainer>
      <Flex
        width={"100%"}
        height={"100%"}
        justifyContent={"space-between"}
        align={"center"}
      >
        <Text fontWeight={"bold"} fontSize={20} color={"rgb(69, 70, 73)"}>
          AN CHAE WOONG
        </Text>
        <HamburgerIcon boxSize={7} onClick={() => setIsOpenGNB(true)} />
      </Flex>
      <GNB isOpen={isOpenGNB} setIsOpen={setIsOpenGNB} />
    </HeaderContainer>
  );
};
