<template>
  <q-layout view="lHh lpR lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> Miok, Jung. PortFolio </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> 메인 사이드바 </q-item-label>

        <Sidebar v-for="link in Sidebars" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Sidebar, { SidebarProps } from 'src/components/Sidebar.vue';

const Sidebars: SidebarProps[] = [
  {
    title: '간단한 계산기',
    caption: 'The Simple Calculator',
    icon: 'calculate',
    link: '/calculator',
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
