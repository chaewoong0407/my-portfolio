import { ExperienceData } from "./Experience.types";

export const experienceData: ExperienceData[] = [
  {
    company: "(주) 스마일드래곤",
    tenure: "2022.08 ~ 현재",
    title: "프론트엔드 개발자",
    projects: [
      {
        name: "마케팅 24 리뉴얼 개발",
        period: "2023.09 ~ 진행중",
        responsibilities: [
          "TurboRepo와 Next.js App router를 활용한 프로젝트 구축 참여",
          "Client 및 Server Component를 사용하여 프론트엔드 개발",
          "Notion API 연동 및 스타일링 작업",
        ],
        stack: [
          "next.js",
          "styled-components",
          "react-query",
          "typescript",
          "storybook",
        ],
        link: "https://mkt24.co.kr",
      },
      {
        name: "체험뷰 유지보수 및 업데이트",
        period: "2023.01 ~ 현재",
        responsibilities: [
          "체험뷰 수익화를 위한 기획 방향 설정 및 개발",
          "요금제 월정액권을 개선하고 수익화하여 매출 상승에 기여",
          "CS팀과 협업하여 사용성 개선 및 로직 자동화를 통해 CS팀의 업무 효율성 향상",
          "MY 캠페인 데이터의 스크롤 Lazy Loading 구현으로 웹사이트 성능 개선",
        ],
        stack: ["next.js", "styled-components", "typescript"],
        link: "https://chvu.co.kr",
      },
      {
        name: "뷰업 리뉴얼 개발 및 유지보수",
        period: "2022.10 ~ 2023.09",
        responsibilities: [
          "기획자 부재로 주도적인 기획단계 참여 및 기획명세서 작성 (Notion)",
          "Storybook을 이용한 UI 컴포넌트 구축 및 프론트엔드 개발",
          "React-query를 활용한 데이터 패칭",
        ],
        stack: [
          "next.js",
          "emtion-styled",
          "react-query",
          "typescript",
          "storybook",
        ],
        link: "https://viewup.co.kr",
      },
      {
        name: "스마일드래곤 자사 홈페이지 리팩토링",
        period: "2022.08 ~ 2022.10",
        responsibilities: [
          "자사 홈페이지 코드 파악 및 개선점 정리 후 개선 (컴포넌트 구조 세분화, 절대경로 적용)",
          "context-api를 통한 모달 상태관리 작업",
          "네이버 검색엔진 최적화",
        ],
        stack: ["next.js", "emotion-styled", "typescript", "storybook"],
        link: "https://smiledragon.co.kr",
      },
    ],
  },
  {
    company: "(주) 위힐드",
    tenure: "2022.11 ~ 2023.05",
    title: "프론트엔드 개발자",
    projects: [
      {
        name: "자사 앱 라이크핏 리팩토링",
        period: "2022.11 ~ 2023.02",
        responsibilities: [
          "JavaScript(React Native)로 개발된 '라이크핏' 앱을 일부 Typescript로 마이그레이션 작업",
          "HTTP 클라이언트 요청 방식을 fetch -> axios와 react-query로 변경하는 작업",
          "Jest를 이용하여 테스트 코드 작성 경험",
        ],
        stack: [
          "React Native",
          "styled-components",
          "javascript",
          "typescript",
        ],
      },
    ],
  },
];
