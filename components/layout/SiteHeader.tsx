import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import { THEME } from "@/constants/theme";

/** 공통 헤더 — 로고·네비게이션 */
export function SiteHeader() {
  return (
    <header className={`sticky top-0 z-50 ${THEME.header}`}>
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 md:px-6">
        <Link href={ROUTES.home} className="text-lg font-bold tracking-tight">
          Lift
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link
            href={ROUTES.tracks}
            className={`${THEME.textMuted} transition hover:opacity-80`}
          >
            트랙
          </Link>
          <Link
            href={ROUTES.levelTest}
            className={`${THEME.textMuted} transition hover:opacity-80`}
          >
            레벨 테스트
          </Link>
        </nav>
      </div>
    </header>
  );
}
