<script setup lang="ts">
import About from '../components/home/About.vue'
import Contact from '../components/home/Contact.vue'
import Home from '../components/home/Home.vue'
</script>
<template>
  <div class="out-wrap">
    <Home class="wrap" />
    <About class="wrap" />
    <Contact class="wrap" />
  </div>
</template>

<style scoped lang="scss">
.out-wrap {
  .wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    width: inherit;
    height: 100vh;
    &:nth-of-type(1) {
      background: MistyRose;
    }
    &:nth-of-type(2) {
      background: Ivory;
    }
    &:nth-of-type(3) {
      background: FloralWhite;
    }
  }
}
</style>
