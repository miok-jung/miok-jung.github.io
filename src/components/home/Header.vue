<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>
<template>
  <header>
    <div class="header left">
      <Icon icon="solar:home-bold" width="24" height="24" />
      <p>Portfolio</p>
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
  top: 0;
  border: 1px solid red;
  background: white;
  .header {
    border: 1px solid blue;
    &.left {
      border: 1px solid lime;
      display: flex;
      flex-direction: row;
    }
  }
}
</style>
