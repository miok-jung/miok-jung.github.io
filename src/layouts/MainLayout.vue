<template>
  <q-layout view="lHh Lpr lFf">
    <Header :sidebar="leftDrawerOpen" @change-sidebar="(value) => (leftDrawerOpen = value)" />
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>Portfolio List</q-item-label>
        <MainSidebar v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Header from 'src/components/main/Header.vue';
import MainSidebar, { type MainSidebarProps } from 'src/components/main/MainSidebar.vue';

const linksList: MainSidebarProps[] = [
  {
    title: 'apple clone',
    caption: 'clone the apple project',
    icon: 'mdi-apple',
    link: '/side/apple',
  },
];

const leftDrawerOpen = ref<boolean>(false);
</script>
