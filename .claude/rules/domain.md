# 도메인 · 페이지 규칙

AI 강의 플랫폼 **Lift**의 핵심 화면과 데이터 모델 가이드.

## 핵심 화면 (정적 단계)

| 화면 | 라우트 예시 | 역할 |
|------|-------------|------|
| 레벨테스트 | `/level-test` | 진단 소개·문항 흐름·결과 안내 |
| 트랙 목록 | `/tracks` | 학습 경로 카드/리스트 |
| 트랙 상세 | `/tracks/[slug]` | 트랙 설명·커리큘럼 요약 |
| 커리큘럼 | `/tracks/[slug]/curriculum` | 단원·강의 목차 |

라우트는 팀 합의에 따라 조정 가능. `constants/routes.ts`에 단일 정의한다.

## 타입 네이밍 (`types/`)

```ts
// types/level-test.ts
export type LevelTest = { id: string; title: string; /* ... */ };

// types/track.ts
export type Track = { id: string; slug: string; title: string; level: TrackLevel; /* ... */ };
export type TrackLevel = "beginner" | "intermediate" | "advanced";

// types/curriculum.ts
export type Curriculum = { trackId: string; modules: CurriculumModule[] };
export type CurriculumModule = { id: string; title: string; lessons: Lesson[] };
export type Lesson = { id: string; title: string; durationMinutes: number };
```

## 정적 데이터

- 초기 목 데이터: `constants/tracks.ts`, `constants/curriculum.ts` 등
- `apis/getTracks.ts`는 constants를 읽어 반환. UI는 **항상 `apis/`를 통해서만** 데이터 접근.

## UI 톤

- 학습자가 **경로를 한눈에** 이해할 수 있는 정보 구조
- 레벨테스트 → 추천 트랙으로 이어지는 CTA 흐름을 고려한 배치
- 모바일에서 카드·목차가 깨지지 않게 세로 스택 우선

## 향후 확장 (지금은 과도 구현 금지)

- 사용자 인증, 진도 저장, LMS API 연동은 요청 전까지 범위에 넣지 않는다.
- 다만 `types/`·`apis/` 시그니처는 나중에 API로 바꿀 수 있게 유지한다.
