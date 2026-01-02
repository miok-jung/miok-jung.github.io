<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  const el = document.documentElement
  el.classList.remove('theme-dark')
  el.classList.add('theme-light')
})
</script>
<template>
  <router-view />
</template>
