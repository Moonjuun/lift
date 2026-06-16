import { ThemeShell } from "@/components/layout/ThemeShell";
import { LandingHero } from "@/components/landing/LandingHero";
import { THEME } from "@/constants/theme";

/** 랜딩 페이지 본문 */
export function LandingPageContent() {
  return (
    <ThemeShell>
      <LandingHero />

      <section className={`mt-16 border-t pt-12 ${THEME.divider}`}>
        <h2 className="text-lg font-bold">이런 분께 추천해요</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className={`p-5 ${THEME.card}`}>
            <h3 className="font-semibold">현직자 · 실무자</h3>
            <p className={`mt-2 text-sm ${THEME.textMuted}`}>
              크롤링, 반복 업무 자동화, Claude Code로 사내 도구 만들기
            </p>
          </div>
          <div className={`p-5 ${THEME.card}`}>
            <h3 className="font-semibold">바이브 코딩 입문자</h3>
            <p className={`mt-2 text-sm ${THEME.textMuted}`}>
              코딩 몰라도 AI와 함께 랜딩·웹앱·나만의 기능 만들기
            </p>
          </div>
        </div>
      </section>
    </ThemeShell>
  );
}
