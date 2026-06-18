import type { Metadata } from "next";
import { LevelTestPageContent } from "@/components/level-test/LevelTestPageContent";

export const metadata: Metadata = {
  title: "레벨 진단",
  description:
    "8개 문항으로 나의 AI·코딩 활용 수준을 진단하고, 바로 시작할 트랙과 커리큘럼 모듈을 추천받으세요.",
  alternates: { canonical: "/level-test" },
};

export default function LevelTestPage() {
  return <LevelTestPageContent />;
}
