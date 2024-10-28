<template>
  <q-page :style-fn="gallayjsStyle">
    <GallayJS />
  </q-page>
</template>

<script setup lang="ts">
import GallayJS from 'src/components/study/GallayJS.vue';

const props = withDefaults(
  defineProps<{
    openSidebar?: boolean;
  }>(),
  {
    openSidebar: true,
  }
);

function gallayjsStyle(offset: number) {
  return {
    minHeight: offset ? `calc(100vh - ${offset}px)` : '100vh',
    width: props.openSidebar ? 'calc(100vw - 300px)' : '100vw',
  };
}
</script>

<style scoped></style>
