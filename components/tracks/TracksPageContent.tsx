import { ThemeShell } from "@/components/layout/ThemeShell";
import { TrackCard } from "@/components/tracks/TrackCard";
import { LevelTestCTA } from "@/components/layout/LevelTestCTA";
import { getTracks } from "@/apis/getTracks";
import { THEME } from "@/constants/theme";

export async function TracksPageContent() {
  const tracks = await getTracks();

  return (
    <ThemeShell>
      <header className="mb-10">
        <p className={THEME.eyebrow}>학습 트랙</p>
        <h1 className="mt-2 text-2xl font-bold md:text-3xl">
          목표에 맞는 트랙을 고르세요
        </h1>
        <p className={`mt-2 max-w-xl leading-relaxed ${THEME.textMuted}`}>
          두 트랙은 다루는 도구와 결과물이 다릅니다. 카드를 누르면 전체
          커리큘럼까지 한눈에 확인할 수 있어요.
        </p>
      </header>

      <div className="grid gap-5 md:grid-cols-2">
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

      <LevelTestCTA
        className="mt-12"
        title="아직 고르기 어렵다면"
        description="자가진단을 먼저 해보면 내 수준에 맞는 트랙을 추천받을 수 있어요."
      />
    </ThemeShell>
  );
}
