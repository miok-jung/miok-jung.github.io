<template>
  <q-drawer :model-value="props.showLeftDrawer" show-if-above bordered>
    <q-list>
      <q-item-label header>PortFolio List</q-item-label>
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

type SidebarProps = {
  title: string;
  caption?: string;
  link: string;
  icon?: string;
};

const props = withDefaults(
  defineProps<{
    showLeftDrawer: boolean;
  }>(),
  {
    showLeftDrawer: true,
  }
);

const Sidebars: SidebarProps[] = [
  {
    title: 'Home',
    caption: '메인으로 돌아가기',
    icon: 'mdi-home-circle-outline',
    link: '/',
  },
  {
    title: '간단한 계산기',
    caption: 'The Simple Calculator',
    icon: 'mdi-calculator-variant-outline',
    link: '/calculator',
  },
];
const selectLink = ref<string>('/');
</script>
