/** 사이트 전역 메타데이터 (SEO·sitemap·robots 공용) */

const resolvedUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export const SITE = {
  name: "Lift",
  /** 배포 도메인. NEXT_PUBLIC_SITE_URL 환경변수로 덮어쓴다. */
  url: resolvedUrl,
  title: "Lift — AI 학습 레벨 테스트",
  description:
    "자가진단으로 나의 AI 활용 수준을 확인하고, 현직자·바이브 코딩 트랙 커리큘럼을 추천받으세요.",
  keywords: [
    "AI 학습",
    "레벨 테스트",
    "AI 자가진단",
    "바이브 코딩",
    "Claude Code",
    "Cursor",
    "현직자 트랙",
    "업무 자동화",
    "커리큘럼",
  ],
} as const;
