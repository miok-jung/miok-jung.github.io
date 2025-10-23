<script setup lang="ts">
import { useI18n } from 'vue-i18n'

type Props = {
  isMini: boolean
}
const props = withDefaults(defineProps<Props>(), {
  isMini: false,
})

const emit = defineEmits(['update:isMini'])

const { t } = useI18n({ useScope: 'global' })

const toggleSideMenu = () => {
  console.log('click menu', props.isMini)
  emit('update:isMini', !props.isMini)
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
      <q-btn flat round dense icon="mdi-test-tube" />
    </q-toolbar>
  </q-header>
</template>

<style scoped></style>
