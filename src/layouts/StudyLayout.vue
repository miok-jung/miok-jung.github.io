<template>
  <q-layout view="lHh lpR lFf">
    <!-- SECTION: HEADER -->
    <q-header>
      <q-toolbar>
        <q-btn flat dense round icon="mdi-menu" aria-label="Menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>My Study Record</q-toolbar-title>
        <div>Study Update Day : {{ updateDay }}</div>
      </q-toolbar>
    </q-header>
    <Sidebar :show-sidebar="showLeftDrawer" />
    <!-- !SECTION HEADER END -->
    <!-- SECTION: CONTAINER -->
    <q-page-container>
      <router-view :open-sidebar="showLeftDrawer" />
    </q-page-container>
    <!-- !SECTION CONTAINER END -->
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { date } from 'quasar';
import Sidebar from 'src/components/study/Sidebar.vue';

// NOTE: 스터디 업데이트 날짜
// TODO: 스터디 업데이트 날짜의 경우 수동으로 업데이트가 필요
const utcUpdateDay = date.extractDate('2024. 09. 11', 'YYYY. MM. DD');
const updateDay = date.formatDate(utcUpdateDay, 'YYYY. MM. DD');

// NOTE: 왼쪽 사이드바
const showLeftDrawer = ref<boolean>(true);
function toggleLeftDrawer() {
  showLeftDrawer.value = !showLeftDrawer.value;
}
</script>

<style scoped></style>
