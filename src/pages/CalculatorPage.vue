<template>
  <q-page class="row items-center justify-evenly" :style-fn="sideStyle">
    <ScrollArea
      :style="{
        width: ui.isSidebarShow ? `${$q.screen.width}px` : `calc(${$q.screen.width}px - 300px)`,
        height: `calc(${$q.screen.height}px - ${objects}px)`,
      }"
    >
      <CalculatorForm />
    </ScrollArea>
  </q-page>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import ScrollArea from 'src/components/common/ScrollArea.vue';
import CalculatorForm from 'src/components/portfolio/CalculatorForm.vue';
import { useUiStore } from 'src/stores/ui';
import { ref } from 'vue';

const $q = useQuasar();
const ui = useUiStore();

const objects = ref<number>(0);
function sideStyle(object: number) {
  objects.value = object;
  return {
    minHeight: object ? `calc(${$q.screen.height}px - ${object}px)` : `${$q.screen.height}px`,
    width: ui.isSidebarShow ? `calc(${$q.screen.width}px - 300px)` : `${$q.screen.width}px`,
  };
}
</script>
