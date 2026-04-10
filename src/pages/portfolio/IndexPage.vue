<script setup lang="ts">
import Home from '../../components/portfolio/Home.vue'
import Projects from '../../components/portfolio/Projects.vue'
import Contact from '../../components/portfolio/Contact.vue'
</script>
<template>
  <main class="portfolio">
    <Home class="portfolio__section" />
    <Projects class="portfolio__section" />
    <Contact class="portfolio__section" />
  </main>
</template>

<style scoped lang="scss">
.portfolio {
  &__section {
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
