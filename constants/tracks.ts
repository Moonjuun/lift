import type { Track } from "@/types/track";

export const TRACKS: Track[] = [
  {
    id: "pro",
    slug: "pro",
    title: "현직자 트랙",
    subtitle: "실무 자동화 · 크롤링 · AI 에이전트",
    description:
      "반복 업무를 줄이고, 데이터를 모으고, Claude Code·Cursor로 실무 도구를 직접 만드는 트랙입니다. 코딩보다 '업무 문제 해결'에 초점을 둡니다.",
    fitFor: [
      "마케팅·운영·기획 등에서 보고서·수집·반복 작업이 많은 분",
      "엑셀·노션은 잘 쓰지만 자동화는 막막한 분",
      "팀에 AI 워크플로를 도입하고 싶은 실무 리더",
    ],
    keywords: ["크롤링", "자동화", "Claude Code", "API", "리포트"],
    suggestedLevels: ["beginner", "intermediate", "advanced"],
  },
  {
    id: "vibe",
    slug: "vibe",
    title: "바이브 코딩 트랙",
    subtitle: "아이디어 → 앱 · AI와 함께 만드는 개발",
    description:
      "코드를 외우지 않고, AI와 대화하며 원하는 기능을 만드는 트랙입니다. 랜딩페이지부터 간단한 웹앱까지 '만들어보는 경험'이 중심입니다.",
    fitFor: [
      "개발은 어렵지만 직접 서비스를 만들어보고 싶은 분",
      "사이드 프로젝트·1인 창업 아이디어가 있는 분",
      "Cursor·Claude로 '말하면 코드가 나오는' 방식이 궁금한 분",
    ],
    keywords: ["바이브 코딩", "Cursor", "웹앱", "UI", "배포"],
    suggestedLevels: ["entry", "beginner", "intermediate"],
  },
];

export function getTrackBySlug(slug: string): Track | undefined {
  return TRACKS.find((t) => t.slug === slug);
}

export function getTrackById(id: string): Track | undefined {
  return TRACKS.find((t) => t.id === id);
}
