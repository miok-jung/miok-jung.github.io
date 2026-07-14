# Button Component

## 역할

사용자가 클릭 액션 또는 링크 이동을 처리하는 공통 UI 컴포넌트

<br /><br />

## Props

| name         | type                  | required | default    | description                          |
| ------------ | --------------------- | -------- | ---------- | ------------------------------------ |
| href         | string                | ✖        | -          | 링크 주소를 지정하면 a 태그로 렌더링 |
| color        | `'grey' \| 'primary'` | ✖        | `'grey'`   | 버튼 테마 색상                       |
| type         | `'flat' \| 'outline'` | ✖        | `'flat'`   | 버튼 스타일 타입                     |
| target       | `'_self' \| '_blank'` | ✖        | `'_blank'` | 링크 열기 방식                       |
| icon         | string                | ✖        | -          | Iconify 아이콘 이름                  |
| iconPosition | `'left' \| 'right'`   | ✖        | `'left'`   | 아이콘 위치                          |
| iconSize     | string                | ✖        | `'16px'`   | 아이콘 크기                          |

<br /><br />

## 사용 예시

```vue
<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue'
</script>

<template>
  <!-- 기본 버튼 -->
  <BaseButton>기본 버튼</BaseButton>

  <!-- Primary 버튼 -->
  <BaseButton color="primary"> Primary 버튼 </BaseButton>

  <!-- Outline 버튼 -->
  <BaseButton type="outline" color="primary"> Outline 버튼 </BaseButton>

  <!-- 아이콘 버튼 -->
  <BaseButton icon="lucide:mail" color="primary"> 이메일 보내기 </BaseButton>

  <!-- 우측 아이콘 -->
  <BaseButton icon="lucide:arrow-right" icon-position="right"> 자세히 보기 </BaseButton>

  <!-- 링크 버튼 -->
  <BaseButton href="/test" target="_self"> 내부 링크 </BaseButton>

  <!-- 외부 링크 -->
  <BaseButton href="https://github.com" icon="lucide:external-link" icon-position="right">
    GitHub
  </BaseButton>
</template>
```

<br />

## 아이콘 사용

아이콘은 Iconify 형식을 사용합니다.

```vue
<BaseButton icon="lucide:mail">
  메일 보내기
</BaseButton>

<BaseButton icon="lucide:arrow-right" icon-position="right">
  다음 페이지
</BaseButton>

<BaseButton icon="mdi:github" icon-size="20px">
  GitHub
</BaseButton>
```
