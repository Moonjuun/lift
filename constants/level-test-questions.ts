import type { LevelTestQuestion } from "@/types/level-test";

/** 자가진단형 레벨 테스트 문항 (11문항) */
export const LEVEL_TEST_QUESTIONS: LevelTestQuestion[] = [
  {
    id: "q1",
    order: 1,
    prompt: "AI 도구(챗GPT, 클로드, 제미나이 등)를 얼마나 써봤나요?",
    options: [
      {
        id: "q1-a",
        label: "거의 안 써봤어요",
        levelScore: { entry: 3 },
        trackScore: { vibe: 1 },
      },
      {
        id: "q1-b",
        label: "가끔 질문하고 답만 받아요",
        levelScore: { entry: 2, beginner: 1 },
        trackScore: { vibe: 1, pro: 1 },
      },
      {
        id: "q1-c",
        label: "업무에 매일 활용해요",
        levelScore: { beginner: 2, intermediate: 1 },
        trackScore: { pro: 2 },
      },
      {
        id: "q1-d",
        label: "프롬프트·워크플로까지 직접 설계해요",
        levelScore: { intermediate: 2, advanced: 1 },
        trackScore: { pro: 2, vibe: 1 },
      },
    ],
  },
  {
    id: "q2",
    order: 2,
    prompt: "코딩이나 프로그래밍 경험이 있나요?",
    helper: "전공·부트캠프·독학 모두 포함이에요.",
    options: [
      {
        id: "q2-a",
        label: "전혀 없어요",
        levelScore: { entry: 3 },
        trackScore: { vibe: 2 },
      },
      {
        id: "q2-b",
        label: "HTML/CSS 정도만 알아요",
        levelScore: { entry: 1, beginner: 2 },
        trackScore: { vibe: 2 },
      },
      {
        id: "q2-c",
        label: "파이썬·자바스크립트로 간단한 스크립트를 짜본 적 있어요",
        levelScore: { beginner: 2, intermediate: 1 },
        trackScore: { pro: 1, vibe: 1 },
      },
      {
        id: "q2-d",
        label: "실무에서 코드를 작성·유지보수해요",
        levelScore: { intermediate: 2, advanced: 2 },
        trackScore: { pro: 2 },
      },
    ],
  },
  {
    id: "q3",
    order: 3,
    prompt: "엑셀·구글 시트·노션 같은 도구를 어떻게 쓰시나요?",
    options: [
      {
        id: "q3-a",
        label: "기본 입력·조회 정도예요",
        levelScore: { entry: 2 },
        trackScore: { vibe: 1 },
      },
      {
        id: "q3-b",
        label: "함수·피벗으로 정리해요",
        levelScore: { entry: 1, beginner: 2 },
        trackScore: { pro: 1, vibe: 1 },
      },
      {
        id: "q3-c",
        label: "매크로·자동화로 반복 업무를 줄여요",
        levelScore: { beginner: 1, intermediate: 2 },
        trackScore: { pro: 2 },
      },
      {
        id: "q3-d",
        label: "데이터를 모아 분석·리포트까지 만들어요",
        levelScore: { intermediate: 2, advanced: 1 },
        trackScore: { pro: 2 },
      },
    ],
  },
  {
    id: "q4",
    order: 4,
    prompt: "터미널(검은 화면 명령어)을 써본 적이 있나요?",
    options: [
      {
        id: "q4-a",
        label: "뭔지도 잘 모르겠어요",
        levelScore: { entry: 2 },
        trackScore: { vibe: 2 },
      },
      {
        id: "q4-b",
        label: "가이드 보고 따라 해본 적 있어요",
        levelScore: { entry: 1, beginner: 2 },
        trackScore: { vibe: 1, pro: 1 },
      },
      {
        id: "q4-c",
        label: "git, npm 같은 기본 명령은 써요",
        levelScore: { beginner: 1, intermediate: 2 },
        trackScore: { pro: 1, vibe: 1 },
      },
      {
        id: "q4-d",
        label: "서버·스크립트 실행이 일상이에요",
        levelScore: { advanced: 2, intermediate: 1 },
        trackScore: { pro: 2 },
      },
    ],
  },
  {
    id: "q5",
    order: 5,
    prompt: "지금 가장 하고 싶은 일은 무엇에 가깝나요?",
    options: [
      {
        id: "q5-a",
        label: "아이디어만 있고, 누가 대신 만들어줬으면 해요",
        levelScore: { entry: 2 },
        trackScore: { vibe: 3 },
      },
      {
        id: "q5-b",
        label: "간단한 웹페이지·앱을 직접 만들어보고 싶어요",
        levelScore: { entry: 1, beginner: 2 },
        trackScore: { vibe: 3 },
      },
      {
        id: "q5-c",
        label: "반복 업무를 자동화하고 싶어요",
        levelScore: { beginner: 2, intermediate: 1 },
        trackScore: { pro: 3 },
      },
      {
        id: "q5-d",
        label: "데이터 수집·분석·리포트 파이프라인을 만들고 싶어요",
        levelScore: { intermediate: 2, advanced: 1 },
        trackScore: { pro: 3 },
      },
    ],
  },
  {
    id: "q6",
    order: 6,
    prompt: "웹에서 정보를 모으는(크롤링) 경험이 있나요?",
    options: [
      {
        id: "q6-a",
        label: "복사·붙여넣기로만 해요",
        levelScore: { entry: 2 },
        trackScore: { vibe: 1 },
      },
      {
        id: "q6-b",
        label: "확장 프로그램이나 간단한 도구를 써봤어요",
        levelScore: { beginner: 2 },
        trackScore: { pro: 1, vibe: 1 },
      },
      {
        id: "q6-c",
        label: "스크립트로 정기 수집을 해봤어요",
        levelScore: { intermediate: 2 },
        trackScore: { pro: 2 },
      },
      {
        id: "q6-d",
        label: "실무에서 대량 수집·정제까지 해요",
        levelScore: { advanced: 2, intermediate: 1 },
        trackScore: { pro: 3 },
      },
    ],
  },
  {
    id: "q7",
    order: 7,
    prompt: "Claude Code, Cursor 같은 AI 코딩 도구를 써본 적이 있나요?",
    options: [
      {
        id: "q7-a",
        label: "처음 들어봐요",
        levelScore: { entry: 2 },
        trackScore: { vibe: 1 },
      },
      {
        id: "q7-b",
        label: "설치만 해보거나 가끔 질문해요",
        levelScore: { entry: 1, beginner: 2 },
        trackScore: { vibe: 2 },
      },
      {
        id: "q7-c",
        label: "기능 만들 때 AI와 함께 코딩해요",
        levelScore: { beginner: 1, intermediate: 2 },
        trackScore: { vibe: 2, pro: 1 },
      },
      {
        id: "q7-d",
        label: "프로젝트 전체를 AI 에이전트로 운영해요",
        levelScore: { advanced: 2, intermediate: 1 },
        trackScore: { pro: 2, vibe: 1 },
      },
    ],
  },
  {
    id: "q8",
    order: 8,
    prompt: "문제가 생기면 보통 어떻게 하시나요?",
    options: [
      {
        id: "q8-a",
        label: "전문가에게 맡기거나 포기해요",
        levelScore: { entry: 2 },
        trackScore: { vibe: 1 },
      },
      {
        id: "q8-b",
        label: "검색·유튜브·AI에게 물어보며 따라 해요",
        levelScore: { entry: 1, beginner: 2 },
        trackScore: { vibe: 2 },
      },
      {
        id: "q8-c",
        label: "에러 메시지를 읽고 단계별로 고쳐요",
        levelScore: { beginner: 1, intermediate: 2 },
        trackScore: { pro: 1, vibe: 1 },
      },
      {
        id: "q8-d",
        label: "원인을 문서화하고 재발 방지까지 설계해요",
        levelScore: { advanced: 2, intermediate: 1 },
        trackScore: { pro: 2 },
      },
    ],
  },
  {
    id: "q9",
    order: 9,
    prompt: "일주일에 학습에 쓸 수 있는 시간은?",
    options: [
      {
        id: "q9-a",
        label: "2시간 이하",
        levelScore: { entry: 1 },
        trackScore: { vibe: 1 },
      },
      {
        id: "q9-b",
        label: "3~5시간",
        levelScore: { beginner: 1 },
        trackScore: { vibe: 1, pro: 1 },
      },
      {
        id: "q9-c",
        label: "6~10시간",
        levelScore: { intermediate: 1 },
        trackScore: { pro: 1 },
      },
      {
        id: "q9-d",
        label: "10시간 이상",
        levelScore: { advanced: 1 },
        trackScore: { pro: 1, vibe: 1 },
      },
    ],
  },
  {
    id: "q10",
    order: 10,
    prompt: "나에게 더 가까운 직무·상황은?",
    options: [
      {
        id: "q10-a",
        label: "기획·마케팅·운영 등 비개발 직무",
        levelScore: { entry: 1, beginner: 1 },
        trackScore: { vibe: 3 },
      },
      {
        id: "q10-b",
        label: "스타트업·1인 사업으로 직접 만들고 싶어요",
        levelScore: { beginner: 2 },
        trackScore: { vibe: 2 },
      },
      {
        id: "q10-c",
        label: "현직에서 업무 효율·자동화가 목표예요",
        levelScore: { beginner: 1, intermediate: 2 },
        trackScore: { pro: 3 },
      },
      {
        id: "q10-d",
        label: "개발·데이터·인프라 실무자예요",
        levelScore: { intermediate: 1, advanced: 2 },
        trackScore: { pro: 3 },
      },
    ],
  },
  {
    id: "q11",
    order: 11,
    prompt: "스스로 생각하는 AI 활용 수준은?",
    helper: "정답은 없어요. 솔직하게 골라주세요.",
    options: [
      {
        id: "q11-a",
        label: "입문 — 용어부터 익히고 싶어요",
        levelScore: { entry: 4 },
        trackScore: {},
      },
      {
        id: "q11-b",
        label: "초급 — 따라 하면 뭔가 만들 수 있어요",
        levelScore: { beginner: 4 },
        trackScore: {},
      },
      {
        id: "q11-c",
        label: "중급 — 실무에 바로 쓸 도구를 만들고 싶어요",
        levelScore: { intermediate: 4 },
        trackScore: {},
      },
      {
        id: "q11-d",
        label: "고급 — 팀·조직에 도입할 수준이 목표예요",
        levelScore: { advanced: 4 },
        trackScore: {},
      },
    ],
  },
];
