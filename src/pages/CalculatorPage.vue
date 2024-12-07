<template>
  <q-page :style-fn="calculatorWrapStyle">
    <p class="text-h2 q-mb-lg">간단한 계산기 페이지</p>
    <p class="text-h4 q-mb-md">윈도우에서 제공하는 계산기와 유사한 기능을 최대한 넣어보았습니다.</p>
    <q-card class="row no-wrap">
      <Calculator @update-card-section-size="updateCardSectionSize" />
      <q-separator vertical />
      <CalculatorResult :card-section-size="cardSectionSize" />
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Resize } from 'src/type';
import Calculator from 'src/components/project/Calculator.vue';
import CalculatorResult from 'src/components/project/CalculatorResult.vue';

function calculatorWrapStyle(offset: number) {
  return {
    padding: '24px',
    minHeight: offset ? `calc(100vh - ${offset}px)` : '100vh',
  };
}

const cardSectionSize = ref<Resize>({ width: 0, height: 0 });
function updateCardSectionSize(size: Resize) {
  cardSectionSize.value = size; // 값 업데이트
}
</script>
