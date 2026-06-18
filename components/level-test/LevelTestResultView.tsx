"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { TrackCard } from "@/components/tracks/TrackCard";
import { ROUTES } from "@/constants/routes";
import { THEME } from "@/constants/theme";
import { TRACKS } from "@/constants/tracks";
import { LEVEL_LABELS } from "@/types/level";
import { useLevelTestStore } from "@/store/level-test-store";

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
        className={`motion-safe:animate-fade-in-up p-6 text-center sm:p-8 md:p-10 ${THEME.card}`}
      >
        <p className={THEME.eyebrow}>진단 결과</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          {LEVEL_LABELS[result.level]}
        </h1>
        <p className={`mt-4 text-base leading-relaxed ${THEME.textMuted}`}>
          {result.headline}
        </p>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed">
          {result.summary}
        </p>
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
        {recommended && (
          <Link
            href={ROUTES.trackDetail(recommended.slug)}
            className={`mt-4 block rounded-xl p-4 transition-colors hover:bg-zinc-50 ${THEME.card}`}
          >
            <p className={`text-xs ${THEME.textMuted}`}>여기서 시작하면 좋아요</p>
            <p className="mt-1 font-semibold">
              {result.recommendedModuleTitle}
            </p>
          </Link>
        )}
      </section>

      {/* 다른 트랙 — 직접 클릭해서 바로 진입 */}
      {other && (
        <section className={`mt-10 border-t pt-8 ${THEME.divider}`}>
          <h2 className="mb-4 text-base font-bold">다른 트랙도 살펴보기</h2>
          <TrackCard
            slug={other.slug}
            title={other.title}
            subtitle={other.subtitle}
            keywords={other.keywords}
          />
        </section>
      )}

      <div className="mt-10 text-center">
        <Link href={ROUTES.levelTest} className={THEME.btnSecondary}>
          진단 다시 하기
        </Link>
      </div>
    </div>
  );
}
