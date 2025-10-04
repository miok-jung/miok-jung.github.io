<script setup lang="ts">
import { ref } from 'vue'
import EssentialLink, { type EssentialLinkProps } from 'components/EssentialLink.vue'
import { useI18n } from 'vue-i18n'
import Header from 'src/components/main/Header.vue'

const { t } = useI18n()

const linksList: EssentialLinkProps[] = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev',
  },
]

const showLeftDrawer = ref(false)
const showLeftDrawerMini = ref(false)
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <Header v-model:is-toggle="showLeftDrawerMini"></Header>
    <q-drawer v-model="showLeftDrawer" :mini="showLeftDrawerMini" show-if-above bordered>
      <q-list>
        <!-- <q-item-label header> Essential Links </q-item-label> -->
        <q-item-label header>{{ t('button.confirm') }}</q-item-label>

        <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
