<template>
  <q-header elevated>
    <q-toolbar>
      <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
      <q-toolbar-title>{{ t('main.portfolio.title') }}</q-toolbar-title>
      <div class="flex row no-wrap q-gutter-x-sm">
        <q-select
          v-model="selectedLang"
          :options="langOptions"
          emit-value
          map-options
          dense
          filled
        />
        <q-toggle
          v-model="isDarkMode"
          checked-icon="mdi-brightness-4"
          unchecked-icon="mdi-brightness-5"
          :color="isDarkMode ? 'indigo-10' : 'yellow-10'"
          keep-color
          @update:model-value="changeDarkMode"
        >
          <q-tooltip>Change {{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}</q-tooltip>
        </q-toggle>
      </div>
    </q-toolbar>
  </q-header>
</template>
<script setup lang="ts">
import { useQuasar } from 'quasar';
import enUS from 'quasar/lang/en-US.js';
import koKR from 'quasar/lang/ko-KR';
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';

interface Props {
  sidebar: boolean;
}
const { dark, lang } = useQuasar();
const { locale, t } = useI18n();

const props = withDefaults(defineProps<Props>(), {
  sidebar: false,
});
const emit = defineEmits<{
  (e: 'changeSidebar', value: boolean): void;
}>();
function toggleLeftDrawer() {
  emit('changeSidebar', !props.sidebar);
}

// NOTE: THEME
const isDarkMode = ref<boolean>(false);
const changeDarkMode = () => {
  dark.set(isDarkMode.value);
};

// NOTE: LANGUAGE
const langOptions = [
  { label: '한국어', value: 'ko-KR' },
  { label: 'English', value: 'en-US' },
] as const;

type LangCode = (typeof langOptions)[number]['value'];
const selectedLang = ref<LangCode>('ko-KR');
const quasarLangMap = {
  'ko-KR': koKR,
  'en-US': enUS,
} as const;

// NOTE: WATCH
watch(selectedLang, (val: LangCode) => {
  // 언어 변경 감지
  lang.set(quasarLangMap[val]);
  locale.value = val;
});
</script>
<style scoped lang="scss"></style>
