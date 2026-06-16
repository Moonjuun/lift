import { ThemeShell } from "@/components/layout/ThemeShell";
import { LevelTestResultView } from "@/components/level-test/LevelTestResultView";
import { THEME } from "@/constants/theme";

export function LevelTestResultPageContent() {
  return (
    <ThemeShell>
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-bold">테스트 결과</h1>
        <p className={`mt-2 text-sm ${THEME.textMuted}`}>
          추천 트랙과 함께, 다른 트랙도 자유롭게 살펴보세요.
        </p>
      </div>
      <LevelTestResultView />
    </ThemeShell>
  );
}
