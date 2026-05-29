<script setup lang="ts">
import BaseButton from '../common/BaseButton.vue'
</script>
<template>
  <div class="component__wrap">
    <div class="component__content-wrap">
      <h3>A Tag</h3>
      <div class="component__content">
        <a href="/test">기본 링크</a>
        <BaseButton href="/test">커스텀 링크</BaseButton>
        <BaseButton href="/test" color="primary">커스텀 링크</BaseButton>
        <BaseButton href="/test" type="outline" color="primary">커스텀 링크</BaseButton>
        <BaseButton href="/test" type="outline" color="primary">커스텀 링크</BaseButton>
      </div>
    </div>
    <div>
      <button>기본 버튼</button>
      <BaseButton>Base Button</BaseButton>
      <BaseButton color="primary">Primary FLat Button</BaseButton>
      <BaseButton type="outline" color="primary">Primary Outline Button</BaseButton>
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
    border: 1px solid blue;
  }
  &__content-wrap {
    border: 1px solid lime;
  }
  &__content {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    margin: 2rem 0;
    border: 1px solid red;
  }
}
</style>
