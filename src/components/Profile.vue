<template>
  <div class="my_profile-wrap">
    <section class="my_profile">
      <q-img class="avatar shadow-2" :src="avatar" width="150px" height="150px"></q-img>
      <dl>
        <div class="description-list">
          <dt>Name</dt>
          <dd>정미옥 (Jung, Mi Ok)</dd>
        </div>
        <div class="description-list">
          <dt>Email</dt>
          <dd>miok.dev@gmail.com</dd>
        </div>
        <div class="description-list">
          <dt>GitHub</dt>
          <dd>https://github.com/miok-jung</dd>
        </div>
      </dl>
    </section>
  </div>
</template>

<script setup lang="ts">
import avatar from 'assets/images/avatar.png';
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
    .description-list {
      &:last-child {
        margin-bottom: 0;
      }
    }

    dt {
      display: inline-block;
      padding-right: 0.5rem;
      width: 20%;
      text-align: right;
      border-right: 1px solid #aaa;
    }
    dd {
      display: inline-block;
      padding-left: 0.5rem;
      width: 80%;
    }
  }
}
</style>
