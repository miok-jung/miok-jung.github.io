<script setup lang="ts">
import { ref, watch } from 'vue'

const toggleTheme = ref<boolean>(false)

watch(toggleTheme, (isDark) => {
  const el = document.documentElement
  el.classList.remove('theme-light', 'theme-dark')
  el.classList.add(isDark ? 'theme-dark' : 'theme-light')
})
</script>
<template>
  <header>
    <label class="toggle">
      <input type="checkbox" />
      <span class="ui"></span>
    </label>
    <input type="checkbox" v-model="toggleTheme" />
    <input type="radio" />
    {{ toggleTheme }}
  </header>
</template>

<style scoped lang="scss">
input[type='checkbox'] {
  outline: 3px solid red;
}
</style>
