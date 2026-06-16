import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/Icon";
import { THEME } from "@/constants/theme";
import { ROUTES } from "@/constants/routes";
import { LEVEL_LABELS } from "@/types/level";
import type { Level } from "@/types/level";

type LevelBadgeProps = {
  level: Level;
};

/** 레벨 뱃지 */
export function LevelBadge({ level }: LevelBadgeProps) {
  return <span className={THEME.badge}>{LEVEL_LABELS[level]}</span>;
}

type TrackCardProps = {
  slug: string;
  title: string;
  subtitle: string;
  keywords: string[];
  highlighted?: boolean;
};

/** 트랙 소개 카드 */
export function TrackCard({
  slug,
  title,
  subtitle,
  keywords,
  highlighted,
}: TrackCardProps) {
  return (
    <Link
      href={ROUTES.trackDetail(slug)}
      className={`group flex flex-col p-6 ${THEME.card} ${
        highlighted ? "ring-1 ring-[#ff5c35]/40" : ""
      }`}
    >
      {highlighted && (
        <span className={`mb-3 w-fit ${THEME.badge}`}>추천 트랙</span>
      )}
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="text-lg font-bold sm:text-xl">{title}</h3>
          <p className={`mt-1 text-sm ${THEME.textMuted}`}>{subtitle}</p>
        </div>
        <ArrowRightIcon
          className={`mt-1 h-5 w-5 shrink-0 transition-transform duration-200 group-hover:translate-x-1 ${THEME.textAccent}`}
        />
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {keywords.map((kw) => (
          <span key={kw} className={THEME.chip}>
            {kw}
          </span>
        ))}
      </div>
    </Link>
  );
}
