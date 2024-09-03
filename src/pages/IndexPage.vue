<template>
  <q-page :style-fn="portfolioStyle">
    <div>
      <p>여기는 포트폴리오 메인페이지 입니다.</p>
    </div>
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
