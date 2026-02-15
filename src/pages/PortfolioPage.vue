<script setup lang="ts">
import About from '../components/portfolio/About.vue'
import Contact from '../components/portfolio/Contact.vue'
import Home from '../components/portfolio/Home.vue'
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
