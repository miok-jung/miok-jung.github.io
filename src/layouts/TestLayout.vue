<script setup lang="ts">
import Header from 'src/components/test/Header.vue'
</script>
<template>
  <q-layout view="lHh Lpr lFf">
    <Header />
    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<style scoped></style>
