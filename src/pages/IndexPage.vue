<template>
  <q-page>
    <div style="border: 1px solid red">
      <q-btn label="Click Dialog Test" @click="openDialog = true"></q-btn>
    </div>
    <q-dialog v-model="openDialog">
      <q-card>
        <q-card-section>다이얼로그 열기 완료</q-card-section>
        <q-card-actions>
          <q-btn label="닫기" @click="openDialog = false"></q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from "vue";

const openDialog = ref<boolean>(false);
</script>
