import Link from "next/link";
import type { CurriculumModule } from "@/types/curriculum";
import { ROUTES } from "@/constants/routes";
import { THEME } from "@/constants/theme";
import { LEVEL_LABELS } from "@/types/level";
import type { Level } from "@/types/level";

type ModuleListProps = {
  modules: CurriculumModule[];
  capstone: CurriculumModule;
  highlightLevel?: Level;
};

/** 커리큘럼 모듈 목록 */
export function ModuleList({
  modules,
  capstone,
  highlightLevel,
}: ModuleListProps) {
  const sorted = [...modules].sort((a, b) => a.order - b.order);

  return (
    <div className="flex flex-col gap-6">
      {sorted.map((mod) => {
        const isHighlight = highlightLevel === mod.level;
        return (
          <article
            key={mod.id}
            className={`p-6 ${THEME.card} ${isHighlight ? THEME.optionSelected : ""}`}
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className={THEME.badge}>{LEVEL_LABELS[mod.level]}</span>
              {isHighlight && (
                <span className={`text-xs font-semibold ${THEME.textAccent}`}>
                  내 레벨 추천 구간
                </span>
              )}
              <span className={`text-xs ${THEME.textMuted}`}>
                약 {mod.weeks}주 · {mod.lessons.length}강
              </span>
            </div>
            <h3 className="mt-3 text-lg font-bold">{mod.title}</h3>
            <p className={`mt-2 text-sm ${THEME.textMuted}`}>{mod.summary}</p>

            <div
              className={`mt-4 rounded-xl border p-4 ${THEME.divider} bg-orange-50/50`}
            >
              <p className={`text-xs font-semibold ${THEME.textAccent}`}>
                실무 적용 예시
              </p>
              <p className="mt-1 text-sm">{mod.practicalExample}</p>
            </div>

            <ul className={`mt-4 space-y-1 border-t pt-4 text-sm ${THEME.divider}`}>
              {mod.lessons.map((lesson) => (
                <li
                  key={lesson.id}
                  className="flex justify-between gap-4 py-1"
                >
                  <span>{lesson.title}</span>
                  <span className={`shrink-0 ${THEME.textMuted}`}>
                    {lesson.durationMinutes}분
                  </span>
                </li>
              ))}
            </ul>
          </article>
        );
      })}

      <article className={`p-6 md:p-8 ${THEME.card} ring-2 ring-orange-300`}>
        <span className={THEME.badge}>마무리 프로젝트</span>
        <h3 className="mt-3 text-xl font-bold">{capstone.title}</h3>
        <p className={`mt-2 ${THEME.textMuted}`}>{capstone.summary}</p>
        <div
          className={`mt-4 rounded-xl border p-4 ${THEME.divider} bg-orange-50`}
        >
          <p className={`text-xs font-semibold ${THEME.textAccent}`}>예시</p>
          <p className="mt-1 text-sm">{capstone.practicalExample}</p>
        </div>
        <p className={`mt-4 text-sm ${THEME.textMuted}`}>
          원하는 자동화·기능을 직접 기획하고, 멘토 피드백으로 완성합니다.
        </p>
      </article>

      <div className="text-center">
        <Link href={ROUTES.levelTest} className={THEME.btnPrimary}>
          내 레벨 확인하고 시작하기
        </Link>
      </div>
    </div>
  );
}
