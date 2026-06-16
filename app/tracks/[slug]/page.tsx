import { TrackDetailPageContent } from "@/components/tracks/TrackDetailPageContent";

export default async function TrackDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <TrackDetailPageContent slug={slug} />;
}
