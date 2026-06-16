/** 학습 레벨 4단계 */
export type Level = "entry" | "beginner" | "intermediate" | "advanced";

export type LevelLabel = {
  entry: "입문";
  beginner: "초급";
  intermediate: "중급";
  advanced: "고급";
};

export const LEVEL_LABELS: LevelLabel = {
  entry: "입문",
  beginner: "초급",
  intermediate: "중급",
  advanced: "고급",
};

export const LEVEL_ORDER: Level[] = [
  "entry",
  "beginner",
  "intermediate",
  "advanced",
];
