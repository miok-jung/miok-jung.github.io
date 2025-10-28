<script setup lang="ts">
import { ref } from 'vue'

const showList = ref(false)
const openList = () => {
  console.log('click')
  showList.value = !showList.value
}
</script>
<template>
  <q-card>
    <q-card-section>
      <h2>QList</h2>
    </q-card-section>
    <q-card-section class="row items-center q-gutter-x-md">
      <q-btn
        >Quasar Btn Click
        <q-menu>
          <q-list dense>
            <template v-for="n in 5" :key="n">
              <q-item clickable> Item {{ n }} </q-item>
            </template>
          </q-list>
        </q-menu>
      </q-btn>
      <div class="button-wrap">
        <button @click="openList">Custom Btn Click</button>
        <div v-if="showList" class="menu">
          <ul>
            <li v-for="n in 5" :key="n">Item {{ n }}</li>
          </ul>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<style scoped lang="scss">
$menu-px: 20;
$menu-py: 20;
.button-wrap {
  position: relative;
  .menu {
    // border: 1px solid lime;
    position: absolute;
    top: 36px;
    left: calc($menu-px * -1px);
    width: calc(100% + $menu-px * 2px);
    ul {
      // border: 1px solid violet;
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding: 8px calc($menu-px * 1px) calc($menu-py * 1px);
      border-radius: 8px;
      width: 100%;
      overflow: hidden;
      li {
        padding: 0 12px;
        height: 32px;
        line-height: 32px;
        border-radius: 16px;
        overflow: hidden;
        box-shadow: $shadow-6;
        $colors: red, orange, green, lightblue, violet;
        @for $i from 1 through length($colors) {
          &:nth-of-type(#{$i}) {
            background: nth($colors, $i);
            animation: growDown #{50ms * $i} linear forwards;
          }
        }
      }
    }
  }
}

@keyframes growDown {
  0% {
    opacity: 0;
    transform: translateZ(-20px) translateY(-100%);
  }
  80% {
    opacity: 0.8;
    transform: translateZ(-2px) translateY(-10%);
  }
  100% {
    opacity: 1;
    transform: translateZ(-0px) translateY(-0);
  }
}
</style>
