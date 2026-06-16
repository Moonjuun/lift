---
paths:
  - "apis/**/*.ts"
  - "store/**/*.ts"
  - "types/**/*.ts"
  - "constants/**/*.ts"
---

# API · Store · Types · Constants

## apis/

- 함수 하나 = 하나의 책임 (`getTracks`, `getTrackBySlug`, `getCurriculumByTrackId`)
- async 함수는 **항상 명시적 반환 타입** (`Promise<Track[]>`)
- 에러: throw 대신 `Result` 패턴 또는 `null` 반환 중 프로젝트에서 하나로 통일 (신규 코드는 `null` + 로그)
- fetch 사용 시 에러 메시지는 한글 사용자 메시지로 매핑할 상수를 `constants/errors.ts`에 둔다

```ts
import type { Track } from "@/types/track";
import { TRACKS } from "@/constants/tracks";

export async function getTracks(): Promise<Track[]> {
  return TRACKS;
}
```

## types/

- 도메인 파일 단위 분리 (`track.ts`, `curriculum.ts`, `level-test.ts`)
- API 응답·UI 표시용 타입이 다르면 `Track` / `TrackSummary`처럼 분리
- `enum` 대신 `as const` 객체 + union type 선호

## constants/

- 라우트: `ROUTES.HOME`, `ROUTES.TRACK(slug)` 형태
- 정적 콘텐츠 ID·slug는 변경 시 테스트도 함께 수정

## store/ (Zustand)

- 파일당 스토어 하나 (`useTrackFilterStore.ts`)
- `create<T>()((set, get) => ({ ... }))` 패턴
- 서버에서 가져온 목록 전체를 store에 복제하지 않는다. **필터·UI 상태** 위주
- selector 사용으로 불필요한 리렌더 방지

```ts
import { create } from "zustand";

type TrackFilterState = {
  level: TrackLevel | "all";
  setLevel: (level: TrackLevel | "all") => void;
};
```

## 테스트

- `apis/`: mock 데이터·에러 경로
- `store/`: `setLevel` 호출 후 state 검증
- `utils/` (순수 함수): table-driven 테스트
