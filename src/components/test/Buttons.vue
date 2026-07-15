<script setup lang="ts">
import BaseButton from '../common/BaseButton.vue'
</script>

<template>
  <div class="component__wrap">
    <div class="component__content-wrap">
      <h3>Default</h3>
      <div class="component__content">
        <a href="/test">기본 링크</a>
        <button>기본 버튼</button>
        <BaseButton href="/test">커스텀 default 링크</BaseButton>
        <BaseButton>커스텀 default 버튼</BaseButton>
      </div>
    </div>

    <div class="component__content-wrap">
      <h3>Color</h3>
      <div class="component__content">
        <BaseButton color="grey">grey 버튼</BaseButton>
        <BaseButton color="primary">primary 버튼</BaseButton>
      </div>
    </div>

    <div class="component__content-wrap">
      <h3>Type</h3>
      <div class="component__content">
        <BaseButton type="flat" color="primary">flat 버튼</BaseButton>
        <BaseButton type="outline" color="primary">outline 버튼</BaseButton>
      </div>
    </div>

    <div class="component__content-wrap">
      <h3>With Icon</h3>
      <div class="component__content">
        <BaseButton type="outline" color="primary" icon="lucide:figma" icon-size="24px">
          Custom Button
        </BaseButton>
        <BaseButton
          type="outline"
          color="primary"
          icon="lucide:figma"
          icon-position="right"
          icon-size="24px"
        >
          커스텀 Button
        </BaseButton>
      </div>
    </div>

    <div class="component__content-wrap">
      <h3>Icon Size</h3>
      <div class="component__content">
        <BaseButton type="outline" color="primary" icon="lucide:figma" icon-size="16px">
          16px
        </BaseButton>
        <BaseButton type="outline" color="primary" icon="lucide:figma" icon-size="24px">
          24px
        </BaseButton>
        <BaseButton type="outline" color="primary" icon="lucide:figma" icon-size="48px">
          48px
        </BaseButton>
      </div>
    </div>

    <div class="component__content-wrap">
      <h3>As Link (href)</h3>
      <div class="component__content">
        <BaseButton href="/test" color="primary">flat 링크</BaseButton>
        <BaseButton href="/test" type="outline" color="primary">outline 링크</BaseButton>
        <BaseButton
          href="/test"
          type="outline"
          color="primary"
          icon="lucide:figma"
          icon-size="24px"
        >
          Custom Button
        </BaseButton>
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
    /* display: grid;
    grid-template-columns: repeat(5, auto); */
    gap: 24px;
    margin: 2rem 0;
    /* border: 1px solid red; */
  }
}
</style>
