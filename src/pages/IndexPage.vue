<template>
  <q-page>
    <BaseScrollArea :horizontal="true" :vertical="true" style="height: calc(100vh - 50px)">
      <Profile />
    </BaseScrollArea>
  </q-page>
</template>

<script setup lang="ts">
import BaseScrollArea from 'src/components/common/BaseScrollArea.vue';
import Profile from 'src/components/Profile.vue';
</script>
