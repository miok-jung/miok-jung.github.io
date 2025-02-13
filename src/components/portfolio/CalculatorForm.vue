<template>
  <!-- TODO: 1. 버튼을 클릭 혹은 숫자를 클릭하면 해당 숫자 혹은 연산자가 입력이 된다. -->
  <!-- TODO: 2. 엔터 혹은 =버튼을 클릭시 계산이 된다. -->
  <!-- TODO: 큰 숫자를 입력시 콤마가 자동으로 적용이 되도록 수정을 한다 -->
  <!-- TODO: 숫자를 잘 못입력을 할 경우 지우기 버튼 혹은 backspace 키보드 버튼으로 클릭시 한개씩 지울 수 있다 -->
  <!-- TODO: 소수점 계산은 4자리로 제한한다 -->
  <!-- TODO: *, /먼저 연산자 계산을 한다 -->
  <!-- TODO: 이후 +, -는 나중에 계산을 한다 -->
  <!-- TODO: 괄호가 있다면 최우선적으로 계산을 한다 -->
  <!-- TODO: 괄호 키보드 입력을 인식한다 -->
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
            <q-btn class="col" label="X" outline @click="onClickButton(' * ')" />
          </div>
          <div class="row no-wrap q-gutter-x-sm">
            <q-btn class="col" label="4" outline @click="onClickButton('4')" />
            <q-btn class="col" label="5" outline @click="onClickButton('5')" />
            <q-btn class="col" label="6" outline @click="onClickButton('6')" />
            <q-btn class="col" label="-" outline @click="onClickButton(' - ')" />
          </div>
          <div class="row no-wrap q-gutter-x-sm">
            <q-btn class="col" label="1" outline @click="onClickButton('1')" />
            <q-btn class="col" label="2" outline @click="onClickButton('2')" />
            <q-btn class="col" label="3" outline @click="onClickButton('3')" />
            <q-btn class="col" label="+" outline @click="onClickButton(' + ')" />
          </div>
          <div class="row no-wrap q-gutter-x-sm">
            <q-btn class="col" label="+/-" outline @click="onClickButton('+')" />
            <q-btn class="col" label="0" outline @click="onClickButton('0')" />
            <q-btn class="col" label="." outline @click="onClickButton('.')" />
            <q-btn class="col" label="=" outline />
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
import { onMounted, ref } from 'vue';

const input = ref<string>('');

const result = ref<string>('');

// NOTE: 버튼 클릭
function onClickButton(value: string) {
  input.value += value;
}

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
