<template>
  <q-header elevated>
    <q-toolbar>
      <q-btn flat dense round icon="menu" aria-label="Menu" @click="$emit('toggle-left-drawer')" />
      <q-toolbar-title> Miok Jung's Portfolio </q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
defineEmits<{
  (e: 'toggle-left-drawer'): void // ✅ 부모(MainLayout.vue)에서 상태를 변경할 수 있도록 이벤트 정의
}>()
</script>

<style scoped></style>
