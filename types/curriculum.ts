import type { Level } from "./level";
import type { TrackId } from "./track";

export type CurriculumModule = {
  id: string;
  trackId: TrackId;
  level: Level;
  order: number;
  title: string;
  summary: string;
  /** 실무 적용 예시 */
  practicalExample: string;
  /** 예상 학습 기간(주) */
  weeks: number;
  lessons: CurriculumLesson[];
};

export type CurriculumLesson = {
  id: string;
  title: string;
  durationMinutes: number;
};

export type Curriculum = {
  trackId: TrackId;
  modules: CurriculumModule[];
  /** 마지막 커스텀 프로젝트 모듈 */
  capstone: CurriculumModule;
};
