<template>
  <q-layout view="lHh lpR lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="mdi-menu" aria-label="Menu" @click="toggleLeftDrawer" />
        <q-toolbar-title> Miok, Jung. PortFolio </q-toolbar-title>
        <div class="row items-center">
          <q-select
            v-model="selectTheme"
            :options="themeOptions"
            @update:model-value="onUpdateChangeTheme"
            filled
            dense
          />
          <q-toggle
            v-model="darkMode"
            color="warning"
            :icon="darkMode ? 'dark_mode' : 'light_mode'"
            @update:model-value="onUpdateSettingLightAndDarkMode"
          >
          </q-toggle>
          <span>Today: {{ today }}</span>
        </div>
      </q-toolbar>
    </q-header>
    <Sidebar :show-left-drawer="showLeftDrawer" />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { colors, date, QSelect, QSelectOption, setCssVar, useQuasar } from 'quasar';
import Sidebar from 'src/components/Sidebar.vue';

const $q = useQuasar();
const { getPaletteColor } = colors;

// NOTE: 왼쪽 사이드바 토글
const showLeftDrawer = ref<boolean>(true);
function toggleLeftDrawer() {
  showLeftDrawer.value = !showLeftDrawer.value;
}

// SECTION HEADER RIGHT
// NOTE: theme primary 설정
const today = date.formatDate(Date.now(), 'YYYY. MM. DD');
const themeOptions: QSelectOption[] = [
  {
    label: 'Blue',
    value: 'blue',
  },
  {
    label: 'Pink',
    value: 'pink',
  },
  {
    label: 'Yellow',
    value: 'yellow',
  },
];
const selectTheme = ref<QSelectOption>(themeOptions[0]);
function onUpdateChangeTheme() {
  const primary = getPaletteColor(selectTheme.value.value + '-5');
  setCssVar('primary', primary);
}

// NOTE: 라이트/다크모드
const darkMode = ref<boolean>(false);
function onUpdateSettingLightAndDarkMode() {
  $q.dark.set(darkMode.value);
}
// !SECTION HEADER RIGHT END
</script>
