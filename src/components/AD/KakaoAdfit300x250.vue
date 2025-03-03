<template>
  <div class="kakao-ad-container">
    <ins
      class="kakao_ad_area"
      :data-ad-unit="adUnit"
      data-ad-width="300"
      data-ad-height="250"
    ></ins>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

const adUnit = 'DAN-AuoprtZzl5U0cHxF'; // AdFit에서 발급받은 코드

onMounted(() => {
  if (window.kakao && window.kakao.adfit) {
    window.kakao.adfit.load();
  }
});
</script>

<style scoped lang="scss">
.kakao-ad-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 250px;
  margin: 10px 0;
  border: 1px solid red;
}
</style>
