<template>
  <div>
    <q-card>
      <q-card-section>
        <q-card-title class="text-bold">여행</q-card-title>
      </q-card-section>
      <q-separator />
      <q-card-section class="q-gutter-sm">
        <q-btn @click="onClickDetailPage('vietnam/gift')">베트남 나트랑 선물 리스트</q-btn>
        <q-btn @click="onClickDetailPage('vietnam/nahtrang')">베트남 나트랑 맛집 리스트</q-btn>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

// NOTE: Detail 페이지 이동하기
function onClickDetailPage(path: string) {
  router.push(`/data/${path}`);
}
</script>

<style scoped></style>
