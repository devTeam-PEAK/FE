# peak-FE

## 기술 스택
- Next.js (App Router)
- TypeScript
- Tailwind CSS v4
- shadcn/ui

---

## 컨벤션

### 컴포넌트 폴더 구조

- `src/components/common/` → 공통 컴포넌트
- `src/components/도메인/` → 페이지 내에서 사용할 컴포넌트

### 네이밍

- 변수, 함수는 카멜 케이스 (예: `isPrime`, `fetchData`)
- 상수는 대문자 스네이크 케이스 (예: `MAX_VALUE`)
- 파일명은 케밥 케이스 (예: `card-title`)
- **컴포넌트명은 파스칼 케이스** (예: `CardList`)
- 컴포넌트가 아닌 파일은 카멜 케이스
- 이미지 파일은 케밥 케이스

### 함수 작성

- 컴포넌트 내부 함수는 화살표 함수
- 이벤트 핸들러 함수는 `handle___` / Props 전달 시 `on___`

### 커밋

첫 글자 **소문자** (예: `feat: 로그인 기능 개발`)

| 커밋 유형 | 의미 |
|---|---|
| `feat` | 새로운 기능 추가 |
| `fix` | 버그 수정 |
| `refactor` | 코드 리팩토링 |
| `style` | 코드 formatting, 세미콜론 누락, 코드 자체의 변경이 없는 경우 |
| `design` | CSS 등 사용자 UI 디자인 변경 |
| `chore` | 프로젝트 세팅, 패키지 매니저 수정, 그 외 기타 수정 |
| `docs` | 문서 수정 |
| `test` | 테스트 코드, 리팩토링 테스트 코드 추가 |
| `comment` | 필요한 주석 추가 및 변경 |
| `rename` | 파일 또는 폴더 명을 수정하거나 옮기는 작업만인 경우 |
| `remove` | 파일을 삭제하는 작업만 수행한 경우 |
| `!HOTFIX` | 급하게 치명적인 버그를 고쳐야 하는 경우 |

### 브랜치명

```
유형/#이슈번호
예) feat/#10
```

### PR명

```
#이슈번호 유형: 이슈 제목과 동일
예) #10 feat: 로그인 기능 구현
```

---

## 스타일 컨벤션

- 색상은 하드코딩 대신 CSS 변수 사용 (예: `var(--color-main)`, `var(--color-font-light)`)
- 타이포그래피는 `globals.css`에 정의된 유틸 클래스 사용 (예: `h1-bold`, `p1-bold`, `p3-regular`)
- 타이포그래피 클래스는 `@layer components`에 정의되어 있어 Tailwind 유틸보다 우선순위가 낮음 — CVA 내부에서 쓸 경우 `text-base font-bold` 등 Tailwind 유틸로 대체할 것

## SVG 아이콘 컨벤션

- lucide-react 아이콘을 커스텀할 경우 피그마에서 SVG로 내보내기 후 `src/components/ui/`에 별도 컴포넌트로 분리
- 파일명은 lucide 아이콘명 기준으로 네이밍 (예: `circle-user-round.tsx`)
- `size`, `fill` 등 커스텀이 필요한 값은 props로 받고 기본값 설정
