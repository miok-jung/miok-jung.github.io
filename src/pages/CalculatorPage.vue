<template>
  <q-page :style-fn="calculatorWrapStyle">
    <p class="text-h2 q-mb-lg">간단한 계산기 페이지</p>
    <p class="text-h4 q-mb-md">윈도우에서 제공하는 계산기와 유사한 기능을 최대한 넣어보았습니다.</p>
    <q-card class="row no-wrap">
      <!-- FIXME: 좌/우 해당 부분도 나누어서 컴포넌트화를 할지 말지에 대한 여부도 고민이 필요 -->
      <!-- SECTION: 좌 -->
      <q-card-section style="width: 50%">
        <div>
          <q-input class="q-mb-md" v-model="resultValue" borderless disable filled readonly square />
          <div class="row q-gutter-x-sm q-mb-sm">
            <!-- NOTE: 백분율 -->
            <q-btn class="col" label="&#37;" />
            <q-btn class="col" label="CE" />
            <q-btn class="col" label="C" />
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
            <q-btn class="col" label="7" />
            <q-btn class="col" label="8" />
            <q-btn class="col" label="9" />
            <q-btn class="col" label="X" />
          </div>
          <div class="row q-gutter-x-sm q-mb-sm">
            <q-btn class="col" label="4" />
            <q-btn class="col" label="5" />
            <q-btn class="col" label="6" />
            <q-btn class="col" label="-" />
          </div>
          <div class="row q-gutter-x-sm q-mb-sm">
            <q-btn class="col" label="1" />
            <q-btn class="col" label="2" />
            <q-btn class="col" label="3" />
            <q-btn class="col" label="/" />
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
      <!-- !SECTION END 좌 -->
      <q-separator vertical />
      <!-- SECTION: 우 -->
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
              <p v-for="n in 10" :key="n">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo veniam repellendus quis.
                Consequuntur atque labore explicabo iste, cupiditate velit. Consectetur laudantium ullam ratione ut fuga
                illo, maxime nobis dolorem quis.
              </p>
            </q-scroll-area>
          </q-tab-panel>
          <q-tab-panel class="q-pa-none" name="memory">
            <q-scroll-area :style="{ height: `calc(${cardSectionSize.height}px - 48px)` }">
              <p>여기는 메모리 공간입니다.</p>
              <p v-for="n in 10" :key="n">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo veniam repellendus quis.
                Consequuntur atque labore explicabo iste, cupiditate velit. Consectetur laudantium ullam ratione ut fuga
                illo, maxime nobis dolorem quis.
              </p>
            </q-scroll-area>
          </q-tab-panel>
        </q-tab-panels>
      </q-card-section>
      <!-- !SECTION END 우 -->
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { Resize } from 'src/type';
import { ref } from 'vue';

function calculatorWrapStyle(offset: number) {
  return {
    padding: '24px',
    minHeight: offset ? `calc(100vh - ${offset}px)` : '100vh',
  };
}

// NOTE: 좌측
const resultValue = ref<string>('');

// NOTE: 우측탭
const rightTabs = ref<'record' | 'memory'>('record');
const cardSectionSize = ref<Resize>({ width: 0, height: 0 });
function onResizeCardSection(size: Resize) {
  cardSectionSize.value = size;
}
</script>

<style scoped></style>
