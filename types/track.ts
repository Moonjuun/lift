import type { Level } from "./level";

/** 트랙 종류: 현직자 실무 vs 바이브 코딩 */
export type TrackId = "pro" | "vibe";

export type Track = {
  id: TrackId;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  /** 이 트랙에 잘 맞는 사람 */
  fitFor: string[];
  /** 대표 키워드 */
  keywords: string[];
  /** 추천 시작 레벨 */
  suggestedLevels: Level[];
  /** 수강 후 할 수 있는 것들 */
  outcomes: string[];
  /** 트랙 특징/강점 하이라이트 */
  highlights: { title: string; description: string }[];
};
