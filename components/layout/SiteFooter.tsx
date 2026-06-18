import Link from "next/link";
import { ContactDialog } from "@/components/contact/ContactDialog";
import { ROUTES } from "@/constants/routes";
import { THEME } from "@/constants/theme";

/** 공통 푸터 — 사이트맵·저작권 */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className={`mt-auto ${THEME.footer}`}>
      <div className="mx-auto max-w-5xl px-4 py-8 sm:py-10 md:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <Link
              href={ROUTES.home}
              className="text-lg font-bold tracking-tight"
            >
              Lift
            </Link>
            <p
              className={`mt-2 max-w-xs text-sm leading-relaxed ${THEME.textMuted}`}
            >
              AI 활용 수준을 진단하고, 나에게 맞는 학습 트랙을 찾는
              학습 도구예요.
            </p>
          </div>

          <nav className="text-sm">
            <p className="font-semibold">학습</p>
            <ul className={`mt-3 space-y-2 ${THEME.textMuted}`}>
              <li>
                <Link
                  href={ROUTES.levelTest}
                  className="transition hover:opacity-80"
                >
                  레벨 테스트
                </Link>
              </li>
              <li>
                <Link
                  href={ROUTES.tracks}
                  className="transition hover:opacity-80"
                >
                  트랙 탐색
                </Link>
              </li>
              <li>
                <ContactDialog
                  triggerLabel="문의하기"
                  triggerClassName="transition hover:opacity-80"
                />
              </li>
            </ul>
          </nav>
        </div>

        <p
          className={`mt-8 border-t pt-6 text-center text-xs ${THEME.textMuted} ${THEME.divider}`}
        >
          © {year} Lift. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
