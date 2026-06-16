/** 히어로 뒤쪽 은은한 그라데이션 배경 — 정적, 시선을 분산시키지 않는 수준 */
export function HeroBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <div className="absolute -right-24 -top-32 h-[360px] w-[360px] rounded-full bg-[#ff5c35]/10 blur-3xl sm:h-[460px] sm:w-[460px]" />
    </div>
  );
}
