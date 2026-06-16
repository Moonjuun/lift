import type { ReactNode } from "react";
import { THEME } from "@/constants/theme";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

type ThemeShellProps = {
  children: ReactNode;
};

/** 페이지 공통 레이아웃 */
export function ThemeShell({ children }: ThemeShellProps) {
  return (
    <div className={`${THEME.root} flex min-h-full flex-col overflow-x-hidden`}>
      <SiteHeader />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-6 sm:py-8 md:px-6 md:py-12">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
