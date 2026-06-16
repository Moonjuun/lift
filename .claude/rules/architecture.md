# 아키텍처 · 폴더 구조

레이어를 분리해 유지보수와 테스트를 쉽게 한다.

## 디렉터리 구조

```text
lift/
├── app/                 # 라우트·페이지·레이아웃 (App Router)
├── components/          # 재사용 UI
│   ├── ui/              # Shadcn UI 프리미티브
│   └── ...              # 도메인별 컴포넌트 (tracks/, curriculum/ 등)
├── apis/                # 데이터 조회·변경 함수 (fetch 래퍼)
├── types/               # 공유 TypeScript 타입·인터페이스
├── store/               # Zustand 스토어
├── constants/           # 상수, enum, 라우트 경로, 정적 메타데이터
├── utils/               # 순수 헬퍼 (부수 효과 없음)
└── __tests__/           # 통합 테스트 (선택, 단위는 co-locate 권장)
```

## 레이어 의존 방향

```text
app → components → (apis | store | utils | constants)
apis → types, constants, utils
store → types, apis, constants
components → types, utils, constants, store
utils → types, constants
types, constants → (의존 없음)
```

## 배치 규칙

- **app/**: 라우팅·페이지 조합만. 비즈니스 로직·fetch는 `apis/`로 내린다.
- **types/**: 도메인 모델(`Track`, `Curriculum`, `LevelTest` 등)은 여기 한곳에서 정의한다.
- **apis/**: 파일명은 도메인 단위 (`tracks.ts`, `curriculum.ts`). 반환 타입은 `types/`를 사용한다.
- **constants/**: 매직 넘버·문자열·경로 상수. UI 문구가 길면 `constants/messages/` 등으로 분리한다.
- **utils/**: 포맷팅, 배열/문자열 처리 등 순수 함수만. React·fetch 의존 금지.
- **store/**: 클라이언트 전역 UI 상태만. 서버 데이터 캐시는 우선 Server Component + `apis/`로 처리한다.
- **components/**: `ui/`는 Shadcn만. 도메인 컴포넌트는 기능별 하위 폴더로 나눈다.

## import 경로

- `@/` 별칭 사용 (`tsconfig.json`의 `@/*` → 프로젝트 루트).
- 상대 경로 `../../` 3단계 이상이면 `@/`로 바꾼다.

## 정적 페이지 단계

현재는 CMS/API 연동 전 **정적 데이터**로 페이지를 구성한다.

- 정적 목록·상세 데이터: `constants/` 또는 `apis/`의 mock 함수
- 이후 API 연동 시 `apis/` 내부만 교체하고 `types/`·컴포넌트 시그니처는 유지한다

## 금지

- `app/` 페이지에 fetch 로직·복잡한 상태 로직을 직접 작성
- `types` 없이 `any`로 도메인 객체 전달
- `utils`에 React hook·브라우저 API 혼합 (필요 시 `components` 또는 client 모듈로)
