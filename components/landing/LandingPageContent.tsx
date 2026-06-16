import Link from "next/link";
import { ThemeShell } from "@/components/layout/ThemeShell";
import { LandingHero } from "@/components/landing/LandingHero";
import { LevelTestCTA } from "@/components/layout/LevelTestCTA";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { ArrowRightIcon } from "@/components/ui/Icon";
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
        <section className={`mt-16 border-t pt-12 sm:mt-20 ${THEME.divider}`}>
          <p className={THEME.eyebrow}>학습 트랙</p>
          <h2 className="mt-2 text-xl font-bold sm:text-2xl">
            어떤 방향이 더 끌리시나요?
          </h2>
          <p className={`mt-2 max-w-xl text-sm leading-relaxed ${THEME.textMuted}`}>
            카드를 누르면 트랙 소개와 전체 커리큘럼을 한 번에 볼 수 있어요.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {TRACKS.map((track, i) => (
              <AnimateIn key={track.id} delay={i * 80}>
                <Link
                  href={ROUTES.trackDetail(track.slug)}
                  className={`group flex h-full flex-col p-6 ${THEME.card}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="text-lg font-bold">{track.title}</h3>
                      <p className={`mt-1 text-sm ${THEME.textMuted}`}>
                        {track.subtitle}
                      </p>
                    </div>
                    <ArrowRightIcon
                      className={`mt-1 h-5 w-5 shrink-0 transition-transform duration-200 group-hover:translate-x-1 ${THEME.textAccent}`}
                    />
                  </div>
                  <p className={`mt-4 text-sm leading-relaxed ${THEME.textMuted}`}>
                    {track.fitFor[0]}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {track.keywords.slice(0, 3).map((kw) => (
                      <span key={kw} className={THEME.chip}>
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
      <AnimateIn delay={120}>
        <LevelTestCTA
          className="mt-10"
          title="어떤 트랙이 맞을지 고민된다면"
          description="3분 자가진단으로 내 수준과 어울리는 트랙을 먼저 확인해 보세요."
        />
      </AnimateIn>
    </ThemeShell>
  );
}
