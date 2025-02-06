<template>
  <section class="profile-wrap">
    <article>
      <q-img class="avatar-image" :src="avatar" />
    </article>
    <article class="avatar-information">
      <p :class="$q.screen.width < 769 ? 'text-h6' : 'text-h5'">이름: 정미옥</p>
    </article>
  </section>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import avatar from '/images/avatar.jpg';

const $q = useQuasar();
</script>

<style lang="scss" scoped>
@import '/src/css/mixins.scss';

.profile-wrap {
  display: flex;
  flex-flow: row;
  article {
    &:first-child {
      margin-right: 48px;
      @include media('sm') {
        margin-right: 24px;
      }
      @include media('xs') {
        margin-right: 16px;
      }
    }
  }
  .avatar-image {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    @include media('sm') {
      width: 100px;
      height: 100px;
    }
    @include media('xs') {
      width: 70px;
      height: 70px;
    }
  }
}
</style>
