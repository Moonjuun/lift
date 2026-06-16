import type { Curriculum, CurriculumModule } from "@/types/curriculum";

const proModules: CurriculumModule[] = [
  {
    id: "pro-entry-1",
    trackId: "pro",
    level: "entry",
    order: 1,
    title: "AI 실무 도구 맵 익히기",
    summary: "챗GPT·클로드·노션 AI의 차이와 업무에 쓰는 기본 패턴을 익힙니다.",
    practicalExample:
      "회의록 초안을 AI로 작성하고, 팀 템플릿에 맞게 5분 안에 정리하기",
    weeks: 1,
    lessons: [
      { id: "p-e1-1", title: "AI 도구 3종 비교", durationMinutes: 25 },
      { id: "p-e1-2", title: "프롬프트 기본 구조", durationMinutes: 30 },
      { id: "p-e1-3", title: "업무 템플릿 만들기", durationMinutes: 35 },
    ],
  },
  {
    id: "pro-beginner-1",
    trackId: "pro",
    level: "beginner",
    order: 2,
    title: "엑셀·시트 자동화 기초",
    summary: "함수·Apps Script로 반복 입력·정리 작업을 줄입니다.",
    practicalExample:
      "매주 받는 매출 CSV를 자동 분류해 대시보드 시트에 반영하기",
    weeks: 2,
    lessons: [
      { id: "p-b1-1", title: "반복 업무 진단하기", durationMinutes: 20 },
      { id: "p-b1-2", title: "시트 함수 실전", durationMinutes: 40 },
      { id: "p-b1-3", title: "Apps Script 입문", durationMinutes: 45 },
    ],
  },
  {
    id: "pro-beginner-2",
    trackId: "pro",
    level: "beginner",
    order: 3,
    title: "간단 크롤링 · 데이터 모으기",
    summary: "브라우저 확장·노코드 도구로 공개 데이터를 수집합니다.",
    practicalExample:
      "경쟁사 공지 페이지 변경을 매일 체크해 슬랙으로 알림 받기",
    weeks: 2,
    lessons: [
      { id: "p-b2-1", title: "크롤링이란 · 윤리·법적 주의", durationMinutes: 25 },
      { id: "p-b2-2", title: "노코드 수집 도구", durationMinutes: 35 },
      { id: "p-b2-3", title: "수집 데이터 정제", durationMinutes: 40 },
    ],
  },
  {
    id: "pro-intermediate-1",
    trackId: "pro",
    level: "intermediate",
    order: 4,
    title: "파이썬 실무 자동화",
    summary: "스크립트로 이메일·파일·API 연동 자동화를 구현합니다.",
    practicalExample:
      "매일 아침 KPI 메일을 파싱해 노션 DB에 자동 업데이트",
    weeks: 3,
    lessons: [
      { id: "p-i1-1", title: "파이썬 환경 30분 세팅", durationMinutes: 30 },
      { id: "p-i1-2", title: "파일·이메일 자동화", durationMinutes: 50 },
      { id: "p-i1-3", title: "REST API 연동", durationMinutes: 55 },
    ],
  },
  {
    id: "pro-intermediate-2",
    trackId: "pro",
    level: "intermediate",
    order: 5,
    title: "Claude Code · Cursor 실무 워크플로",
    summary: "AI 에이전트로 스크립트·도구를 빠르게 만들고 수정합니다.",
    practicalExample:
      "사내 보고서 포맷 변환 CLI를 Claude Code로 1시간 안에 제작",
    weeks: 3,
    lessons: [
      { id: "p-i2-1", title: "에이전트 코딩 개념", durationMinutes: 30 },
      { id: "p-i2-2", title: "프로젝트 규칙·스킬 파일", durationMinutes: 45 },
      { id: "p-i2-3", title: "디버깅·리뷰 루프", durationMinutes: 50 },
    ],
  },
  {
    id: "pro-advanced-1",
    trackId: "pro",
    level: "advanced",
    order: 6,
    title: "대규모 크롤링 · 파이프라인",
    summary: "스케줄·에러 처리·저장소까지 갖춘 수집 파이프라인을 설계합니다.",
    practicalExample:
      "뉴스·리뷰 1만 건/일 수집 → 정제 → 주간 인사이트 리포트 자동 생성",
    weeks: 4,
    lessons: [
      { id: "p-a1-1", title: "파이프라인 아키텍처", durationMinutes: 40 },
      { id: "p-a1-2", title: "스케줄·모니터링", durationMinutes: 45 },
      { id: "p-a1-3", title: "데이터 품질·검증", durationMinutes: 50 },
    ],
  },
  {
    id: "pro-advanced-2",
    trackId: "pro",
    level: "advanced",
    order: 7,
    title: "팀 AI 자동화 도입",
    summary: "보안·권한·문서화까지 포함해 조직에 자동화를 확산합니다.",
    practicalExample:
      "마케팅팀 5명이 쓰는 캠페인 리포트 자동화 패키지 배포",
    weeks: 3,
    lessons: [
      { id: "p-a2-1", title: "보안·API 키 관리", durationMinutes: 35 },
      { id: "p-a2-2", title: "내부 가이드·온보딩", durationMinutes: 40 },
      { id: "p-a2-3", title: "효과 측정·개선", durationMinutes: 45 },
    ],
  },
];

