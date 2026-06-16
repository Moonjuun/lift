"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LEVEL_TEST_QUESTIONS } from "@/constants/level-test-questions";
import { ROUTES } from "@/constants/routes";
import { THEME } from "@/constants/theme";
import { useLevelTestStore } from "@/store/level-test-store";

/** 레벨 테스트 문항 진행 UI */
export function LevelTestFlow() {
  const router = useRouter();
  const { answers, setAnswer, computeResult } = useLevelTestStore();
  const [step, setStep] = useState(0);

  const question = LEVEL_TEST_QUESTIONS[step];
  const total = LEVEL_TEST_QUESTIONS.length;
  const progress = ((step + 1) / total) * 100;

  const currentAnswer = useMemo(
    () => answers.find((a) => a.questionId === question.id)?.optionId,
    [answers, question.id],
  );

  const goNext = () => {
    if (!currentAnswer) return;
    if (step < total - 1) {
      setStep(step + 1);
      return;
    }
    const result = computeResult();
    if (result) {
      router.push(ROUTES.levelTestResult);
    }
  };

  const goPrev = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-8">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className={`font-medium ${THEME.textMuted}`}>
            <span className="text-zinc-900">{step + 1}</span> / {total}
          </span>
          <span className={`text-xs font-semibold ${THEME.textAccent}`}>
            {Math.round(progress)}%
          </span>
        </div>
        <div className={THEME.progressTrack}>
          <div
            className={THEME.progressFill}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div
        key={step}
        className={`motion-safe:animate-slide-in-right p-4 sm:p-6 md:p-8 ${THEME.card}`}
      >
        <h1 className="text-lg font-bold leading-snug sm:text-xl md:text-2xl">
          {question.prompt}
        </h1>
        {question.helper && (
          <p className={`mt-2 text-sm ${THEME.textMuted}`}>{question.helper}</p>
        )}

        <ul className="mt-8 flex flex-col gap-3">
          {question.options.map((option, index) => {
            const selected = currentAnswer === option.id;
            return (
              <li
                key={option.id}
                className="motion-safe:animate-fade-in-up"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <button
                  type="button"
                  onClick={() => setAnswer(question.id, option.id)}
                  className={`min-h-12 w-full rounded-xl border p-4 text-left text-sm transition-all duration-200 sm:min-h-0 md:text-base ${
                    selected ? THEME.optionSelected : THEME.optionDefault
                  }`}
                >
                  {option.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
        <button
          type="button"
          onClick={goPrev}
          disabled={step === 0}
          className={`${THEME.btnSecondary} sm:min-w-[7rem] disabled:opacity-40`}
        >
          이전
        </button>
        <button
          type="button"
          onClick={goNext}
          disabled={!currentAnswer}
          className={`${THEME.btnPrimary} sm:min-w-[7rem] disabled:opacity-40`}
        >
          {step === total - 1 ? "결과 보기" : "다음"}
        </button>
      </div>

      <p className="mt-6 text-center text-xs">
        <Link
          href={ROUTES.home}
          className={`${THEME.textMuted} transition-colors hover:text-zinc-900`}
        >
          처음으로
        </Link>
      </p>
    </div>
  );
}
