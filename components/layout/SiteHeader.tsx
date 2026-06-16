import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import { THEME } from "@/constants/theme";

const NAV_LINKS = [
  { href: ROUTES.trackDetail("pro"), label: "현직자 트랙", short: "현직자" },
  { href: ROUTES.trackDetail("vibe"), label: "바이브 코딩", short: "바이브" },
] as const;

/** 공통 헤더 — 로고·네비게이션 */
export function SiteHeader() {
  return (
    <header className={`sticky top-0 z-50 ${THEME.header}`}>
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-2 px-4 sm:h-16 md:px-6">
        <Link
          href={ROUTES.home}
          className="shrink-0 text-lg font-bold tracking-tight sm:text-xl"
        >
          Lift
        </Link>
        <nav className="flex shrink-0 items-center gap-0.5 text-sm sm:gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`inline-flex min-h-10 items-center rounded-lg px-2.5 py-2 font-medium transition-colors hover:text-zinc-900 sm:px-3 ${THEME.textMuted}`}
            >
              <span className="sm:hidden">{link.short}</span>
              <span className="hidden whitespace-nowrap sm:inline">
                {link.label}
              </span>
            </Link>
          ))}
          <Link
            href={ROUTES.levelTest}
            className="ml-1 inline-flex min-h-9 items-center whitespace-nowrap rounded-lg bg-[#ff5c35] px-3 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-[#e84f2b]"
          >
            레벨 테스트
          </Link>
        </nav>
      </div>
    </header>
  );
}