const proCapstone: CurriculumModule = {
  id: "pro-capstone",
  trackId: "pro",
  level: "intermediate",
  order: 99,
  title: "커스텀 자동화 프로젝트",
  summary:
    "가장 번거로운 반복 작업을 하나 골라, 수집·처리·알림까지 처음부터 끝까지 직접 만듭니다.",
  practicalExample:
    "예: 고객 문의 분류 → 시트 기록 → 주간 요약 슬랙 전송 (본인 업무에 맞게 설계)",
  weeks: 4,
  lessons: [
    { id: "p-c1", title: "문제 정의·범위 잡기", durationMinutes: 60 },
    { id: "p-c2", title: "핵심 기능 구현 (멘토 피드백)", durationMinutes: 120 },
    { id: "p-c3", title: "안정화·문서화·시연", durationMinutes: 90 },
  ],
};

const vibeModules: CurriculumModule[] = [
  {
    id: "vibe-entry-1",
    trackId: "vibe",
    level: "entry",
    order: 1,
    title: "바이브 코딩이란?",
    summary: "코드를 외우지 않고 AI와 대화하며 만드는 새로운 개발 방식을 이해합니다.",
    practicalExample:
      "‘랜딩 페이지 만들어줘’ 한 마디로 첫 페이지 띄워보기",
    weeks: 1,
    lessons: [
      { id: "v-e1-1", title: "바이브 코딩 vs 전통 개발", durationMinutes: 20 },
      { id: "v-e1-2", title: "Cursor·Claude 설치", durationMinutes: 25 },
      { id: "v-e1-3", title: "첫 프롬프트 실습", durationMinutes: 35 },
    ],
  },
  {
    id: "vibe-entry-2",
    trackId: "vibe",
    level: "entry",
    order: 2,
    title: "아이디어를 문장으로 바꾸기",
    summary: "만들고 싶은 것을 AI가 이해할 수 있는 요구사항으로 정리합니다.",
    practicalExample:
      "‘카페 메뉴 소개 페이지, 모바일 친화, 다크 테마’ 스펙 작성",
    weeks: 1,
    lessons: [
      { id: "v-e2-1", title: "좋은 요구사항 쓰기", durationMinutes: 30 },
      { id: "v-e2-2", title: "화면 흐름 스케치", durationMinutes: 25 },
      { id: "v-e2-3", title: "피드백 루프", durationMinutes: 30 },
    ],
  },
  {
    id: "vibe-beginner-1",
    trackId: "vibe",
    level: "beginner",
    order: 3,
    title: "랜딩·소개 페이지 만들기",
    summary: "HTML·Tailwind 기반으로 반응형 페이지를 AI와 함께 만듭니다.",
    practicalExample:
      "개인 포트폴리오 또는 사이드 프로젝트 소개 페이지 완성",
    weeks: 2,
    lessons: [
      { id: "v-b1-1", title: "레이아웃·컴포넌트", durationMinutes: 40 },
      { id: "v-b1-2", title: "스타일·반응형", durationMinutes: 45 },
      { id: "v-b1-3", title: "배포 맛보기", durationMinutes: 35 },
    ],
  },
  {
    id: "vibe-beginner-2",
    trackId: "vibe",
    level: "beginner",
    order: 4,
    title: "간단한 인터랙션 추가",
    summary: "폼·버튼·모달 등 사용자가 누를 수 있는 기능을 붙입니다.",
    practicalExample:
      "문의 폼 + 토스트 알림이 있는 예약 랜딩 페이지",
    weeks: 2,
    lessons: [
      { id: "v-b2-1", title: "클라이언트 컴포넌트 개념", durationMinutes: 35 },
      { id: "v-b2-2", title: "폼·유효성 검사", durationMinutes: 45 },
      { id: "v-b2-3", title: "에러·로딩 UX", durationMinutes: 30 },
    ],
  },
  {
    id: "vibe-intermediate-1",
    trackId: "vibe",
    level: "intermediate",
    order: 5,
    title: "Next.js 웹앱 뼈대",
    summary: "여러 페이지·라우팅·상태가 있는 작은 앱을 만듭니다.",
    practicalExample:
      "할 일 관리 또는 북마크 저장 미니 앱",
    weeks: 3,
    lessons: [
      { id: "v-i1-1", title: "App Router 이해", durationMinutes: 40 },
      { id: "v-i1-2", title: "데이터 저장 (로컬·간단 API)", durationMinutes: 50 },
      { id: "v-i1-3", title: "인증 맛보기", durationMinutes: 45 },
    ],
  },
  {
    id: "vibe-intermediate-2",
    trackId: "vibe",
    level: "intermediate",
    order: 6,
    title: "AI API 붙이기",
    summary: "챗봇·요약·생성 기능을 내 앱에 연결합니다.",
    practicalExample:
      "내 노트를 요약해 주는 ‘나만의 AI 메모’ 앱",
    weeks: 3,
    lessons: [
      { id: "v-i2-1", title: "API 키·환경변수", durationMinutes: 30 },
      { id: "v-i2-2", title: "스트리밍 응답 UI", durationMinutes: 45 },
      { id: "v-i2-3", title: "비용·속도 튜닝", durationMinutes: 35 },
    ],
  },
  {
    id: "vibe-advanced-1",
    trackId: "vibe",
    level: "advanced",
    order: 7,
    title: "제품화 · 품질 올리기",
    summary: "테스트·배포·모니터링으로 ‘장난감’을 ‘서비스’로 만듭니다.",
    practicalExample:
      "베타 사용자 10명에게 배포하고 피드백 반영하기",
    weeks: 4,
    lessons: [
      { id: "v-a1-1", title: "테스트·CI 기초", durationMinutes: 40 },
      { id: "v-a1-2", title: "프로덕션 배포", durationMinutes: 45 },
      { id: "v-a1-3", title: "사용자 피드백 루프", durationMinutes: 40 },
    ],
  },
];

