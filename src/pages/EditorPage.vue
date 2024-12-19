<template>
  <q-page :style-fn="editorWrapStyle">
    <EditForm type="classic" />
  </q-page>
</template>

<script setup lang="ts">
import EditForm from 'src/components/editor/EditForm.vue';

function editorWrapStyle(offset: number) {
  return {
    padding: '1rem',
    minHeight: offset ? `calc(100vh - ${offset}px)` : '100vh',
  };
}
</script>

<style scoped></style>
