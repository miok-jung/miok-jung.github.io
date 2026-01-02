# 💼 Portfolio (miok-jung)

Date: 2025.11.25 -

---

# 🚀 **Tech Spec (프로젝트 기술 스택)**

## 🖥️ **Frontend**

- **Vue 3 (Composition API)**
- **TypeScript**
- **Vite**
- **vue-router**
- **Pinia**
- **SCSS / SASS**
- **Axios (API 통신)**
- **TipTap (Editor Styling Customization)**

---

## 🎨 **UI / 스타일링**

- Custom SCSS 구조 설계
- Design Token 기반 스타일 설계
- 반응형 UI 구성
- **Editor UI 스타일 커스터마이징 (TipTap)**

---

## ⚙️ **Build / DevOps**

- Vite Build
- Netlify / Vercel 배포 가능 구조
- ESLint + Prettier
- Git Flow 기반 버전 관리

---

# 🧩 **Skills (개발 역량)**

## ⚛️ **Vue 구조 설계 능력**

- Layout + Page + Router 기반 구조 설계
- 동적 라우팅, 중첩 라우트 구성
- 컴포저블(composables)로 로직 모듈화

---

## 📦 **상태 관리**

- Pinia Store 아키텍처 설계
- 전역 UI/유저 상태 관리
- API 응답 캐싱 전략 경험

---

## 🛠️ **TypeScript 활용**

- 인터페이스 / 타입 설계
- 컴포넌트 Props 타입 안정성 강화
- 유틸 타입 정의

---

## 🧱 **컴포넌트 개발 능력**

- 재사용 가능한 UI 컴포넌트 설계
- Atomic Design 방식 적용 가능
- Props / Emit 구조 정교화

---

## 🔗 **API 연동**

- Axios instance 커스터마이징
- Error Handling 패턴 구축
- 인증 / 인가 흐름 구성 가능

---

## 🎨 **퍼블리싱 능력**

- SCSS Mixin / Utility 설계
- 반응형 레이아웃 구현
- UI 세부 스타일링 최적화

---

## 📝 **Editor UI 커스터마이징**

- **TipTap 기반 에디터 스타일 커스터마이징**
- ProseMirror DOM 구조 기반 스타일 제어
- Toolbar / Editor 영역 UI 스타일 설계
- Design Token 및 SCSS 변수 기반 테마 적용
- 다크 / 라이트 테마 대응 에디터 스타일 구성
- 프로젝트 전반 UI 톤과 에디터 일관성 유지

---

# 📁 Project Structure

아래 구조는 **확장성과 유지보수성**을 고려한 프로젝트 디렉터리 설계입니다.  
기능·역할 단위로 분리하여 UI, 상태, 스타일, 로직을 명확히 구분했습니다.

```txt
src/
├─ assets/            # 이미지, 폰트 등 정적 리소스
├─ components/        # 공용 UI 컴포넌트
│  ├─ base/           # 버튼, 인풋 등 기본 UI 컴포넌트
│  ├─ editor/         # TipTap 에디터 관련 컴포넌트
│  └─ layout/         # Header, Sidebar 등 레이아웃 컴포넌트
├─ composables/       # 재사용 가능한 로직 (Composition API)
├─ pages/             # 라우트 단위 페이지
├─ router/            # vue-router 설정
├─ stores/            # Pinia 상태 관리
├─ styles/            # 전역 스타일 및 디자인 시스템
│  ├─ tokens/         # Color, spacing 등 디자인 토큰
│  ├─ editor/         # TipTap 에디터 스타일 오버라이드
│  └─ globals.scss    # 전역 스타일 정의
├─ utils/             # 공통 유틸 함수
├─ api/               # Axios 인스턴스 및 API 모듈
└─ main.ts

```
