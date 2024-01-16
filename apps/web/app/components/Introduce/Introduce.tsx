import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import { IntroduceContainer } from "./Introduce.styled";

export const Introduce = () => {
  return (
    <IntroduceContainer>
      <Heading color={"white"}>Introduction</Heading>
      <Flex gap={100} padding={"36px"}>
        <Box flex={1}>
          <img
            src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F298565ec-16f3-47a3-9765-e3351d8c1494%2F.jpg?table=block&id=712664f5-8a35-4ff2-abe7-6604e51a208c&spaceId=603cdc66-2a8d-4fc6-9824-969cd7291bb7&width=2000&userId=0996a524-d563-4d78-94f2-4c5d0cc88242&cache=v2"
            alt="프로필사진"
          />
        </Box>
        <Box flex={4}>
          <Heading size={"lg"} color={"white"}>
            매사에 긍정적인 개발자
          </Heading>
          <Divider height={"10px"} />
          <Box mt={"20px"}>
            <Text color={"white"} lineHeight={"30px"}>
              안녕하세요. 2년차 프론트엔드 개발자 안채웅입니다.
              <br />
              항상 상대방의 업무 스타일, 대화법을 파악하고 모두가 원하는
              방향으로 대화가 이어질 수 있도록 노력합니다.
              <br /> 새로운 지식 습득, 변화하는 트렌드에 적응하는 것을
              두려워하지 않으며 다양한 프론트엔드 환경에서의 작업을 고민하고
              공유합니다.
            </Text>
          </Box>
        </Box>
      </Flex>
    </IntroduceContainer>
  );
};
