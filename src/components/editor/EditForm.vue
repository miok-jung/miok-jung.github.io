<template>
  <div class="editor-wrap">
    <Files />
    <q-separator />
    <Toolbar />
  </div>
</template>

<script setup lang="ts">
import Files from './Files.vue';
import Toolbar from './Toolbar.vue';

const props = withDefaults(
  defineProps<{
    type: string;
  }>(),
  {
    type: 'classic', // classic, inline
  }
);
</script>

<style lang="scss" scoped>
.editor-wrap {
  border: 1px solid $separator-color;
}
</style>
