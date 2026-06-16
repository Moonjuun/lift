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
        <Link
          href={ROUTES.trackCurriculum(recommended?.slug ?? "pro")}
          className={`mt-4 block text-center text-sm font-medium ${THEME.textAccent}`}
        >
          추천 트랙 커리큘럼 보기 →
        </Link>
      </section>

      <section className={`mt-10 border-t pt-10 ${THEME.divider}`}>
        <h2 className="mb-2 text-lg font-bold">다른 트랙도 둘러보기</h2>
        <p className={`mb-4 text-sm ${THEME.textMuted}`}>
          추천과 관계없이 전체 커리큘럼을 탐색할 수 있어요.
        </p>
        {other && (
          <TrackCard
            slug={other.slug}
            title={other.title}
            subtitle={other.subtitle}
            keywords={other.keywords}
          />
        )}
      </section>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
        <Link href={ROUTES.tracks} className={THEME.btnPrimary}>
          전체 트랙 보기
        </Link>
        <Link href={ROUTES.levelTest} className={THEME.btnSecondary}>
          테스트 다시 하기
        </Link>
      </div>
    </div>
  );
}
