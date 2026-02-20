<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const router = useRouter()

const i18n = useI18n({ useScope: 'global' })

const onClickTo = (src: string) => {
  router.push({ name: src })
}
</script>
<template>
  <section id="home">
    <h2>{{ i18n.t('portfolio.home.title') }}</h2>
    <div>
      <h3>Mini Project</h3>
      <p>{{ i18n.t('portfolio.home.description') }}</p>
      <div class="button-wrap">
        <button @click="onClickTo('test')">
          {{ i18n.t('portfolio.home.pages.test') }}
        </button>
        <a
          href="https://miok-jung.github.io/hanacard"
          target="_blank"
          rel="noopener noreferrer"
          class="btn">
          {{ i18n.t('portfolio.home.pages.hanacard') }}
        </a>
        <a
          href="https://miok-jung.github.io/cjone_clone"
          target="_blank"
          rel="noopener noreferrer"
          class="btn">
          {{ i18n.t('portfolio.home.pages.cj_one') }}
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: inherit;
  height: 100vh;
  text-align: center;
  h2,
  h3 {
    margin-bottom: 16px;
  }
  p {
    margin-bottom: 8px;
  }
  .button-wrap {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 16px;
    // border: 1px solid red;
    padding: 8px 0;
  }
}
</style>
