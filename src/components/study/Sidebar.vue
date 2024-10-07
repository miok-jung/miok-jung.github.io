<template>
  <q-drawer :model-value="props.showSidebar" bordered>
    <q-list>
      <q-item-label header>Study Record</q-item-label>
      <q-separator />
      <template v-for="item in Sidebars" :key="item.title">
        <q-item
          :active="selectLink === item.link && selectLink === $route.fullPath"
          @click="selectLink = item.link"
          :to="item.link"
          active-class="active-link"
          clickable
        >
          <q-item-section v-if="item.icon" avatar>
            <q-icon :name="item.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ item.title }}</q-item-label>
            <q-item-label caption>{{ item.caption }}</q-item-label>
          </q-item-section>
        </q-item>
      </template>
    </q-list>
  </q-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import threeJSIcon from 'assets/icons/three-js.svg';
import { SideBar } from '../type';

const props = withDefaults(
  defineProps<{
    showSidebar: boolean;
  }>(),
  { showSidebar: true }
);

const Sidebars: SideBar[] = [
  {
    title: 'PortFolio Home',
    caption: '포트폴리오로 돌아가기',
    icon: 'mdi-home-circle-outline',
    link: '/',
  },
  {
    title: 'Study Home',
    caption: 'My Study List',
    icon: 'mdi-note-search-outline',
    link: '/study',
  },
  {
    title: 'Three.js',
    caption: 'Study Three.js',
    icon: 'img: ' + threeJSIcon,
    link: '/study/threejs',
  },
  {
    title: 'vanillaJS',
    caption: 'Study VanillaJS',
    icon: 'mdi-nodejs',
    link: '/study/vanillajs',
  },
  {
    title: 'shopping mall JS',
    caption: 'Study Shopping Mall',
    icon: 'mdi-nodejs',
    link: '/study/shoppingmall',
  },
  {
    title: 'Test Lottie',
    caption: 'Test to Lottie File',
    icon: 'mdi-nodejs',
    link: '/study/lottie',
  },
];
const selectLink = ref<string>('/');
</script>

<style scoped lang="scss"></style>
