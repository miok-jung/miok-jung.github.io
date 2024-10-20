<template>
  <q-page :style-fn="infoPageStyle">
    <DataIndex />
  </q-page>
</template>

<script setup lang="ts">
import DataIndex from 'src/components/data/Index.vue';

function infoPageStyle(offset: number) {
  return {
    padding: '24px',
    minHeight: offset ? `calc(100vh - ${offset}px)` : '100vh',
  };
}
</script>

<style scoped></style>
