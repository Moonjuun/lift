import Link from "next/link";
import { HeroBackground } from "@/components/landing/HeroBackground";
import { ROUTES } from "@/constants/routes";
import { THEME } from "@/constants/theme";

const FEATURES = [
  {
    title: "자가진단 11문항",
    desc: "‘나는 이런 사람이다’ 체크형. 정답 없이 솔직하게.",
    delay: "480ms",
  },
  {
    title: "트랙 2종",
    desc: "현직자 실무 vs 바이브 코딩. 추천 + 전체 탐색.",
    delay: "600ms",
  },
  {
    title: "실무 예시 포함",
    desc: "모듈마다 적용 사례. 마지막엔 나만의 프로젝트.",
    delay: "720ms",
  },
] as const;

/** 랜딩 히어로 섹션 */
export function LandingHero() {
  return (
    <section className="relative flex flex-col gap-10 md:gap-14">
      <HeroBackground />

      <div className="flex flex-col gap-6">
        <span
          className={`motion-safe:animate-fade-in-up w-fit ${THEME.badge}`}
          style={{ animationDelay: "0ms" }}
        >
          AI 학원 · Lift
        </span>
        <h1
          className="motion-safe:animate-fade-in-up max-w-2xl text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-5xl"
          style={{ animationDelay: "80ms" }}
        >
          내 수준을 알고,
          <br />
          <span className={THEME.textAccent}>맞는 AI 학습 길</span>을 찾으세요
        </h1>
        <p
          className={`motion-safe:animate-fade-in-up max-w-xl text-base leading-relaxed md:text-lg ${THEME.textMuted}`}
          style={{ animationDelay: "160ms" }}
        >
          3분 자가진단으로 입문·초급·중급·고급을 확인하고, 현직자 트랙과
          바이브 코딩 트랙 중 나에게 맞는 커리큘럼을 추천받을 수 있어요.
        </p>
        <div
          className="motion-safe:animate-fade-in-up flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          style={{ animationDelay: "240ms" }}
        >
          <Link
            href={ROUTES.levelTest}
            className={`motion-safe:animate-pulse-glow ${THEME.btnPrimary}`}
          >
            레벨 테스트 시작
          </Link>
          <Link href={ROUTES.tracks} className={THEME.btnSecondary}>
            트랙 먼저 보기
          </Link>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {FEATURES.map((item) => (
          <div
            key={item.title}
            className={`lift-card motion-safe:animate-fade-in-up p-4 sm:p-5 ${THEME.card}`}
            style={{ animationDelay: item.delay }}
          >
            <h3 className="font-semibold">{item.title}</h3>
            <p className={`mt-2 text-sm ${THEME.textMuted}`}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
