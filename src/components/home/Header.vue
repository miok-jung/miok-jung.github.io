<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import { Icon } from '@iconify/vue'

const { t } = useI18n()
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
      <a>{{ t('button.yes') }}</a>
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
  }
}
</style>
