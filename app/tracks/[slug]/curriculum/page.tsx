import type { Metadata } from "next";
import { CurriculumPageContent } from "@/components/curriculum/CurriculumPageContent";
import { getTrackBySlug, getTracks } from "@/apis/getTracks";

export async function generateStaticParams() {
  const tracks = await getTracks();
  return tracks.map((track) => ({ slug: track.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const track = await getTrackBySlug(slug);

  if (!track) {
    return { title: "트랙을 찾을 수 없어요", robots: { index: false } };
  }

  return {
    title: `${track.title} 커리큘럼`,
    description: `${track.title}의 레벨별 단원·강의 목차를 확인하고 학습 순서를 미리 살펴보세요.`,
    alternates: { canonical: `/tracks/${track.slug}/curriculum` },
  };
}

export default async function CurriculumPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <CurriculumPageContent slug={slug} />;
}
