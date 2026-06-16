import { LEVEL_TEST_QUESTIONS } from "@/constants/level-test-questions";
import type { LevelTestAnswer, LevelTestResult } from "@/types/level-test";
import type { Level } from "@/types/level";
import type { TrackId } from "@/types/track";
import { LEVEL_ORDER } from "@/types/level";

const EMPTY_LEVEL_SCORES: Record<Level, number> = {
  entry: 0,
  beginner: 0,
  intermediate: 0,
  advanced: 0,
};

const EMPTY_TRACK_SCORES: Record<TrackId, number> = {
  pro: 0,
  vibe: 0,
};

/** 답변 목록으로 레벨·트랙 추천 결과 계산 */
export function calculateLevelTestResult(
  answers: LevelTestAnswer[],
): LevelTestResult {
  const levelScores = { ...EMPTY_LEVEL_SCORES };
  const trackScores = { ...EMPTY_TRACK_SCORES };

  for (const answer of answers) {
    const question = LEVEL_TEST_QUESTIONS.find(
      (q) => q.id === answer.questionId,
    );
    const option = question?.options.find((o) => o.id === answer.optionId);
    if (!option) continue;

    for (const [level, score] of Object.entries(option.levelScore)) {
      levelScores[level as Level] += score ?? 0;
    }
    for (const [track, score] of Object.entries(option.trackScore)) {
      trackScores[track as TrackId] += score ?? 0;
    }
  }

  const level = pickHighest(levelScores, LEVEL_ORDER);
  const recommendedTrack = trackScores.pro >= trackScores.vibe ? "pro" : "vibe";

  const { headline, summary } = buildResultCopy(level, recommendedTrack);

  return {
    level,
    levelScores,
    recommendedTrack,
    trackScores,
    headline,
    summary,
  };
}

function pickHighest<T extends string>(
  scores: Record<T, number>,
  order: T[],
): T {
  let best = order[0];
  let bestScore = scores[best];

  for (const key of order) {
    if (scores[key] > bestScore) {
      best = key;
      bestScore = scores[key];
    }
  }
  return best;
}

function buildResultCopy(
  level: Level,
  track: TrackId,
): { headline: string; summary: string } {
  const levelCopy: Record<Level, string> = {
    entry: "AI와 코딩 용어부터 차근차근 시작하면 좋아요.",
    beginner: "가이드를 따라 하면 작은 도구를 만들 수 있는 단계예요.",
    intermediate: "실무에 바로 쓸 자동화·도구를 설계할 준비가 됐어요.",
    advanced: "팀·조직 단위로 AI 워크플로를 확장할 수 있어요.",
  };

  const trackCopy: Record<TrackId, string> = {
    pro: "현직자 트랙 — 크롤링·자동화·Claude Code 중심으로 추천드려요.",
    vibe: "바이브 코딩 트랙 — AI와 함께 아이디어를 앱으로 만드는 과정이 잘 맞아요.",
  };

  return {
    headline: levelCopy[level],
    summary: `${trackCopy[track]} 다른 트랙 커리큘럼도 자유롭게 둘러보세요.`,
  };
}

/** 모든 문항에 답했는지 확인 */
export function isLevelTestComplete(answers: LevelTestAnswer[]): boolean {
  return answers.length === LEVEL_TEST_QUESTIONS.length;
}
