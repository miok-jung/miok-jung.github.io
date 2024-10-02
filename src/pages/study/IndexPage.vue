<template>
  <q-page :style-fn="studyStyle">스터디 관련 페이지</q-page>
</template>

<script setup lang="ts">
function studyStyle(offset: number) {
  return {
    minHeight: offset ? `calc(100vh - ${offset}px)` : '100vh',
  };
}
</script>

<style scoped></style>
