import Link from "next/link";
import { notFound } from "next/navigation";
import { ThemeShell } from "@/components/layout/ThemeShell";
import { getTrackBySlug } from "@/apis/getTracks";
import { getCurriculumBySlug } from "@/apis/getCurriculum";
import { ROUTES } from "@/constants/routes";
import { THEME } from "@/constants/theme";
import { LEVEL_LABELS } from "@/types/level";

type TrackDetailPageContentProps = {
  slug: string;
};

export async function TrackDetailPageContent({
  slug,
}: TrackDetailPageContentProps) {
  const track = await getTrackBySlug(slug);
  if (!track) notFound();

  const curriculum = await getCurriculumBySlug(slug);
  const moduleCount = curriculum?.modules.length ?? 0;

  return (
    <ThemeShell>
      <Link
        href={ROUTES.tracks}
        className={`text-sm ${THEME.textMuted} hover:opacity-80`}
      >
        ← 트랙 목록
      </Link>

      <header className="mt-6">
        <span className={THEME.badge}>{track.subtitle}</span>
        <h1 className="mt-3 text-2xl font-bold sm:text-3xl md:text-4xl">{track.title}</h1>
        <p className={`mt-4 max-w-2xl leading-relaxed ${THEME.textMuted}`}>
          {track.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {track.keywords.map((kw) => (
            <span key={kw} className={THEME.badge}>
              {kw}
            </span>
          ))}
        </div>
      </header>

      <section className={`mt-10 border-t pt-10 ${THEME.divider}`}>
        <h2 className="text-lg font-bold">이런 분께 잘 맞아요</h2>
        <ul
          className={`mt-4 list-inside list-disc space-y-2 text-sm ${THEME.textMuted}`}
        >
          {track.fitFor.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className={`mt-10 border-t pt-10 ${THEME.divider}`}>
        <h2 className="text-lg font-bold">커리큘럼 요약</h2>
        <p className={`mt-2 text-sm ${THEME.textMuted}`}>
          {moduleCount}개 모듈 + 마무리 커스텀 프로젝트 · 추천 레벨:{" "}
          {track.suggestedLevels.map((l) => LEVEL_LABELS[l]).join(", ")}
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link href={ROUTES.trackCurriculum(slug)} className={THEME.btnPrimary}>
            전체 커리큘럼 보기
          </Link>
          <Link href={ROUTES.levelTest} className={THEME.btnSecondary}>
            내 레벨 테스트
          </Link>
        </div>
      </section>
    </ThemeShell>
  );
}
