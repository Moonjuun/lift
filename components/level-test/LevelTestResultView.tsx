"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { TrackCard } from "@/components/tracks/TrackCard";
import { ROUTES } from "@/constants/routes";
import { THEME } from "@/constants/theme";
import { TRACKS } from "@/constants/tracks";
import { useLevelTestStore } from "@/store/level-test-store";
import { LEVEL_LABELS } from "@/types/level";

/** 레벨 테스트 결과 화면 */
export function LevelTestResultView() {
  const router = useRouter();
  const { result, computeResult } = useLevelTestStore();

  useEffect(() => {
    if (!result) {
      const computed = computeResult();
      if (!computed) {
        router.replace(ROUTES.levelTest);
      }
    }
  }, [result, computeResult, router]);

  if (!result) {
    return (
      <p className={`text-center ${THEME.textMuted}`}>결과를 불러오는 중…</p>
    );
  }

  const recommended = TRACKS.find((tr) => tr.id === result.recommendedTrack);
  const other = TRACKS.find((tr) => tr.id !== result.recommendedTrack);

  return (
    <div className="mx-auto max-w-2xl">
      <div
        className={`motion-safe:animate-celebrate-pop p-4 text-center sm:p-6 md:p-10 ${THEME.card}`}
      >
        <p className={`text-sm font-medium ${THEME.textAccent}`}>나의 레벨</p>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
          {LEVEL_LABELS[result.level]}
        </h1>
        <p className={`mt-4 text-base leading-relaxed ${THEME.textMuted}`}>
          {result.headline}
        </p>
        <p className="mt-2 text-sm">{result.summary}</p>
      </div>

      {/* 추천 트랙 카드 — 클릭하면 커리큘럼 포함 상세 페이지로 바로 이동 */}
      <section className="mt-10">
        <h2 className="mb-4 text-lg font-bold">추천 트랙</h2>
        {recommended && (
          <TrackCard
            slug={recommended.slug}
            title={recommended.title}
            subtitle={recommended.subtitle}
            keywords={recommended.keywords}
            highlighted
          />
        )}
      </section>

      {/* 다른 트랙 — 직접 클릭해서 바로 진입 */}
      <section className={`mt-8 border-t pt-8 ${THEME.divider}`}>
        <h2 className="mb-4 text-base font-bold">다른 트랙도 살펴보기</h2>
        {other && (
          <TrackCard
            slug={other.slug}
            title={other.title}
            subtitle={other.subtitle}
            keywords={other.keywords}
          />
        )}
      </section>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
        <Link href={ROUTES.levelTest} className={THEME.btnSecondary}>
          테스트 다시 하기
        </Link>
      </div>
    </div>
  );
}
