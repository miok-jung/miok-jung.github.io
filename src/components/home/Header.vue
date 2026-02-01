<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>
<template>
  <header>
    <div class="header left">
      <Icon icon="solar:home-bold" width="24" height="24" />
      <h1>Mi Ok, Jung</h1>
    </div>
    <nav class="header right">
      <a>Home</a>
      <a>About</a>
      <a>Contact</a>
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
