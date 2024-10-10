<template>
  <q-page :style-fn="carouselJsStyle">
    <CarouselJS />
  </q-page>
</template>

<script setup lang="ts">
import CarouselJS from 'src/components/study/CarouselJS.vue';

const props = withDefaults(
  defineProps<{
    openSidebar?: boolean;
  }>(),
  {
    openSidebar: true,
  }
);

function carouselJsStyle(offset: number) {
  return {
    minHeight: offset ? `calc(100vh - ${offset}px)` : '100vh',
    width: props.openSidebar ? 'calc(100vw - 300px)' : '100vw',
  };
}
</script>

<style scoped></style>
