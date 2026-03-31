<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { onMounted, onUnmounted, ref } from 'vue'

import character from 'src/assets/images/portfolio/character.svg'
import BaseBadge from '../common/BaseBadge.vue'

const i18n = useI18n({ useScope: 'global' })

const titles = ['Web Publisher', 'Front-end Developer']
const currentIndex = ref(0)
let timer: number

onMounted(() => {
  timer = window.setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % titles.length
  }, 3000)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<template>
  <section id="home">
    <h2>{{ i18n.t('portfolio.home.title') }}</h2>

    <article class="out-wrap">
      <div class="left">
        <div class="badge-wrap">
          <BaseBadge text="Front-end" />
          <BaseBadge text="Web Publisher" />
          <BaseBadge text="Vue · Quasar" />
        </div>

        <div class="text-wrap">
          <div class="title-stage">
            <transition name="title-slide" mode="out-in">
              <h3 :key="titles[currentIndex]" class="title-item">
                {{ titles[currentIndex] }}
              </h3>
            </transition>
          </div>

          <p>{{ i18n.t('portfolio.home.description') }}</p>
        </div>

        <div class="skill-wrap">
          <BaseBadge text="HTML/CSS" size="sm" />
          <BaseBadge text="SCSS" size="sm" />
          <BaseBadge text="TypeScript" size="sm" />
          <BaseBadge text="Vue3" size="sm" />
          <BaseBadge text="Git" size="sm" />
        </div>
      </div>

      <div class="right">
        <img :src="character" alt="character image" />
      </div>
    </article>
  </section>
</template>

<style scoped lang="scss">
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  min-height: 100svh;
  padding: 40px 80px;
  box-sizing: border-box;
}

article.out-wrap {
  display: flex;
  align-items: center;
  gap: var(--space-6);
  width: 100%;
  max-width: 1200px;
}

.left {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  min-width: 0;
  gap: var(--space-3);
}

.left .badge-wrap,
.left .skill-wrap {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-2);
}

.left .text-wrap {
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  position: relative;

  p {
    margin: 0;
    white-space: pre-line;
  }
}

.title-stage {
  position: relative;
  width: 100%;
  min-height: 86px;
  overflow: hidden;
}

.title-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0;
  font-size: clamp(32px, 6vw, 72px);
  line-height: 1.2;
  white-space: nowrap;
}

.title-slide-enter-active,
.title-slide-leave-active {
  transition:
    transform 0.6s ease,
    opacity 0.6s ease;
}

.title-slide-enter-from {
  opacity: 0;
  transform: translateY(100%);
}

.title-slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.title-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.title-slide-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}

.right {
  flex: 0 0 clamp(220px, 24vw, 300px);
  width: clamp(220px, 24vw, 300px);
  background: white;
  border-radius: 50%;
  overflow: hidden;
}

.right img {
  display: block;
  width: 100%;
  height: auto;
}

/* tablet */
@media (max-width: $bp-tablet) {
  section {
    padding: 40px 48px;
  }

  article.out-wrap {
    gap: 24px;
  }

  .title-stage {
    min-height: 72px;
  }

  .title-item {
    font-size: clamp(28px, 5vw, 52px);
  }

  .right {
    flex: 0 0 clamp(200px, 28vw, 260px);
    width: clamp(200px, 28vw, 260px);
  }
}

/* mobile */
@media (max-width: $bp-mobile) {
  section {
    justify-content: center;
    align-items: center;
    padding: 24px;
  }

  article.out-wrap {
    flex-direction: column;
    align-items: stretch;
    gap: var(--space-4);
  }

  .left,
  .right {
    width: 100%;
  }

  .right {
    flex: none;
    width: min(220px, 58vw);
    margin: 0 auto;
    aspect-ratio: 1 / 1;
  }

  .right img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .title-stage {
    min-height: 56px;
  }

  .title-item {
    font-size: clamp(26px, 8vw, 42px);
    line-height: 1.2;
    white-space: nowrap;
  }
}
</style>
