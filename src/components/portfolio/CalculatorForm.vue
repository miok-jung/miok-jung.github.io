<template>
  <div class="calculator-wrap">
    <q-card class="row no-shadow" bordered>
      <q-card-section class="col left-wrap">
        <div>
          <q-input v-model="input" />
        </div>
        <div>카드 입력 버튼 공간</div>
      </q-card-section>
      <q-card-section class="col right-wrap">
        <div>카드 기록 공간</div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const input = ref<string>('');

// NOTE: life-cycle
onMounted(() => {
  console.log('onMounted CalculatorForm');
});
</script>

<style scoped lang="scss">
.calculator-wrap {
  padding: 16px;
  border: 1px solid red;
  .left-wrap {
    border: 1px solid lime;
  }
  .right-wrap {
    border: 1px solid pink;
  }
}
</style>
