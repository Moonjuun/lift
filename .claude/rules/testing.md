---
paths:
  - "**/*.{test,spec}.{ts,tsx}"
  - "__tests__/**/*.{ts,tsx}"
  - "utils/**/*.ts"
  - "apis/**/*.ts"
  - "store/**/*.ts"
  - "components/**/*.{ts,tsx}"
  - "app/**/*.{ts,tsx}"
---

# 테스트 필수 정책

**테스트 없이 기능을 완료했다고 보지 않는다.**

## 반드시 테스트를 작성하는 대상

| 대상 | 최소 검증 |
|------|-----------|
| `utils/` 새 함수 | 입력·출력·엣지 케이스 |
| `apis/` 함수 | mock fetch, 성공/실패 응답 |
| `store/` 액션·셀렉터 | 상태 변경 전후 |
| `components/` (로직 있음) | 렌더, 사용자 이벤트, 조건부 UI |
| `app/` 페이지 (데이터 조합) | 주요 콘텐츠 노출 smoke test |

단순 마크업만 있는 presentational 컴포넌트는 상위 통합 테스트로 대체 가능.

## 파일 위치 · 이름

- **co-locate 권장**: `formatDuration.ts` → `formatDuration.test.ts`
- 또는 `__tests__/` 디렉터리
- 확장자: `*.test.ts` / `*.test.tsx` / `*.spec.ts`

## 권장 스택

- **Vitest** + **@testing-library/react** + **@testing-library/jest-dom**
- 설정 파일 추가 시 `package.json`에 `"test": "vitest run"`, `"test:watch": "vitest"` 스크립트를 둔다.

## 작성 규칙

- 테스트는 **행동 중심**: "무엇이 화면/상태에 나타나는가"
- 구현 세부(내부 state 변수명)가 아닌 **공개 API**를 검증
- mock은 최소화. 외부 fetch·라우터만 mock
- `describe` 블록은 한글 또는 영어로 **도메인 단위** 그룹화

```ts
describe("getTrackById", () => {
  it("존재하는 트랙 id면 Track 객체를 반환한다", async () => {
    const track = await getTrackById("ai-basics");
    expect(track?.title).toBeTruthy();
  });

  it("없는 id면 null을 반환한다", async () => {
    expect(await getTrackById("missing")).toBeNull();
  });
});
```

## 작업 완료 체크리스트

기능 구현 PR/커밋 전:

1. 해당 변경에 대한 테스트 파일이 **추가 또는 수정**되었는가
2. `npm test` 통과
3. `npm run lint` 통과
4. `npm run build` 통과 (라우트·타입 깨짐 없음)

## 회귀

- 버그 수정 시 **재현 테스트를 먼저** 추가한 뒤 수정한다.

## 금지

- `it.skip` / `describe.skip`으로 실패 테스트 방치
- 의미 없는 스냅샷만으로 커버리지 채우기
- `console.log`만 있는 "테스트"
