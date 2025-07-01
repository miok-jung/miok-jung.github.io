<template>
  <q-header elevated>
    <q-toolbar>
      <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
      <q-toolbar-title> Miok, Jung's Portfolio </q-toolbar-title>
      <q-toggle
        v-model="isDarkMode"
        checked-icon="mdi-brightness-4"
        unchecked-icon="mdi-brightness-5"
        :color="isDarkMode ? 'indigo-10' : 'yellow-10'"
        keep-color
        @update:model-value="changeDarkMode"
      >
        <q-tooltip>Change {{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}</q-tooltip>
      </q-toggle>
    </q-toolbar>
  </q-header>
</template>
<script setup lang="ts">
import { useQuasar } from 'quasar';
import { ref } from 'vue';

interface Props {
  sidebar: boolean;
}
const { dark } = useQuasar();

const props = withDefaults(defineProps<Props>(), {
  sidebar: false,
});
const emit = defineEmits<{
  (e: 'changeSidebar', value: boolean): void;
}>();
function toggleLeftDrawer() {
  emit('changeSidebar', !props.sidebar);
}

const isDarkMode = ref<boolean>(false);
const changeDarkMode = () => {
  dark.set(isDarkMode.value);
};
</script>
<style scoped lang="scss"></style>
