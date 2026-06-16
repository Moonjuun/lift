import Link from "next/link";
import { notFound } from "next/navigation";
import { ThemeShell } from "@/components/layout/ThemeShell";
import { ModuleList } from "@/components/curriculum/ModuleList";
import { ArrowRightIcon, CheckIcon } from "@/components/ui/Icon";
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
        className={`inline-flex items-center gap-1 text-sm ${THEME.textMuted} transition-colors hover:text-zinc-900`}
      >
        <span aria-hidden>←</span> 트랙 목록
      </Link>

      {/* 헤더 */}
      <header className="mt-6">
        <p className={THEME.eyebrow}>{track.subtitle}</p>
        <h1 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
          {track.title}
        </h1>
        <p className={`mt-4 max-w-2xl leading-relaxed ${THEME.textMuted}`}>
          {track.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {track.keywords.map((kw) => (
            <span key={kw} className={THEME.chip}>
              {kw}
            </span>
          ))}
        </div>
      </header>

      {/* 이런 분께 잘 맞아요 */}
      <section className={`mt-12 border-t pt-10 ${THEME.divider}`}>
        <h2 className="text-lg font-bold">이런 분께 잘 맞아요</h2>
        <ul className="mt-5 space-y-3">
          {track.fitFor.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm">
              <CheckIcon
                className={`mt-0.5 h-4 w-4 shrink-0 ${THEME.textAccent}`}
              />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 수강 후 할 수 있어요 */}
      <section className={`mt-12 border-t pt-10 ${THEME.divider}`}>
        <h2 className="text-lg font-bold">수강 후 할 수 있는 것</h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {track.outcomes.map((outcome) => (
            <li
              key={outcome}
              className={`flex items-start gap-3 rounded-xl border p-4 ${THEME.divider}`}
            >
              <CheckIcon
                className={`mt-0.5 h-4 w-4 shrink-0 ${THEME.textAccent}`}
              />
              <span className="text-sm leading-relaxed">{outcome}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 트랙 특징 */}
      <section className={`mt-12 border-t pt-10 ${THEME.divider}`}>
        <h2 className="text-lg font-bold">이 트랙의 특징</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {track.highlights.map((h) => (
            <div key={h.title} className={`p-5 ${THEME.card}`}>
              <p className="font-semibold">{h.title}</p>
              <p className={`mt-2 text-sm leading-relaxed ${THEME.textMuted}`}>
                {h.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 전체 커리큘럼 — 인라인으로 바로 보여줌 */}
      {curriculum && (
        <section className={`mt-12 border-t pt-10 ${THEME.divider}`}>
          <div className="mb-6">
            <h2 className="text-lg font-bold">전체 커리큘럼</h2>
            <p className={`mt-2 text-sm ${THEME.textMuted}`}>
              {curriculum.modules.length}개 모듈과 마무리 프로젝트로 구성돼
              있어요. 추천 레벨은{" "}
              {track.suggestedLevels.map((l) => LEVEL_LABELS[l]).join(" · ")}{" "}
              입니다.
            </p>
          </div>
          <ModuleList
            modules={curriculum.modules}
            capstone={curriculum.capstone}
          />
        </section>
      )}

      {/* CTA */}
      <section className={`mt-12 border-t pt-10 ${THEME.divider}`}>
        <div className="rounded-2xl border border-zinc-200 bg-white p-7 text-center sm:p-9">
          <h2 className="text-xl font-bold">어디서 시작할지 모르겠다면</h2>
          <p className={`mx-auto mt-2 max-w-md text-sm leading-relaxed ${THEME.textMuted}`}>
            먼저 레벨을 진단하면, 이 커리큘럼에서 나에게 맞는 구간부터 바로
            시작할 수 있어요.
          </p>
          <div className="mt-6 flex justify-center">
            <Link href={ROUTES.levelTest} className={`group gap-2 ${THEME.btnPrimary}`}>
              내 레벨 진단하기
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>
    </ThemeShell>
  );
}
