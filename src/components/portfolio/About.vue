<script setup lang="ts">
import character from 'src/assets/images/portfolio/character.svg'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const i18n = useI18n({ useScope: 'global' })
const careers = computed(() => i18n.tm('portfolio.about.careers'))

const formatDate = (date: string | undefined | null) => {
  if (!date) return '...'

  return new Date(date).toLocaleDateString()
}
</script>
<template>
  <section id="about">
    <h2>About</h2>
    <div class="about-wrap">
      <div class="left">
        <img :src="character" alt="character image" />
      </div>
      <div class="right">
        <h3 class="career">Career</h3>
        <article v-for="career in careers" :key="career">
          <div class="company-wrap">
            <p class="label">
              {{ i18n.t('portfolio.about.labels.company') }} :&nbsp;
            </p>
            <h4>{{ career.company_name }}</h4>
          </div>
          <div class="period-wrap">
            <p class="label">
              {{ i18n.t('portfolio.about.labels.period') }} :&nbsp;
            </p>
            <p>
              {{ formatDate(career.period.from) }} ~
              {{ formatDate(career.period.to) }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  display: flex;
  flex-direction: column;
  padding: 3rem;
  min-height: 100vh;
}
h2 {
  margin-bottom: 32px;
}
.about-wrap {
  display: flex;
  flex-direction: row;
  gap: 32px;
  .left {
    flex: 30;
    display: flex;
    justify-content: right;
    img {
      width: 300px;
      height: 300px;
      border-radius: 50%;
      border: 1px solid var(--grey-5);
      -webkit-box-shadow: 3px 3px 12px -3px var(--grey-8);
      box-shadow: 3px 3px 12px -3px var(--grey-8);
    }
  }
  .right {
    flex: 70;
    // border: 1px solid orangered;
    .career {
      margin-bottom: 24px;
    }

    .company-wrap,
    .period-wrap {
      display: flex;
      align-items: center;
      margin-bottom: 16px;
      height: 100%;
      .label {
        font-weight: bold;
      }
    }
  }
}
</style>
