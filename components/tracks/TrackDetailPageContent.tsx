import Link from "next/link";
import { notFound } from "next/navigation";
import { ThemeShell } from "@/components/layout/ThemeShell";
import { ModuleList } from "@/components/curriculum/ModuleList";
import { ContactDialog } from "@/components/contact/ContactDialog";
import { ArrowLeftIcon, ArrowRightIcon, CheckIcon } from "@/components/ui/Icon";
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
      {/* 히어로 */}
      <div className="relative overflow-hidden rounded-2xl border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-[#f8f7f4] px-8 py-10 sm:px-10 sm:py-12">
        <Link
          href={ROUTES.tracks}
          className="inline-flex items-center gap-1.5 text-sm text-zinc-500 transition-colors hover:text-zinc-900"
        >
          <ArrowLeftIcon className="h-3.5 w-3.5" />
          트랙 목록
        </Link>
        <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-[#ff5c35]">
          {track.subtitle}
        </p>
        <h1 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl md:text-4xl">
          {track.title}
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-600 sm:text-base">
          {track.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {track.keywords.map((kw) => (
            <span key={kw} className={THEME.chip}>
              {kw}
            </span>
          ))}
        </div>
      </div>

      {/* 이런 분께 잘 맞아요 */}
      <section className="mt-6 rounded-2xl border border-zinc-200 bg-white p-6 sm:p-7">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
          이런 분께 잘 맞아요
        </h2>
        <ul className="mt-4 space-y-2.5">
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

      {/* 수강 후 할 수 있는 것 */}
      <section className="mt-4 rounded-2xl border border-zinc-200 bg-white p-6 sm:p-7">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
          수강 후 할 수 있는 것
        </h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {track.outcomes.map((outcome) => (
            <li
              key={outcome}
              className="flex items-start gap-3 rounded-xl bg-zinc-50 px-4 py-3.5"
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
      <section className="mt-4 rounded-2xl border border-zinc-200 bg-white p-6 sm:p-7">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
          이 트랙의 특징
        </h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {track.highlights.map((h) => (
            <div
              key={h.title}
              className="rounded-xl bg-zinc-50 p-5"
            >
              <p className="font-semibold">{h.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">
                {h.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 전체 커리큘럼 */}
      {curriculum && (
        <section className="mt-8">
          <div className="mb-4">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
              전체 커리큘럼
            </h2>
            <p className="mt-1.5 text-sm text-zinc-600">
              {curriculum.modules.length}개 모듈 · 추천 레벨{" "}
              {track.suggestedLevels.map((l) => LEVEL_LABELS[l]).join(" · ")}
            </p>
          </div>
          <ModuleList
            modules={curriculum.modules}
            capstone={curriculum.capstone}
          />
        </section>
      )}

      {/* CTA */}
      <section className="mt-10">
        <div className="rounded-2xl bg-[#ff5c35] p-8 text-center sm:p-10">
          <h2 className="text-xl font-bold text-white">어디서 시작할지 모르겠다면</h2>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-white/75">
            먼저 레벨을 진단하면, 이 커리큘럼에서 나에게 맞는 구간부터 바로
            시작할 수 있어요.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={ROUTES.levelTest}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#ff5c35] transition-colors hover:bg-orange-50 sm:w-auto"
            >
              내 레벨 진단하기
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <ContactDialog
              triggerLabel="문의하기"
              triggerClassName="inline-flex w-full items-center justify-center rounded-xl border border-white/50 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
            />
          </div>
        </div>
      </section>
    </ThemeShell>
  );
}
