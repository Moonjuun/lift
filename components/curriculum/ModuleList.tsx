import type { CurriculumModule } from "@/types/curriculum";
import { THEME } from "@/constants/theme";
import { LEVEL_LABELS } from "@/types/level";
import type { Level } from "@/types/level";

type ModuleListProps = {
  modules: CurriculumModule[];
  capstone: CurriculumModule;
  highlightLevel?: Level;
};

export function ModuleList({
  modules,
  capstone,
  highlightLevel,
}: ModuleListProps) {
  const sorted = [...modules].sort((a, b) => a.order - b.order);

  return (
    <div className="flex flex-col gap-3">
      {sorted.map((mod, index) => {
        const isHighlight = highlightLevel === mod.level;
        return (
          <article
            key={mod.id}
            className={`overflow-hidden rounded-xl border border-zinc-200 bg-white ${
              isHighlight ? "ring-1 ring-[#ff5c35]/40" : ""
            }`}
          >
            {/* 모듈 헤더바 */}
            <div className="flex flex-wrap items-center gap-2 border-b border-zinc-100 bg-zinc-50/60 px-5 py-3">
              <span className="w-6 text-center text-xs font-bold tabular-nums text-zinc-400">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className={THEME.badge}>{LEVEL_LABELS[mod.level]}</span>
              {isHighlight && (
                <span className={`text-xs font-semibold ${THEME.textAccent}`}>
                  내 레벨 추천 구간
                </span>
              )}
              <span className={`ml-auto text-xs tabular-nums ${THEME.textMuted}`}>
                약 {mod.weeks}주 · {mod.lessons.length}강
              </span>
            </div>

            {/* 모듈 본문 */}
            <div className="px-5 py-4">
              <h3 className="font-bold">{mod.title}</h3>
              <p className={`mt-1.5 text-sm leading-relaxed ${THEME.textMuted}`}>
                {mod.summary}
              </p>
              <p className={`mt-1 text-xs leading-relaxed ${THEME.textMuted}`}>
                예시: {mod.practicalExample}
              </p>
              <ul className="mt-4 divide-y divide-zinc-100">
                {mod.lessons.map((lesson, i) => (
                  <li
                    key={lesson.id}
                    className="flex items-center gap-3 py-2.5 text-sm"
                  >
                    <span className={`w-5 shrink-0 text-xs tabular-nums ${THEME.textMuted}`}>
                      {i + 1}
                    </span>
                    <span>{lesson.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        );
      })}

      {/* 마무리 프로젝트 */}
      <article className="overflow-hidden rounded-xl border border-zinc-200 bg-white ring-1 ring-[#ff5c35]/40">
        <div className="flex items-center gap-2 border-b border-zinc-100 bg-zinc-50/60 px-5 py-3">
          <span className={THEME.badge}>마무리 프로젝트</span>
        </div>
        <div className="px-5 py-4">
          <h3 className="font-bold sm:text-lg">{capstone.title}</h3>
          <p className={`mt-1.5 text-sm leading-relaxed ${THEME.textMuted}`}>
            {capstone.summary}
          </p>
          <p className={`mt-1 text-xs leading-relaxed ${THEME.textMuted}`}>
            예시: {capstone.practicalExample}
          </p>
          <p className={`mt-3 text-sm leading-relaxed ${THEME.textMuted}`}>
            원하는 주제를 직접 정해 만들고, 멘토 피드백으로 마무리합니다.
          </p>
        </div>
      </article>
    </div>
  );
}
