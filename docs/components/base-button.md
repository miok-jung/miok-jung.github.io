# Button Component

## 역할

사용자가 클릭 액션 또는 링크 이동을 처리하는 공통 UI 컴포넌트
<br /><br />

## Props

| name   | type                  | required | description                          |
| ------ | --------------------- | -------- | ------------------------------------ |
| href   | string                | ✖        | 링크 주소를 지정하면 a 태그로 렌더링 |
| color  | 'grey'\| 'primary'    | ✖        | 버튼 테마 색상                       |
| type   | 'flat' \| 'outline'   | ✖        | 버튼 스타일 타입                     |
| target | '\_self' \| '\_blank' | ✖        | 링크 열기 방식                       |

<br /><br />

## 사용 예시

```vue
<script setup lang="ts">
import BaseButton from '... /BaseButton.vue'
</script>
<template>
  <BaseButton href="/test">커스텀 default 링크</BaseButton>
  <BaseButton href="/test" color="primary">커스텀 flat 링크</BaseButton>
  <BaseButton href="/test" type="outline" color="primary">커스텀 outline 링크</BaseButton>
</template>
```
