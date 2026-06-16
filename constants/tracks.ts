import type { Track } from "@/types/track";

export const TRACKS: Track[] = [
  {
    id: "pro",
    slug: "pro",
    title: "현직자 트랙",
    subtitle: "실무 자동화 · 크롤링 · AI 에이전트",
    description:
      "반복 업무를 줄이고, 데이터를 모으고, Claude Code·Cursor로 실무 도구를 직접 만드는 트랙입니다. 코딩보다 '업무 문제 해결'에 초점을 둡니다. 엑셀·노션은 다루지만 자동화가 막막했던 분이라면, 이 트랙이 가장 빠른 길입니다.",
    fitFor: [
      "마케팅·운영·기획 등에서 보고서·수집·반복 작업이 많은 분",
      "엑셀·노션은 잘 쓰지만 자동화는 막막한 분",
      "팀에 AI 워크플로를 도입하고 싶은 실무 리더",
      "개발자 없이 직접 사내 도구를 만들고 싶은 분",
    ],
    keywords: ["크롤링", "자동화", "Claude Code", "API", "리포트"],
    suggestedLevels: ["beginner", "intermediate", "advanced"],
    outcomes: [
      "매일 반복하던 보고서·집계 작업을 스크립트로 자동화할 수 있어요",
      "경쟁사 모니터링, 리뷰 수집 등 크롤링 파이프라인을 직접 설계할 수 있어요",
      "Claude Code·Cursor로 사내 도구를 아이디어부터 배포까지 완성할 수 있어요",
      "팀에 자동화를 도입하고, 줄어든 작업 시간을 수치로 보여줄 수 있어요",
      "Python 스크립트로 이메일·파일·API 연동을 자유롭게 다룰 수 있어요",
    ],
    highlights: [
      {
        title: "실무 중심 커리큘럼",
        description:
          "모든 모듈이 실제 업무 시나리오를 기반으로 설계됩니다. 이론이 아니라 '내일 당장 써먹을 수 있는' 자동화를 만듭니다.",
      },
      {
        title: "Claude Code · Cursor 활용",
        description:
          "최신 AI 코딩 도구를 처음부터 실무에 녹여 씁니다. 복잡한 설정 없이 바로 사용 가능한 방법을 알려줍니다.",
      },
      {
        title: "내 업무로 만드는 마무리 프로젝트",
        description:
          "가장 번거로운 반복 작업을 하나 골라, 시작부터 완성까지 직접 자동화합니다. 멘토 피드백으로 실제 쓸 수 있는 수준까지 다듬어요.",
      },
      {
        title: "레벨에 맞는 진입점",
        description:
          "입문부터 고급까지 레벨별로 구성돼 있어, 지금 내 수준에서 바로 시작할 수 있습니다.",
      },
    ],
  },
  {
    id: "vibe",
    slug: "vibe",
    title: "바이브 코딩 트랙",
    subtitle: "아이디어 → 앱 · AI와 함께 만드는 개발",
    description:
      "코드를 외우지 않고, AI와 대화하며 원하는 기능을 만드는 트랙입니다. 랜딩페이지부터 간단한 웹앱까지, '직접 만들어보는 경험'이 핵심입니다. Cursor에게 말하면 코드가 완성되는 새로운 방식의 개발을 경험해 보세요.",
    fitFor: [
      "개발은 어렵지만 직접 서비스를 만들어보고 싶은 분",
      "사이드 프로젝트·1인 창업 아이디어가 있는 분",
      "Cursor·Claude로 '말하면 코드가 나오는' 방식이 궁금한 분",
      "포트폴리오용 웹사이트나 간단한 앱이 필요한 분",
    ],
    keywords: ["바이브 코딩", "Cursor", "웹앱", "UI", "배포"],
    suggestedLevels: ["entry", "beginner", "intermediate"],
    outcomes: [
      "Cursor와 대화하며 원하는 웹페이지를 처음부터 만들 수 있어요",
      "폼·버튼·모달 등 인터랙션이 있는 반응형 사이트를 완성할 수 있어요",
      "AI API를 연결해 나만의 챗봇·요약 기능을 웹앱에 붙일 수 있어요",
      "Vercel로 배포해 실제 URL을 누구에게나 공유할 수 있어요",
      "아이디어를 와이어프레임에서 실제 서비스로 혼자 만들 수 있어요",
    ],
    highlights: [
      {
        title: "코드 암기 불필요",
        description:
          "문법을 외울 필요 없습니다. AI에게 원하는 것을 설명하고, 나온 결과물을 직접 눈으로 확인하며 배웁니다.",
      },
      {
        title: "아이디어에서 배포까지",
        description:
          "아이디어 스케치부터 실제 URL 배포까지 한 흐름으로 경험합니다. 과정이 끝나면 내 이름의 링크가 생깁니다.",
      },
      {
        title: "AI API 연동 실습",
        description:
          "OpenAI·Claude API를 내 앱에 직접 붙여봅니다. 챗봇, 요약, 생성 기능을 실제로 작동시키는 경험을 합니다.",
      },
      {
        title: "낮은 진입 장벽",
        description:
          "처음 개발을 접하는 Entry 레벨부터 시작할 수 있습니다. 설치부터 첫 페이지 배포까지 단계별로 안내합니다.",
      },
    ],
  },
];

export function getTrackBySlug(slug: string): Track | undefined {
  return TRACKS.find((t) => t.slug === slug);
}

export function getTrackById(id: string): Track | undefined {
  return TRACKS.find((t) => t.id === id);
}
