<template>
  <q-item clickable tag="a" :target="target" :href="link">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
export interface MainSidebarProps {
  title: string
  caption?: string
  link?: string
  icon?: string
  target?: '_blank' | '_self' | '_parent' | '_top'
}

withDefaults(defineProps<MainSidebarProps>(), {
  caption: '',
  link: '#',
  icon: '',
})
</script>
