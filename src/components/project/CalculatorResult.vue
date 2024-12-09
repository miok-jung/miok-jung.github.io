<template>
  <q-card-section style="width: 50%">
    <q-tabs v-model="rightTabs">
      <q-tab name="record" label="기록" />
      <q-tab name="memory" label="메모리" />
    </q-tabs>
    <q-separator />
    <q-tab-panels v-model="rightTabs" animated>
      <q-tab-panel class="q-pa-none" name="record">
        <q-scroll-area style="height: auto" :style="{ height: `calc(${cardSectionSize.height}px - 48px)` }">
          <p>여기는 기록 공간입니다.</p>
          <p v-for="n in 10" :key="n">No. {{ n < 10 ? '0' + n : n }}:</p>
        </q-scroll-area>
      </q-tab-panel>
      <q-tab-panel class="q-pa-none" name="memory">
        <q-scroll-area :style="{ height: `calc(${cardSectionSize.height}px - 48px)` }">
          <p>여기는 메모리 공간입니다.</p>
          <p v-for="n in 10" :key="n">No. {{ n < 10 ? '0' + n : n }}:</p>
        </q-scroll-area>
      </q-tab-panel>
    </q-tab-panels>
  </q-card-section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Resize } from 'src/type';

defineProps<{
  cardSectionSize: Resize;
}>();

const rightTabs = ref<'record' | 'memory'>('record');
</script>
