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
import { isNumber, tokenizeExpression } from 'src/assets/script/regex';
import { onMounted, onUnmounted, ref } from 'vue';

const input = ref<string>('');

const result = ref<string>('');

// NOTE: 버튼 클릭
const onClickButton = (value: string) => {
  input.value += value;
};

const handleKeydown = (evt: KeyboardEvent) => {
  // 숫자 검증
  if (isNumber(evt.key)) input.value += evt.key;
};

const calcSum = () => {
  // 계산전 배열 구하기
  const temp = new Array(tokenizeExpression(input.value));
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
