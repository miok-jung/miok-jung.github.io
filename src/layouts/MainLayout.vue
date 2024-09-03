<template>
  <q-layout view="lHh lpR lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="mdi-menu" aria-label="Menu" @click="toggleLeftDrawer" />
        <q-toolbar-title> Miok, Jung. PortFolio </q-toolbar-title>
        <div>Today: {{ today }}</div>
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
import { date } from 'quasar';
import Sidebar from 'src/components/Sidebar.vue';

const today = date.formatDate(Date.now(), 'YYYY. MM. DD');

// NOTE: 왼쪽 사이드바
const showLeftDrawer = ref<boolean>(true);
function toggleLeftDrawer() {
  showLeftDrawer.value = !showLeftDrawer.value;
}
</script>
