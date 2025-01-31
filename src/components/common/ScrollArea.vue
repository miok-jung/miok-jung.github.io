<template>
  <q-scroll-area :style="props.style" :thumb-style="thumbStyle" :bar-style="barStyle">
    <slot></slot>
  </q-scroll-area>
</template>

<script setup lang="ts">
import { colors } from 'quasar';
import type { CSSProperties } from 'vue';
import { onMounted, onUpdated, reactive, ref, watch } from 'vue';

const props = withDefaults(
  defineProps<{
    style: CSSProperties;
  }>(),
  {
    style: () => ({
      height: '100vh',
      width: '100vw',
    }),
  },
);

const { getPaletteColor } = colors;

// NOTE: Quasar Setting
const primaryColor = ref(getPaletteColor('primary'));

// NOTE: scroll style
const thumbStyle = reactive({
  right: '4px',
  borderRadius: '5px',
  backgroundColor: primaryColor.value,
  width: '5px',
  opacity: '0.75',
});

const barStyle = reactive({
  right: '2px',
  borderRadius: '9px',
  backgroundColor: primaryColor.value,
  width: '9px',
  opacity: '0.2',
});

// NOTE: watches
watch(primaryColor, (newColor) => {
  thumbStyle.backgroundColor = newColor; // thumbStyle에 반영
});

// NOTE: life-cycle
onMounted(() => {
  console.log('onMounted');
});
onUpdated(() => {
  console.log('update');
});
</script>

<style scoped></style>
