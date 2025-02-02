<template>
  <q-header class="row no-wrap items-center" style="white-space: nowrap" elevated>
    <q-toolbar>
      <q-btn class="left-button" icon="mdi-menu" flat dense round @click="ui.toggleSidebar()" />
      <q-toolbar-title>Miok Jung's Portfolio</q-toolbar-title>
    </q-toolbar>
    <MainRightHeader v-if="$q.screen.width > 768" />
    <q-btn class="right-button" icon="mdi-menu" flat dense round @click="ui.toggleSidebar()" />
  </q-header>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { useUiStore } from 'src/stores/ui';
import MainRightHeader from '../MainRightHeader.vue';

const $q = useQuasar();
const ui = useUiStore();
</script>

<style scoped lang="scss">
@import '/src/css/mixins.scss';

.q-header {
  .q-btn.left-button {
    @include media('sm') {
      display: none;
    }
  }
  .q-btn.right-button {
    display: none;
    @include media('sm') {
      display: inline-flex;
      margin-right: 12px;
    }
  }
}
</style>
