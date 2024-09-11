<template>
  <q-page :style-fn="vanillaJsStyle">
    <VanillaJS />
  </q-page>
</template>

<script setup lang="ts">
import VanillaJS from 'src/components/study/VanillaJS.vue';

const props = withDefaults(
  defineProps<{
    openSidebar?: boolean;
  }>(),
  {
    openSidebar: true,
  }
);

function vanillaJsStyle(offset: number) {
  return {
    minHeight: offset ? `calc(100vh - ${offset}px)` : '100vh',
    width: props.openSidebar ? 'calc(100vw - 300px)' : '100vw',
  };
}
</script>

<style scoped></style>
