<template>
  <q-page :style-fn="portfolioStyle">
    <ThreeJS />
  </q-page>
</template>

<script setup lang="ts">
import ThreeJS from 'src/components/ThreeJS.vue';

// NOTE: 포트폴리오 스타일
function portfolioStyle(offset: number) {
  return {
    minHeight: offset ? `calc(100vh - ${offset}px)` : '100vh',
  };
}
</script>
