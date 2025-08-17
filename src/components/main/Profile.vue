<template>
  <div class="my_profile-wrap">
    <section class="my_profile">
      <q-img class="avatar shadow-2" :src="avatar" width="150px" height="150px"></q-img>
      <div>
        <div class="theme wrap">
          <h2>Theme Color</h2>
          <div class="flex no-wrap">
            <div class="theme-wrap bg-primary">Primary</div>
            <div class="theme-wrap bg-secondary">Secondary</div>
            <div class="theme-wrap bg-accent">Accent</div>
            <div class="theme-wrap bg-dark">Dark</div>
            <div
              class="theme-wrap bg-dark-page"
              :class="dark.isActive ? 'text-white' : 'text-black'"
            >
              Dark-page
            </div>
            <div class="theme-wrap bg-positive">Positive</div>
            <div class="theme-wrap bg-negative">Negative</div>
            <div class="theme-wrap bg-info">Info</div>
            <div class="theme-wrap bg-warning">Warning</div>
          </div>
        </div>
        <dl>
          <dt>Name</dt>
          <dd>정미옥 (Jung, Mi Ok)</dd>
          <dt>Email</dt>
          <dd>miok.dev@gmail.com</dd>
          <dt>GitHub</dt>
          <dd>https://github.com/miok-jung</dd>
          <dt>Link</dt>
          <dd class="q-gutter-x-sm">
            <q-btn
              icon="mdi-alpha-b-circle-outline"
              target="_blank"
              href="https://jnarin-development-story.tistory.com"
              type="a"
              flat
              dense
              rounded
            >
              <q-tooltip>블로그 바로가기</q-tooltip>
            </q-btn>
            <q-btn
              icon="mdi-github"
              target="_blank"
              href="https://github.com/miok-jung"
              type="a"
              flat
              dense
              rounded
            >
              <q-tooltip>GitHub 바로가기</q-tooltip>
            </q-btn>
          </dd>
        </dl>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import avatar from 'assets/images/avatar.png'
import { useQuasar } from 'quasar'

const { dark } = useQuasar()
</script>

<style lang="scss" scoped>
.my_profile-wrap {
  padding: 24px 36px;
  section.my_profile {
    display: flex;
    flex-direction: row;
    align-items: center;

    .avatar {
      border-radius: 50%;
    }
    dl {
      margin-left: 1rem;
      width: calc(100% - 166px);
    }
    dt {
      display: inline-block;
      padding: 0.5rem 0.5rem 0 0;
      width: 20%;
      text-align: right;
      border-right: 1px solid #aaa;
      &:last-child {
        padding: 0 0.5rem 0 0;
      }
    }
    dd {
      display: inline-block;
      padding-left: 0.5rem;
      width: 80%;
    }
  }
}
.theme-wrap {
  display: flex;
  align-items: center;
  padding: 0 8px;
  height: 50px;
  color: white;
}
</style>
