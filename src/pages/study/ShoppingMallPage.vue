<template>
  <q-page :style-fn="shoppingMallStyle">
    <ShoppingMall />
  </q-page>
</template>

<script setup lang="ts">
import ShoppingMall from 'src/components/study/ShoppingMall.vue';

function shoppingMallStyle(offset: number) {
  return {
    minHeight: offset ? `calc(100vh - ${offset}px)` : '100vh',
  };
}
</script>

<style scoped></style>
