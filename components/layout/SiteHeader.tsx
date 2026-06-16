import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import { THEME } from "@/constants/theme";

const NAV_LINKS = [
  { href: ROUTES.trackDetail("pro"), label: "현직자 트랙", short: "현직자" },
  { href: ROUTES.trackDetail("vibe"), label: "바이브 코딩", short: "바이브" },
  { href: ROUTES.levelTest, label: "레벨 테스트", short: "레벨 테스트" },
] as const;

/** 공통 헤더 — 로고·네비게이션 */
export function SiteHeader() {
  return (
    <header className={`sticky top-0 z-50 ${THEME.header}`}>
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-2 px-4 sm:h-16 md:px-6">
        <Link
          href={ROUTES.home}
          className="motion-safe:animate-fade-in shrink-0 text-lg font-bold tracking-tight sm:text-xl"
        >
          Lift
        </Link>
        <nav className="flex shrink-0 items-center gap-1 text-sm sm:gap-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`inline-flex min-h-10 items-center rounded-lg px-2 py-2 transition hover:bg-zinc-100 sm:px-3 ${THEME.textMuted}`}
            >
              {/* 모바일에선 축약형, 태블릿 이상에선 전체 텍스트 */}
              <span className="sm:hidden">{link.short}</span>
              <span className="hidden whitespace-nowrap sm:inline">{link.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