const vibeCapstone: CurriculumModule = {
  id: "vibe-capstone",
  trackId: "vibe",
  level: "beginner",
  order: 99,
  title: "나만의 기능 만들기",
  summary:
    "처음부터 끝까지 본인이 원하는 웹 기능 하나를 기획·구현·배포합니다.",
  practicalExample:
    "예: 반려동물 산책 기록 앱, 소모임 일정 공유 보드 (본인 아이디어로 진행)",
  weeks: 4,
  lessons: [
    { id: "v-c1", title: "아이디어 구체화·와이어프레임", durationMinutes: 60 },
    { id: "v-c2", title: "핵심 기능 개발 (AI와 함께)", durationMinutes: 150 },
    { id: "v-c3", title: "배포·데모 데이", durationMinutes: 90 },
  ],
};

export const CURRICULA: Record<"pro" | "vibe", Curriculum> = {
  pro: {
    trackId: "pro",
    modules: proModules,
    capstone: proCapstone,
  },
  vibe: {
    trackId: "vibe",
    modules: vibeModules,
    capstone: vibeCapstone,
  },
};

export function getCurriculumByTrackSlug(
  slug: string,
): Curriculum | undefined {
  if (slug === "pro" || slug === "vibe") {
    return CURRICULA[slug];
  }
  return undefined;
}
