import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/Icon";
import { ROUTES } from "@/constants/routes";
import { THEME } from "@/constants/theme";

type LevelTestCTAProps = {
  title: string;
  description: string;
  /** 버튼 문구 (기본: 레벨 테스트) */
  buttonLabel?: string;
  className?: string;
};

/** 레벨 테스트로 유도하는 공용 배너 — 페이지마다 문구만 바꿔 재사용 */
export function LevelTestCTA({
  title,
  description,
  buttonLabel = "레벨 테스트",
  className = "",
}: LevelTestCTAProps) {
  return (
    <section
      className={`rounded-2xl border border-zinc-200 bg-white p-6 sm:p-7 ${className}`}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-base font-semibold">{title}</p>
          <p className={`mt-1 text-sm leading-relaxed ${THEME.textMuted}`}>
            {description}
          </p>
        </div>
        <Link
          href={ROUTES.levelTest}
          className={`group shrink-0 gap-2 ${THEME.btnPrimary}`}
        >
          {buttonLabel}
          <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
}
