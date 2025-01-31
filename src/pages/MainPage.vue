<template>
  <q-page class="row items-center justify-evenly" :style-fn="mainStyle">
    <ScrollArea :style="{ height: `calc(${$q.screen.height}px - ${objects}px)` }">
      <div style="border: 1px solid red; height: 200vh">TEST</div>
    </ScrollArea>
  </q-page>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import ScrollArea from 'src/components/common/ScrollArea.vue';
import { ref } from 'vue';

const $q = useQuasar();

const objects = ref<number>(0);
function mainStyle(object: number) {
  objects.value = object;
  return {
    minHeight: object ? `calc(100vh - ${object}px)` : '100vh',
  };
}
</script>
