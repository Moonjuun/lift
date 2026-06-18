import type { Curriculum, CurriculumModule } from "@/types/curriculum";
import type { Level } from "@/types/level";
import type { TrackId } from "@/types/track";
import { LEVEL_ORDER } from "@/types/level";

const proModules: CurriculumModule[] = [
  {
    id: "pro-entry-1",
    trackId: "pro",
    level: "entry",
    order: 1,
    title: "AI와 협업 환경의 큰 그림 잡기",
    summary:
      "생성형 AI의 동작 원리·프롬프팅 기초를 익히고, Obsidian·Git으로 AI가 잘 읽는 작업 환경을 만듭니다.",
    practicalExample:
      "Obsidian Git 플러그인으로 작업 노트를 GitHub에 자동 동기화하기",
    weeks: 1,
    lessons: [
      { id: "p-e1-1", title: "생성형 AI 동작 원리 (토큰·컨텍스트·할루시네이션)", durationMinutes: 30 },
      { id: "p-e1-2", title: "Obsidian 세팅 & AI가 잘 읽는 문서 구조", durationMinutes: 30 },
      { id: "p-e1-3", title: "Git & GitHub 입문 — Fork GUI로 첫 커밋·푸시", durationMinutes: 35 },
    ],
  },
  {
    id: "pro-beginner-1",
    trackId: "pro",
    level: "beginner",
    order: 2,
    title: "AI 코딩 도구 첫 실습",
    summary:
      "Claude Code를 설치하고 CLAUDE.md·PRD 작성법으로 AI에게 체계적으로 일을 시키는 법을 익힙니다.",
    practicalExample:
      "PRD를 먼저 작성한 뒤 Claude Code에게 이메일 분류 스크립트 만들어달라고 시키기",
    weeks: 2,
    lessons: [
      { id: "p-b1-1", title: "Claude Code 설치 & 첫 실행", durationMinutes: 25 },
      { id: "p-b1-2", title: "CLAUDE.md 작성법 & PRD 설계도 먼저 쓰기", durationMinutes: 40 },
      { id: "p-b1-3", title: ".env & API 키 보안 원칙", durationMinutes: 30 },
    ],
  },
  {
    id: "pro-beginner-2",
    trackId: "pro",
    level: "beginner",
    order: 3,
    title: "자동화 사고법 & Claude Code 첫 스크립트",
    summary:
      "반복 업무를 진단하고, Claude Code에게 자동화 스크립트를 만들어달라고 시키는 법을 익힙니다. 토큰·컨텍스트 관리 습관도 함께 잡습니다.",
    practicalExample:
      "매주 정리하던 보고서 데이터를 Claude Code로 자동 집계하는 스크립트 완성하기",
    weeks: 2,
    lessons: [
      { id: "p-b2-1", title: "반복 업무 진단 — 무엇을 자동화할지 찾기", durationMinutes: 30 },
      { id: "p-b2-2", title: "Claude Code에게 자동화 스크립트 만들어달라고 시키기", durationMinutes: 45 },
      { id: "p-b2-3", title: "토큰 절약 원칙 & /clear 타이밍", durationMinutes: 25 },
    ],
  },
  {
    id: "pro-intermediate-1",
    trackId: "pro",
    level: "intermediate",
    order: 4,
    title: "데이터 연동 & AI API 활용",
    summary:
      "MCP로 AI에게 외부 서비스 제어 권한을 주고, Supabase DB와 STT·이미지 분석 API를 연결합니다.",
    practicalExample:
      "회의 녹음 파일 → STT API → 텍스트 정제 → Supabase DB 자동 저장",
    weeks: 3,
    lessons: [
      { id: "p-i1-1", title: "MCP 개념 & Supabase DB·Storage 세팅", durationMinutes: 40 },
      { id: "p-i1-2", title: "STT API로 회의록 자동화", durationMinutes: 50 },
      { id: "p-i1-3", title: "이미지·문서 분석 API 활용", durationMinutes: 45 },
    ],
  },
  {
    id: "pro-intermediate-2",
    trackId: "pro",
    level: "intermediate",
    order: 5,
    title: "미니 서비스 구축 & 하네스 엔지니어링",
    summary:
      "POC → MVP 흐름으로 서비스를 만들고, Rules·Skills·Agents 구조로 첫 에이전트 팀을 설계합니다.",
    practicalExample:
      "Vercel에 배포한 뒤 Rules·Skills 파일로 에이전트에게 역할을 부여하고 보고서 초안 자동 생성",
    weeks: 3,
    lessons: [
      { id: "p-i2-1", title: "POC → MVP 설계 & Vercel 배포", durationMinutes: 40 },
      { id: "p-i2-2", title: "gitignore·보안 체크리스트", durationMinutes: 30 },
      { id: "p-i2-3", title: "Rules / Skills / Agents 첫 에이전트 설계", durationMinutes: 50 },
    ],
  },
  {
    id: "pro-advanced-1",
    trackId: "pro",
    level: "advanced",
    order: 6,
    title: "멀티 에이전트 오케스트레이션",
    summary:
      "메인 에이전트 → 서브 에이전트 역할 분담, 밸리데이션·QA 피드백 루프로 휴먼 에러를 차단합니다.",
    practicalExample:
      "분석 에이전트 → 보고서 작성 에이전트 → QA 에이전트 파이프라인으로 주간 리포트 자동 생성",
    weeks: 4,
    lessons: [
      { id: "p-a1-1", title: "에이전트 역할 분담 & 인터랙티브 모드 설계", durationMinutes: 45 },
      { id: "p-a1-2", title: "밸리데이션 체크 & QA 피드백 루프", durationMinutes: 50 },
      { id: "p-a1-3", title: "병렬 vs 순차 에이전트 선택 기준", durationMinutes: 40 },
    ],
  },
  {
    id: "pro-advanced-2",
    trackId: "pro",
    level: "advanced",
    order: 7,
    title: "세팅 고도화 & 완전 자동화",
    summary:
      ".claude 디렉토리 구조·커스텀 명령어를 완성하고, Ralph Loop으로 에이전트가 밤새 자율 작업하는 구조를 만듭니다.",
    practicalExample:
      "/make-report 명령어 한 번으로 데이터 수집·분석·슬랙 발송까지 자동 완료",
    weeks: 3,
    lessons: [
      { id: "p-a2-1", title: ".claude 디렉토리 & 커스텀 명령어 설계", durationMinutes: 40 },
      { id: "p-a2-2", title: "토큰 최적화 — Opus Plan 모드 & 컨텍스트 캐싱", durationMinutes: 40 },
      { id: "p-a2-3", title: "Ralph Loop — 자율 반복 작업 설정", durationMinutes: 45 },
    ],
  },
];

