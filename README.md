# 💼 Portfolio — Miok Jung

> Vue 3 + TypeScript 기반 개인 포트폴리오 프로젝트  
> 유지보수성과 확장성을 고려한 구조 설계 및 공통 UI 컴포넌트 추상화 중심 구현

<br />

## 📁 프로젝트 정보

- **기간** : 2025.11.25 ~ 진행 중
- **유형** : 개인 포트폴리오
- **목표** : 계층 분리 구조를 통해 유지보수성과 확장성 확보

<br />

## 🛠 Tech Stack

### Frontend

- Vue 3 (Composition API)
- TypeScript
- Vue Router

### Styling

- SCSS
- Design Token 기반 스타일 시스템
- Component 단위 스타일 분리
- BEM 네이밍 규칙

#### CSS Naming Convention (BEM)

This project follows BEM methodology for scalable and maintainable UI structure.

- Block: 독립적인 컴포넌트
- Element: Block 내부 요소 (`__`)
- Modifier: 상태/변형 (`--`)

##### Example

```html
<div class="card">
  <h2 class="card__title"></h2>
  <button class="card__button card__button--primary"></button>
</div>
```

### Analytics

- Google Tag 기반의 실시간 방문자 트래픽 및 사용자 행동 데이터 수집

---

## ✨ Core Features

- 반응형 UI
- 역할 기반 디렉터리 구조
- i18n 다국어 지원
- Design Token 기반 스타일 시스템
- 레이어 분리 아키텍처

---

## 📁 Project Structure

역할 기반으로 UI, 상태, 로직, 스타일을 분리하여 구조적 일관성과 확장성 확보

```txt
src/
├─ assets/            # 이미지 정적 리소스
├─ components/
│  ├─ common/           # 공용 UI 컴포넌트 (현재: Badge)
│  ├─ global/           # 전역 UI 컴포넌트 (현재: JLoading 예정)
├─ pages/             # 라우트 단위 페이지
├─ router/            # 라우트 설정
├─ stores/            # Pinia 상태 관리 (전역 상태)
├─ styles/            # 전역 스타일 및 디자인 시스템
│  ├─ _tokens.scss      # color, spacing 등 디자인 토큰
│  └─ _base.scss        # 전역 스타일 정의
└─ ...
```

## 🧩 UI Component Design

- 공통 UI 컴포넌트를 props 기반으로 설계하여
- 스타일과 로직을 분리하고 재사용성과 일관성을 확보

### BaseBadge Component

- 상태 및 강조 표현을 위한 UI 컴포넌트
- `size`, `color` props 기반 스타일 제어
- color와 textColor는 디자인 토큰 사용을 권장한다.
- 👉 자세한 내용 : [BaseBadge](./docs/components/base-badge.md)

---

### BaseSelect Component

- 커스텀 드롭다운 선택 UI 컴포넌트
- `modelValue`, `options`, `placeholder` 기반 상태 관리
- 👉 자세한 내용 : [BaseSelect](./docs/components/base-select.md)
