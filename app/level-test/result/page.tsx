import type { Metadata } from "next";
import { LevelTestResultPageContent } from "@/components/level-test/LevelTestResultPageContent";

export const metadata: Metadata = {
  title: "진단 결과",
  // 개인화된 결과 화면이므로 색인 제외
  robots: { index: false, follow: false },
};

export default function LevelTestResultPage() {
  return <LevelTestResultPageContent />;
}
