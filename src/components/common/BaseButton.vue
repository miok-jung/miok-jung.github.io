<script setup lang="ts">
interface Props {
  href?: string
  color?: 'grey' | 'primary'
  type?: 'flat' | 'outline'
}

const props = withDefaults(defineProps<Props>(), {
  color: 'grey',
  type: 'flat',
})
</script>
<template>
  <button
    v-if="!props.href"
    :class="props.type"
    :style="{
      '--button-100': `var(--${props.color}-100)`,
      '--button-300': `var(--${props.color}-300)`,
      '--button-500': `var(--${props.color}-500)`,
      '--button-700': `var(--${props.color}-700)`,
      '--button-900': `var(--${props.color}-900)`,
    }"
  >
    <slot />
  </button>
  <a
    v-else
    :href="props.href"
    :class="props.type"
    :style="{
      '--button-100': `var(--${props.color}-100)`,
      '--button-300': `var(--${props.color}-300)`,
      '--button-500': `var(--${props.color}-500)`,
      '--button-700': `var(--${props.color}-700)`,
      '--button-900': `var(--${props.color}-900)`,
    }"
  >
    <slot />
  </a>
</template>

<style scoped lang="scss">
button,
a {
  padding: 4px 8px;
  background: var(--surface);

  color: var(--button-500);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  border-radius: 4px;

  white-space: nowrap;

  transition:
    background-color 0.2s,
    border-color 0.2s,
    color 0.2s;

  cursor: pointer;
  &:hover {
    background: var(--button-100);
    color: var(--button-700);
  }
  &:active {
    color: var(--button-900);
  }
}
.flat {
  border: none !important;
}
.outline {
  border: 1px solid var(--button-500);
  &:hover {
    border-color: var(--button-700);
  }
  &:active {
    border-color: var(--button-900);
  }
}
</style>
