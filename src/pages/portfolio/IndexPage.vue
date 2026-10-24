<script setup lang="ts">
import Home from '../../components/portfolio/Home.vue'
import Career from '../../components/portfolio/Career.vue'
import Projects from '../../components/portfolio/Projects.vue'
import Contact from '../../components/portfolio/Contact.vue'
</script>
<template>
  <main class="portfolio">
    <Home class="portfolio__section" />
    <Career class="portfolio__section" />
    <Projects class="portfolio__section" />
    <Contact class="portfolio__section" />
  </main>
</template>

<style scoped lang="scss">
.portfolio {
  &__section {
    display: flex;
    transition: background 0.2s;
    &:nth-of-type(1) {
      background: MistyRose;
    }
    &:nth-of-type(2) {
      background: LavenderBlush;
    }
    &:nth-of-type(3) {
      background: Ivory;
    }
    &:nth-of-type(4) {
      background: FloralWhite;
    }
    html.theme-dark & {
      &:nth-of-type(1) {
        background: #3d2429; // 다크 로즈/와인 톤
      }
      &:nth-of-type(2) {
        background: #2b2738; // 다크 퍼플/네이비 톤
      }
      &:nth-of-type(3) {
        background: #2c2c28; // 다크웜 그레이/차콜 톤
      }
      &:nth-of-type(4) {
        background: #25282a; // 다크 슬레이트 톤
      }
    }
  }
}
</style>
