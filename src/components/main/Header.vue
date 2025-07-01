<template>
  <q-header elevated>
    <q-toolbar>
      <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
      <q-toolbar-title> Miok, Jung's Portfolio </q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>
<script setup lang="ts">
interface Props {
  sidebar: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  sidebar: false,
});
const emit = defineEmits<{
  (e: 'changeSidebar', value: boolean): void;
}>();

function toggleLeftDrawer() {
  emit('changeSidebar', !props.sidebar);
}
</script>
<style scoped lang="scss"></style>
