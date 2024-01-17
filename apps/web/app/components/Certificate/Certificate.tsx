import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import { CertificateContainer } from "./Certificate.styled";

export const Certificate = () => {
  return (
    <CertificateContainer>
      <Heading
        background={"linear-gradient(to top, skyblue 30%, transparent 30%)"}
        width={"fit-content"}
      >
        Certificate
      </Heading>
      <Box padding={"36px"}>
        <Flex direction={"column"} gap={"4px"}>
          <Heading as="h4" size="md">
            컴퓨터활용능력 2급
          </Heading>
          <Text color={"#868e96"} fontWeight={"bold"} fontSize={16}>
            2019.09
          </Text>
          <Divider borderColor={"#868e96"} />
          <Heading as="h4" size="md">
            ISTQB CTFL
          </Heading>
          <Text color={"#868e96"} fontWeight={"bold"} fontSize={16}>
            2019.07
          </Text>
          <Divider borderColor={"#868e96"} />
          <Heading as="h4" size="md">
            정보처리기능사
          </Heading>
          <Text color={"#868e96"} fontWeight={"bold"} fontSize={16}>
            2019.07
          </Text>
        </Flex>
      </Box>
    </CertificateContainer>
  );
};
