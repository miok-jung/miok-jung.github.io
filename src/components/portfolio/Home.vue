<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import character from 'src/assets/images/portfolio/character.svg'
import { onMounted, onUnmounted, ref } from 'vue'

const router = useRouter()
const i18n = useI18n({ useScope: 'global' })

const onClickTo = (src: string) => {
  router.push({ name: src })
}

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

    <!--
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
    -->

    <article class="out-wrap">
      <div class="left">
        <div class="badge-wrap">
          <div class="badge">Front-end</div>
          <div class="badge">Web Publisher</div>
          <div class="badge">Vue &middot; Quasar</div>
        </div>

        <div class="text-wrap">
          <div class="title-stage">
            <transition name="title-slide">
              <h3 :key="titles[currentIndex]" class="title-item">
                {{ titles[currentIndex] }}
              </h3>
            </transition>
          </div>
          <p>{{ i18n.t('portfolio.home.description') }}</p>
        </div>

        <div class="skill-wrap"></div>
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
  height: 100vh;
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
  flex-direction: column;
  gap: var(--space-3);
  flex: 1 1 auto;
  min-width: 0;
}

.left .badge-wrap {
  display: flex;
  flex-direction: row;
  gap: var(--space-2);
}

.left .text-wrap {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  p {
    white-space: pre-line;
  }
}

.title-stage {
  position: relative;
  width: 100%;
  height: 86px;
  overflow: hidden;
}

.title-item {
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  width: 100%;
  font-size: 72px;
  line-height: 1.2;
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
  flex: 0 0 300px;
  width: 300px;
}

.right img {
  display: block;
  width: 100%;
  max-width: 300px;
  height: auto;
}

@media (max-width: $bp-mobile) {
  article.out-wrap {
    flex-direction: column;
    align-items: stretch;
  }

  .left,
  .right {
    width: 100%;
  }

  .right {
    flex: none;
  }

  .right img {
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
}
</style>
