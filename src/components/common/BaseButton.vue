<script setup lang="ts">
import { Icon } from '@iconify/vue'

interface Props {
  color?: 'grey' | 'primary'
  type?: 'flat' | 'outline'

  href?: string
  target?: '_self' | '_blank'

  icon?: string
  iconPosition?: 'left' | 'right'
  iconSize?: string
}

const props = withDefaults(defineProps<Props>(), {
  color: 'grey',
  type: 'flat',
  target: '_blank',
  iconPosition: 'left',
  iconSize: '16px',
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
    <Icon
      v-if="props.icon && props.iconPosition === 'left'"
      class="left"
      :icon="props.icon"
      :width="props.iconSize"
      :height="props.iconSize"
    />

    <p>
      <slot />
    </p>
    <Icon
      v-if="props.icon && props.iconPosition === 'right'"
      class="right"
      :icon="props.icon"
      :width="props.iconSize"
      :height="props.iconSize"
    />
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
    :target="props.target"
    :rel="props.target === '_blank' ? 'noopener noreferrer' : undefined"
  >
    <Icon
      v-if="props.icon && props.iconPosition === 'left'"
      class="left"
      :icon="props.icon"
      :width="props.iconSize"
      :height="props.iconSize"
    />

    <p>
      <slot />
    </p>
    <Icon
      v-if="props.icon && props.iconPosition === 'right'"
      class="right"
      :icon="props.icon"
      :width="props.iconSize"
      :height="props.iconSize"
    />
  </a>
</template>

<style scoped lang="scss">
button,
a {
  display: flex;
  align-items: center;

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

  & .iconify.left {
    margin-right: 4px;
  }
  & .iconify.right {
    margin-left: 4px;
  }

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
