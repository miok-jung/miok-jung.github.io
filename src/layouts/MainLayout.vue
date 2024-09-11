<template>
  <q-layout view="lHh lpR lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="mdi-menu" aria-label="Menu" @click="toggleLeftDrawer" />
        <q-toolbar-title> Miok, Jung. PortFolio </q-toolbar-title>
        <div class="row items-center">
          <q-select v-model="selectTheme" :options="themeOptions"></q-select>
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
import { date, QSelect, QSelectOption, useQuasar } from 'quasar';
import Sidebar from 'src/components/Sidebar.vue';

const $q = useQuasar();

// NOTE: 왼쪽 사이드바 토글
const showLeftDrawer = ref<boolean>(true);
function toggleLeftDrawer() {
  showLeftDrawer.value = !showLeftDrawer.value;
}

// NOTE: 오른쪽 헤더 select/toggle
const today = date.formatDate(Date.now(), 'YYYY. MM. DD');
const selectTheme = ref<QSelectOption>({
  label: 'blue',
  value: 'blue',
});

const themeOptions: QSelectOption[] = [
  {
    label: 'blue',
    value: 'blue',
  },
  {
    label: 'pink',
    value: 'pink',
  },
  {
    label: 'yellow',
    value: 'yellow',
  },
];
const darkMode = ref<boolean>(false);
function onUpdateSettingLightAndDarkMode() {
  $q.dark.set(darkMode.value);
}
</script>
