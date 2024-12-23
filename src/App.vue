<template>
  <router-view />
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useUserStore } from 'stores/user';

const { locale } = useI18n();
const us = useUserStore();

// NOTE: watch
watch(
  () => us.currentLocale,
  (newLocale) => {
    locale.value = newLocale;
  }
);
</script>
