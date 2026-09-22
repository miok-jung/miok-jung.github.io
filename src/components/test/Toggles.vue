<script setup lang="ts">
import { ref } from 'vue'
import BaseToggle from '../common/BaseToggle.vue'

const basic = ref(false)
const primaryOn = ref(true)
const primaryOff = ref(false)
const withIcon = ref(true)
const smallOn = ref(true)
const smallOff = ref(false)
const disabledOn = ref(true)
const disabledOff = ref(false)
</script>

<template>
  <div class="component__wrap">
    <div class="component__content-wrap">
      <h3>Default (grey)</h3>
      <div class="component__content">
        <BaseToggle v-model="basic" />
      </div>
    </div>

    <div class="component__content-wrap">
      <h3>Color</h3>
      <div class="component__content">
        <BaseToggle v-model="primaryOff" color="primary" />
        <BaseToggle v-model="primaryOn" color="grey" />
      </div>
    </div>

    <div class="component__content-wrap">
      <h3>With Icon</h3>
      <div class="component__content">
        <BaseToggle v-model="withIcon" color="primary" icon="lucide:check" icon-off="lucide:x" />
      </div>
    </div>

    <div class="component__content-wrap">
      <h3>Size</h3>
      <div class="component__content">
        <BaseToggle v-model="smallOff" color="primary" size="md" />
        <BaseToggle v-model="smallOn" color="primary" size="sm" />
      </div>
    </div>

    <div class="component__content-wrap">
      <h3>Disabled</h3>
      <div class="component__content">
        <BaseToggle v-model="disabledOff" color="primary" disabled />
        <BaseToggle v-model="disabledOn" color="primary" disabled />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.component {
  &__wrap {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 8px;
    /* border: 1px solid blue; */
  }
  &__content-wrap {
    /* border: 1px solid lime; */
  }
  &__content {
    display: flex;
    align-items: center;
    gap: 24px;
    margin: 2rem 0;
    /* border: 1px solid red; */
  }
}
</style>
