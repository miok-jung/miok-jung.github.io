<template>
  <div class="my_profile-wrap">
    <section class="my_profile">
      <dl>
        <dt>Name</dt>
        <dd>정미옥 (Jung, Mi Ok)</dd>
        <dt>Email</dt>
        <dd>miok.dev@gmail.com</dd>
        <dt>GitHub</dt>
        <dd>https://github.com/miok-jung</dd>
      </dl>
    </section>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.my_profile-wrap {
  padding: 24px 36px;
  section.my_profile {
    border: 1px solid red;
    dl {
      border: 1px solid pink;
    }
    dt {
      display: inline-block;
      width: 20%;
      border: 1px solid lime;
    }
    dd {
      display: inline-block;
      width: 80%;
      border: 1px solid skyblue;
    }
  }
}
</style>
