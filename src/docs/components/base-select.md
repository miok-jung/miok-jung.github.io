# Select Component

## 역할

사용자가 여러 옵션 중 하나를 선택할 수 있는 공통 UI 컴포넌트
<br /><br />

## Props

| name        | type                     | required | description           |
| ----------- | ------------------------ | -------- | --------------------- |
| modelValue  | string \| number \| null | ✔        | 선택된 값 (v-model)   |
| options     | Option[]                 | ✔        | 선택 가능한 옵션 목록 |
| placeholder | string                   | ✖        | 기본 안내 텍스트      |

<br />

### Option 타입

```ts
interface Option {
  label: string
  value: string | number
  default?: boolean
}
```

<br /><br />

## 사용 예시

```vue
<script setup lang="ts">
import { ref } from 'vue'

const selected = ref<string | number | null>(null)

const options = [
  { label: '사과', value: 'apple' },
  { label: '바나나', value: 'banana' },
  { label: '포도', value: 'grape' },
]
</script>

<template>
  <BaseSelect v-model="selected" :options="options" />

  <BaseSelect
    v-model="selected"
    :options="options"
    placeholder="과일을 선택해주세요" />
</template>
```
