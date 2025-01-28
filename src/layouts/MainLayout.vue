<template>
  <q-layout view="lHh Lpr lFf">
    <Header :left-drawer-open="leftDrawerOpen" @toggle-left-drawer="toggleLeftDrawer" />
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
import { ref } from 'vue'
import MainSidebar, { type MainSidebarProps } from 'components/MainSidebar.vue'
import Header from 'src/components/portfolio/Header.vue'

const leftDrawerOpen = ref(false)
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

const linksList: MainSidebarProps[] = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev',
  },
]
</script>
