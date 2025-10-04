<script setup lang="ts">
type Props = {
  isToggle: boolean
}
const props = withDefaults(defineProps<Props>(), { isToggle: true })

const emit = defineEmits<{
  (e: 'update:isToggle', value: boolean): void
}>()

function toggleLeftDrawer() {
  emit('update:isToggle', !props.isToggle)
}
</script>

<template>
  <q-header elevated>
    <q-toolbar>
      <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

      <q-toolbar-title> Quasar App </q-toolbar-title>

      <div>Quasar v{{ $q.version }}</div>
    </q-toolbar>
  </q-header>
</template>

<style scoped></style>
