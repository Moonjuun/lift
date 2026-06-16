import Link from "next/link";
import { notFound } from "next/navigation";
import { ThemeShell } from "@/components/layout/ThemeShell";
import { ModuleList } from "@/components/curriculum/ModuleList";
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
        className={`text-sm ${THEME.textMuted} hover:opacity-80`}
      >
        ← {track.title}
      </Link>

      <header className="mt-6 mb-10">
        <h1 className="text-2xl font-bold md:text-3xl">커리큘럼</h1>
        <p className={`mt-2 ${THEME.textMuted}`}>
          {track.title} · 모듈별 실무 예시와 함께, 마지막에 나만의 프로젝트를
          완성합니다.
        </p>
      </header>

      <ModuleList
        modules={curriculum.modules}
        capstone={curriculum.capstone}
      />
    </ThemeShell>
  );
}
