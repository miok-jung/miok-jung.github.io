<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { Icon } from '@iconify/vue'

const scrollY = ref<number>(0)

const onScroll = () => {
  scrollY.value = window.scrollY
}

const scrollToSection = (id: string) => {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>
<template>
  <header>
    <div class="header left">
      <Icon icon="solar:home-bold" width="24" height="24" />
      <h1>Mi Ok, Jung</h1>
    </div>
    <nav class="header right">
      <a @click.prevent="scrollToSection('home')">Home</a>
      <a @click.prevent="scrollToSection('about')">About</a>
      <a @click.prevent="scrollToSection('contact')">Contact</a>
    </nav>
  </header>
</template>

<style scoped lang="scss">
header {
  position: sticky;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
  top: 0;
  background: white;
  .header {
    display: flex;
    align-items: center;
    &.left {
      display: flex;
      flex-direction: row;
      gap: 8px;
    }
    &.right {
      display: flex;
      gap: 8px;
      a {
        padding: 4px 8px;
        cursor: pointer;
        &:hover {
          background: var(--grey-3);
          color: var(--grey-7);
        }
        &:active {
          background: var(--grey-5);
          color: white;
        }
      }
    }
  }
}
</style>
