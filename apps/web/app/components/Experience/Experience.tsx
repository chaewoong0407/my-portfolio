import { LinkIcon } from "@chakra-ui/icons";
import { Box, Button, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import { experienceData } from "./Experience.const";
import { ExperienceContainer } from "./Experience.styled";

export const Experience = () => {
  return (
    <ExperienceContainer>
      <Heading>Experience</Heading>
      <Flex gap={100} padding={"36px"} justify={"center"}>
        <Box width={"100%"}>
          {experienceData.map((data, index) => (
            <Box key={index}>
              <Flex align={"end"} gap={4}>
                <Heading size={"lg"}>{data.company}</Heading>
                <Text fontWeight={"bold"}>{data.tenure}</Text>
              </Flex>
              <Text fontWeight={"bold"} fontSize={20} mt={2}>
                {data.title}
              </Text>
              <Divider width={"100%"} height={"10px"} />
              {data.projects.map((item, index) => (
                <Flex mt={6}>
                  <Flex key={index} direction={"column"} flex={1.6}>
                    <Flex align={"center"}>
                      <Text fontWeight={"bold"} fontSize={20}>
                        {item.name}
                      </Text>
                      <LinkIcon
                        ml={2}
                        color="red.500"
                        onClick={() => open(item.link)}
                      />
                      <Text fontSize={14} fontWeight={"bold"} ml={2}>
                        {item.period}
                      </Text>
                    </Flex>
                    <Flex direction="column" gap={2} mt={4}>
                      {item.responsibilities.map((item, index) => (
                        <Flex align={"center"} ml={4} gap={3}>
                          <Box
                            width={"6px"}
                            height={"6px"}
                            borderRadius={99}
                            bgColor={"black"}
                          />
                          <Text fontSize={16} key={index}>
                            {item}
                          </Text>
                        </Flex>
                      ))}
                    </Flex>
                  </Flex>
                  <Flex flex={1} padding={10} gap={3} flexWrap={"wrap"}>
                    {item.stack.map((item, index) => (
                      <Button colorScheme="gray" key={index}>
                        {item}
                      </Button>
                    ))}
                  </Flex>
                </Flex>
              ))}
            </Box>
          ))}
        </Box>
      </Flex>
    </ExperienceContainer>
  );
};