const proCapstone: CurriculumModule = {
  id: "pro-capstone",
  trackId: "pro",
  level: "advanced",
  order: 99,
  title: "나만의 AI 워크플로우 자산화",
  summary:
    "재사용 가능한 에이전트 팀을 완성하고, 본인 업무에 맞는 자동화 워크플로우를 처음부터 끝까지 설계·배포합니다.",
  practicalExample:
    "예: 콘텐츠 기획 에이전트 + 초안 작성 에이전트 + 검수 에이전트로 주간 뉴스레터 완전 자동화",
  weeks: 4,
  lessons: [
    { id: "p-c1", title: "워크플로우 설계 & 에이전트 역할 정의", durationMinutes: 60 },
    { id: "p-c2", title: "핵심 파이프라인 구현 (멘토 피드백)", durationMinutes: 120 },
    { id: "p-c3", title: "안정화·문서화·팀 공유 데모", durationMinutes: 90 },
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

/**
 * 트랙·레벨에 맞는 첫 진입 모듈을 반환한다.
 * 해당 레벨 모듈이 없으면 한 단계씩 낮춰 가장 가까운 모듈을 고른다.
 */
export function getEntryModule(
  trackId: TrackId,
  level: Level,
): CurriculumModule {
  const modules = CURRICULA[trackId].modules;
  const startIndex = LEVEL_ORDER.indexOf(level);

  for (let i = startIndex; i >= 0; i--) {
    const candidates = modules
      .filter((m) => m.level === LEVEL_ORDER[i])
      .sort((a, b) => a.order - b.order);
    if (candidates.length > 0) return candidates[0];
  }

  // 모든 레벨이 비는 일은 없지만, 안전하게 order가 가장 낮은 모듈로 폴백
  return [...modules].sort((a, b) => a.order - b.order)[0];
}
