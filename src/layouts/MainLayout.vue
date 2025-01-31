<template>
  <q-layout view="lHh Lpr lFf">
    <Header />
    <q-drawer v-model="ui.isSidebarShow" show-if-above bordered>
      <q-list>
        <q-item-label header>Mini Project List</q-item-label>
        <MainSidebar v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { useUiStore } from 'src/stores/ui';
import MainSidebar, { type MainSidebarProps } from 'components/MainSidebar.vue';
import Header from 'src/components/portfolio/Header.vue';

const ui = useUiStore();

const linksList: MainSidebarProps[] = [
  {
    title: 'Calculator',
    caption: 'The simple Calculator',
    icon: 'mdi-calculator-variant-outline',
    link: '/calculator',
  },
];
</script>
