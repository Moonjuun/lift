import type { Metadata } from "next";
import { TrackDetailPageContent } from "@/components/tracks/TrackDetailPageContent";
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
    title: track.title,
    description: track.description,
    alternates: { canonical: `/tracks/${track.slug}` },
    openGraph: {
      title: `${track.title} | Lift`,
      description: track.description,
      url: `/tracks/${track.slug}`,
    },
  };
}

export default async function TrackDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <TrackDetailPageContent slug={slug} />;
}
