<template>
  <q-page>
    <BaseScrollArea :horizontal="true" :vertical="true" style="height: 100px">
      <MyInformation />
    </BaseScrollArea>
  </q-page>
</template>

<script setup lang="ts">
import BaseScrollArea from "src/components/common/BaseScrollArea.vue";
import MyInformation from "src/components/MyInformation.vue";
</script>
