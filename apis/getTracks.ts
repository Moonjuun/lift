import { TRACKS } from "@/constants/tracks";
import type { Track } from "@/types/track";

/** 트랙 목록 조회 (정적 mock) */
export async function getTracks(): Promise<Track[]> {
  return TRACKS;
}

/** slug로 트랙 단건 조회 */
export async function getTrackBySlug(slug: string): Promise<Track | null> {
  return TRACKS.find((t) => t.slug === slug) ?? null;
}
