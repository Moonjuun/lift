/** 사이트 디자인 토큰 */
export type ThemeTokens = {
  root: string;
  card: string;
  btnPrimary: string;
  btnSecondary: string;
  textMuted: string;
  textAccent: string;
  /** 섹션 위에 붙는 작은 라벨 (강조 색) */
  eyebrow: string;
  /** 레벨·추천 등 강조 뱃지 (주황) */
  badge: string;
  /** 키워드·태그용 중립 칩 (테두리만) */
  chip: string;
  progressTrack: string;
  progressFill: string;
  header: string;
  optionSelected: string;
  optionDefault: string;
  divider: string;
  footer: string;
};

export const THEME: ThemeTokens = {
  root: "bg-[#f8f7f4] text-zinc-900 min-h-full",
  card: "lift-card rounded-2xl border border-zinc-200 bg-white shadow-sm",
  btnPrimary:
    "inline-flex w-full min-h-11 items-center justify-center rounded-xl bg-[#ff5c35] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#e84f2b] sm:w-auto sm:min-h-0 sm:px-6",
  btnSecondary:
    "inline-flex w-full min-h-11 items-center justify-center rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-800 transition-colors hover:border-zinc-400 hover:bg-zinc-50 sm:w-auto sm:min-h-0 sm:px-6",
  textMuted: "text-zinc-600",
  textAccent: "text-[#ff5c35]",
  eyebrow: "text-xs font-semibold uppercase tracking-wider text-[#ff5c35]",
  badge:
    "inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-[#ff5c35]",
  chip:
    "inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-600",
  progressTrack: "h-1.5 rounded-full bg-zinc-200",
  progressFill: "h-1.5 rounded-full bg-[#ff5c35] transition-all",
  header: "border-b border-zinc-200 bg-[#f8f7f4]/80 backdrop-blur-md",
  optionSelected: "border-[#ff5c35] bg-orange-50/70",
  optionDefault:
    "border-zinc-200 bg-white hover:border-zinc-300 hover:bg-zinc-50",
  divider: "border-zinc-200",
  footer: "border-t border-zinc-200 bg-white",
};
