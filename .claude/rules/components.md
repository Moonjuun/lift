---
paths:
  - "components/**/*.{ts,tsx}"
---

# 컴포넌트 규칙

## 구조

```text
components/
├── ui/           # Shadcn (Button, Card, …) — 도메인 로직 없음
├── layout/       # Header, Footer, PageShell
├── tracks/       # 트랙 관련
├── curriculum/   # 커리큘럼·단원 목록
└── level-test/   # 레벨테스트 관련
```

## 작성 원칙

- 파일당 **하나의 주요 export** (default 또는 named 일관 유지)
- Presentational vs Container 분리: 데이터는 page 또는 wrapper에서, UI는 props만 받는다
- props 타입은 같은 파일 또는 `types/`에 정의
- Shadcn 컴포넌트는 `components/ui/`에서만 import (`@/components/ui/button`)

## Server / Client

- 목록·상세 **정적 표시** → Server Component
- 탭 전환, 모달, 폼, 퀴즈 진행 → Client Component (`'use client'`)
- Client 파일명에 `.client.tsx` 접미사는 **사용하지 않음** (프로젝트 컨벤션: directive만 사용)

## 접근성 · UX

- 버튼·링크에 명확한 텍스트 또는 `aria-label`
- 로딩: `Skeleton` 또는 스피너 (Shadcn)
- 빈 목록: 안내 문구 + 다음 액션 링크

## 금지

- 페이지(`app/`) 전용 UI를 `components/` 없이 거대한 `page.tsx`에만 작성
- 인라인 스타일 (`style={{}}`) — Tailwind로 대체
- 도메인 상수를 컴포넌트 파일에 하드코딩 (→ `constants/`)
