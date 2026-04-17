<script setup lang="ts">
import { computed, ref } from 'vue'
import { Icon } from '@iconify/vue'

/**
 * TODO: BaseSelect 개선 작업 목록
 *
 * Label
 * - 일정 길이가 길어질 경우 ellipsis에 대한 정의필요
 *
 * Dropdown
 * - isOpen이 true일 때, 위치 top / bottom / left / right로 제어 가능하도록 개선
 * - isOpen이 true일 때, 숫자(px)가 가능하게 확장
 *
 * 앞으로 추가를 해야될지 고민할 부분
 * - 칼라 ( 배경 / 폰트 )
 * - 크기 ( 크기를 기준해야할 지점을 어떻게 할지 고민이 필요 )
 * - 드롭다운 이벤트 (options에 대한 애니메이션 등)
 * - 피그마 업데이트가 필요할 듯
 * - .select에 관련되어서 min-width를 0 -> 80px로 넣은 상태로 이거에 대한 고민이 필요
 */

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
    return defaultOption ? defaultOption.value : null
  },
  set: (value: string | number) => {
    emit('update:modelValue', value)
  },
})

const isOpen = ref(false)
const toggle = () => {
  isOpen.value = !isOpen.value
}

const selectedLabel = computed(() => {
  const found = props.options.find((opt) => opt.value === selectedValue.value)
  return found ? found.label : props.placeholder
})
const selectOption = (opt: Option) => {
  selectedValue.value = opt.value
  isOpen.value = false
}
</script>

<template>
  <div class="select">
    <!-- 트리거 -->
    <div class="select__trigger" @click="toggle">
      <span class="select__label">{{ selectedLabel }}</span>
      <!-- 화살표 -->
      <Icon
        class="select__arrow"
        :class="{ 'is-open': isOpen }"
        icon="lucide:chevron-down" />
    </div>
    <!-- 드롭다운 -->
    <div v-if="isOpen" class="select__dropdown">
      <div
        class="select__option"
        v-for="opt in options"
        :key="opt.value"
        @click="selectOption(opt)">
        {{ opt.label }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.select {
  position: relative;
  padding: 8px;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid var(--grey-300);
  background-color: white;
  color: var(--grey-10);
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: var(--grey-900);
  }
  &__trigger {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    user-select: none;
  }
  &__label {
    min-width: 0;
  }
  &__arrow {
    flex-shrink: 0; // 아이콘 고정
    margin-left: 4px;
    transition: transform 0.2s ease;
    &.is-open {
      transform: rotate(180deg);
    }
  }

  &__dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    padding: 8px 0;
    width: 100%;
    user-select: none;
    border: 1px solid var(--grey-300);
    border-radius: 4px;
    background: white;
  }
  &__option {
    padding: 0 8px;
    height: 32px;
    line-height: 32px;
    &:hover {
      background: rgba($color: #000, $alpha: 0.1);
    }
  }
}
</style>
