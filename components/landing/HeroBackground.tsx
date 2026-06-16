/** 히어로 뒤쪽 그라데이션·블롭 배경 — 순수 CSS 애니메이션 */
export function HeroBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <div className="motion-safe:animate-gradient-shift absolute -left-1/4 -top-1/4 h-[420px] w-[420px] rounded-full bg-[#ff5c35]/20 blur-3xl sm:h-[520px] sm:w-[520px]" />
      <div
        className="motion-safe:animate-blob absolute -right-1/4 top-1/3 h-[360px] w-[360px] rounded-full bg-orange-200/40 blur-3xl sm:h-[480px] sm:w-[480px]"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="motion-safe:animate-blob absolute bottom-0 left-1/3 h-[280px] w-[280px] rounded-full bg-amber-100/50 blur-3xl"
        style={{ animationDelay: "4s" }}
      />
    </div>
  );
}
