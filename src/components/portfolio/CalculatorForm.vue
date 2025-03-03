<template>
  <div class="calculator-wrap">
    <q-card class="row no-shadow" bordered>
      <q-card-section class="col left-wrap">
        <div class="q-gutter-y-sm">
          <q-input v-model="input" dense outlined readonly />
          <q-input v-model="result" dense outlined readonly />
        </div>
        <div class="q-gutter-y-sm">
          <div class="row no-wrap q-gutter-x-sm">
            <q-btn class="col" outline />
            <q-btn class="col" outline />
            <q-btn class="col" outline />
            <q-btn
              class="col"
              icon="mdi-backspace-outline"
              size="sm"
              outline
              @click="onClickButton(' * ')"
            />
          </div>
          <div class="row no-wrap q-gutter-x-sm">
            <q-btn class="col" label="7" outline @click="onClickButton('7')" />
            <q-btn class="col" label="8" outline @click="onClickButton('8')" />
            <q-btn class="col" label="9" outline @click="onClickButton('9')" />
            <q-btn class="col" label="X" outline @click="onClickButton('*')" />
          </div>
          <div class="row no-wrap q-gutter-x-sm">
            <q-btn class="col" label="4" outline @click="onClickButton('4')" />
            <q-btn class="col" label="5" outline @click="onClickButton('5')" />
            <q-btn class="col" label="6" outline @click="onClickButton('6')" />
            <q-btn class="col" label="-" outline @click="onClickButton('-')" />
          </div>
          <div class="row no-wrap q-gutter-x-sm">
            <q-btn class="col" label="1" outline @click="onClickButton('1')" />
            <q-btn class="col" label="2" outline @click="onClickButton('2')" />
            <q-btn class="col" label="3" outline @click="onClickButton('3')" />
            <q-btn class="col" label="+" outline @click="onClickButton('+')" />
          </div>
          <div class="row no-wrap q-gutter-x-sm">
            <q-btn class="col" label="+/-" outline />
            <q-btn class="col" label="0" outline @click="onClickButton('0')" />
            <q-btn class="col" label="." outline @click="onClickButton('.')" />
            <q-btn class="col" label="=" outline @click="calcSum" />
          </div>
        </div>
      </q-card-section>
      <q-card-section class="col right-wrap">
        <!-- <div>카드 기록 공간</div> -->
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { isNumber, isOperatorChar, tokenizeExpression } from 'src/assets/script/regex';
import { onMounted, onUnmounted, ref } from 'vue';

const $q = useQuasar();
const input = ref<string>('');
const result = ref<string>('');

// NOTE: 버튼 클릭
const onClickButton = (value: string) => {
  if (input.value.length === 0 && !isNumber(value)) {
    console.log('첫번째로 연산자 클릭 에러');
    return;
  } else {
    input.value += value;
  }
};

const handleKeydown = (evt: KeyboardEvent) => {
  if (isNumber(evt.key)) input.value += evt.key;
};

const parseInputToArrayays = ref<(string | number)[]>([]);
const operatorFilter = ref<string[]>([]);
const numbers = ref<number[]>([]);

const calcSum = () => {
  if (isOperatorChar(input.value.slice(-1))) {
    $q.notify({
      message: '숫자를 마지막으로 입력해야 계산이 됩니다.',
      color: 'negative',
      icon: 'mdi-message-alert-outline',
    });
    return;
  }

  parseInputToArrayays.value = tokenizeExpression(input.value);
  operatorFilter.value = parseInputToArrayays.value
    .filter((_item, index) => index % 2 !== 0)
    .map(String);
  numbers.value = parseInputToArrayays.value.filter((_item, index) => index % 2 === 0).map(Number);

  while (operatorFilter.value.length !== 0) {
    for (let i = 0; i < operatorFilter.value.length; i++) {
      switch (operatorFilter.value[i]) {
        case '*': {
          updateExpression(i, '*');
          break;
        }
        case '/': {
          updateExpression(i, '/');
          break;
        }
        case '+': {
          updateExpression(i, '+');
          break;
        }
        case '-': {
          updateExpression(i, '-');
          break;
        }
        default: {
          break;
        }
      }
    }
  }
  result.value = sampleResult.value.toString();
};

// NOTE: 수식 배열 업데이트
const sampleResult = ref<number>(0);
const updateExpression = (index: number, operator: string) => {
  if (operator === '*') {
    sampleResult.value = Math.trunc(
      Number(numbers.value[index]) * Number(numbers.value[index + 1]),
    );
  } else if (operator === '/') {
    sampleResult.value = Math.trunc(
      Number(numbers.value[index]) / Number(numbers.value[index + 1]),
    );
  } else if (operator === '+') {
    sampleResult.value = Math.trunc(
      Number(numbers.value[index]) + Number(numbers.value[index + 1]),
    );
  } else if (operator === '-') {
    sampleResult.value = Math.trunc(
      Number(numbers.value[index]) - Number(numbers.value[index + 1]),
    );
  }
  numbers.value.splice(index, 2, sampleResult.value);
  operatorFilter.value.splice(index, 1);
};

// NOTE: life-cycle
onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});
onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
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
<!-- TODO: 가계부 TODO List
2. 키보드로 숫자를 입력한다.
3. 숫자를 클릭하거나 입력시, 콤마가 실시간으로 활성화가 된다.
4. 
-->
