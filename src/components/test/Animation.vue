<template>
  <div class="animation-wrap">
    <h4>Input Animation</h4>
    <div class="wrap">
      <div class="input-wrap">
        <input type="text" />
      </div>
      <div class="input-wrap">
        <input type="text" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.animation-wrap {
  // padding: 2rem;
  .wrap {
    display: flex;
    gap: 8px;
    .input-wrap {
      position: relative;
      width: 200px;

      input {
        // padding: 0 12px;
        width: 100%;
        height: 30px;
        border: 1px solid var(--grey-8);
        outline: 0;
        box-sizing: border-box;
        border-top: none;
        border-left: none;
        border-right: none;
      }

      &::after {
        content: '';
        position: absolute;
        left: 50%;
        right: 1px;
        bottom: 0px;
        width: 0px;
        height: 1px;
        background: var(--grey-3);
        transform: translateX(-50%);
        transform-origin: center;
        transition: width 0.25s linear;
      }

      &:focus-within::after {
        width: 100%;
      }
    }
  }
}
</style>
