import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import { THEME } from "@/constants/theme";

/** 공통 헤더 — 로고·네비게이션 */
export function SiteHeader() {
  return (
    <header className={`sticky top-0 z-50 ${THEME.header}`}>
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-3 px-4 sm:h-16 md:px-6">
        <Link
          href={ROUTES.home}
          className="motion-safe:animate-fade-in shrink-0 text-lg font-bold tracking-tight sm:text-xl"
        >
          Lift
        </Link>
        <nav className="flex shrink-0 items-center gap-3 text-sm sm:gap-4">
          <Link
            href={ROUTES.tracks}
            className={`inline-flex min-h-10 items-center px-1 py-2 ${THEME.textMuted} transition hover:opacity-80`}
          >
            트랙
          </Link>
          <Link
            href={ROUTES.levelTest}
            className={`inline-flex min-h-10 items-center whitespace-nowrap px-1 py-2 ${THEME.textMuted} transition hover:opacity-80`}
          >
            레벨 테스트
          </Link>
        </nav>
      </div>
    </header>
  );
}
