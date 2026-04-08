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
  <section id="home" class="home">
    <h2 class="home__heading">{{ i18n.t('portfolio.home.title') }}</h2>

    <article class="home__inner">
      <div class="home__content">
        <div class="home__badges">
          <BaseBadge text="Front-end" />
          <BaseBadge text="Web Publisher" />
          <BaseBadge text="Vue · Quasar" />
        </div>

        <div class="home__text">
          <div class="home__title-stage">
            <transition name="title-slide" mode="out-in">
              <h3 :key="titles[currentIndex]" class="home__title">
                {{ titles[currentIndex] }}
              </h3>
            </transition>
          </div>

          <p class="home__description">
            {{ i18n.t('portfolio.home.description') }}
          </p>
        </div>

        <div class="home__skills">
          <BaseBadge text="HTML/CSS" size="sm" />
          <BaseBadge text="SCSS" size="sm" />
          <BaseBadge text="TypeScript" size="sm" />
          <BaseBadge text="Vue3" size="sm" />
          <BaseBadge text="Git" size="sm" />
        </div>
      </div>

      <div class="home__visual">
        <img :src="character" alt="character image" class="home__image" />
      </div>
    </article>
  </section>
</template>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  min-height: 100svh;
  padding: 40px 80px;
  box-sizing: border-box;

  &__heading {
    margin: 0;
  }

  &__inner {
    display: flex;
    align-items: center;
    gap: var(--space-6);
    width: 100%;
    max-width: 1200px;
  }

  &__content {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    min-width: 0;
    gap: var(--space-3);
  }

  &__badges,
  &__skills {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--space-2);
  }

  &__text {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: var(--space-5);
  }

  &__title-stage {
    position: relative;
    width: 100%;
    min-height: 86px;
    overflow: hidden;
  }

  &__title {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    margin: 0;
    font-size: clamp(32px, 6vw, 72px);
    line-height: 1.2;
    white-space: nowrap;
  }

  &__description {
    margin: 0;
    white-space: pre-line;
  }

  &__visual {
    flex: 0 0 clamp(220px, 24vw, 300px);
    width: clamp(220px, 24vw, 300px);
    background: white;
    border-radius: 50%;
    overflow: hidden;
  }

  &__image {
    display: block;
    width: 100%;
    height: auto;
  }
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

/* tablet */
@media (max-width: $bp-tablet) {
  .home {
    padding: 40px 48px;

    &__inner {
      gap: 24px;
    }

    &__title-stage {
      min-height: 72px;
    }

    &__title {
      font-size: clamp(28px, 5vw, 52px);
    }

    &__visual {
      flex: 0 0 clamp(200px, 28vw, 260px);
      width: clamp(200px, 28vw, 260px);
    }
  }
}

/* mobile */
@media (max-width: $bp-mobile) {
  .home {
    justify-content: center;
    align-items: center;
    padding: 24px;

    &__inner {
      flex-direction: column;
      align-items: stretch;
      gap: var(--space-4);
    }

    &__content,
    &__visual {
      width: 100%;
    }

    &__visual {
      flex: none;
      width: min(220px, 58vw);
      margin: 0 auto;
      aspect-ratio: 1 / 1;
    }

    &__image {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    &__title-stage {
      min-height: 56px;
    }

    &__title {
      font-size: clamp(26px, 8vw, 42px);
      line-height: 1.2;
      white-space: nowrap;
    }
  }
}
</style>
