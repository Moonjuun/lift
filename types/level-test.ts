import type { Level } from "./level";
import type { TrackId } from "./track";

export type LevelTestOption = {
  id: string;
  label: string;
  /** 레벨 점수 가중치 */
  levelScore: Partial<Record<Level, number>>;
  /** 트랙 성향 점수 (pro / vibe) */
  trackScore: Partial<Record<TrackId, number>>;
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
  levelScores: Record<Level, number>;
  recommendedTrack: TrackId;
  trackScores: Record<TrackId, number>;
  /** 결과 한 줄 요약 */
  headline: string;
  /** 맞춤 안내 문구 */
  summary: string;
};
