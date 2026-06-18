import type { Metadata } from "next";
import { TracksPageContent } from "@/components/tracks/TracksPageContent";

export const metadata: Metadata = {
  title: "학습 트랙",
  description:
    "현직자 실무 자동화 트랙과 바이브 코딩 트랙. 나에게 맞는 AI 학습 경로를 한눈에 비교하세요.",
  alternates: { canonical: "/tracks" },
};

export default function TracksPage() {
  return <TracksPageContent />;
}
