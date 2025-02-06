<template>
  <q-page class="row items-center justify-evenly" :style-fn="mainStyle">
    <ScrollArea
      :style="{
        width: ui.isSidebarShow
          ? `calc(${$q.screen.width}px - 300px)`
          : `calc(${$q.screen.width}px)`,
        height: objects
          ? `calc(100vh - ${objects}px - (${$q.screen.height}px * 0.1))`
          : 'calc(100vh - (${$q.screen.height}px * 0.1))',
      }"
    >
      <Profile />
    </ScrollArea>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import ScrollArea from 'src/components/common/ScrollArea.vue';
import { useUiStore } from 'src/stores/ui';
import Profile from 'src/components/portfolio/Profile.vue';

const $q = useQuasar();
const ui = useUiStore();

const objects = ref<number>(0);
function mainStyle(object: number) {
  objects.value = object;
  return {
    padding: `calc(${$q.screen.height}px * 0.05) calc(${$q.screen.width}px * 0.05) `,
    width: ui.isSidebarShow
      ? `calc(${$q.screen.width}px - 300px - (${$q.screen.height}px * 0.1))`
      : `calc(${$q.screen.width}px - (${$q.screen.height}px * 0.1))`,
    minHeight: object
      ? `calc(100vh - ${object}px (${$q.screen.height}px * 0.1))`
      : 'calc(100vh - (${$q.screen.height}px * 0.1))',
    boxSizing: 'border-box',
  };
}
</script>
<style scoped lang="scss"></style>
