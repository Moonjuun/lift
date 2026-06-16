import Link from "next/link";
import { notFound } from "next/navigation";
import { ThemeShell } from "@/components/layout/ThemeShell";
import { ModuleList } from "@/components/curriculum/ModuleList";
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

  return (
    <ThemeShell>
      {/* 뒤로가기 */}
      <Link
        href={ROUTES.tracks}
        className={`text-sm ${THEME.textMuted} hover:opacity-80`}
      >
        ← 트랙 목록
      </Link>

      {/* 헤더 */}
      <header className="mt-6">
        <span className={THEME.badge}>{track.subtitle}</span>
        <h1 className="mt-3 text-2xl font-bold sm:text-3xl md:text-4xl">
          {track.title}
        </h1>
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

      {/* 이런 분께 잘 맞아요 */}
      <section className={`mt-10 border-t pt-10 ${THEME.divider}`}>
        <h2 className="text-lg font-bold">이런 분께 잘 맞아요</h2>
        <ul className={`mt-4 space-y-2 text-sm ${THEME.textMuted}`}>
          {track.fitFor.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className={`mt-0.5 shrink-0 font-bold ${THEME.textAccent}`}>✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 수강 후 할 수 있어요 */}
      <section className={`mt-10 border-t pt-10 ${THEME.divider}`}>
        <h2 className="text-lg font-bold">수강 후 할 수 있어요</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {track.outcomes.map((outcome) => (
            <li
              key={outcome}
              className={`flex items-start gap-3 rounded-xl border p-4 ${THEME.divider} bg-orange-50/40`}
            >
              <span className={`mt-0.5 text-base shrink-0 ${THEME.textAccent}`}>🎯</span>
              <span className="text-sm leading-relaxed">{outcome}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 트랙 특징 */}
      <section className={`mt-10 border-t pt-10 ${THEME.divider}`}>
        <h2 className="text-lg font-bold">이 트랙의 특징</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {track.highlights.map((h) => (
            <div
              key={h.title}
              className={`rounded-2xl border p-5 ${THEME.card}`}
            >
              <p className="font-bold">{h.title}</p>
              <p className={`mt-2 text-sm leading-relaxed ${THEME.textMuted}`}>
                {h.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 전체 커리큘럼 — 인라인으로 바로 보여줌 */}
      {curriculum && (
        <section className={`mt-10 border-t pt-10 ${THEME.divider}`}>
          <div className="mb-6 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-lg font-bold">전체 커리큘럼</h2>
              <p className={`mt-1 text-sm ${THEME.textMuted}`}>
                {curriculum.modules.length}개 모듈 + 마무리 커스텀 프로젝트 ·
                추천 레벨:{" "}
                {track.suggestedLevels.map((l) => LEVEL_LABELS[l]).join(", ")}
              </p>
            </div>
          </div>
          <ModuleList
            modules={curriculum.modules}
            capstone={curriculum.capstone}
          />
        </section>
      )}

      {/* CTA */}
      <div className={`mt-10 border-t pt-10 ${THEME.divider}`}>
        <div className={`rounded-2xl border p-6 sm:p-8 ${THEME.card} text-center`}>
          <h2 className="text-xl font-bold">지금 바로 시작하세요</h2>
          <p className={`mt-2 text-sm ${THEME.textMuted}`}>
            내 레벨을 먼저 확인하고, 딱 맞는 구간부터 시작할 수 있어요.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link href={ROUTES.levelTest} className={THEME.btnPrimary}>
              내 레벨 테스트하기
            </Link>
          </div>
        </div>
      </div>
    </ThemeShell>
  );
}
