<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'
import BaseSelect from '../common/BaseSelect.vue'
import { setLocale } from '../../i18n'

const { locale } = useI18n()
const i18n = useI18n({ useScope: 'global' })

const isMenuOpen = ref(false)

const selectLanguage = computed({
  get: () => locale.value,
  set: async (val) => setLocale(val),
})

const optionsLanguage = computed(() => [
  {
    label: '한국어',
    value: 'ko',
    default: true,
  },
  {
    label: 'English',
    value: 'en',
  },
])

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const scrollToSection = (id: string) => {
  const el = document.getElementById(id)
  if (!el) return

  const top = el.getBoundingClientRect().top + window.scrollY

  window.scrollTo({ top, behavior: 'smooth' })
  closeMenu()
}
</script>

<template>
  <header>
    <!-- 좌측: 로고 -->
    <a class="header-left" href="/">
      <Icon icon="ph:house-line" width="24" height="24" />
      <h1>{{ i18n.t('portfolio.header.title') }}</h1>
    </a>

    <!-- PC nav -->
    <nav class="pc-nav">
      <button type="button" @click="scrollToSection('home')">
        {{ i18n.t('portfolio.header.navigation.home') }}
      </button>
      <!-- <button type="button" @click="scrollToSection('about')">About</button> -->
      <!-- <button type="button" @click="scrollToSection('contact')">Contact</button> -->
      <BaseSelect v-model="selectLanguage" :options="optionsLanguage" />
    </nav>

    <!-- 모바일 -->
    <button
      class="hamburger"
      type="button"
      :class="{ 'is-open': isMenuOpen }"
      @click="toggleMenu"
      :aria-label="
        isMenuOpen
          ? i18n.t('portfolio.aria.menu.close')
          : i18n.t('portfolio.aria.menu.open')
      "
      :aria-expanded="isMenuOpen">
      <Icon
        :icon="isMenuOpen ? 'ph:x-circle-bold' : 'ph:list-bold'"
        width="24"
        height="24" />
    </button>
  </header>

  <!-- 모바일 오버레이 -->
  <Transition name="fade">
    <div
      v-if="isMenuOpen"
      class="drawer-overlay"
      @click="closeMenu"
      aria-hidden="true" />
  </Transition>

  <!-- 모바일 드로어 -->
  <Transition name="slide">
    <nav
      v-if="isMenuOpen"
      class="drawer"
      :aria-label="i18n.t('portfolio.aria.menu.mobile')">
      <div class="drawer-header">
        <button
          type="button"
          class="drawer-close"
          @click="closeMenu"
          :aria-label="i18n.t('portfolio.aria.menu.close')">
          <Icon icon="ph:x-circle-bold" width="24" height="24" />
        </button>
      </div>

      <button type="button" @click="scrollToSection('home')">
        {{ i18n.t('portfolio.header.navigation.home') }}
      </button>
      <!-- <button type="button" @click="scrollToSection('about')">About</button> -->
      <!-- <button type="button" @click="scrollToSection('contact')">Contact</button> -->

      <BaseSelect v-model="selectLanguage" :options="optionsLanguage" />
    </nav>
  </Transition>
</template>

<style scoped lang="scss">
header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px 24px;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  @media (max-width: $bp-tablet) {
    padding: 8px 16px;
  }
}

.header-left {
  display: flex;
  align-items: center;
  gap: 8px;
}

.pc-nav {
  display: flex;
  align-items: center;
  gap: 8px;

  button {
    flex-shrink: 0;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--grey-10);
    font-size: 0.95rem;
    padding: 4px 8px;

    &:hover {
      color: var(--grey-7);
    }
  }

  @media (max-width: $bp-mobile) {
    display: none;
  }
}

.hamburger {
  display: none;
  padding: 4px;
  background: none;
  border: none;
  color: var(--grey-10);
  cursor: pointer;

  &:hover {
    color: var(--grey-7);
  }

  @media (max-width: $bp-mobile) {
    display: flex;
    align-items: center;
  }
}

/* 오버레이 */
.drawer-overlay {
  position: fixed;
  inset: 0;
  z-index: 20;
  background: rgba(0, 0, 0, 0.4);
}

/* 모바일 드로어 */
.drawer {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 30;
  height: 100dvh;
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-4) var(--space-5) var(--space-5);
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);

  .drawer-header {
    display: flex;
    justify-content: flex-end;
    padding-bottom: var(--space-4);
    border-bottom: 1px solid var(--grey-2);
    margin-bottom: var(--space-2);
  }

  .drawer-close {
    display: flex;
    align-items: center;
    background: none;
    border: none;
    padding: 4px;
    color: var(--grey-10);
    cursor: pointer;

    &:hover {
      color: var(--grey-7);
    }
  }

  button:not(.drawer-close) {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
    text-align: left;
    padding: var(--space-3) var(--space-2);
    color: var(--grey-10);
    border-bottom: 1px solid var(--grey-2);

    &:hover {
      color: var(--grey-7);
    }
  }
}

/* 트랜지션 */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
