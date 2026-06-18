import type { Level } from "./level";
import type { TrackId } from "./track";

export type LevelTestOption = {
  id: string;
  label: string;
  /** 트랙 성향 점수 (pro / vibe) — 트랙 판별 문항에서 사용 */
  trackScore?: Partial<Record<TrackId, number>>;
  /** 역량 증거: 이 보기를 고르면 최소 이 레벨은 감당할 수 있음 */
  unlocksLevel?: Level;
  /** 자가 진단 문항에서 사용자가 스스로 고른 레벨 */
  selfLevel?: Level;
};

export type LevelTestQuestion = {
  id: string;
  order: number;
  /** '나는 이런 사람이다' 형식의 자가진단 문항 */
  prompt: string;
  helper?: string;
  options: LevelTestOption[];
};

export type LevelTestAnswer = {
  questionId: string;
  optionId: string;
};

export type LevelTestResult = {
  level: Level;
  recommendedTrack: TrackId;
  trackScores: Record<TrackId, number>;
  /** 추천 진입 모듈 id */
  recommendedModuleId: string;
  /** 추천 진입 모듈 제목 */
  recommendedModuleTitle: string;
  /** 결과 한 줄 요약 */
  headline: string;
  /** 맞춤 안내 문구 */
  summary: string;
};
