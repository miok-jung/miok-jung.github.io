<template>
  <q-page
    class="row items-center justify-evenly"
    :style-fn="sideStyle"
    v-touch-repeat.keyboard="handleTouchRepeat"
    tabindex="0"
    @focus="onFocus"
    @click="onFocus"
  >
    <ScrollArea
      :style="{
        width: ui.isSidebarShow ? `${$q.screen.width}px` : `calc(${$q.screen.width}px - 300px)`,
        height: `calc(${$q.screen.height}px - ${objects}px)`,
      }"
    >
      <CalculatorForm />
    </ScrollArea>
  </q-page>
</template>

<script setup lang="ts">
import type { TouchRepeatValue } from 'quasar';
import { useQuasar } from 'quasar';
import ScrollArea from 'src/components/common/ScrollArea.vue';
import CalculatorForm from 'src/components/portfolio/CalculatorForm.vue';
import { useUiStore } from 'src/stores/ui';
import { ref } from 'vue';

const $q = useQuasar();
const ui = useUiStore();

const objects = ref<number>(0);
function sideStyle(object: number) {
  objects.value = object;
  return {
    minHeight: object ? `calc(${$q.screen.height}px - ${object}px)` : `${$q.screen.height}px`,
    width: ui.isSidebarShow ? `calc(${$q.screen.width}px - 300px)` : `${$q.screen.width}px`,
  };
}

const handleTouchRepeat: TouchRepeatValue = (details) => {
  console.log('🔹 handleTouchRepeat 실행됨:', details);

  if (!details.evt) return;
  const target = details.evt.target as HTMLElement;
  console.log('🔹 이벤트 대상:', target);

  // 터치 또는 마우스 이벤트 감지
  if (details.touch) console.log('✅ 터치 이벤트 발생!');
  if (details.mouse) console.log('✅ 마우스 이벤트 발생!');

  // 키보드 이벤트 처리
  if (details.keyCode) {
    console.log(`✅ 키보드 입력 감지됨! keyCode: ${details.keyCode}`);

    if ([13, 32].includes(details.keyCode)) {
      console.log('🚀 Enter 또는 Space 입력!');
    }
  }
};

const onFocus = (event: Event) => {
  (event.target as HTMLElement).focus();
};
</script>
