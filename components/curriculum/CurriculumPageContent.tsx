import Link from "next/link";
import { notFound } from "next/navigation";
import { ThemeShell } from "@/components/layout/ThemeShell";
import { ModuleList } from "@/components/curriculum/ModuleList";
import { LevelTestCTA } from "@/components/layout/LevelTestCTA";
import { getTrackBySlug } from "@/apis/getTracks";
import { getCurriculumBySlug } from "@/apis/getCurriculum";
import { ROUTES } from "@/constants/routes";
import { THEME } from "@/constants/theme";

type CurriculumPageContentProps = {
  slug: string;
};

export async function CurriculumPageContent({
  slug,
}: CurriculumPageContentProps) {
  const track = await getTrackBySlug(slug);
  const curriculum = await getCurriculumBySlug(slug);
  if (!track || !curriculum) notFound();

  return (
    <ThemeShell>
      <Link
        href={ROUTES.trackDetail(slug)}
        className={`inline-flex items-center gap-1 text-sm ${THEME.textMuted} transition-colors hover:text-zinc-900`}
      >
        <span aria-hidden>←</span> {track.title}
      </Link>

      <header className="mt-6 mb-10">
        <p className={THEME.eyebrow}>{track.title}</p>
        <h1 className="mt-2 text-2xl font-bold md:text-3xl">커리큘럼</h1>
        <p className={`mt-2 max-w-xl leading-relaxed ${THEME.textMuted}`}>
          모듈마다 실무 예시를 함께 다루고, 마지막에는 직접 정한 주제로 프로젝트를
          완성합니다.
        </p>
      </header>

      <ModuleList modules={curriculum.modules} capstone={curriculum.capstone} />

      <LevelTestCTA
        className="mt-12"
        title="이 커리큘럼, 어디서 시작할까요?"
        description="레벨 진단으로 내 수준에 맞는 시작 구간을 찾아보세요."
      />
    </ThemeShell>
  );
}
