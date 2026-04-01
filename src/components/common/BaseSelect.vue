<script setup lang="ts">
import { computed } from 'vue'

interface Option {
  label: string
  value: string | number
  default?: boolean
}

interface Props {
  modelValue: string | number | null
  options: Option[]
  placeholder?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: null,
  options: () => [],
  placeholder: '선택해주세요',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
}>()

const selectedValue = computed({
  get: () => {
    if (props.modelValue !== null && props.modelValue !== '') {
      return props.modelValue
    }

    const defaultOption = props.options.find((opt) => opt.default)
    return defaultOption ? defaultOption.value : ''
  },
  set: (value: string | number) => {
    emit('update:modelValue', value)
  },
})
</script>

<template>
  <select v-model="selectedValue" class="select">
    <option disabled value="">
      {{ placeholder }}
    </option>

    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>

<style scoped lang="scss">
.select {
  width: 100%;
  padding: var(--space-2) var(--space-3);
  border-radius: 6px;
  border: 1px solid var(--grey-3);
  font-size: 14px;
  background-color: var(--grey-1);
  color: var(--grey-10);
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: var(--grey-9);
  }
}
</style>
