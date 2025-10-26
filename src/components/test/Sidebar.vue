<script setup lang="ts">
import { useQuasar } from 'quasar'
import { ref } from 'vue'

type Props = {
  isMini: boolean
}
const props = withDefaults(defineProps<Props>(), {
  isMini: false,
})

const $q = useQuasar()

const drawer = ref(true)

type Sidebar = {
  label: string
  icon: string
  link: string
}
const sidebar: Sidebar[] = [
  {
    label: 'Main Home',
    icon: 'mdi-home-switch-outline',
    link: '/',
  },
  {
    label: 'Test Home',
    icon: 'mdi-home',
    link: '/test',
  },
]
</script>
<template>
  <div>
    <q-drawer
      v-model="drawer"
      :mini="props.isMini"
      :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
    >
      <q-scroll-area style="height: 500px">
        <q-list>
          <template v-for="item in sidebar" :key="item">
            <q-item :to="item.link" clickable>
              <q-item-section avatar>
                <q-icon :name="item.icon"></q-icon>
              </q-item-section>
              <q-item-section>{{ item.label }}</q-item-section>
            </q-item>
          </template>
        </q-list>
      </q-scroll-area>
    </q-drawer>
  </div>
</template>

<style scoped></style>
