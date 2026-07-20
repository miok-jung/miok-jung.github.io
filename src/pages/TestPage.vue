<script setup lang="ts">
import Buttons from '../components/test/Buttons.vue'
import Toggles from '../components/test/Toggles.vue'
// import Editor from '../components/test/Editor.vue'
// import Animation from '../components/test/Animation.vue'
</script>
<template>
  <div class="test-wrap">
    <h2>Test Page</h2>
    <h3>Button</h3>
    <Buttons />
    <h3>Toggle</h3>
    <Toggles />
    <!-- <h3>Editor</h3> -->
    <!-- <Editor /> -->
    <!-- <h3>Animation</h3> -->
    <!-- <Animation /> -->
  </div>
</template>

<style scoped lang="scss">
.test-wrap {
  padding: 2rem;
}
</style>
