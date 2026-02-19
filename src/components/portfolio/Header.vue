<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

const headerRef = ref<HTMLElement | null>(null)

const scrollToSection = (id: string) => {
  const el = document.getElementById(id)
  if (!el) return

  const headerH = headerRef.value?.offsetHeight ?? 0
  const extra = 0
  const top = el.getBoundingClientRect().top + window.scrollY - headerH + extra

  window.scrollTo({ top, behavior: 'smooth' })
}
</script>

<template>
  <header ref="headerRef">
    <div class="header left">
      <Icon icon="solar:home-bold" width="24" height="24" />
      <h1>Mi Ok, Jung</h1>
    </div>

    <nav class="header right">
      <button type="button" @click="scrollToSection('home')">Home</button>
      <button type="button" @click="scrollToSection('about')">About</button>
      <button type="button" @click="scrollToSection('contact')">Contact</button>
    </nav>
  </header>
</template>

<style scoped lang="scss">
header {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  background: white;

  .header {
    display: flex;
    align-items: center;

    &.left {
      gap: 8px;
    }

    &.right {
      gap: 8px;
      button {
        background: transparent;
      }
    }
  }
}
</style>
