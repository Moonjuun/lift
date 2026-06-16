/** 사이트 디자인 토큰 */
export type ThemeTokens = {
  root: string;
  card: string;
  btnPrimary: string;
  btnSecondary: string;
  textMuted: string;
  textAccent: string;
  badge: string;
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
    "btn-shine inline-flex w-full min-h-11 items-center justify-center rounded-xl bg-[#ff5c35] px-5 py-3 text-sm font-bold text-white shadow-md shadow-orange-200/50 transition hover:bg-[#e84f2b] sm:w-auto sm:min-h-0 sm:px-6",
  btnSecondary:
    "inline-flex w-full min-h-11 items-center justify-center rounded-xl border-2 border-zinc-900 px-5 py-3 text-sm font-bold text-zinc-900 transition hover:bg-zinc-900 hover:text-white sm:w-auto sm:min-h-0 sm:px-6",
  textMuted: "text-zinc-600",
  textAccent: "text-[#ff5c35]",
  badge:
    "inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-[#ff5c35]",
  progressTrack: "h-2 rounded-full bg-zinc-200",
  progressFill: "h-2 rounded-full bg-[#ff5c35] transition-all",
  header: "border-b border-zinc-200 bg-white/90 backdrop-blur-md",
  optionSelected: "border-[#ff5c35] bg-orange-50 ring-2 ring-orange-200",
  optionDefault:
    "border-zinc-200 bg-white hover:border-zinc-400 hover:shadow-sm",
  divider: "border-zinc-200",
  footer: "border-t border-zinc-200 bg-white",
};
