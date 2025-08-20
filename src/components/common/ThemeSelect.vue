<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Cookies, useQuasar } from 'quasar'
import type { ThemeName } from 'src/boot/theme'
import { themes, applyTheme } from 'src/boot/theme'
import { COOKIE_KEYS } from 'src/constants/cookieKeys'

const $q = useQuasar()

const options = Object.keys(themes).map((t) => ({
  label: t.charAt(0).toUpperCase() + t.slice(1),
  value: t,
}))

const selected = ref<ThemeName>($q.cookies.get(COOKIE_KEYS.THEME_COLOR) || 'blue')

function onChange(val: ThemeName) {
  selected.value = val
  applyTheme(themes[val])
  $q.cookies.set(COOKIE_KEYS.THEME_COLOR, val, {
    path: '/',
    sameSite: 'Strict',
    expires: 60 * 60 * 24 * 365,
  })
}

// NOTE: life-cycle
onMounted(() => {
  selected.value = Cookies.get(COOKIE_KEYS.THEME_COLOR) || 'blue'
})
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
