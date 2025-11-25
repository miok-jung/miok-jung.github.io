# Portfolio (miok-jung)

Jung Mi Ok, portfolio.

2025 11 25 -

# Vue 3 + TypeScript + Vite

배포 전 검증 단계

1. npm run dev를 통해서 확인이 완료가 되면 npm run build를 실행한다.
2. npx server dist를 통해 실행을 한다.

폴더구조

- src/

  - layouts  
    전체 틀 담당 (헤더/사이드바/푸터 포함하는 레이아웃)  
    페이지 내부는 `<router-view />` 로 채움

  - pages
    라우트 단위 페이지  
    라우터가 연결되는 실제 화면 단위의 컴포넌트  
    ex ) 로그인, 대시보드, 프로필 등

  - components  
    재사용되는 컴포넌트들  
    ex ) 버튼, 카드, 모달 등 재사용되는 UI 조각

  - router  
    vue-router 설정  
    `router/index.ts` 같은 라우터 설정

  - stores  
    Pinia 스토어  
    ex ) 유저정보, UI 상태 등

  - composables  
    사용자 정의 훅(공통 로직)

  - plugins  
    ex ) axios, instance, i18n, dayjs 등

  - styles/ # SCSS, 공통 스타일  
    SCSS 변수, mixin, reset.css 등 공통 스타일을 포함한다.

  - assets  
    이미지, 폰트, 정적 파일
  - utils  
    유틸 함수

  - App.vue  
    앱 엔트리

  - main.ts  
    앱 초기화 코드

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).
