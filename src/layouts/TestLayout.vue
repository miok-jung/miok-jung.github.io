<script setup lang="ts">
import { ref } from 'vue'
import Header from 'src/components/test/Header.vue'
import Sidebar from 'src/components/test/Sidebar.vue'

const isMini = ref(false)
</script>
<template>
  <q-layout view="hHh Lpr lFf">
    <Sidebar :is-mini="isMini" />
    <Header :is-mini="isMini" @update:is-mini="(v) => (isMini = v)" />
    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<style scoped></style>
