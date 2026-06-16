import Link from "next/link";
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
      className={`block p-4 transition-all duration-200 sm:p-6 ${THEME.card} ${
        highlighted ? THEME.optionSelected : ""
      }`}
    >
      {highlighted && (
        <p className={`mb-2 text-xs font-semibold ${THEME.textAccent}`}>
          추천 트랙
        </p>
      )}
      <h3 className="text-lg font-bold sm:text-xl">{title}</h3>
      <p className={`mt-1 text-sm ${THEME.textMuted}`}>{subtitle}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {keywords.map((kw) => (
          <span key={kw} className={THEME.badge}>
            {kw}
          </span>
        ))}
      </div>
    </Link>
  );
}
