import { ThemeShell } from "@/components/layout/ThemeShell";
import { LevelTestFlow } from "@/components/level-test/LevelTestFlow";
import { THEME } from "@/constants/theme";

export function LevelTestPageContent() {
  return (
    <ThemeShell>
      <div className="mx-auto mb-8 max-w-2xl text-center">
        <p className={THEME.eyebrow}>약 3분 소요</p>
        <h1 className="mt-2 text-2xl font-bold md:text-3xl">레벨 진단</h1>
        <p className={`mt-2 text-sm leading-relaxed ${THEME.textMuted}`}>
          정답은 없어요. 지금 나에게 가장 가까운 선택지를 골라주세요.
        </p>
      </div>
      <LevelTestFlow />
    </ThemeShell>
  );
}
