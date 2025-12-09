<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>
<template>
  <header>
    <div class="header left">
      <Icon icon="solar:home-bold" width="24" height="24" />
      <h1>Portfolio</h1>
    </div>
    <div class="header right">Side</div>
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
    }
  }
}
</style>
