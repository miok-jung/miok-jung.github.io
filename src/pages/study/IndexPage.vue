<template>
  <q-page :style-fn="studyStyle">
    <div>Editor TEST</div>
  </q-page>
</template>

<script setup lang="ts">
function studyStyle(offset: number) {
  return {
    padding: '1rem',
    minHeight: offset ? `calc(100vh - ${offset}px)` : '100vh',
  };
}
</script>

<style scoped></style>
