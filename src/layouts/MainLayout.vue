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
import { ref } from 'vue'
import Header from 'src/components/main/Header.vue'
import MainSidebar, { type MainSidebarProps } from 'src/components/main/MainSidebar.vue'

const linksList: MainSidebarProps[] = [
  {
    title: 'apple clone',
    // A clone project replicating the design and functionality of Apple’s official website
    caption: '애플 공식 웹사이트 디자인과 기능을 참고하여 만든 클론 프로젝트',
    icon: 'mdi-apple',
    link: '/side/apple',
    target: '_blank',
  },
  {
    title: 'Quasar Test Page ',
    // A short description summarizing the purpose or function of the component test page
    caption: '컴포넌트의 용도나 해당 테스트 페이지의 목적을 간략하게 설명하는 짧은 문구',
    icon: 'mdi-apple',
    link: '/test',
    target: '_blank',
  },
]

const leftDrawerOpen = ref<boolean>(false)
</script>
