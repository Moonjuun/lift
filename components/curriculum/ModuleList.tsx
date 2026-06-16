import type { CurriculumModule } from "@/types/curriculum";
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
    <div className="flex flex-col gap-5">
      {sorted.map((mod, index) => {
        const isHighlight = highlightLevel === mod.level;
        return (
          <article
            key={mod.id}
            className={`p-5 sm:p-6 ${THEME.card} ${
              isHighlight ? "ring-1 ring-[#ff5c35]/40" : ""
            }`}
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className={`text-xs font-semibold tabular-nums ${THEME.textMuted}`}>
                {String(index + 1).padStart(2, "0")}
              </span>
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
            <p className={`mt-2 text-sm leading-relaxed ${THEME.textMuted}`}>
              {mod.summary}
            </p>

            <div className="mt-4 rounded-xl border border-zinc-200 bg-zinc-50 p-4">
              <p className={`text-xs font-semibold ${THEME.textAccent}`}>
                실무 적용 예시
              </p>
              <p className="mt-1 text-sm leading-relaxed">
                {mod.practicalExample}
              </p>
            </div>

            <ul className={`mt-4 divide-y border-t pt-1 text-sm ${THEME.divider}`}>
              {mod.lessons.map((lesson) => (
                <li
                  key={lesson.id}
                  className="flex flex-col gap-0.5 py-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                >
                  <span className="min-w-0 break-words">{lesson.title}</span>
                  <span
                    className={`shrink-0 text-xs tabular-nums ${THEME.textMuted}`}
                  >
                    {lesson.durationMinutes}분
                  </span>
                </li>
              ))}
            </ul>
          </article>
        );
      })}

      <article className={`p-5 sm:p-6 md:p-8 ${THEME.card} ring-1 ring-[#ff5c35]/40`}>
        <span className={THEME.badge}>마무리 프로젝트</span>
        <h3 className="mt-3 text-lg font-bold sm:text-xl">{capstone.title}</h3>
        <p className={`mt-2 leading-relaxed ${THEME.textMuted}`}>
          {capstone.summary}
        </p>
        <div className="mt-4 rounded-xl border border-zinc-200 bg-zinc-50 p-4">
          <p className={`text-xs font-semibold ${THEME.textAccent}`}>예시</p>
          <p className="mt-1 text-sm leading-relaxed">
            {capstone.practicalExample}
          </p>
        </div>
        <p className={`mt-4 text-sm leading-relaxed ${THEME.textMuted}`}>
          원하는 주제를 직접 정해 만들고, 멘토 피드백으로 마무리합니다.
        </p>
      </article>
    </div>
  );
}
