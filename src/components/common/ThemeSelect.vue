<script setup lang="ts">
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import type { ThemeName } from 'src/boot/theme'
import { themes, applyTheme } from 'src/boot/theme'
import { COOKIE_KEYS } from 'src/constants/cookieKeys'

const { cookies } = useQuasar()

const options = Object.keys(themes).map((t) => ({
  label: t.charAt(0).toUpperCase() + t.slice(1),
  value: t,
}))

const selected = ref<ThemeName>(cookies.get(COOKIE_KEYS.THEME_COLOR) || 'blue')

function onChange(val: ThemeName) {
  selected.value = val
  applyTheme(themes[val])
  cookies.set(COOKIE_KEYS.THEME_COLOR, val)
}
</script>

<template>
  <q-select
    v-model="selected"
    :options="options"
    outlined
    dense
    emit-value
    map-options
    @update:model-value="onChange"
  />
</template>
