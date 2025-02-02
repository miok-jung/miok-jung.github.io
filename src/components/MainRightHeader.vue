<template>
  <div :class="props.class">
    <q-select
      v-model="themeValue"
      :options="themeOptions"
      behavior="menu"
      @update:model-value="changeUpdateTheme"
      filled
      dense
      options-dense
    />
    <q-select
      v-model="language"
      :options="languageOptions"
      behavior="menu"
      filled
      dense
      options-dense
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import type { QSelectOption } from 'quasar';

const props = withDefaults(
  defineProps<{
    class?: string;
  }>(),
  {
    class: 'row no-wrap',
  },
);
const $q = useQuasar();

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

<style lang="scss" scoped>
@import '/src/css/mixins.scss';
.q-select {
  @include media('sm') {
    margin-bottom: 8px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
