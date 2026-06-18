import { LEVEL_TEST_QUESTIONS } from "@/constants/level-test-questions";
import { getEntryModule } from "@/constants/curriculum";
import type { LevelTestAnswer, LevelTestResult } from "@/types/level-test";
import type { Level } from "@/types/level";
import type { TrackId } from "@/types/track";
import { LEVEL_ORDER } from "@/types/level";

const EMPTY_TRACK_SCORES: Record<TrackId, number> = {
  pro: 0,
  vibe: 0,
};

/**
 * 답변 목록으로 레벨·트랙·진입 모듈을 계산한다.
 *
 * 레벨 산정 원칙: **증거가 바닥(floor)을 정하고, 자가 진단은 한 단계까지만 올린다.**
 * - demonstrated: 역량 문항(unlocksLevel)에서 증명된 최고 레벨
 * - self: 자가 진단(selfLevel)
 * - 최종 = self를 [demonstrated, demonstrated+1] 범위로 클램프
 *   (증거보다 낮게 보면 증거로 끌어올리고, 과대평가는 한 단계까지만 허용)
 */
export function calculateLevelTestResult(
  answers: LevelTestAnswer[],
): LevelTestResult {
  const trackScores = { ...EMPTY_TRACK_SCORES };
  let demonstratedIndex = 0; // 기본값 entry
  let selfIndex: number | null = null;

  for (const answer of answers) {
    const question = LEVEL_TEST_QUESTIONS.find(
      (q) => q.id === answer.questionId,
    );
    const option = question?.options.find((o) => o.id === answer.optionId);
    if (!option) continue;

    if (option.trackScore) {
      for (const [track, score] of Object.entries(option.trackScore)) {
        trackScores[track as TrackId] += score ?? 0;
      }
    }
    if (option.unlocksLevel) {
      demonstratedIndex = Math.max(
        demonstratedIndex,
        LEVEL_ORDER.indexOf(option.unlocksLevel),
      );
    }
    if (option.selfLevel) {
      selfIndex = LEVEL_ORDER.indexOf(option.selfLevel);
    }
  }

  const finalIndex =
    selfIndex === null
      ? demonstratedIndex
      : clamp(selfIndex, demonstratedIndex, demonstratedIndex + 1);
  const level = LEVEL_ORDER[clamp(finalIndex, 0, LEVEL_ORDER.length - 1)];

  const recommendedTrack: TrackId =
    trackScores.pro >= trackScores.vibe ? "pro" : "vibe";
  const entryModule = getEntryModule(recommendedTrack, level);

  const { headline, summary } = buildResultCopy(
    level,
    recommendedTrack,
    entryModule.title,
  );

  return {
    level,
    recommendedTrack,
    trackScores,
    recommendedModuleId: entryModule.id,
    recommendedModuleTitle: entryModule.title,
    headline,
    summary,
  };
}

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

function buildResultCopy(
  level: Level,
  track: TrackId,
  moduleTitle: string,
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
    summary: `${trackCopy[track]} ‘${moduleTitle}’ 모듈부터 시작하는 걸 추천해요.`,
  };
}

/** 모든 문항에 답했는지 확인 */
export function isLevelTestComplete(answers: LevelTestAnswer[]): boolean {
  return answers.length === LEVEL_TEST_QUESTIONS.length;
}
