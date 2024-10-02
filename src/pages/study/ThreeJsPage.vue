<template>
  <q-page :style-fn="threeJsStyle">
    <ThreeJS :open-sidebar="props.openSidebar" />
  </q-page>
</template>

<script setup lang="ts">
import ThreeJS from 'src/components/study/ThreeJS.vue';

const props = withDefaults(
  defineProps<{
    openSidebar?: boolean;
  }>(),
  {
    openSidebar: true,
  }
);
function threeJsStyle(offset: number) {
  return {
    minHeight: offset ? `calc(100vh - ${offset}px)` : '100vh',
    width: props.openSidebar ? 'calc(100vw - 300px)' : '100vw',
  };
}
</script>

<style scoped></style>
