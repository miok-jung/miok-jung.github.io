<script setup lang="ts">
import { computed } from 'vue'

type BadgeSize = 'sm' | 'md' | 'lg'

interface Props {
  text: string
  size?: BadgeSize
  color?: string
  textColor?: string
}

const props = withDefaults(defineProps<Props>(), {
  text: 'Badge',
  size: 'md',
  color: '',
  textColor: '',
})

const badgeClass = computed(() => ['badge', `badge--${props.size}`])

const badgeStyle = computed(() => ({
  backgroundColor: props.color || 'white',
  color: props.textColor || 'black',
}))
</script>

<template>
  <div :class="badgeClass" :style="badgeStyle">
    {{ props.text }}
  </div>
</template>

<style scoped>
.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  border-radius: 9999px;
  font-weight: bold;
  line-height: 1;
  white-space: nowrap;
}

.badge--sm {
  padding: 2px 6px;
  font-size: 0.8rem;
}

.badge--md {
  padding: 4px 12px;
  font-size: 1rem;
}

.badge--lg {
  padding: 8px 16px;
  font-size: 1.2rem;
}
</style>
