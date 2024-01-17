import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import { IntroduceContainer } from "./Introduce.styled";

export const Introduce = () => {
  return (
    <IntroduceContainer>
      <Heading>Introduction</Heading>
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
          <Divider height={"10px"} />
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
          </Box>
        </Box>
      </Flex>
    </IntroduceContainer>
  );
};
