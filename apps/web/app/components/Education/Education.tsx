import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import { EducationContainer } from "./Education.styled";

export const Education = () => {
  return (
    <EducationContainer>
      <Heading
        background={"linear-gradient(to top, skyblue 30%, transparent 30%)"}
        width={"fit-content"}
      >
        Education
      </Heading>
      <Box padding={"36px"}>
        <Flex align={"end"} gap={4}>
          <Heading size="lg">광주 소프트웨어 마이스터고등학교</Heading>
          <Text fontWeight={"bold"}>2019.03 ~ 2022.01</Text>
        </Flex>
        <Divider height={"10px"} borderColor={"#868e96"} />
        <Heading as="h4" size="md" pt={4}>
          소프트웨어 개발과 졸업
        </Heading>
      </Box>
    </EducationContainer>
  );
};
