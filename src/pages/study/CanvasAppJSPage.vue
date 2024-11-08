<template>
  <q-page :style-fn="canvasJsStyle">
    <CanvasJS />
  </q-page>
</template>

<script setup lang="ts">
import CanvasJS from 'src/components/study/CanvasJS.vue';

const props = withDefaults(
  defineProps<{
    openSidebar?: boolean;
  }>(),
  {
    openSidebar: true,
  }
);

function canvasJsStyle(offset: number) {
  return {
    minHeight: offset ? `calc(100vh - ${offset}px)` : '100vh',
    width: props.openSidebar ? 'calc(100vw - 300px)' : '100vw',
  };
}
</script>

<style scoped></style>
