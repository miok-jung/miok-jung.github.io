<template>
  <div ref="lottieRef" style="position: fixed; top: 0; left: 0; z-index: 1000000">
    <DotLottieVue
      style="width: 100vw; height: 100vh"
      autoplay
      loop
      :speed="1"
      background-color="rgba(0, 0, 0, 0.5)"
      src="https://lottie.host/c404786e-2d84-4239-a092-5fa55366d5a7/DRPRrsgJH4.json"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { DotLottieVue } from '@lottiefiles/dotlottie-vue';

const lottieRef = ref<HTMLElement | null>(null);

// NOTE: life-cycle
onMounted(() => {
  setTimeout(() => {
    // NOTE: 5초뒤 화면뒤로 빼기
    if (lottieRef.value) {
      lottieRef.value.style.zIndex = '1';
    }
  }, 5000);
});
</script>

<style scoped></style>
