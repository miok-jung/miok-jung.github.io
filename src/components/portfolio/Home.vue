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
    <h2>{{ i18n.t('portfolio.title') }}</h2>
    <div>
      <p>{{ i18n.t('portfolio.description') }}</p>
      <div class="button-wrap">
        <button @click="onClickTo('test')">Test Page</button>
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
  .button-wrap {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }
}
</style>
