import { getCurriculumByTrackSlug } from "@/constants/curriculum";
import type { Curriculum } from "@/types/curriculum";

/** 트랙별 커리큘럼 조회 (정적 mock) */
export async function getCurriculumBySlug(
  slug: string,
): Promise<Curriculum | null> {
  return getCurriculumByTrackSlug(slug) ?? null;
}
