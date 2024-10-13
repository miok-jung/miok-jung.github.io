<template>
  <q-page :style-fn="shopStyle">
    <Header />
  </q-page>
</template>

<script setup lang="ts">
import Header from 'src/components/study/shop/Header.vue';

function shopStyle(offset: number) {
  return {
    minHeight: offset ? `calc(100vh - ${offset}px)` : '100vh',
  };
}
</script>

<style scoped></style>
