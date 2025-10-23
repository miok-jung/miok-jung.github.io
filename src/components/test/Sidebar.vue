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
          <q-item>
            <q-item-section avatar>
              <q-icon name="mdi-home-outline"></q-icon>
            </q-item-section>
            <q-item-section>Home</q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>
  </div>
</template>

<style scoped></style>
