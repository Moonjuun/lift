import { ThemeShell } from "@/components/layout/ThemeShell";
import { LevelTestFlow } from "@/components/level-test/LevelTestFlow";
import { THEME } from "@/constants/theme";

export function LevelTestPageContent() {
  return (
    <ThemeShell>
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-bold md:text-3xl">레벨 테스트</h1>
        <p className={`mt-2 text-sm ${THEME.textMuted}`}>
          나에게 가장 가까운 선택지를 골라주세요. 약 3분 소요됩니다.
        </p>
      </div>
      <LevelTestFlow />
    </ThemeShell>
  );
}
