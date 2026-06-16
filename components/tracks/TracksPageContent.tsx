import Link from "next/link";
import { ThemeShell } from "@/components/layout/ThemeShell";
import { TrackCard } from "@/components/tracks/TrackCard";
import { getTracks } from "@/apis/getTracks";
import { ROUTES } from "@/constants/routes";
import { THEME } from "@/constants/theme";

export async function TracksPageContent() {
  const tracks = await getTracks();

  return (
    <ThemeShell>
      <header className="mb-8">
        <h1 className="text-2xl font-bold md:text-3xl">학습 트랙</h1>
        <p className={`mt-2 max-w-xl ${THEME.textMuted}`}>
          두 가지 트랙 중 하나를 선택하세요. 카드를 클릭하면 커리큘럼까지 한 번에 볼 수 있어요.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {tracks.map((track) => (
          <TrackCard
            key={track.id}
            slug={track.slug}
            title={track.title}
            subtitle={track.subtitle}
            keywords={track.keywords}
          />
        ))}
      </div>

      {/* 결정이 어렵다면 레벨 테스트 유도 */}
      <div className={`mt-10 rounded-2xl border p-5 sm:p-6 ${THEME.card} bg-orange-50/40`}>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-bold">어떤 트랙이 맞는지 모르겠다면?</p>
            <p className={`mt-1 text-sm ${THEME.textMuted}`}>
              3분 자가진단으로 내 레벨과 추천 트랙을 확인하세요.
            </p>
          </div>
          <Link href={ROUTES.levelTest} className={`shrink-0 ${THEME.btnPrimary}`}>
            레벨 테스트 시작
          </Link>
        </div>
      </div>
    </ThemeShell>
  );
}
