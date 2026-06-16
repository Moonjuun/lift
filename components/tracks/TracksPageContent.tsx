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
      <div className="mb-10">
        <h1 className="text-2xl font-bold md:text-3xl">학습 트랙</h1>
        <p className={`mt-2 max-w-xl ${THEME.textMuted}`}>
          현직자 실무 자동화와 바이브 코딩, 두 가지 길을 준비했어요. 레벨
          테스트로 추천을 받거나, 관심 트랙을 바로 살펴보세요.
        </p>
        <Link
          href={ROUTES.levelTest}
          className={`mt-4 inline-block text-sm ${THEME.textAccent}`}
        >
          레벨 테스트 하기 →
        </Link>
      </div>

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
    </ThemeShell>
  );
}
