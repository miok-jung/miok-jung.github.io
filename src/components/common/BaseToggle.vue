<script setup lang="ts">
import { Icon } from '@iconify/vue'

interface Props {
  modelValue: boolean
  color?: 'grey' | 'primary'
  disabled?: boolean

  icon?: string
  iconOff?: string
  size?: 'sm' | 'md'
}

const props = withDefaults(defineProps<Props>(), {
  color: 'primary',
  disabled: false,
  size: 'md',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

function toggle() {
  if (props.disabled) return
  emit('update:modelValue', !props.modelValue)
}
</script>

<template>
  <button
    type="button"
    role="switch"
    :aria-checked="props.modelValue"
    :disabled="props.disabled"
    class="toggle"
    :class="[props.size, { on: props.modelValue, disabled: props.disabled }]"
    :style="{
      '--toggle-100': `var(--${props.color}-100)`,
      '--toggle-300': `var(--${props.color}-300)`,
      '--toggle-500': `var(--${props.color}-500)`,
      '--toggle-700': `var(--${props.color}-700)`,
      '--toggle-900': `var(--${props.color}-900)`,
    }"
    @click="toggle"
  >
    <span class="thumb">
      <Icon v-if="props.icon && props.modelValue" class="thumb-icon" :icon="props.icon" />
      <Icon
        v-else-if="props.iconOff && !props.modelValue"
        class="thumb-icon"
        :icon="props.iconOff"
      />
    </span>
  </button>
</template>

<style scoped lang="scss">
.toggle {
  --track-w: 44px;
  --track-h: 24px;
  --thumb-size: 18px;
  --thumb-gap: 3px;

  position: relative;
  display: inline-flex;
  align-items: center;

  width: var(--track-w);
  height: var(--track-h);
  padding: 0;
  border: none;
  border-radius: 4px;
  background: var(--grey-300);

  cursor: pointer;
  transition: background-color 0.2s;

  &:hover:not(.disabled) {
    background: var(--grey-500);
  }

  &.on {
    background: var(--toggle-500);

    &:hover:not(.disabled) {
      background: var(--toggle-700);
    }
    &:active:not(.disabled) {
      background: var(--toggle-900);
    }
  }

  &.disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &.sm {
    --track-w: 36px;
    --track-h: 20px;
    --thumb-size: 14px;
  }

  & .thumb {
    position: absolute;
    top: var(--thumb-gap);
    left: var(--thumb-gap);

    display: flex;
    align-items: center;
    justify-content: center;

    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 4px;
    background: var(--surface);

    transition: transform 0.2s;
  }

  &.on .thumb {
    transform: translateX(calc(var(--track-w) - var(--thumb-size) - var(--thumb-gap) * 2));
  }

  & .thumb-icon {
    width: 60%;
    height: 60%;
    color: var(--toggle-700);
  }
}
</style>
