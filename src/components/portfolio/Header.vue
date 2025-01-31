<template>
  <q-header class="row no-wrap items-center" style="white-space: nowrap" elevated>
    <q-toolbar>
      <q-btn flat dense round icon="menu" aria-label="Menu" @click="ui.toggleSidebar()" />
      <q-toolbar-title>Miok Jung's Portfolio</q-toolbar-title>
    </q-toolbar>
    <q-select
      v-model="themeValue"
      :options="themeOptions"
      @update:model-value="changeUpdateTheme"
      filled
      dense
      options-dense
    />
    <q-select v-model="language" :options="languageOptions" filled dense options-dense />
  </q-header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar, type QSelect, type QSelectOption } from 'quasar';
import { useUiStore } from 'src/stores/ui';

const $q = useQuasar();
const ui = useUiStore();

// NOTE: 우측 헤더
const themeOptions: QSelectOption[] = [
  {
    label: 'Light',
    value: 'light',
  },
  {
    label: 'Dark',
    value: 'dark',
  },
];
const themeValue = ref<QSelectOption | undefined>(themeOptions[0]);
function changeUpdateTheme(evt: QSelectOption | undefined) {
  const isDark = themeValue.value?.value === 'dark' ? true : false;
  if (evt?.value === themeValue.value?.value) {
    $q.dark.set(isDark);
  } else throw new Error('Theme Error');
}
const languageOptions: QSelectOption[] = [
  {
    label: '한국어',
    value: 'ko-KR',
  },
];
const language = ref<QSelectOption | undefined>(languageOptions[0]);
</script>

<style scoped></style>
