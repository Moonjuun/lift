import { CurriculumPageContent } from "@/components/curriculum/CurriculumPageContent";

export default async function CurriculumPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <CurriculumPageContent slug={slug} />;
}
