import { Box, Button, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import Github from "../../assets/github-mark.svg";
import { IntroduceContainer } from "./Introduce.styled";

export const Introduce = () => {
  const skills = [
    "HTML",
    "CSS",
    "Javascript",
    "Typescript",
    "Next.js",
    "React",
    "React Native",
    "styled-components",
    "emotion-styled",
    "Storybook",
    "Docker",
  ];

  return (
    <IntroduceContainer>
      <Heading
        background={"linear-gradient(to top, skyblue 30%, transparent 30%)"}
        width={"fit-content"}
      >
        Introduction
      </Heading>
      <Flex gap={100} padding={"36px"}>
        <Box flex={1}>
          <Image
            src={"/Profile.jpg"}
            alt="프로필사진"
            width={400}
            height={400}
          />
        </Box>
        <Box flex={2}>
          <Heading size={"lg"}>매사에 긍정적인 개발자</Heading>
          <Divider height={"10px"} borderColor={"#868e96"} />
          <Box mt={"20px"}>
            <Text lineHeight={"30px"}>
              안녕하세요. 2년차 프론트엔드 개발자 안채웅입니다.
              <br />
              항상 상대방의 업무 스타일, 대화법을 파악하고 모두가 원하는
              방향으로 대화가 이어질 수 있도록 노력합니다.
              <br /> 새로운 지식 습득, 변화하는 트렌드에 적응하는 것을
              두려워하지 않으며 다양한 프론트엔드 환경에서의 작업을 고민하고
              공유합니다.
            </Text>
            <Heading size={"lg"} mt={8}>
              Skills
            </Heading>
            <Divider height={"10px"} borderColor={"#868e96"} />
            <Flex mt={"20px"} flexWrap={"wrap"} gap={3}>
              {skills.map((data, index) => (
                <Button colorScheme="gray" key={index}>
                  {data}
                </Button>
              ))}
            </Flex>
          </Box>
        </Box>
      </Flex>
      <Image
        src={Github}
        width={30}
        height={30}
        alt="깃헙"
        style={{ position: "absolute", bottom: 0, right: 36 }}
        onClick={() => open("https://github.com/chaewoong0407")}
      />
    </IntroduceContainer>
  );
};
