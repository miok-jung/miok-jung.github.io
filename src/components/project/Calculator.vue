<template>
  <q-card-section style="width: 50%">
    <div>
      <q-input
        class="q-mb-md text-right"
        v-model="calculateValue"
        :label="calculateLabel"
        input-class="text-right"
        borderless
        disable
        filled
        readonly
        square
      >
        <template #default> </template>
      </q-input>

      <div class="row q-gutter-x-sm q-mb-sm">
        <!-- NOTE: 백분율 -->
        <q-btn class="col" label="&#37;" />
        <q-btn class="col" label="CE" />
        <q-btn class="col" label="C" @keyup="onKeyupEsc">
          <q-tooltip>현재 계산 결과를 지우며, 단축키는 Esc이다.</q-tooltip>
        </q-btn>
        <q-btn class="col" icon="mdi-backspace-outline" size="sm" />
      </div>
      <div class="row q-gutter-x-sm q-mb-sm">
        <q-btn class="col" label="1/x" />
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
        <q-btn class="col" label="&#247;" />
      </div>
      <div class="row q-gutter-x-sm q-mb-sm">
        <q-btn class="col" label="7" @click="onClickNumber('7')" />
        <q-btn class="col" label="8" @click="onClickNumber('8')" />
        <q-btn class="col" label="9" @click="onClickNumber('9')" />
        <q-btn class="col" label="X" />
      </div>
      <div class="row q-gutter-x-sm q-mb-sm">
        <q-btn class="col" label="4" @click="onClickNumber('4')" />
        <q-btn class="col" label="5" @click="onClickNumber('5')" />
        <q-btn class="col" label="6" @click="onClickNumber('6')" />
        <q-btn class="col" label="-" />
      </div>
      <div class="row q-gutter-x-sm q-mb-sm">
        <q-btn class="col" label="1" @click="onClickNumber('1')" />
        <q-btn class="col" label="2" @click="onClickNumber('2')" />
        <q-btn class="col" label="3" @click="onClickNumber('3')" />
        <q-btn class="col" label="+" @click="onCLickOperation('add')" />
      </div>
      <div class="row q-gutter-x-sm">
        <q-btn class="col" label="+/-" />
        <q-btn class="col" label="0" />
        <q-btn class="col" label="." />
        <q-btn class="col" label="=" />
      </div>
      <q-resize-observer :debounce="300" @resize="onResizeCardSection" />
    </div>
  </q-card-section>
</template>

<script setup lang="ts">
import { Resize } from 'src/type';
import { ref } from 'vue';

const emit = defineEmits(['update-card-section-size']); // 이벤트 정의

const calculateValue = ref<string>('');
const calculateArr = ref<(string | number)[]>([]);
const calculateLabel = ref<string>('');
function onClickNumber(num: string) {
  calculateValue.value = calculateValue.value + num;
}
function onCLickOperation(type: 'add' | 'subtract' | 'multiply' | 'divide') {
  // 더하다 | 빼다 | 곱하다 | 나누다
  switch (type) {
    case 'add': {
      let beforeNumber = parseInt(calculateValue.value);
      calculateArr.value.push(beforeNumber);
      calculateArr.value.push('+');
      calculateLabel.value = calculateValue.value + ' + ';
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

// NOTE: 키보드 이벤트
function onKeyupEsc(event: KeyboardEvent) {
  console.log('key', event.key);
}

// SECTION
const cardSectionSize = ref<Resize>({ width: 0, height: 0 });
function onResizeCardSection(size: Resize) {
  cardSectionSize.value = size;
  emit('update-card-section-size', size); // 부모로 데이터 전달
}
// !SECTION
</script>
