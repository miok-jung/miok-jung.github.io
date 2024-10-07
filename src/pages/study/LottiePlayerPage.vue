<template>
  <q-page :style-fn="lottieStyle">
    <DotLottie />
  </q-page>
</template>

<script setup lang="ts">
import DotLottie from 'src/components/study/DotLottie.vue';

const props = withDefaults(
  defineProps<{
    openSidebar?: boolean;
  }>(),
  {
    openSidebar: true,
  }
);

function lottieStyle(offset: number) {
  return {
    minHeight: offset ? `calc(100vh - ${offset}px)` : '100vh',
    width: props.openSidebar ? 'calc(100vw - 300px)' : '100vw',
  };
}
</script>

<style scoped></style>
