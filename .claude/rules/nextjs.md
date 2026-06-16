---
paths:
  - "app/**/*.{ts,tsx}"
  - "components/**/*.{ts,tsx}"
  - "apis/**/*.ts"
  - "store/**/*.ts"
  - "utils/**/*.ts"
---

# Next.js 16 · React 코딩 규칙

Next.js 16은 학습 데이터와 API가 다를 수 있다. 구현 전 반드시 공식 문서를 확인한다.

- 로컬: `node_modules/next/dist/docs/`
- 온라인: https://nextjs.org/docs

## Server vs Client

- **기본은 Server Component**. `useState`, `useEffect`, 이벤트 핸들러, Zustand가 필요할 때만 파일 최상단에 `'use client'`.
- `'use client'`는 **가능한 한 leaf 컴포넌트**에만 둔다. 페이지 전체를 Client로 만들지 않는다.
- Server → Client로는 **직렬화 가능한 props**만 전달한다.

## App Router

- 라우트는 `app/` 아래 파일 시스템 라우팅을 따른다.
- `layout.tsx`는 공통 UI, `page.tsx`는 라우트 진입점.
- `params` / `searchParams`는 Next.js 16 타입에 맞게 **`Promise`** 로 받는다.

```tsx
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // ...
}
```

## 데이터 로딩

- 정적 페이지: Server Component에서 `apis/` 함수를 호출해 데이터를 가져온 뒤 props로 전달.
- 클라이언트 인터랙션: Client Component + 필요 시 `store/` 또는 Server Actions (도입 시).
- 비밀·API 키는 Server Component / `apis/` 서버 전용 모듈에만 둔다. `NEXT_PUBLIC_` 접두사는 공개 값만.

## 스타일 · UI

- **Tailwind CSS**와 **Shadcn UI**만 사용. 새 CSS 파일·`<style>` 태그 금지.
- **모바일 퍼스트**: 기본은 모바일, `md:` `lg:`로 확장.
- 모바일: `flex-col`, 데스크탑: `flex-row` / `grid`.
- 테이블·긴 텍스트: `overflow-x-auto` 또는 `truncate`.
- 에러는 콘솔만이 아니라 사용자에게 toast 등으로 표시 (Client Component).

## TypeScript

- `strict: true` 유지. `any` 금지 (불가피하면 `unknown` + narrowing).
- 컴포넌트 props·API 반환값은 `types/`에 정의된 타입을 사용한다.
- export default 함수 컴포넌트에도 명시적 props 타입을 붙인다.

## 성능 · 번들

- 무거운 Client Component는 `dynamic(() => import(...), { ssr: false })` 검토.
- 이미지는 `next/image`, 링크는 `next/link` 사용.

## SEO

- 사내 도구이므로 Open Graph·복잡한 Metadata 최적화는 우선순위 낮음. 기능 구현에 집중.
