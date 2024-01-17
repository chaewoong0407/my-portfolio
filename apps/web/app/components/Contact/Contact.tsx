import { Box, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import Github from "../../assets/github-mark.svg";
import { ContactContainer } from "./Contact.styled";

export const Contact = () => {
  return (
    <ContactContainer>
      <Heading
        background={"linear-gradient(to top, skyblue 30%, transparent 30%)"}
        width={"fit-content"}
      >
        Contact
      </Heading>
      <Box padding={"36px"}>
        <Text>E-mail : dksocdnd@gmail.com</Text>
        <Text>Phone : 010-6586-5519</Text>
        <Image
          src={Github}
          alt="깃헙"
          width={30}
          height={30}
          style={{ marginTop: 10 }}
          onClick={() => open("https://github.com/chaewoong0407")}
        />
      </Box>
    </ContactContainer>
  );
};
