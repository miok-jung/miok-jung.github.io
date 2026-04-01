# Select Component

## 역할

사용자가 여러 옵션 중 하나를 선택할 수 있는 공통 UI 컴포넌트

---

## Props

| name        | type                            | required | description           |
| ----------- | ------------------------------- | -------- | --------------------- |
| modelValue  | string \| number \| null        | ✔        | 선택된 값 (v-model)   |
| options     | { label: string; value: any }[] | ✔        | 선택 가능한 옵션 목록 |
| placeholder | string                          | ✖        | 기본 안내 텍스트      |

---

## 설계 기준

- BaseSelect는 단일 선택을 위한 UI 컴포넌트이다.
- 값 제어는 v-model을 통해 이루어진다.
- options는 label / value 구조를 따른다.
- placeholder는 선택되지 않은 초기 상태를 표현한다.
- 컴포넌트는 특정 데이터 구조에 의존하지 않는다.
- modelValue가 없을 경우, options 중 default가 true인 항목이 초기값으로 사용된다.

---

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
