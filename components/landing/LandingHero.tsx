import Link from "next/link";
import { HeroBackground } from "@/components/landing/HeroBackground";
import { ROUTES } from "@/constants/routes";
import { THEME } from "@/constants/theme";

const FEATURES = [
  {
    title: "11문항 자가진단",
    desc: "정답이 없는 체크형 질문으로 지금 내 수준을 솔직하게 확인해요.",
    delay: "240ms",
  },
  {
    title: "두 갈래 학습 트랙",
    desc: "업무 자동화를 다루는 현직자 트랙과 직접 만드는 바이브 코딩 트랙.",
    delay: "320ms",
  },
  {
    title: "실무 예시 중심",
    desc: "모듈마다 실제 업무 사례, 마지막엔 내 주제로 만드는 프로젝트.",
    delay: "400ms",
  },
] as const;

/** 랜딩 히어로 섹션 */
export function LandingHero() {
  return (
    <section className="relative flex flex-col gap-10 md:gap-14">
      <HeroBackground />

      <div className="flex flex-col gap-5">
        <span
          className={`motion-safe:animate-fade-in-up ${THEME.eyebrow}`}
          style={{ animationDelay: "0ms" }}
        >
          AI 실무 학습 · Lift
        </span>
        <h1
          className="motion-safe:animate-fade-in-up max-w-2xl text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl md:text-5xl"
          style={{ animationDelay: "80ms" }}
        >
          내 수준을 진단하고,
          <br />
          <span className={THEME.textAccent}>맞는 AI 학습 경로</span>를 찾으세요
        </h1>
        <p
          className={`motion-safe:animate-fade-in-up max-w-xl text-base leading-relaxed md:text-lg ${THEME.textMuted}`}
          style={{ animationDelay: "160ms" }}
        >
          3분이면 입문부터 고급까지 내 위치를 알 수 있어요. 진단 결과에 따라
          현직자 트랙과 바이브 코딩 트랙 중 맞는 커리큘럼을 추천해 드립니다.
        </p>
        <div
          className="motion-safe:animate-fade-in-up mt-1 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          style={{ animationDelay: "240ms" }}
        >
          <Link href={ROUTES.levelTest} className={THEME.btnPrimary}>
            레벨 테스트 시작하기
          </Link>
          <Link href={ROUTES.tracks} className={THEME.btnSecondary}>
            트랙 먼저 둘러보기
          </Link>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {FEATURES.map((item) => (
          <div
            key={item.title}
            className={`motion-safe:animate-fade-in-up p-5 ${THEME.card}`}
            style={{ animationDelay: item.delay }}
          >
            <h3 className="font-semibold">{item.title}</h3>
            <p className={`mt-2 text-sm leading-relaxed ${THEME.textMuted}`}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
