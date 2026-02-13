# 💼 Portfolio — Miok Jung

> Vue 3 + TypeScript 기반으로 설계한 개인 포트폴리오 프로젝트  
> 확장성과 유지보수성을 고려한 구조 설계와 일관된 개발 규칙을 중심으로 구현

---

## 📅 Project Information

- **Project Period**: 2025.11.25 – Present
- **Type**: Personal Portfolio
- **Architecture Focus**: Maintainability / Scalability / Clear Layer Separation

---

## 🛠 Tech Stack

### Frontend

- Vue 3 (Composition API)
- TypeScript
- Quasar Framework
- Vue Router
- Pinia

### Styling

- SCSS
- Design Token 기반 스타일 구조
- Component-level style isolation

### Data & Utilities

- Axios (API Layer 분리)
- Modular utils 구조

### Analytics

- Google Tag Manager
- GA4 이벤트 트래킹

---

## ✨ Core Features

- 반응형 UI 설계
- 역할 기반 디렉터리 구조
- i18n 다국어 구조 설계
- Design Token 기반 스타일 시스템
- 레이어 분리 아키텍처 적용

---

# 📁 Project Structure

본 프로젝트는 **역할 기반(Role-Based Architecture)** 으로 설계하였다.  
UI, 상태, 로직, 스타일을 명확히 분리하여 유지보수성과 확장성을 확보하였다.

```txt
src/
├─ assets/            # 이미지, 폰트 등 정적 리소스
├─ components/        # 공용 UI 컴포넌트
│  ├─ base/           # 버튼, 인풋 등 기본 UI 컴포넌트
│  ├─ layout/         # Header, Sidebar 등 레이아웃 컴포넌트
│  └─ editor/         # TipTap 관련 컴포넌트
├─ composables/       # 재사용 가능한 로직 (UI 독립 로직)
├─ pages/             # 라우트 단위 페이지
├─ router/            # vue-router 설정
├─ stores/            # Pinia 상태 관리 (전역 상태)
├─ styles/            # 전역 스타일 및 디자인 시스템
│  ├─ tokens/         # color, spacing, typography 등 디자인 토큰
│  ├─ editor/         # TipTap 스타일 오버라이드
│  └─ globals.scss    # 전역 스타일 정의
├─ utils/             # 순수 유틸 함수
├─ api/               # Axios 인스턴스 및 API 모듈
└─ main.ts
```
