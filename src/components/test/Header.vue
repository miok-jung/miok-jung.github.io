<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })
const toggleSideMenu = () => {
  console.log('click menu')
}
</script>
<template>
  <q-header elevated>
    <q-toolbar>
      <q-btn flat round dense icon="mdi-menu" class="q-mr-sm" @click="toggleSideMenu" />
      <q-avatar>
        <img src="https://picsum.photos/200" />
      </q-avatar>
      <q-toolbar-title>{{ t('test.title') }}</q-toolbar-title>
      <q-btn flat round dense icon="whatshot" />
    </q-toolbar>
  </q-header>
</template>

<style scoped></style>
