<template>
  <q-card-section style="width: 50%">
    <div>
      <div class="calculation-area-wrap">
        <p class="calculation-process">{{ calculateProcess }}</p>
        <p class="calculation-result">{{ calcurateResult }}</p>
      </div>

      <div class="row q-gutter-x-sm q-mb-sm">
        <!-- NOTE: 백분율 -->
        <q-btn class="col" />
        <q-btn class="col" />
        <!-- <q-btn class="col" label="&#37;" />
        <q-btn class="col" label="CE" /> -->
        <q-btn class="col" label="C" @click="onClicEscape">
          <q-tooltip>현재 계산 결과를 지우며, 단축키는 Esc이다.</q-tooltip>
        </q-btn>
        <q-btn class="col" />
        <!-- <q-btn class="col" icon="mdi-backspace-outline" size="sm" /> -->
      </div>
      <div class="row q-gutter-x-sm q-mb-sm">
        <!-- <q-btn class="col" label="1/x" />
        <q-btn class="col">
          <template #default>
            <div>x<sup>2</sup></div>
          </template>
        </q-btn>
        <q-btn class="col">
          <template #default>
            <div><sup>2</sup>&radic;X</div>
          </template>
        </q-btn>
        <q-btn class="col" label="&#247;" /> -->
        <q-btn class="col" />
        <q-btn class="col" />
        <q-btn class="col" />
        <q-btn class="col" />
      </div>
      <div class="row q-gutter-x-sm q-mb-sm">
        <q-btn class="col" label="7" @click="onClickNumber('7')" />
        <q-btn class="col" label="8" @click="onClickNumber('8')" />
        <q-btn class="col" label="9" @click="onClickNumber('9')" />
        <!-- <q-btn class="col" label="X" /> -->
        <q-btn class="col" />
      </div>
      <div class="row q-gutter-x-sm q-mb-sm">
        <q-btn class="col" label="4" @click="onClickNumber('4')" />
        <q-btn class="col" label="5" @click="onClickNumber('5')" />
        <q-btn class="col" label="6" @click="onClickNumber('6')" />
        <!-- <q-btn class="col" label="-" /> -->
        <q-btn class="col" />
      </div>
      <div class="row q-gutter-x-sm q-mb-sm">
        <q-btn class="col" label="1" @click="onClickNumber('1')" />
        <q-btn class="col" label="2" @click="onClickNumber('2')" />
        <q-btn class="col" label="3" @click="onClickNumber('3')" />
        <!-- <q-btn class="col" label="+" @click="onCLickOperation('add')" /> -->
        <q-btn class="col" />
      </div>
      <div class="row q-gutter-x-sm">
        <q-btn class="col" />
        <q-btn class="col" />
        <q-btn class="col" />
        <q-btn class="col" label="=" @click="onClickResult" />
        <!-- <q-btn class="col" label="+/-" />
        <q-btn class="col" label="0" />
        <q-btn class="col" label="." />
         -->
      </div>
      <q-resize-observer :debounce="300" @resize="onResizeCardSection" />
    </div>
  </q-card-section>
</template>

<script setup lang="ts">
import type { Resize } from 'src/type';
import { onMounted, ref } from 'vue';

const emit = defineEmits(['update-card-section-size']); // 이벤트 정의

const calculateProcess = ref<string>('');
const calcurateResult = ref<string>('');
const calculateArr = ref<(string | number)[]>([]);
function onClickNumber(num: string) {
  calcurateResult.value = calcurateResult.value + num;
}

// SECTION: 클릭 이벤트
function onClicEscape() {
  calcurateResult.value = '';
  calculateProcess.value = '';
}
function onClickResult() {
  calculateProcess.value = calcurateResult.value + ' =';
}
// !SECTION 클릭 이벤트 종료

function onCLickOperation(type: 'add' | 'subtract' | 'multiply' | 'divide') {
  // 더하다 | 빼다 | 곱하다 | 나누다
  switch (type) {
    case 'add': {
      let beforeNumber = parseInt(calculateProcess.value);
      calculateArr.value.push(beforeNumber);
      calculateArr.value.push('+');
      calculateProcess.value = calculateProcess.value + ' + ';
      console.log('add: ', calculateArr.value);
      break;
    }
    case 'subtract': {
      break;
    }
    case 'multiply': {
      break;
    }
    case 'divide': {
      break;
    }
    default: {
      alert('에러발생');
    }
  }
}

// SECTION
const cardSectionSize = ref<Resize>({ width: 0, height: 0 });
function onResizeCardSection(size: Resize) {
  cardSectionSize.value = size;
  emit('update-card-section-size', size); // 부모로 데이터 전달
}
// !SECTION

// NOTE: life-cycle
onMounted(() => {
  //
});
</script>
<style lang="scss" scoped>
div.calculation-area-wrap {
  height: 100px;
  margin-bottom: 20px;
  background: rgba($color: #000000, $alpha: 0.02);
  p.calculation-process {
    display: flex;
    justify-content: end;
    align-items: center;
    margin-bottom: 16px;
    padding: 0 8px;
    height: calc(40% - 8px);
    background: rgba($color: #000000, $alpha: 0.02);
  }
  p.calculation-result {
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 0 8px;
    height: calc(60% - 8px);
    font-size: 2rem;
    line-height: 2rem;
    background: rgba($color: #000000, $alpha: 0.02);
  }
}
</style>
