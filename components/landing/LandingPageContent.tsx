import Link from "next/link";
import { ThemeShell } from "@/components/layout/ThemeShell";
import { LandingHero } from "@/components/landing/LandingHero";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { TRACKS } from "@/constants/tracks";
import { ROUTES } from "@/constants/routes";
import { THEME } from "@/constants/theme";

/** 랜딩 페이지 본문 */
export function LandingPageContent() {
  return (
    <ThemeShell>
      <LandingHero />

      {/* 트랙 선택 섹션 — 1클릭으로 바로 진입 가능 */}
      <AnimateIn>
        <section className={`mt-12 border-t pt-8 sm:mt-16 sm:pt-12 ${THEME.divider}`}>
          <h2 className="text-base font-bold sm:text-lg">어떤 트랙이 맞을까요?</h2>
          <p className={`mt-1 text-sm ${THEME.textMuted}`}>
            카드를 클릭하면 커리큘럼까지 바로 확인할 수 있어요.
          </p>
          <div className="mt-4 grid gap-4 sm:mt-6 md:grid-cols-2">
            {TRACKS.map((track, i) => (
              <AnimateIn key={track.id} delay={i * 80}>
                <Link
                  href={ROUTES.trackDetail(track.slug)}
                  className={`group block p-5 sm:p-6 ${THEME.card} transition-all duration-200 hover:shadow-md hover:-translate-y-0.5`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <span className={THEME.badge}>{track.subtitle}</span>
                      <h3 className="mt-3 text-lg font-bold">{track.title}</h3>
                      <p className={`mt-2 text-sm leading-relaxed ${THEME.textMuted}`}>
                        {track.fitFor[0]}
                      </p>
                    </div>
                    <span
                      className={`mt-1 shrink-0 text-xl transition-transform duration-200 group-hover:translate-x-1 ${THEME.textAccent}`}
                    >
                      →
                    </span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {track.keywords.slice(0, 3).map((kw) => (
                      <span key={kw} className={THEME.badge}>
                        {kw}
                      </span>
                    ))}
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </section>
      </AnimateIn>

      {/* 레벨 테스트 유도 배너 */}
      <AnimateIn delay={200}>
        <section className={`mt-8 rounded-2xl border p-5 sm:p-6 ${THEME.card} bg-orange-50/40`}>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-bold">어떤 트랙이 맞는지 모르겠다면?</p>
              <p className={`mt-1 text-sm ${THEME.textMuted}`}>
                3분 자가진단으로 내 레벨과 추천 트랙을 바로 확인하세요.
              </p>
            </div>
            <Link
              href={ROUTES.levelTest}
              className={`shrink-0 ${THEME.btnPrimary}`}
            >
              레벨 테스트 시작
            </Link>
          </div>
        </section>
      </AnimateIn>
    </ThemeShell>
  );
}
