<template>
  <q-page :style-fn="TestPageStyles">
    <h5>Test PAGE</h5>
  </q-page>
</template>

<script setup lang="ts">
// 전체 페이지 스타일
const TestPageStyles = () => {
  return { padding: '1rem' };
};
</script>

<style scoped lang="scss"></style>
