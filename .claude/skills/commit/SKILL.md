---
description: Git 커밋 워크플로. 사용자가 커밋을 요청하거나 /commit을 실행할 때만 사용한다.
disable-model-invocation: true
---

# /commit — Git 커밋

사용자가 **명시적으로 커밋을 요청**했거나 `/commit`을 실행한 경우에만 이 스킬을 따른다.
추가 지시가 있으면 `$ARGUMENTS`를 반영한다.

## 현재 상태

!`git status`

!`git diff`

!`git diff --staged`

!`git log -5 --oneline`

## 1. 커밋 전 검증

변경이 없으면 커밋하지 않고 알린다.

```bash
npm run lint
npm test        # package.json에 test 스크립트가 있을 때
npm run build   # app/ 라우트·타입 변경이 있을 때
```

실패 시 커밋하지 않고 먼저 수정한다.

## 2. 스테이징

- 요청 범위와 관련된 파일만 `git add`
- `.env`, credentials 등 비밀 파일은 스테이징·커밋 금지 (발견 시 사용자에게 경고)

```bash
git add <relevant-files>
```

## 3. 커밋 메시지

Conventional Commits + **한국어** 요약. **why** 중심.

| type | 용도 |
|------|------|
| `feat` | 새 기능 |
| `fix` | 버그 수정 |
| `docs` | 문서·rules·skills |
| `test` | 테스트 |
| `refactor` | 동작 변경 없는 구조 개선 |
| `chore` | 빌드, 설정, 의존성 |
| `style` | 포맷·린트만 |

HEREDOC으로 커밋한다:

```bash
git commit -m "$(cat <<'EOF'
<type>: <한 줄 요약>

<선택: 왜 변경했는지 1~2문장>
EOF
)"
```

### Lift 예시

```text
feat: 트랙 목록 정적 페이지 추가

레벨테스트 이후 학습 경로를 보여주기 위한 /tracks 페이지를 구성했다.
```

```text
docs: commit 스킬 추가

.claude/skills/commit으로 커밋 워크플로를 분리했다.
```

## 4. 완료 확인

```bash
git status
```

성공 여부를 사용자에게 알린다. **push는 하지 않는다** (별도 요청 시에만).

## 안전 규칙 (필수)

- `git config` 변경 금지
- `git push --force`, `git reset --hard` 등 파괴적 명령은 사용자 명시 요청 없이 실행 금지
- `main`/`master` force push 시 경고
- `--no-verify`, `--no-gpg-sign` 등 hook 우회 금지 (사용자가 명시한 경우만)
- **빈 커밋 금지**
- `git commit --amend`는 아래 **모두** 만족할 때만:
  1. 사용자가 amend 요청했거나, pre-commit hook이 파일을 수정한 경우
  2. HEAD 커밋이 이번 세션에서 생성된 것
  3. 아직 remote에 push되지 않음
- hook으로 커밋이 **거부**되면 amend 금지 → 수정 후 **새 커밋**
