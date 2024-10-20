<template>
  <q-page :style-fn="dataDepath2Style">
    <ScrollArea :style="{ padding: '1rem', height: `calc(100vh - ${headAndFooterSize}px)` }">
      <Header />
      <Depth2 />
    </ScrollArea>
  </q-page>
</template>

<script setup lang="ts">
import Header from 'src/components/data/Header.vue';
import Depth2 from 'components/data/Depth2.vue';
import ScrollArea from 'src/components/common/ScrollArea.vue';
import { ref } from 'vue';

const headAndFooterSize = ref<number>(0);
function dataDepath2Style(offset: number) {
  headAndFooterSize.value = offset;
  return {
    maxHeight: offset ? `calc(100vh - ${offset}px)` : '100vh',
  };
}
</script>

<style scoped></style>
