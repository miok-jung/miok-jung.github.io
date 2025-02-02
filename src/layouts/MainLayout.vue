<template>
  <q-layout view="lHh Lpr lFf">
    <Header />
    <q-drawer
      class="relative-position"
      v-model="ui.isSidebarShow"
      :width="$q.screen.width <= 768 ? $q.screen.width : 300"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label style="height: 50px" header>Mini Project List</q-item-label>
        <q-btn class="close" icon="mdi-close" @click="ui.$state.isSidebarShow = false" flat round />
        <MainSidebar v-for="link in linksList" :key="link.title" v-bind="link" />
        <MainRightHeader :class="'columns full-width'" v-if="$q.screen.width <= 768" />
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
import { useQuasar } from 'quasar';
import MainRightHeader from 'src/components/MainRightHeader.vue';

const $q = useQuasar();
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
<style scoped lang="scss">
@import '/src/css/mixins.scss';

.q-btn.close {
  display: none;
  @include media('sm') {
    display: block;
    position: absolute;
    top: 4px;
    right: 8px;
  }
}
</style>
