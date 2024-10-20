<template>
  <header>
    <q-breadcrumbs>
      <q-breadcrumbs-el class="text-grey" :to="`/${pathArray[0]}`" :label="pathArray[0]" />
      <q-breadcrumbs-el
        v-if="pathArray[1]"
        class="text-grey"
        :to="`/${pathArray[0]}/${pathArray[1]}`"
        :label="pathArray[1]"
      />
      <q-breadcrumbs-el
        v-if="pathArray[2]"
        class="text-primary"
        :to="`/${pathArray[0]}/${pathArray[1]}/${pathArray[2]}`"
        :label="pathArray[2]"
      />
    </q-breadcrumbs>
  </header>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const pathArray = ref<string[]>([]);

// NOTE: life-cycle
onMounted(() => {
  pathArray.value = route.path.split('/').filter(Boolean);
});
</script>

<style scoped></style>
