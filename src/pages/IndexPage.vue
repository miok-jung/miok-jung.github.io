<template>
  <q-page :style-fn="portfolioStyle">
    <div>포트폴리오 메인 페이지 입니다.</div>
  </q-page>
</template>

<script setup lang="ts">
// NOTE: 포트폴리오 스타일
function portfolioStyle(offset: number) {
  return {
    minHeight: offset ? `calc(100vh - ${offset}px)` : '100vh',
  };
}
</script>
