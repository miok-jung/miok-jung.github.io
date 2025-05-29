<template>
  <q-layout view="lHh Lpr lFf" v-scroll="scrollHandler">
    <q-page-container>
      <router-view :scrollPos="scrollPos" />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useQuasar } from "quasar";

const $q = useQuasar();
const scrollPos = ref<number>(0);

function scrollHandler(position: number) {
  scrollPos.value = position;
  console.log("스크롤 위치:", $q, position);
}
</script>

<style scoped></style>
