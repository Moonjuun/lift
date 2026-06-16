@AGENTS.md

# Lift — AI 강의 플랫폼

레벨테스트 · 트랙 · 커리큘럼 정적 페이지. Next.js 16, Tailwind, Shadcn, Zustand.

## 명령어

```bash
npm run dev
npm run build
npm run lint
npm test          # Vitest 설정 후
```

## Claude Code 스킬

| 스킬 | 용도 |
|------|------|
| `/commit` | Git 커밋 (lint/test/build → add → HEREDOC commit) |

## 규칙

상세 규칙은 `.claude/rules/` (아키텍처, 도메인, Next.js, 테스트 등).
