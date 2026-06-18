import type { LevelTestQuestion } from "@/types/level-test";

/**
 * 8문항: 트랙 판별(Q1~Q2) + 역량 사다리(Q3~Q7) + 자가 진단(Q8).
 * - 트랙 문항은 trackScore로 pro/vibe 성향을 측정한다.
 * - 역량 문항은 unlocksLevel로 "이 정도는 감당 가능"이라는 증거 레벨을 올린다.
 * - 자가 문항(Q8)은 selfLevel로 본인이 느끼는 수준을 받아 보정에만 쓴다.
 * 각 문항·보기는 커리큘럼 모듈에 대응한다 (.claude/rules/domain.md 참고).
 */
export const LEVEL_TEST_QUESTIONS: LevelTestQuestion[] = [
  // ── 트랙 판별 ──────────────────────────────────────────────
  {
    id: "q1",
    order: 1,
    prompt: "배우고 싶은 게 더 가까운 쪽은?",
    options: [
      {
        id: "q1-a",
        label: "쌓인 반복 업무·보고서를 자동으로 처리하고 싶어요",
        trackScore: { pro: 2 },
      },
      {
        id: "q1-b",
        label: "머릿속 아이디어를 직접 앱·서비스로 만들고 싶어요",
        trackScore: { vibe: 2 },
      },
      {
        id: "q1-c",
        label: "흩어진 데이터를 모아 분석·리포트까지 자동화하고 싶어요",
        trackScore: { pro: 2 },
      },
      {
        id: "q1-d",
        label: "포트폴리오·사이드프로젝트가 될 웹사이트를 만들고 싶어요",
        trackScore: { vibe: 2 },
      },
    ],
  },
  {
    id: "q2",
    order: 2,
    prompt: "내가 만들고 싶은 결과물에 가장 가까운 건?",
    options: [
      {
        id: "q2-a",
        label: "내 PC·계정에서 도는 자동화 스크립트나 사내 도구",
        trackScore: { pro: 2 },
      },
      {
        id: "q2-b",
        label: "사람들이 접속해서 쓰는 웹페이지·웹앱 화면",
        trackScore: { vibe: 2 },
      },
      {
        id: "q2-c",
        label: "데이터를 수집·가공하는 파이프라인이나 AI 에이전트",
        trackScore: { pro: 2 },
      },
      {
        id: "q2-d",
        label: "챗봇·요약 같은 AI 기능을 붙인 나만의 미니 앱",
        trackScore: { vibe: 2 },
      },
    ],
  },

  // ── 역량 사다리 ────────────────────────────────────────────
  {
    id: "q3",
    order: 3,
    prompt: "생성형 AI의 작동 방식(토큰·컨텍스트·할루시네이션)을 이해하나요?",
    helper: "왜 가끔 틀린 답을 자신 있게 하는지 설명할 수 있는지로 가늠해 보세요.",
    options: [
      { id: "q3-a", label: "처음 듣는 용어예요", unlocksLevel: "entry" },
      { id: "q3-b", label: "들어는 봤지만 정확히는 몰라요", unlocksLevel: "entry" },
      {
        id: "q3-c",
        label: "환각이 왜 생기고 컨텍스트가 왜 중요한지 설명할 수 있어요",
        unlocksLevel: "beginner",
      },
      {
        id: "q3-d",
        label: "토큰·컨텍스트를 의식하며 프롬프트를 설계해요",
        unlocksLevel: "beginner",
      },
    ],
  },
  {
    id: "q4",
    order: 4,
    prompt: "Claude Code·Cursor 같은 AI 코딩 도구로 무언가를 직접 만들어봤나요?",
    options: [
      { id: "q4-a", label: "써본 적 없어요", unlocksLevel: "entry" },
      {
        id: "q4-b",
        label: "설치하거나 가끔 질문만 해봤어요",
        unlocksLevel: "entry",
      },
      {
        id: "q4-c",
        label: "작은 스크립트나 페이지를 끝까지 완성해봤어요",
        unlocksLevel: "beginner",
      },
      {
        id: "q4-d",
        label: "여러 기능이 있는 프로젝트를 이어서 만들고 고쳐요",
        unlocksLevel: "intermediate",
      },
    ],
  },
  {
    id: "q5",
    order: 5,
    prompt: "터미널과 Git(버전관리)은 얼마나 익숙한가요?",
    options: [
      { id: "q5-a", label: "검은 화면도 깃도 둘 다 낯설어요", unlocksLevel: "entry" },
      {
        id: "q5-b",
        label: "가이드를 보고 따라 친 적은 있어요",
        unlocksLevel: "entry",
      },
      {
        id: "q5-c",
        label: "git commit·npm 같은 기본 명령은 직접 써요",
        unlocksLevel: "beginner",
      },
      {
        id: "q5-d",
        label: "브랜치·배포 명령까지 일상적으로 써요",
        unlocksLevel: "intermediate",
      },
    ],
  },
  {
    id: "q6",
    order: 6,
    prompt: "API 키·DB·외부 서비스를 직접 연동해본 적 있나요?",
    options: [
      { id: "q6-a", label: "연동이 뭔지 잘 모르겠어요", unlocksLevel: "entry" },
      {
        id: "q6-b",
        label: "API 키를 .env에 넣어 호출까지는 해봤어요",
        unlocksLevel: "beginner",
      },
      {
        id: "q6-c",
        label: "외부 API나 DB(Supabase 등)를 앱·스크립트에 붙여봤어요",
        unlocksLevel: "intermediate",
      },
      {
        id: "q6-d",
        label: "STT·이미지 분석·DB 등 여러 서비스를 묶어 동작시켜봤어요",
        unlocksLevel: "intermediate",
      },
    ],
  },
  {
    id: "q7",
    order: 7,
    prompt: "반복 작업을 자동 파이프라인이나 AI 에이전트로 돌려본 적 있나요?",
    options: [
      { id: "q7-a", label: "아직 전부 손으로 처리해요", unlocksLevel: "entry" },
      {
        id: "q7-b",
        label: "단발성 자동화 스크립트는 만들어봤어요",
        unlocksLevel: "beginner",
      },
      {
        id: "q7-c",
        label: "정기 실행·여러 단계를 잇는 파이프라인을 운영해요",
        unlocksLevel: "intermediate",
      },
      {
        id: "q7-d",
        label: "에이전트에 역할을 나눠 자율로 작업시켜봤어요",
        unlocksLevel: "advanced",
      },
    ],
  },

  // ── 자가 진단 (보정용) ─────────────────────────────────────
  {
    id: "q8",
    order: 8,
    prompt: "스스로 생각하는 지금 내 수준은?",
    helper: "역량 응답이 우선이고, 이 답은 한 단계 안에서 미세 조정에만 쓰여요.",
    options: [
      {
        id: "q8-a",
        label: "입문 — AI·코딩 용어부터 익히고 싶어요",
        selfLevel: "entry",
      },
      {
        id: "q8-b",
        label: "초급 — 가이드를 보며 작은 걸 만들 수 있어요",
        selfLevel: "beginner",
      },
      {
        id: "q8-c",
        label: "중급 — 실무에 쓸 도구를 직접 설계하고 싶어요",
        selfLevel: "intermediate",
      },
      {
        id: "q8-d",
        label: "고급 — 팀·조직에 도입할 수준이 목표예요",
        selfLevel: "advanced",
      },
    ],
  },
];
