import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { LevelTestAnswer, LevelTestResult } from "@/types/level-test";
import {
  calculateLevelTestResult,
  isLevelTestComplete,
} from "@/utils/level-test-scoring";

type LevelTestState = {
  answers: LevelTestAnswer[];
  result: LevelTestResult | null;
  setAnswer: (questionId: string, optionId: string) => void;
  computeResult: () => LevelTestResult | null;
  reset: () => void;
};

export const useLevelTestStore = create<LevelTestState>()(
  persist(
    (set, get) => ({
      answers: [],
      result: null,

      setAnswer: (questionId, optionId) => {
        set((state) => {
          const filtered = state.answers.filter(
            (a) => a.questionId !== questionId,
          );
          return {
            answers: [...filtered, { questionId, optionId }],
            result: null,
          };
        });
      },

      computeResult: () => {
        const { answers } = get();
        if (!isLevelTestComplete(answers)) return null;
        const result = calculateLevelTestResult(answers);
        set({ result });
        return result;
      },

      reset: () => set({ answers: [], result: null }),
    }),
    { name: "lift-level-test" },
  ),
);
