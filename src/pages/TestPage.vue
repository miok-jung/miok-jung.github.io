<template>
  <q-page :style-fn="TestPageStyles">
    <h5>Test PAGE</h5>
    <p>css 라이브러리에서 쓰이는 Quasar table</p>
    <QuasarTable />
    <p>Quasar Table을 대체하기 위해 수작업 ING</p>
    <BaseTable :thead="['Person', 'Most interest in', 'Age']" :tbody="['']" />
  </q-page>
</template>

<script setup lang="ts">
import QuasarTable from 'src/components/test/QuasarTable.vue';
import BaseTable from 'src/components/test/BaseTable.vue';

// 전체 페이지 스타일
const TestPageStyles = () => {
  return { padding: '1rem' };
};
</script>

<style scoped lang="scss"></style>
