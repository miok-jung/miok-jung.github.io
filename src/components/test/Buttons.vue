<script setup lang="ts">
import BaseButton from '../common/BaseButton.vue'
</script>
<template>
  <div class="component__wrap">
    <div class="component__content-wrap">
      <h3>A Tag</h3>
      <div class="component__content">
        <a href="/test">기본 링크</a>
        <BaseButton href="/test">커스텀 default 링크</BaseButton>
        <BaseButton href="/test" color="primary">커스텀 flat 링크</BaseButton>
        <BaseButton href="/test" type="outline" color="primary">커스텀 outline 링크</BaseButton>
      </div>
    </div>
    <div class="component__content-wrap">
      <h3>Button Tag</h3>
      <div class="component__content">
        <button>기본 버튼</button>
        <BaseButton>커스텀 default 버튼</BaseButton>
        <BaseButton color="primary">커스텀 flat 버튼</BaseButton>
        <BaseButton type="outline" color="primary">커스텀 outline 버튼</BaseButton>
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
    /* display: grid;
    grid-template-columns: repeat(5, auto); */
    gap: 24px;
    margin: 2rem 0;
    /* border: 1px solid red; */
  }
}
</style>
